var stage1State = {
    create: function () {
        this.stars;
        this.baddies;
        this.player;
        this.cursors;
        this.frameTime = 0;
        this.frames;
        this.prevCamX = 0;
        this.misseisTime = 0;
        this.misseis;
        this.x = 3;
        this.inimigos;
        this.t = 0;
        this.livingEnemies = [];
        this.tiroInimigo;
        this.firingTimer = 0;
        this.tiro;
        this.life = 50;
        this.tiroboss;
        this.tiroboss11;
        this.tiroboss12;
        this.tiroboss13;
        this.disparoboss;
        this.disparoboss1;
        this.disparoboss2;
        this.disparoboss3;
        this.tiroTime1 = 0;
        this.tiroTime2 = 0;
        this.tiroTime3 = 0;
        this.tiroTime = 0;
        this.tiroFinal = 0;
        this.disparoFinal;
        this.tirobossFinal;
        this.tiroFinal2 = 0;
        this.disparoFinal2;
        this.tirobossFinal2;
        this.conta = 30;
        this.lifeBoss2 = 60;
        this.lifeBossFinal = 150;
        this.stateText;
        this.mortes=0;

        this.mapa = this.game.world.setBounds(0, 0, 1000 * 6, 600);

        this.stars = game.add.group();
        this.tiro = game.add.audio('tiro');

        for (var i = 0; i < 128; i++) {
            this.stars.create(game.world.randomX, game.world.randomY, 'star');
        }

        this.baddies = game.add.group();

        for (var i = 0; i < 16; i++) {
            this.baddies.create(game.world.randomX, game.world.randomY, 'baddie');
        }
        
        this.createA();

        this.lazers = game.add.group();



        this.misseis = game.add.group();
        this.misseis.enableBody = true;
        this.misseis.physicsBodyType = Phaser.Physics.ARCADE;
        this.misseis.createMultiple(this.x, 'dips');
        this.misseis.setAll('anchor.x', 0);
        this.misseis.setAll('anchor.y', 0);
        this.misseis.setAll('outOfBoundsKill', true);
        this.misseis.setAll('checkWorldBounds', true);

        this.stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
        this.stateText.anchor.setTo(0.5, 0.5);
        this.stateText.visible = false;

        this.misselInimigo = game.add.group();
        this.misselInimigo.enableBody = true;
        this.misselInimigo.physicsBodyType = Phaser.Physics.ARCADE;
        this.misselInimigo.createMultiple(30, 'tiroinimigo');
        this.misselInimigo.setAll('anchor.x', 0.5);
        this.misselInimigo.setAll('anchor.y', 1);
        this.misselInimigo.setAll('outOfBoundsKill', true);
        this.misselInimigo.setAll('checkWorldBounds', true);

        this.tiroboss = game.add.group();
        this.tiroboss.enableBody = true;
        this.tiroboss.physicsBodyType = Phaser.Physics.ARCADE;
        this.tiroboss.createMultiple(50, 'tiroinimigo');
        this.tiroboss.setAll('anchor.x', 0.5);
        this.tiroboss.setAll('anchor.y', 1);
        this.tiroboss.setAll('outOfBoundsKill', true);
        this.tiroboss.setAll('checkWorldBounds', true);

        this.tiroboss11 = game.add.group();
        this.tiroboss11.enableBody = true;
        this.tiroboss11.physicsBodyType = Phaser.Physics.ARCADE;
        this.tiroboss11.createMultiple(30, 'tiroinimigo');
        this.tiroboss11.setAll('anchor.x', 0.5);
        this.tiroboss11.setAll('anchor.y', 1);
        this.tiroboss11.setAll('outOfBoundsKill', true);
        this.tiroboss11.setAll('checkWorldBounds', true);

        this.tiroboss12 = game.add.group();
        this.tiroboss12.enableBody = true;
        this.tiroboss12.physicsBodyType = Phaser.Physics.ARCADE;
        this.tiroboss12.createMultiple(30, 'tiroinimigo');
        this.tiroboss12.setAll('anchor.x', 0.5);
        this.tiroboss12.setAll('anchor.y', 1);
        this.tiroboss12.setAll('outOfBoundsKill', true);
        this.tiroboss12.setAll('checkWorldBounds', true);

        this.tiroboss13 = game.add.group();
        this.tiroboss13.enableBody = true;
        this.tiroboss13.physicsBodyType = Phaser.Physics.ARCADE;
        this.tiroboss13.createMultiple(30, 'tiroinimigo');
        this.tiroboss13.setAll('anchor.x', 0.5);
        this.tiroboss13.setAll('anchor.y', 1);
        this.tiroboss13.setAll('outOfBoundsKill', true);
        this.tiroboss13.setAll('checkWorldBounds', true);

        this.tirobossF = game.add.group();
        this.tirobossF.enableBody = true;
        this.tirobossF.physicsBodyType = Phaser.Physics.ARCADE;
        this.tirobossF.createMultiple(20, 'tiroinimigo');
        this.tirobossF.setAll('anchor.x', 0.5);
        this.tirobossF.setAll('anchor.y', 1);
        this.tirobossF.setAll('outOfBoundsKill', true);
        this.tirobossF.setAll('checkWorldBounds', true);

        this.tirobossF2 = game.add.group();
        this.tirobossF2.enableBody = true;
        this.tirobossF2.physicsBodyType = Phaser.Physics.ARCADE;
        this.tirobossF2.createMultiple(20, 'tiroinimigo');
        this.tirobossF2.setAll('anchor.x', 0.5);
        this.tirobossF2.setAll('anchor.y', 1);
        this.tirobossF2.setAll('outOfBoundsKill', true);
        this.tirobossF2.setAll('checkWorldBounds', true);

        this.explosions = game.add.group();
        this.explosions.createMultiple(250, 'kaboom');
        this.explosions.forEach(this.setupInvader, this);

        this.explosions2 = game.add.group();
        this.explosions2.createMultiple(250, 'kaboom');
        this.explosions2.forEach(this.setupInvader, this);

        this.explosions3 = game.add.group();
        this.explosions3.createMultiple(250, 'kaboom');
        this.explosions3.forEach(this.setupInvader, this);

        this.explosionsF = game.add.group();
        this.explosionsF.createMultiple(250, 'kaboom');
        this.explosionsF.forEach(this.setupInvader, this);

        this.explosionsT = game.add.group();
        this.explosionsT.createMultiple(250, 'kaboom');
        this.explosionsT.forEach(this.setupInvader, this);

        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1);

        this.cursors = game.input.keyboard.createCursorKeys();
        this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.prevCamX = game.camera.x;
        this.moverInimigo();


    },
    setupInvader: function (invader) {

        invader.anchor.x = 0.5;
        invader.anchor.y = 0.5;
        invader.animations.add('kaboom');

    },
    createA: function () {
        this.mapa = this.game.world.setBounds(0, 0, 1000 * 6, 600);

        this.player = game.add.sprite(100, 300, 'player');
        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.player.anchor.x = 0.5;

        this.boss = game.add.sprite(1500, 250, 'boss');
        this.game.physics.arcade.enable(this.boss);
        this.boss.body.collideWorldBounds = true;
        this.boss.body.velocity.y -= 100;
        this.boss.body.velocity.x -= 50;

        this.boss2 = game.add.sprite(3000, 250, 'boss2');
        this.game.physics.arcade.enable(this.boss2);
        this.boss2.body.collideWorldBounds = true;
        this.boss2.body.velocity.y -= 100;
        this.boss2.body.velocity.x -= 50;

        this.boss3 = game.add.sprite(4500, 250, 'boss3');
        this.game.physics.arcade.enable(this.boss3);
        this.boss3.body.collideWorldBounds = true;
        this.boss3.body.velocity.y -= 100;
        this.boss3.body.velocity.x -= 50;

        this.inimigos = this.game.add.group();
        this.inimigos.enableBody = true;
        this.Createinimigos();
    },
    update: function () {

        if (this.cursors.left.isDown) {
            this.player.x -= 8;
            this.player.scale.x = -1;
        }
        else if (this.cursors.right.isDown) {
            this.player.x += 8;
            this.player.scale.x = 1;
        }

        if (this.cursors.up.isDown) {
            this.player.y -= 8;
        }
        else if (this.cursors.down.isDown) {
            this.player.y += 8;
        }
        if (this.fireButton.isDown) {
            this.disparo();
        }

        this.game.physics.arcade.collide(this.inimigos, this.player);
        this.inimigo1();
        if (this.conta >= 1) {
            this.bossPrimeiro();
            this.tiroBoss1();
            game.physics.arcade.overlap(this.misseis, this.boss, this.morteBoss, false, this);


        }
        if (this.lifeBoss2 >= 1) {
            this.bossSegundo();
            if (this.player.position.x >= 2200) {
                this.tiroBoss21();
                this.tiroBoss22();
                this.tiroBoss23();
            }
            game.physics.arcade.overlap(this.misseis, this.boss2, this.morteBoss2, false, this);

        }
        if (this.lifeBossFinal >= 1) {
            this.bossFinal();
            if (this.player.position.x >= 3700) {
                this.tiroBossF();
                this.tiroBossF2();
            }
            game.physics.arcade.overlap(this.misseis, this.boss3, this.morteBossF, false, this);

        }
        if (this.lifeBoss2 < 1) {
            this.boss2.kill();
            this.boss2.destroy();
        }
        if (this.conta < 1) {
            this.boss.kill();
            this.boss.destroy();
        }
        if (this.lifeBossFinal < 1) {
            this.boss3.kill();
            this.boss3.destroy();
        }
        if((this.lifeBossFinal<1)&&(this.lifeBossFinal < 1)&&(this.conta < 1)){
            this.mortes=this.mortes+3;
            alert(this.mortes);
        }
        if (this.life <= 0) {
            this.player.kill();
            this.stateText = game.add.text(this.player.x,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
            this.stateText.anchor.setTo(0.5, 0.5);
            this.stateText.text = " GAME OVER";
            this.stateText.visible = true;
            game.time.events.add(5000,this.fimdeJogo,this);
        }
        if(this.mortes>=103){
            this.player.kill();
            this.stateText = game.add.text(this.player.x,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
            this.stateText.anchor.setTo(0.5, 0.5);
            this.stateText.text = " Você venceu u.u";
            this.stateText.visible = true;
            game.time.events.add(5000,this.fimdeJogo,this);
        }
        this.prevCamX = this.game.camera.x;
        this.enemyFires();
        game.physics.arcade.overlap(this.misseis, this.inimigos, this.morteInimigo, null, this);
        game.physics.arcade.overlap(this.player, this.tiroboss, this.tiroPlayer, null, this);
        game.physics.arcade.overlap(this.misseis, this.inimigos, this.morteInimigo, null, this);
        game.physics.arcade.overlap(this.player, this.misselInimigo, this.tiroPlayer, null, this);

        game.physics.arcade.overlap(this.player, this.tiroboss11, this.tiroPlayer, null, this);
        game.physics.arcade.overlap(this.player, this.tiroboss12, this.tiroPlayer, null, this);
        game.physics.arcade.overlap(this.player, this.tiroboss13, this.tiroPlayer, null, this);

        game.physics.arcade.overlap(this.player, this.tirobossF2, this.tiroPlayer, null, this);
        game.physics.arcade.overlap(this.player, this.tirobossF, this.tiroPlayer, null, this);

        game.physics.arcade.overlap(this.misseis, this.tirobossF2, this.MisseisAB, null, this);
        game.physics.arcade.overlap(this.misseis, this.tirobossF, this.MisseisAB, null, this);

        game.physics.arcade.overlap(this.misseis, this.tiroboss11, this.MisseisAB, null, this);
        game.physics.arcade.overlap(this.misseis, this.tiroboss12, this.MisseisAB, null, this);
        game.physics.arcade.overlap(this.misseis, this.tiroboss13, this.MisseisAB, null, this);

        game.physics.arcade.overlap(this.misseis, this.tiroboss, this.MisseisAB, null, this);

        game.physics.arcade.overlap(this.misseis, this.misselInimigo, this.MisseisAB, null, this);






    },
    morteInimigo: function (missel, inimigo) {
        var explosion = this.explosions.getFirstExists(false);
        explosion.reset(inimigo.body.x, inimigo.body.y);
        explosion.play('kaboom', 40, false, true);
        missel.kill();
        inimigo.kill();
        inimigo.destroy();
        this.mortes=this.mortes+1;

    },
    fimdeJogo: function(){
        game.state.start("menu");
        
    },
    morteBoss: function (boss, missel) {

        this.conta = this.conta - 1;
        var explosion = this.explosions2.getFirstExists(false);
        explosion.reset(boss.body.x + 100, boss.body.y + 100);
        explosion.play('kaboom', 40, false, true);
        missel.kill();

    },
    morteBoss2: function (boss2, missel2) {
        this.lifeBoss2 = this.lifeBoss2 - 1;
        var explosion = this.explosions3.getFirstExists(false);
        explosion.reset(boss2.body.x + 100, boss2.body.y + 100);
        explosion.play('kaboom', 40, false, true);
        missel2.kill();

    },
    MisseisAB: function (tiro1, tiro2) {
        var explosion = this.explosionsT.getFirstExists(false);
        explosion.reset(tiro1.body.x, tiro1.body.y);
        explosion.play('kaboom', 40, false, true);
        tiro1.kill();
        tiro2.kill();
    },
    morteBossF: function (boss3, missel3) {
        this.lifeBossf = this.lifeBossf - 1;
        var explosion = this.explosions3.getFirstExists(false);
        explosion.reset(missel3.body.x + 200, missel3.body.y + 10);
        explosion.play('kaboom', 40, false, true);
        missel3.kill();
        

    },

    disparo: function () {
        if (game.time.now > this.misseisTime) {
            this.tiro.play();
            //  Grab the first bullet we can from the pool
            this.missel = this.misseis.getFirstExists(false);

            if (this.missel) {
                //  And fire it
                this.missel.reset(this.player.x - 10, this.player.y + 70);
                if (this.player.scale.x == 1) {
                    this.missel.body.velocity.x += 800;
                }
                else {
                    this.missel.body.velocity.x -= 800;
                }
                this.misseisTime = game.time.now + 200;
            }
        }
        this.misseis.createMultiple(this.x, 'dips');
    },
    Createinimigos: function () {
        var inimigo = [];
        var y = 0, x1 = 0;
        for (var i = 0; i < 20; i++) {
            y = 10 * Math.random(0, 1);
            x1 = 10 * Math.random(0, 1);
            y = y * x1 * 10;
            inimigo[i] = this.inimigos.create(1000, y, 'inimigo');
            inimigo[i].body.collideWorldBounds = true;
        }
        y = 0;
        var x = 2000;
        for (var i = 0; i < 20; i++) {
            y = 10 * Math.random(0, 1);
            x1 = 10 * Math.random(0, 1);
            y = y * x1 * 10;
            inimigo[i] = this.inimigos.create(x, y, 'inimigo');
            inimigo[i].body.collideWorldBounds = true;

        }
        var x = 3000;
        for (var i = 0; i < 20; i++) {
            y = 10 * Math.random(0, 1);
            x1 = 10 * Math.random(0, 1);
            y = y * x1 * 10;
            inimigo[i] = this.inimigos.create(x, y, 'inimigo');
            inimigo[i].body.collideWorldBounds = true;

        }
        var x = 4000;
        for (var i = 0; i < 20; i++) {
            y = 10 * Math.random(0, 1);
            x1 = 10 * Math.random(0, 1);
            y = y * x1 * 10;
            inimigo[i] = this.inimigos.create(x, y, 'inimigo');
            inimigo[i].body.collideWorldBounds = true;

        }
        var x = 5000;
        for (var i = 0; i < 20; i++) {
            y = 10 * Math.random(0, 1);
            x1 = 10 * Math.random(0, 1);
            y = y * x1 * 10;
            inimigo[i] = this.inimigos.create(x, y, 'inimigo');
            inimigo[i].body.collideWorldBounds = true;

        }

    },
    tiroPlayer: function (player, tiro) {

        tiro.kill();

        var explosion = this.explosions.getFirstExists(false);
        explosion.reset(player.body.x + 10, player.body.y + 30);
        explosion.play('kaboom', 30, false, true);
        this.life = this.life - 1;


    },
    moverInimigo: function () {
        var x = 0;
        var n = 0;
        for (var i = 0; i < this.inimigos.length; i++) {
            inimigo = this.inimigos.children[i];
            inimigo.body.velocity.y -= 100;
            inimigo.body.velocity.x -= 50;
        }
    },
    inimigo1: function () {
        for (var i = 0; i < this.inimigos.length; i++) {
            var inimigo = this.inimigos.children[i];

            var n1, n2;
            n1 = inimigo.position.x;
            var cont = 10 * Math.random(0, 1);
            var cont1 = 10 * Math.random(1, 50);


            if (n1 < 700) {
                inimigo.body.velocity.x = 0;
                inimigo.body.velocity.x += 10 * cont;
            }
            else if (n1 > 1000) {
                inimigo.body.velocity.x = 0;
                inimigo.body.velocity.x -= 10 * cont;
            }
            if (cont > 5) {
                // faz ele ir para direita
                inimigo.body.velocity.y += cont1;
            } else {
                inimigo.body.velocity.y -= cont1;
            }
        }


    },
    enemyFires: function () {

        if (game.time.now > this.firingTimer) {
            this.tiroInimigo = this.misselInimigo.getFirstExists(false);

            this.livingEnemies.length = 0;
            for (var i = 0; i < this.inimigos.length; i++) {
                this.livingEnemies.push(this.inimigos.children[i]);
            }

            if (this.tiroInimigo && this.livingEnemies.length > 0) {

                var random = game.rnd.integerInRange(0, this.livingEnemies.length - 1);

                // randomly select one of them
                var shooter = this.livingEnemies[random];
                // And fire the bullet from this enemy
                this.tiroInimigo.reset(shooter.position.x, shooter.position.y);

                game.physics.arcade.moveToObject(this.tiroInimigo, this.player, 250);
                this.firingTimer = game.time.now + 1;
            }
        }

    },
    bossPrimeiro: function () {
        var n1 = this.boss.position.x;
        var cont = 10 * Math.random(0, 1);
        var cont1 = 10 * Math.random(1, 50);


        if (n1 < 1000) {
            this.boss.body.velocity.x = 0;
            this.boss.body.velocity.x += 10 * cont;
        }
        else if (n1 > 1500) {
            this.boss.body.velocity.x = 0;
            this.boss.body.velocity.x -= 10 * cont;
        }
        if (cont > 5) {
            // faz ele ir para direita
            this.boss.body.velocity.y += cont1;
        } else {
            this.boss.body.velocity.y -= cont1;
        }



    },
    tiroBoss1: function () {
        if (game.time.now > this.tiroTime) {
            this.disparoboss = this.tiroboss.getFirstExists(false);

            if (this.disparoboss) {
                this.disparoboss.reset(this.boss.position.x, this.boss.position.y + 100);
                game.physics.arcade.moveToObject(this.disparoboss, this.player, 300);
                this.tiroTime = game.time.now + 1;
            }
        }

    },
    bossSegundo: function () {
        var n12 = this.boss2.position.x;
        var cont2 = 10 * Math.random(0, 1);
        var cont12 = 10 * Math.random(1, 50);


        if (n12 < 2500) {
            this.boss2.body.velocity.x = 0;
            this.boss2.body.velocity.x += 10 * cont2;
        }
        else if (n12 > 3500) {
            this.boss2.body.velocity.x = 0;
            this.boss2.body.velocity.x -= 10 * cont2;
        }
        if (cont2 > 5) {

            this.boss2.body.velocity.y += cont12;
        } else {
            this.boss2.body.velocity.y -= cont12;
        }

    },
    tiroBoss21: function () {
        if (game.time.now > this.tiroTime1) {
            this.disparoboss1 = this.tiroboss12.getFirstExists(false);

            if (this.disparoboss1) {
                this.disparoboss1.reset(this.boss2.position.x + 20, this.boss2.position.y + 25);
                if (this.player.position.x >= 1500) {
                    game.physics.arcade.moveToObject(this.disparoboss1, this.player, 500);
                }
                else {
                    game.physics.arcade.moveToObject(this.disparoboss1, this.player, 200);
                }
                this.tiroTime1 = game.time.now + 1;
            }
        }
    },
    tiroBoss22: function () {
        if (game.time.now > this.tiroTime2) {
            this.disparoboss2 = this.tiroboss12.getFirstExists(false);

            if (this.disparoboss2) {
                this.disparoboss2.reset(this.boss2.position.x + 20, this.boss2.position.y + 130);
                if (this.player.position.x >= 1500) {
                    game.physics.arcade.moveToObject(this.disparoboss2, this.player, 500);
                }
                else {
                    game.physics.arcade.moveToObject(this.disparoboss2, this.player, 200);
                }
                this.tiroTime2 = game.time.now + 1;
            }
        }
    },
    tiroBoss23: function () {
        if (game.time.now > this.tiroTime3) {
            this.disparoboss3 = this.tiroboss13.getFirstExists(false);

            if (this.disparoboss3) {
                this.disparoboss3.reset(this.boss2.position.x + 20, this.boss2.position.y + 250);

                if (this.player.position.x >= 1500) {
                    game.physics.arcade.moveToObject(this.disparoboss3, this.player, 500);
                }
                else {
                    game.physics.arcade.moveToObject(this.disparoboss3, this.player, 200);
                }
                this.tiroTime3 = game.time.now + 1;
            }
        }
    },
    bossFinal: function () {
        var n13 = this.boss3.position.x;
        var cont3 = 10 * Math.random(0, 1);
        var cont13 = 10 * Math.random(1, 50);


        if (n13 < 4000) {
            this.boss3.body.velocity.x = 0;
            this.boss3.body.velocity.x += 10 * cont3;
        }
        else if (n13 > 5000) {
            this.boss3.body.velocity.x = 0;
            this.boss3.body.velocity.x -= 10 * cont3;
        }
        if (cont3 > 5) {
            // faz ele ir para direita
            this.boss3.body.velocity.y += cont13;
        } else {
            this.boss3.body.velocity.y -= cont13;
        }



    },
    tiroBossF: function () {

        if (game.time.now > this.tiroFinal) {
            this.disparoFinal = this.tirobossF.getFirstExists(false);

            if (this.disparoFinal) {
                this.disparoFinal.reset(this.boss3.position.x, this.boss3.position.y + 180);
                game.physics.arcade.moveToObject(this.disparoFinal, this.player, 1000);
                this.tiroFinal = game.time.now + 1;
            }
        }

    },
    tiroBossF2: function () {
        if (game.time.now > this.tiroFinal2) {
            this.disparoFinal2 = this.tirobossF2.getFirstExists(false);

            if (this.disparoFinal2) {
                this.disparoFinal2.reset(this.boss3.position.x, this.boss3.position.y + 335);
                game.physics.arcade.moveToObject(this.disparoFinal2, this.player, 1000);
                this.tiroFinal2 = game.time.now + 1;
            }
        }

    }
}
