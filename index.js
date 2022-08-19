// スクロール量を取得する要素を取得
var scrollElm = (function() {
    if('scrollingElement' in document) {
      return document.scrollingElement;
    }
    if(navigator.userAgent.indexOf('WebKit') != -1) {
      return document.body;
    }
    return document.documentElement;
  })();
   
  // 全てのセクション要素を取得
  var sections = document.querySelectorAll('.section');
   
  // 全体をz方向に動かす#scaler要素を取得
  var scaler = document.getElementById('scaler');
   
  // 画面の高さを設定する#scroll要素を取得
  var scrollDiv = document.getElementById('scroll');
   
  // セクション要素のdata-z属性を取得し、transformを設定
  // 最後のセクション要素のdata-zを元に、画面の高さを計算して設定
  for(var i = 0; sections.length > i; i++) {
    var itemZ = sections[i].getAttribute('data-z');
    sections[i].style.transform = 'translateZ(' + - itemZ + 'px)';
    if(i === sections.length -1) {
      scrollDiv.style.height = itemZ * 100 + window.innerHeight + 'px';
    }
  }
   
  // スクロールイベントで、#scaler要素のtransformでz軸を動かす
  window.addEventListener('scroll', function() {
    scaler.style.transform = 'translateZ(' + scrollElm.scrollTop / 100 + 'px)';
  });

  particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":30,//この数値を変更すると桜の数が増減できる
			"density":{
				"enable":true,
				"value_area":1121.6780303333778
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",//形状は画像を指定
			"stroke":{
				"width":0,
			},
			"image":{
				"src":"sakuraのコピー.png",//【重要】画像を指定！桜の画像を設定してください。
				"width":120,
				"height":120
			}
		},
		"opacity":{
			"value":0.06409588744762158,
			"random":true,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":8.011985930952697,
			"random":true,//サイズをランダムに
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom-right",//右下に向かって落ちる
			"random":false,//動きはランダムにしない
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
			"attract":{
				"enable":false,
				"rotateX":281.9177489524316,
				"rotateY":127.670995809726
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":false
});
