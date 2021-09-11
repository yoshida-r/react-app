const StudyInfo = (lang, num) => {
  if (lang === 'html') {
    if (num == '1') {
      return ({
        lang: 'html',
        previewS: `<!-- h1タグ html -->\n<h1>html</h1>\n\n<!-- h2タグ html -->\n<h2>html</h2>\n\n<!-- h3タグ html -->\n<h3>html</h3>`,
        preview: `<!-- h1タグ html -->\n\n<!-- h2タグ html -->\n\n<!-- h3タグ html -->\n`,
        answer: ['<h1>html</h1>', '<h2>html</h2>', '<h3>html</h3>'],
        quesMatch: ['<h1>html<\/h1>', '<h2>html<\/h2>', '<h3>html<\/h3>'],
        errMes: ['<h1>タグがありません。', '<h2>タグがありません。', '<h3>タグがありません。'],
        setItem: 'html1',
        reload: '/details/html'
      });
    } else if (num == '2') {
      return ({
        lang: 'html',
        previewS: `<!-- p1タグ html -->\n<p1>html</p1>\n\n<!-- aタグ html -->\n<a href="https://google.com" target=_black>html</a>`,
        preview: `<!-- p1タグ html -->\n\n<!-- aタグ html -->\n`,
        answer: ['<p1>html</p1>', '<a href="https://google.com" target=_black>html</a>'],
        quesMatch: ['<p1>html<\/p1>', '<a href="https:\/\/google.com" target=_black>html<\/a>'],
        errMes: ['<p1>タグがありません。', '<a>タグがありません。'],
        setItem: 'html2',
        reload: '/details/html'
      });
    } else {
      return ({
        lang: 'html',
        previewS: `<!-- p1タグ html -->\n<p1>レッスン3</p1>\n\n<!-- aタグ html -->\n<a href="https://google.com" target=_black>レッスン3</a>`,
        preview: `<!-- p1タグ html -->\n\n<!-- aタグ html -->\n`,
        answer: ['<p1>レッスン3</p1>', '<a href="https://google.com" target=_black>レッスン3</a>'],
        quesMatch: ['<p1>レッスン3<\/p1>', '<a href="https:\/\/google.com" target=_black>レッスン3<\/a>'],
        errMes: ['<p1>タグがありません。', '<a>タグがありません。'],
        setItem: 'html3',
        reload: '/details/html' 
      });
    }
  } else if (lang === 'js') {
    if (num == '1') {
      return ({
        lang: 'js',
        previewS: `consot greet = function() {\n  console.log('hello');\n};\n\n// 関数を呼び出してください。\ngreet();`,
        preview: `consot greet = function() {\n  console.log('hello');\n};\n\n// 関数を呼び出してください。\n`,
        emulate: 'hello',
        answer: ['greet();'],
        quesMatch: ['greet\\(\\)\\;'],
        errMes: ['関数を呼び出してください。'],
        setItem: 'js1',
        reload: '/details/js' 
      });
    } else if (num == '2') {
      return ({
        lang: 'js',
        previewS: `// 変数numberを定義してください\nlet number = 0;\n\n// 変数numberに1を加えて、その後に変数numberの値を出力してください\nnumber += 1;\nconsole.log(number);`,
        preview: `// 変数numberを定義してください\n\n\n// 変数numberに1を加えて、その後に変数numberの値を出力してください\n`,
        emulate: '1',
        answer: ['let number = 0;', 'number += 1;\nconsole.log(number);'],
        quesMatch: ['let number = 0\\;', 'console.log\\(number\\)\\;'],
        errMes: ['変数numberを定義してください。', '変数numberに1を加えて、その後に変数numberの値を出力してください'],
        setItem: 'js2',
        reload: '/details/js' 
      });
    }
  } else if (lang === 'php') {
    return [
      {lang: 'php', num: '1', title: 'PHP 1', desc: 'PHPを学べば、ユーザーからデータを受け取りそれを表示するなど、 実際のWEBサービスで必要な機能を作ることが出来ます。'},
      {lang: 'php', num: '2', title: 'PHP 2', desc: '料理注文サイトを作りながらオブジェクト指向を学んでいきます。 オブジェクト指向は難しい概念ですが、必須な知識なのでがんばって習得しましょう！'},
      {lang: 'php', num: '3', title: 'PHP 3', desc: 'オブジェクト指向の重要な知識を学習していきながら、料理注文サイトの完成度を高めていきましょう。'},
    ];
  }
};

export default StudyInfo;