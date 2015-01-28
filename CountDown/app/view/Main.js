var i;
var minInterval;
	var changer = function() {
		startButton.setText(String("0" + Math.floor(i/60)).slice(-2)+':'+String("0" + i % 60).slice(-2));
		if(i == 0) {
			Ext.getCmp('alarm').play();
		}
		if(i == -1) {
			startButton.setText("Timeout!");
			cancelButton.setText("OK");
			clearInterval(minInterval);
		}
		i--;
	};
	var spinner = Ext.create('Ext.field.Spinner', {
		label: '                          		',
		value: 10,
		minValue: 0,
		maxValue: 20,
		increment: 1,
		cycle: false
	});
	var myAudio = {
			xtype: 'audio',
			hidden: true,
			id: 'alarm',
			url: 'audio/Air Horn-SoundBible.com-964603082.mp3'
	};
	
	var startButton = Ext.create('Ext.Button', {
		text: 'Start',
		ui: 'action',
		handler: function () {
			i = spinner.getValue()*60;
			//startButton.setText("Noch "+i+" Minuten");
			changer();
			minInterval = setInterval(function(){ changer(); }, 1000);
			startButton.disable();
		}
	});
	
	var setCancelButton = function() {
		cancelButton.setText("Cancel");
	}
	
	var cancelButton = Ext.create('Ext.Button', {
		text: 'Cancel',
		ui: 'action',
		handler: function () {
			setCancelButton();
			clearInterval(minInterval);
			startButton.setText("Start");
			Ext.getCmp('alarm').stop();
			startButton.enable();
		}
	});
	Ext.define('CountDownApp.view.Main', {
		extend: 'Ext.Container',
		xtype: 'main',
		requires: ['Ext.TitleBar'],
		config: {
			items: [
			        {
			        	docked: 'top',
			        	xtype: 'titlebar',
			        	title: 'CountDown'
			        },
			        startButton,
			        spinner,			        
			        cancelButton,
			        myAudio
			]
		}
});