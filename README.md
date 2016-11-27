## テスト駆動開発(TDD) 練習 with mocha feat JavaScript

車窓からのTDD(<http://objectclub.jp/technicaldoc/testing/stack_tdd.pdf>)を参考にJavaScriptでやった。

#### TDDまとめ
1.テスト作成 -> FakeIt(一時的な実装) -> リファクタリング(本実装)
2.テスト可能なコードが強制的にかける
3.全てにTDDを適用させる必要はない（実装が困難なものはTDDを使って丁寧に行う）

#### testコードの書き方。
テスト環境は`npm init`でテストファイルを指定するだけ。  

    describe('クラス名', function(){
      describe('対象メソッド', function(){
        context('与える入力', function(){
          it('期待する結果', function(){
            assert.~~~~;
          }); 
        });  
      });
    });
  
変数のスコープは`describe`内になる。
