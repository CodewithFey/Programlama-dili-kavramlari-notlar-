(function(){
  // Minimal offline syntax highlighting.
  // Targets: C/C++/C#/Python/Prolog blocks with class="language-...".

  const ESC = (s)=> (s
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;'));

  // Protect already-highlighted blocks
  function isHighlighted(el){
    if(el.dataset && el.dataset.hlDone === '1') return true;
    // If spans already exist, do not re-highlight (prevents corruption)
    if(el.querySelector && el.querySelector('span.token')) return true;
    if(typeof el.innerHTML === 'string' && el.innerHTML.indexOf('class="token ') !== -1) return true;
    return false;
  }

  // Helper to apply regex sequentially, using placeholders to avoid double-wrapping.
  function highlightWithRules(text, rules){
    let out = text;
    // strings first
    rules.forEach(r => {
      out = out.replace(r.re, (m)=>`@@@${r.cls}@@@${m}@@@END@@@`);
    });
    // escape HTML
    out = ESC(out);
    // restore wrapped tokens (now safe)
    out = out
      .replace(/@@@([a-z-]+)@@@/g, '<span class="token $1">')
      .replace(/@@@END@@@/g, '</span>');
    return out;
  }

  const C_KEYWORDS = [
    'auto','break','case','char','const','continue','default','do','double','else','enum','extern','float',
    'for','goto','if','inline','int','long','register','restrict','return','short','signed','sizeof','static',
    'struct','switch','typedef','union','unsigned','void','volatile','while','_Bool'
  ];
  const CPP_MORE = ['class','public','private','protected','virtual','override','final','template','typename','namespace','using','new','delete','this','nullptr','try','catch','throw','operator','friend','constexpr','noexcept'];
  const CS_MORE  = ['namespace','class','interface','struct','enum','public','private','protected','internal','static','void','new','override','virtual','abstract','sealed','using','try','catch','finally','throw','delegate','event','var','get','set','null','true','false'];
  const PY_KEYWORDS = ['def','class','return','if','elif','else','for','while','break','continue','pass','import','from','as','try','except','finally','raise','with','lambda','yield','True','False','None','and','or','not','in','is','global','nonlocal','assert'];

  function makeKeywordRe(words){
    const w = words.map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
    return new RegExp(`\\b(?:${w})\\b`, 'g');
  }

  const re = {
    cCommentLine: /\/\/[^\n]*/g,
    cCommentBlock: /\/\*[\s\S]*?\*\//g,
    pyComment: /#[^\n]*/g,
    prologComment: /%[^\n]*/g,
    stringDbl: /"(?:\\.|[^"\\])*"/g,
    stringSgl: /'(?:\\.|[^'\\])*'/g,
    number: /\b(?:0x[0-9a-fA-F]+|\d+(?:\.\d+)?)\b/g,
    funcCall: /\b([A-Za-z_][A-Za-z0-9_]*)\s*(?=\()/g
  };

  const KW_C   = makeKeywordRe(C_KEYWORDS);
  const KW_CPP = makeKeywordRe(C_KEYWORDS.concat(CPP_MORE));
  const KW_CS  = makeKeywordRe(C_KEYWORDS.concat(CPP_MORE).concat(CS_MORE));
  const KW_PY  = makeKeywordRe(PY_KEYWORDS);

  function highlight(code, lang){
    const rules = [];

    // Comments
    if(lang==='python') rules.push({re: re.pyComment, cls:'comment'});
    else if(lang==='prolog') rules.push({re: re.prologComment, cls:'comment'});
    else {
      rules.push({re: re.cCommentBlock, cls:'comment'});
      rules.push({re: re.cCommentLine, cls:'comment'});
    }

    // Strings
    rules.push({re: re.stringDbl, cls:'string'});
    rules.push({re: re.stringSgl, cls:'string'});

    // Numbers
    rules.push({re: re.number, cls:'number'});

    // Keywords
    let kw = KW_C;
    if(lang==='cpp' || lang==='c++') kw = KW_CPP;
    if(lang==='csharp' || lang==='cs' || lang==='c#') kw = KW_CS;
    if(lang==='python') kw = KW_PY;
    if(lang==='prolog') kw = null;

    let out = highlightWithRules(code, rules);

    // IMPORTANT:
    // From v8 we saw corruption like:  int a = class="token number">10;
    // Root cause: keyword replacement was running on the *HTML string* and
    // matching inside attributes like: class="token number".
    // Fix: only replace in text segments that are *outside* HTML tags.
    function replaceOutsideTags(html, regex, replacer){
      const parts = html.split(/(<[^>]+>)/g);
      for(let i=0;i<parts.length;i++){
        const p = parts[i];
        if(!p) continue;
        if(p[0] === '<') continue; // tag
        parts[i] = p.replace(regex, replacer);
      }
      return parts.join('');
    }

    if(kw){
      out = replaceOutsideTags(out, kw, (m)=>`<span class="token keyword">${m}</span>`);
    }

    // Simple function name highlighting (outside tags only)
    out = replaceOutsideTags(out, /\b([A-Za-z_][A-Za-z0-9_]*)\s*(?=\()/g, (m, name)=>{
      // Don't highlight very common keywords again
      if(kw && kw.test && kw.test(name)) return m;
      return `<span class="token function">${name}</span>`;
    });

    return out;
  }

  function run(){
    document.querySelectorAll('pre > code[class^="language-"]').forEach(codeEl=>{
      if(isHighlighted(codeEl)) return;
      const lang = (codeEl.className.match(/language-([a-z0-9+#-]+)/i)||[])[1] || 'text';
      const raw = codeEl.textContent || '';
      codeEl.innerHTML = highlight(raw, lang.toLowerCase());
      codeEl.dataset.hlDone = '1';
      // ensure readable default color
      codeEl.closest('pre')?.classList.add('codeblock');
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
