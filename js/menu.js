var menuState={
    create: function(){


        var txtwagalaxy=game.add.text(game.world.centerX,150,"WAR GALAXY",{font:'40px emu',fill:'#FF0000'})
        txtwagalaxy.anchor.set(.5);
        
        var pressStart=game.add.text(game.world.centerX,550,"PRESS START",{font:'25px emu',fill:'#FF0000'})
        pressStart.anchor.set(.5);

        game.add.tween(pressStart).to({y:250},1000).start();

        game.time.events.add(1000,function(){
            var enterk=game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterk.onDown.addOnce(this.startGame,this);
        },this)
    },

    startGame: function(){
        game.state.start('stage1');
    }
};