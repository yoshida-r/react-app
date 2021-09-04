const Text = (lang) => {
  if (lang === 'html') {
    return [
      {lang: 'html', num: '1', title: 'html & css 初級編', desc: 'cssという言語によって見た目が作られています。'},
      {lang: 'html', num: '2', title: 'html & css 中級編', desc: '中級編では、ランディングページと呼ばれる、サイトを訪問したユーザーが一番最初に目にするWEBページを作っていきます。'},
      {lang: 'html', num: '3', title: 'html & css 上級編', desc: '上級編では「レスポンシブデザイン」を学びます。スマホやタブレット、PCなど異なる画面幅でもレイアウトをきれいに保つ「レスポンシブデザイン」'},
    ];
  } else if (lang === 'js') {
    return [
      {lang: 'js', num: '1', title: 'JavaScript 1', desc: '「ES6」はJavaScriptの新しい仕様で、従来より効率的に書けることから注目されています。 まずこのレッスンでは、基本的な文法や変数・定数の使い方、条件分岐などを学びましょう！'},
      {lang: 'js', num: '2', title: 'JavaScript 2', desc: 'JavaScript IIでは、同じような処理を何度も繰り返すのに便利な「繰り返し処理」について学びます。 また、「配列」や「オブジェクト」の基本的な使い方についても学びます。'},
      // {lang: 'js', num: '3', title: 'JavaScript 3', desc: 'JavaScript Ⅲでは、複数の処理を１つにまとめる「関数」の定義や呼び出しを学びます。 ES6で新たに追加された「アロー関数」についても扱っていきます。'},
    ];
  } else if (lang === 'php') {
    return [
      {lang: 'php', num: '1', title: 'PHP 1', desc: 'PHPを学べば、ユーザーからデータを受け取りそれを表示するなど、 実際のWEBサービスで必要な機能を作ることが出来ます。'},
      {lang: 'php', num: '2', title: 'PHP 2', desc: '料理注文サイトを作りながらオブジェクト指向を学んでいきます。 オブジェクト指向は難しい概念ですが、必須な知識なのでがんばって習得しましょう！'},
      {lang: 'php', num: '3', title: 'PHP 3', desc: 'オブジェクト指向の重要な知識を学習していきながら、料理注文サイトの完成度を高めていきましょう。'},
    ];
  }
};

export default Text;