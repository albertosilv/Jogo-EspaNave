var loadState = {
	preload: function(){
	
		var progressBar = game.add.sprite(game.world.centerX,250,'progressBar');
			progressBar.anchor.set(.5);
			
		game.load.setPreloadSprite(progressBar);
    
    game.load.image('player', 'img/nave.png');
    game.load.image('star', 'img/star2.png');
    game.load.image('baddie', 'img/space-baddie.png');
    game.load.image('dips','img/tiro.png');
    game.load.image('inimigo','img/inimigo.png');
    game.load.image('tiroinimigo','img/tiroInimigo.png');
    game.load.image('boss','img/boss.png');
    game.load.image('boss2','img/boss2.png');
    game.load.image('boss3','img/boss4.png');
    game.load.audio('tiro', ['sfx/tiro.ogg']);
    game.load.spritesheet('kaboom', 'img/explode.png', 128, 128);
    game.physics.startSystem(Phaser.Physics.ARCADE);



    var txtloading = game.add.text(game.world.centerX,200,'LOADING...',{font:'15px emu',fill:'#FF0000'});
    txtloading.anchor.set(.5);

  },
  create: function(){
    game.state.start('menu');
  }
};
