/*******************
 * Financial SR Test *
 *******************/

// import { PsychoJS } from 'https://pavlovia.org/lib/core-3.2.js';
// import * as core from 'https://pavlovia.org/lib/core-3.2.js';
// import * as util from 'https://pavlovia.org/lib/util-3.2.js';
// import * as visual from 'https://pavlovia.org/lib/visual-3.2.js';
// import { Sound } from 'https://pavlovia.org/lib/sound-3.2.js';



import { PsychoJS } from './lib_bugfix/core-2020.1.js';
import * as core from './lib_bugfix/core-2020.1.js';
// import { TrialHandler } from './lib_bugfix/data-2020.1.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data-3.2.js';

//import { Scheduler } from './lib_bugfix/util-2020.1.js';
import { Scheduler } from 'https://pavlovia.org/lib/util-3.2.js';

import * as util from './lib_bugfix/util-2020.1.js';
import * as visual from './lib_bugfix/visual-2020.1.js';
import * as sound from './lib_bugfix/sound-2020.1.js';

// const psychoJS = new PsychoJS({
//   debug: true
// });

var psychoJS = new PsychoJS({
  debug: true
});

psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

let expName = 'Finance- Time Allocation SR';
let expInfo = {'Participant ID*': ''};
var frameDur;
var frameRemains;
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

//set up flow of task 


const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

flowScheduler.add(updateInfo);
flowScheduler.add(Instructions1RoutineBegin);
flowScheduler.add(Instructions1RoutineEachFrame);
flowScheduler.add(Instructions1RoutineEnd);
flowScheduler.add(ChooseGameBegin);
flowScheduler.add(ChooseGameEachFrame);
flowScheduler.add(ChooseGameEnd);
flowScheduler.add(ChooseQBegin);
flowScheduler.add(ChooseQEachFrame);
flowScheduler.add(ChooseQEnd);
flowScheduler.add(Instructions2RoutineBegin);
flowScheduler.add(Instructions2RoutineEachFrame);
flowScheduler.add(Instructions2RoutineEnd);
flowScheduler.add(typeNameRoutineBegin);
flowScheduler.add(typeNameRoutineEachFrame);
flowScheduler.add(typeNameRoutineEnd);
flowScheduler.add(typeNameFriendRoutineBegin);
flowScheduler.add(typeNameFriendRoutineEachFrame);
flowScheduler.add(typeNameFriendRoutineEnd);
flowScheduler.add(typeNameCelebRoutineBegin);
flowScheduler.add(typeNameCelebRoutineEachFrame);
flowScheduler.add(typeNameCelebRoutineEnd);

flowScheduler.add(Instructions2A_RoutineBegin);
flowScheduler.add(Instructions2A_RoutineEachFrame);
flowScheduler.add(Instructions2A_RoutineEnd);
flowScheduler.add(typeWordRoutineBegin);
flowScheduler.add(typeWordRoutineEachFrame);
flowScheduler.add(typeWordRoutineEnd);
flowScheduler.add(typeWordFriendRoutineBegin);
flowScheduler.add(typeWordFriendRoutineEachFrame);
flowScheduler.add(typeWordFriendRoutineEnd);
flowScheduler.add(typeWordCelebRoutineBegin);
flowScheduler.add(typeWordCelebRoutineEachFrame);
flowScheduler.add(typeWordCelebRoutineEnd);

flowScheduler.add(Instructions3RoutineBegin);
flowScheduler.add(Instructions3RoutineEachFrame);
flowScheduler.add(Instructions3RoutineEnd);
flowScheduler.add(Instructions4RoutineBegin);
flowScheduler.add(Instructions4RoutineEachFrame);
flowScheduler.add(Instructions4RoutineEnd);

const AllTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AllTrialsLoopBegin, AllTrialsLoopScheduler);
flowScheduler.add(AllTrialsLoopScheduler);
flowScheduler.add(AllTrialsLoopEnd);

flowScheduler.add(EndingRoutineBegin);
flowScheduler.add(EndingRoutineEachFrame);
flowScheduler.add(EndingRoutineEnd);
flowScheduler.add(EndingRoutineBegin1);
flowScheduler.add(EndingRoutineEachFrame1);
flowScheduler.add(EndingRoutineEnd1);
flowScheduler.add(quitPsychoJS, '', true);

dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; 

  util.addInfoFromUrl(expInfo);

  return Scheduler.Event.NEXT;
}

//initialize the variables

//use this to counterbalance each run

var counterList = [1,2,3,4];
var counterCode = counterList[Math.floor(Math.random() * counterList.length)];
console.log("Counter Code: " + counterCode );

var globalClock;
var testQsClock;
var Instructions1Clock;
var instructions1;
var routineTimer;
routineTimer = new util.CountdownTimer();  




//first set of instructions
Instructions1Clock = new util.Clock();
instructions1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'In this part of the study, you will be making choices to allocate 20 minutes between reading finance tips and playing a videogame. \n\nBefore making these decisions, you will first be prompted to choose which game and what type of financial tips you want to make these allocations between. \n\nPress SPACE to continue.',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });

var space;
space = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

//instructions for choosing the game they want
var instructions2;
instructions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'Which game would you like to make decisions about? \n\nPlease use the number keys 1, 2, and 3 to move to the game you would like, then press ENTER to select.',
    font: 'Arial',
    units : undefined,
    pos: [0, 0.3], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });
 
var enter;
enter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var chooseGameClock;
chooseGameClock =new util.Clock()
var keyChoice;
keyChoice = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var keyChoice1;
keyChoice1 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var pacmanImg;
var pinballImg;
var tetrisImg;
pacmanImg = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [-0.5, -0.15], size : [0.34, 0.46], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
pinballImg = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0.5, -0.15], size : [0.34, 0.46], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
tetrisImg = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0, -0.15], size : [0.34, 0.46], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });

var polygon;
polygon = new visual.Rect ({win: psychoJS.window, name: 'polygon',
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1.0, depth: -5, interpolate: true,
  });
var polygon1;
polygon1 = new visual.Rect ({win: psychoJS.window, name: 'polygon',
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1.0, depth: -5, interpolate: true,
  });

// instructions for choosing the test they want
var Instructions3Clock;
var instructions3;
Instructions3Clock = new util.Clock();
instructions3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'What type of financial tips would you like to make decisions about? \n\nPlease use the number keys 1, 2, and 3 to move to the category you would like, then press ENTER to select.',
    font: 'Arial',
    units : undefined,
    pos: [0, 0.25], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });

var spendImg;
var investImg;
var saveImg;
spendImg = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [-0.5, -0.25], size : [0.38, 0.27], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
investImg = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0.5, -0.25], size : [0.38, 0.27], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
saveImg = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0, -0.25], size : [0.38, 0.27], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });

var spendTips;
var saveTips;
var investTips;

spendTips = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: 'Spending Tips',font: 'Arial',units : undefined,  pos: [-0.5, (- 0.08)], height: 0.05,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });

saveTips = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: 'Saving Tips',font: 'Arial',units : undefined,  pos: [0, (- 0.08)], height: 0.05,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });

investTips = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: 'Investing Tips',font: 'Arial',units : undefined,  pos: [0.5, (- 0.08)], height: 0.05,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });

// first instructions for name typing
var instructions4;
var Instructions4Clock;
Instructions4Clock = new util.Clock();
instructions4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'When making your decisions, you will be cued with the name of a person OR a word. On the following screen, you will be instructed to write down the name of three different, independent people.\n\nPress SPACE to continue.',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });

//instructions before the blocks of trials begin 
var Instructions5Clock;
var instructions5;
var inst5A;
Instructions5Clock = new util.Clock();
instructions5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'You will be completing 24 blocks of decisions, with each block consisting of 5 decisions. \n\nPrior to each block, one of these words or names you wrote down will appear on the screen. \n\n\n\nPress SPACE to continue for more instructions.',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });
 inst5A = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'While making your decisions for that block, please imagine that person is in the room with you.',
    font: 'Arial',
    units : undefined,
    pos: [0, -0.11], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('green'),  opacity: 1,
    depth: 0.0
 });
 //instructions before the blocks of trials begin 
var Instructions6Clock;
var instructions6;
Instructions6Clock = new util.Clock();
instructions6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'Each decision will consist of making allocations of 20 minutes towards playing the game you chose and reading the financial tips you chose. You will be presented with two different allocations- one on the left side of your screen and one on the right side of your screen. \n\nTo choose the allocation on the left side, press the 1 key. To choose the allocation on the right side, press the 2 key. You will have 6 seconds to make your choice before the trials move on. \n\nPress SPACE to continue.',

    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.045,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });

//instructions variable for name typing (mentor, friend, celeb)
var nameInstructions;
nameInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'sendInstructions',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, ( 0.2)], height: 0.04,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

var typeNameClock;
typeNameClock = new util.Clock();
var schoolName;
schoolName = [];
var friendName;
friendName = [];
var celebName;
celebName = [];
var nameClock;
nameClock = new util.Clock();

var text1;
text1 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var text2;
text2 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var text3;
text3 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var text4;
text4 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });

var textString;
textString = toString(text1);
var textString2;
textString2 = toString(text2);
var textString3;
textString3 = toString(text3);

var textString4;
textString4 = toString(text4);

var typeWordClock;
typeWordClock = new util.Clock();
var schoolWord;
schoolWord = [];
var friendWord;
friendWord = [];
var celebWord;
celebWord = [];
var wordClock;
wordClock = new util.Clock();

var text5;
text5 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var text6;
text6 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var text7;
text7 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var text8;
text8 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var textString5;
textString5 = toString(text5);
var textString6;
textString6 = toString(text6);
var textString7;
textString7 = toString(text7);
var textString8;
textString8 = toString(text8);



//variables for the ISI 
var ISItext;
ISItext = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '+',font: 'Arial',units : undefined,  pos: [0, 0], height: 0.20,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var ISIClock;
ISIClock = new util.Clock()

var isitext;
isitext = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '+',font: 'Arial',units : undefined,  pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var isiClock;
isiClock = new util.Clock()

//cue
var regCue;
regCue = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '+',font: 'Arial',units : undefined,  pos: [0, 0], height: 0.23,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });

//variables for the decision-making
var blank;
blank = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var selectedGameImgRight;
selectedGameImgRight = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0.5, 0.10], size : [0.2, 0.2], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
var selectedTestImgRight;
selectedTestImgRight = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0.5, 0.10], size : [0.22, 0.15], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
var selectedGameImgLeft;
selectedGameImgLeft = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0.5, 0.10], size : [0.2, 0.2], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
var selectedTestImgLeft;
selectedTestImgLeft = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0.5, 0.10], size : [0.22, 0.15], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
var topLeftText;
topLeftText = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [-0.47, ( 0.42)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var topLeftTime;
topLeftTime = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [-0.47, (0.33)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var topRightText;
topRightText = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0.47, ( 0.42)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var topRightTime;
topRightTime = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0.47, (0.33)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var botLeftText;
botLeftText = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [-0.47, (- 0.11)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var botLeftTime;
botLeftTime = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [-0.47, (- 0.20)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var botRightText;
botRightText = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0.47, (- 0.11)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var botRightTime;
botRightTime=new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0.47, (- 0.20)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var andSignRight;
andSignRight = new visual.TextStim({win: psychoJS.window, name:'text', text: '+', font:'Arial', pos:[0.47, -0.02], height:0.08, wrapWidth:undefined, color:new util.Color('white'), opacity:1, depth:-4.0})  
var andSignLeft;
andSignLeft = new visual.TextStim({win: psychoJS.window, name:'text', text: '+', font:'Arial', pos:[-0.47, -0.02], height:0.08, wrapWidth:undefined, color:new util.Color('white'), opacity:1, depth:-4.0})
var choiceSelection;
choiceSelection = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var ChoiceClock;
ChoiceClock = new util.Clock();
var Line;
Line = new visual.ShapeStim ({win: psychoJS.window, name: 'Line', vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],ori: 90, pos: [0, 0],lineWidth: 1.0, lineColor: new util.Color(1.0),fillColor: new util.Color(1.0),opacity: 1, depth: 0, interpolate: true,});

//add variables for end screen
var endText;
endText = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: 'Thank you for participating, you have finished this part of the study! \n\nYour completion code is: 422375\n\nPlease type this code into your survey, then press ENTER to submit your work!',font: 'Arial',units : undefined,  pos: [0, (0)], height: 0.046,  wrapWidth: 1.3, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var endText1;
endText1 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: 'Thank you for participating, you have finished this part of the study! \n\nYour completion code is: 422375\n\nPlease type this code into your survey, then press ENTER to submit your work!',font: 'Arial',units : undefined,  pos: [0, (0)], height: 0.046,  wrapWidth: 1.3, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });

//begin first instructions routine
var t;
var frameN;
var Instructions1Components;
function Instructions1RoutineBegin() {
  t = 0;
  Instructions1Clock.reset(); 
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  Instructions1Components = [];
  Instructions1Components.push(instructions1);
  Instructions1Components.push(space);

  for (const thisComponent of Instructions1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function Instructions1RoutineEachFrame() {
  let continueRoutine = true; 
  t = Instructions1Clock.getTime();
  frameN = frameN + 1;
  if (t >= 0.0 && instructions1.status === PsychoJS.Status.NOT_STARTED) {
    instructions1.tStart = t; 
    instructions1.frameNStart = frameN; 
    instructions1.setAlignHoriz('center');
    instructions1.setAutoDraw(true);
  }

  if (t >= 0.0 && space.status === PsychoJS.Status.NOT_STARTED) {
    space.tStart = t; 
    space.frameNStart = frameN;
    psychoJS.window.callOnFlip(function() { space.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { space.start(); }); 
    psychoJS.window.callOnFlip(function() { space.clearEvents(); });
  }

  if (space.status === PsychoJS.Status.STARTED) {
    let theseKeys = space.getKeys({keyList: ['space'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      space.keys = theseKeys[0].name;  
      space.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) { 
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false; 
  for (const thisComponent of Instructions1Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function Instructions1RoutineEnd() {
  for (const thisComponent of Instructions1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof space.keys !== undefined) { 
      psychoJS.experiment.addData('space.rt', space.rt);
      routineTimer.reset();
      }

  space.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

//begin routine for subs to choose which game they want
var ChooseGameComponents;
var x = [];
var g =[];


function ChooseGameBegin(){

    t=0;
    frameN = -1;
    chooseGameClock.reset();
    ChooseGameComponents = [];
    ChooseGameComponents.push(enter);
    ChooseGameComponents.push(pacmanImg);
    ChooseGameComponents.push(pinballImg);
    ChooseGameComponents.push(tetrisImg);
    ChooseGameComponents.push(instructions2);
    ChooseGameComponents.push(polygon);
    ChooseGameComponents.push(g);
    ChooseGameComponents.push(x);
    ChooseGameComponents.push(keyChoice);
    ChooseGameComponents.push(blank);
    polygon.setOpacity(1);
    polygon.setSize([0.35, 0.47]);
    polygon.setOri(0);
    polygon.setLineWidth(8);

  if(keyChoice.keys === '1'){
      x = -0.5;
  }
  if(keyChoice.keys == '2'){
      x = 0;
  }
  if(keyChoice.keys === '3'){
      x = 0.5;
  }
  for (const thisComponent of ChooseGameComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}
    
function ChooseGameEachFrame(){
     let continueRoutine = true;
     t = chooseGameClock.getTime();
     frameN = frameN + 1;
  

  if (t >= 0.0 && instructions2.status === PsychoJS.Status.NOT_STARTED) {
    instructions2.tStart = t;  
    instructions2.frameNStart = frameN; 
    instructions2.setAutoDraw(true);
  }
  

  if (t >= 0.0 && pacmanImg.status === PsychoJS.Status.NOT_STARTED) {
    pacmanImg.tStart = t;  
    pacmanImg.frameNStart = frameN; 
    pacmanImg.setImage("PacmanGam.PNG");
    pacmanImg.setAutoDraw(true);
  }

  if (t >= 0.0 && pinballImg.status === PsychoJS.Status.NOT_STARTED) {
    pinballImg.tStart = t;  
    pinballImg.frameNStart = frameN; 
    pinballImg.setImage("PinballGame.PNG");
    pinballImg.setAutoDraw(true);
  }

  if (t >= 0.0 && tetrisImg.status === PsychoJS.Status.NOT_STARTED) {
    tetrisImg.tStart = t;  
    tetrisImg.frameNStart = frameN; 
    tetrisImg.setImage("TetrisGame.PNG")
    tetrisImg.setAutoDraw(true);
  }

  if (t >= 0.0 && keyChoice.status === PsychoJS.Status.NOT_STARTED) {
    keyChoice.tStart = t; 
    keyChoice.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { keyChoice.clock.reset(); }); 
    psychoJS.window.callOnFlip(function() { keyChoice.start(); });
    psychoJS.window.callOnFlip(function() { keyChoice.clearEvents(); });
  }

  if (keyChoice.status === PsychoJS.Status.STARTED) {
    let theseKeys = keyChoice.getKeys({keyList: ['1', '2', '3'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      keyChoice.keys = theseKeys[0].name;  
      keyChoice.rt = theseKeys[0].rt;
    }
  }


  if(keyChoice.keys === '1'){
      x = -0.5;
  }
  if(keyChoice.keys == '2'){
      x = 0;
  }
  if(keyChoice.keys === '3'){
      x = 0.5;
  }
  if ( ((keyChoice.keys == '1') || (keyChoice.keys == '2') || (keyChoice.keys == '3')) && (polygon.status === PsychoJS.Status.NOT_STARTED)) {
    polygon.tStart = t; 
    polygon.frameNStart = frameN;  
    polygon.setAutoDraw(true);
  }


  if (polygon.status === PsychoJS.Status.STARTED){ 
    polygon.setPos([x, -0.15]);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  
    enter.frameNStart = frameN;  
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });
    psychoJS.window.callOnFlip(function() { enter.start(); }); 
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) { 
      enter.keys = theseKeys[0].name;  
      enter.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) {  
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false; 
  for (const thisComponent of ChooseGameComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ChooseGameEnd() {
  for (const thisComponent of ChooseGameComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  if (keyChoice.keys === '1' && enter.keys !== undefined){
      g = 1;
  }
  if (keyChoice.keys === '2' && enter.keys !== undefined){
      g = 2;
  }
  if (keyChoice.keys === '3' && enter.keys !==undefined){
      g = 3;
  }
  if (keyChoice.keys === undefined && enter.keys !== undefined){
      g = 1;
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  psychoJS.experiment.addData('Game Choice', keyChoice.keys);

  if (typeof enter.keys !== undefined) {
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }


  enter.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

//begin routine for subs to choose which test q's they want

var ChooseQComponents;
var x1 = [];
var q = [];
var chooseQClock = new util.Clock();
function ChooseQBegin(){

    t=0;
    frameN = -1;
    chooseQClock.reset();
    keyChoice1.keys = undefined;
    ChooseQComponents = [enter, keyChoice1, spendTips, investTips, saveTips, investImg, spendImg, saveImg, instructions3, polygon1, x1, q];
    polygon1.setOpacity(1);
    polygon1.setSize([0.39, 0.28]);
    polygon1.setOri(0);
    polygon1.setLineWidth(8);
  if (keyChoice1.keys === "1"){
    x1 = -0.5;
    }
  if (keyChoice1.keys === "2"){
    x1 = 0;
    }
  if (keyChoice1.keys === '3'){
    x1 = -0.5
    }
  for (const thisComponent of ChooseQComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}
    
function ChooseQEachFrame(){
     let continueRoutine = true;
     t = chooseQClock.getTime();
     frameN = frameN + 1;
     
  if (t >= 0.0 && instructions3.status === PsychoJS.Status.NOT_STARTED) {
    instructions3.tStart = t;  
    instructions3.frameNStart = frameN; 
    instructions3.setAutoDraw(true);
  }
  if (t >= 0.0 && spendImg.status === PsychoJS.Status.NOT_STARTED) {
    spendImg.tStart = t;  
    spendImg.frameNStart = frameN; 
    spendImg.setImage("spending.PNG");
    spendImg.setAutoDraw(true);
  }
  if (t >= 0.0 && investImg.status === PsychoJS.Status.NOT_STARTED) {
    investImg.tStart = t;  
    investImg.frameNStart = frameN; 
    investImg.setImage("investing.PNG");
    investImg.setAutoDraw(true);
  }
  if (t >= 0.0 && saveImg.status === PsychoJS.Status.NOT_STARTED) {
    saveImg.tStart = t;  
    saveImg.frameNStart = frameN; 
    saveImg.setImage("saving.PNG")
    saveImg.setAutoDraw(true);
  }
    if (t >= 0.0 && investTips.status === PsychoJS.Status.NOT_STARTED) {
    investTips.tStart = t;  
    investTips.frameNStart = frameN; 
    investTips.setAutoDraw(true);
  }
    if (t >= 0.0 && spendTips.status === PsychoJS.Status.NOT_STARTED) {
    spendTips.tStart = t;  
    spendTips.frameNStart = frameN; 
    spendTips.setAutoDraw(true);
  }
    if (t >= 0.0 && saveTips.status === PsychoJS.Status.NOT_STARTED) {
    saveTips.tStart = t;  
    saveTips.frameNStart = frameN; 
    saveTips.setAutoDraw(true);
  }
 
  if (t >= 0.0 && keyChoice1.status === PsychoJS.Status.NOT_STARTED) {
    keyChoice1.tStart = t; 
    keyChoice1.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { keyChoice1.clock.reset(); }); 
    psychoJS.window.callOnFlip(function() { keyChoice1.start(); });
    psychoJS.window.callOnFlip(function() { keyChoice1.clearEvents(); });
  }

  if (keyChoice1.status === PsychoJS.Status.STARTED) {
    let theseKeys = keyChoice1.getKeys({keyList: ['1', '2', '3'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      keyChoice1.keys = theseKeys[0].name;  
      keyChoice1.rt = theseKeys[0].rt;
    }
  }


  if(keyChoice1.keys === '1'){
      x = -0.5;
  }
  if(keyChoice1.keys == '2'){
      x = 0;
  }
  if(keyChoice1.keys === '3'){
      x = 0.5;
  }
  if ( ((keyChoice1.keys == '1') || (keyChoice1.keys == '2') || (keyChoice1.keys == '3')) && (polygon1.status === PsychoJS.Status.NOT_STARTED)) {
    polygon1.tStart = t; 
    polygon1.frameNStart = frameN;  
    polygon1.setAutoDraw(true);
  }


  if (polygon1.status === PsychoJS.Status.STARTED){ 
    polygon1.setPos([x, -0.25]);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  
    enter.frameNStart = frameN;  
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });
    psychoJS.window.callOnFlip(function() { enter.start(); }); 
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) { 
      enter.keys = theseKeys[0].name;  
      enter.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) {  
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false; 
  for (const thisComponent of ChooseQComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function ChooseQEnd() {
  for (const thisComponent of ChooseQComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  if (keyChoice1.keys === '1' && enter.keys !== undefined){
      q = 1;
  }
  if (keyChoice1.keys === '2' && enter.keys !== undefined){
      q = 2;
  }
  if (keyChoice1.keys === '3' && enter.keys !==undefined){
      q = 3;
  }
  if (keyChoice1.keys === undefined && enter.keys !== undefined){
      q = 1;
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  psychoJS.experiment.addData('Test Choice', keyChoice1.keys);

  if (typeof enter.keys !== undefined) {
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }


  enter.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

//start instruction routine for subjects to type names 
var Instructions2Components;
function Instructions2RoutineBegin() {
  t = 0;
  Instructions4Clock.reset(); 
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  Instructions2Components = [];
  Instructions2Components.push(instructions4);
  Instructions2Components.push(space);

  for (const thisComponent of Instructions2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function Instructions2RoutineEachFrame() {
  let continueRoutine = true; 
  t = Instructions4Clock.getTime();
  frameN = frameN + 1;
  if (t >= 0.0 && instructions4.status === PsychoJS.Status.NOT_STARTED) {
    instructions4.tStart = t; 
    instructions4.frameNStart = frameN; 
    instructions4.setAlignHoriz('center');

    instructions4.setAutoDraw(true);
  }

  if (t >= 0.0 && space.status === PsychoJS.Status.NOT_STARTED) {
    space.tStart = t; 
    space.frameNStart = frameN;
    psychoJS.window.callOnFlip(function() { space.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { space.start(); }); 
    psychoJS.window.callOnFlip(function() { space.clearEvents(); });
  }

  if (space.status === PsychoJS.Status.STARTED) {
    let theseKeys = space.getKeys({keyList: ['space'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      space.keys = theseKeys[0].name;  
      space.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) { 
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false; 
  for (const thisComponent of Instructions2Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function Instructions2RoutineEnd() {
  for (const thisComponent of Instructions2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof space.keys !== undefined) { 
      psychoJS.experiment.addData('space.rt', space.rt);
      routineTimer.reset();
      }

  space.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

//begin name typing for financial mentor routine
var modify;
var typeNameComponents;
function typeNameRoutineBegin() {
  t = 0;
  typeNameClock.reset(); 
  frameN = -1;
  nameInstructions.setText('Think of the person who has been the most instrumental to your financial success. \n\n\nPlease type their name below, then press ENTER to continue:\n\n');
  nameInstructions.setAlignHoriz('center');

  enter.keys = undefined;
  enter.rt = undefined;
  typeNameComponents = [];
  typeNameComponents.push(nameInstructions);
  typeNameComponents.push(enter);
  typeNameComponents.push(text1);

  
  for (const thisComponent of typeNameComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var textAdd;
var keyCount1 = [];
keyCount1 = 0;
var keys1;
function typeNameRoutineEachFrame() {
  let continueRoutine = true;
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t; 
    nameInstructions.frameNStart = frameN;
    nameInstructions.setAutoDraw(true);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  
    enter.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });
    psychoJS.window.callOnFlip(function() { enter.start(); }); 
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  //   if (enter.status === PsychoJS.Status.STARTED) {
//     let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});
    
//     if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
//       psychoJS.experiment.experimentEnded = true;
//     }
    
//     if (theseKeys.length > 0) {
//       enter.keys = theseKeys[0].name;
//       enter.rt = theseKeys[0].rt;
//       continueRoutine = false;
//     }
//   }
//   keyCount1 = 0;
  let theseKeys = psychoJS.eventManager.getKeys();
//   if (theseKeys.length > 2){
//       keyCount1 = 2;
//   }
  if (theseKeys.length > 0) {  // at least one key was pressed
    textAdd = theseKeys[theseKeys.length-1]; 
    keyCount1 ++;
    console.log("Key count = ", keyCount1);
    }
  if(keyCount1 < 6 && textAdd === 'return'){
      textAdd='';
      continueRoutine = true;
      console.log("Not enough keys pressed, continuing the routine.");
  }else if (keyCount1 >= 6 && textAdd === 'return' ) {
      textAdd = ''; 
      continueRoutine = false;
      console.log("Enough keys pressed & enter was pressed, ending the routine");
      if (enter.status === PsychoJS.Status.STARTED) {
         let theseKeys1 = enter.getKeys({keyList: ['return'], waitRelease: false});
    
      if (theseKeys1.length > 0 && theseKeys1[0].name === 'escape') {
         psychoJS.experiment.experimentEnded = true;
         }
    
      if (theseKeys1.length > 0) {
         enter.keys = theseKeys1[0].name;
         enter.rt = theseKeys1[0].rt;
         continueRoutine = false;
         }
         }
      continueRoutine = false; 
  }else if (textAdd === 'space') {
      textAdd = ' ';  // Add a space
      keyCount1 ++;
  } else if (textAdd === 'backspace') {
      text1.text = text1.text.slice(0, -1);
      textAdd = undefined;
    //   keyCount1 ++;
  } else if (['lshift', 'rshift'].includes(textAdd)) {
      modify = true;
  } else if (textAdd !== undefined) {
      if (modify) {
          text1.text = text1.text + textAdd.toUpperCase();
          modify = false;
      } else {
          text1.text = text1.text + textAdd
          keyCount1 ++;
      }textAdd = undefined;
      
  }
  if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
    text1.tStart = t; 
    text1.frameNStart = frameN;
    text1.setAutoDraw(true);
    text1.setText(text1.text);
   }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) {
    return Scheduler.Event.NEXT;
  }
  
 
  continueRoutine = false; 
  for (const thisComponent of typeNameComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function typeNameRoutineEnd() {
  for (const thisComponent of typeNameComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) {  
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }

  enter.stop();
  psychoJS.experiment.addData("typedNameFinance", text1.text)
  schoolName = text1.text;
  console.log(schoolName);
  text1.setText('')  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}
//begin routine for typing the friend name 
var textAdd2;
var typeNameFriendComponents;
function typeNameFriendRoutineBegin() {
  t = 0;
  typeNameClock.reset(); 
  frameN = -1;
  nameInstructions.setText('Think of the person you hang out with the most socially. \n\n\nPlease type their name below, then press ENTER to continue:\n\n');
  nameInstructions.setAlignHoriz('center');
  enter.keys = undefined;
  enter.rt = undefined;
  typeNameFriendComponents = [];
  typeNameFriendComponents.push(nameInstructions);
  typeNameFriendComponents.push(enter);
  typeNameFriendComponents.push(text2);

  
  for (const thisComponent of typeNameFriendComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var keys1;
var keyCount2 = [];
keyCount2 = 0;
function typeNameFriendRoutineEachFrame() {
  let continueRoutine = true;
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t;
    nameInstructions.frameNStart = frameN; 
    nameInstructions.setAutoDraw(true);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  
    enter.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { enter.start(); });
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  let theseKeys = psychoJS.eventManager.getKeys();
//   if (theseKeys.length > 2){
//       keyCount1 = 2;
//   }
  if (theseKeys.length > 0) {  // at least one key was pressed
    textAdd2 = theseKeys[theseKeys.length-1]; 
    keyCount2 ++;
    console.log("Key count = ", keyCount2);
    }
  if(keyCount2 < 3 && textAdd2 === 'return'){
      textAdd2='';
      continueRoutine = true;
      console.log("Not enough keys pressed, continuing the routine.");
  }else if (keyCount2 >= 3 && textAdd2 === 'return' ) {
      textAdd2 = ''; 
      continueRoutine = false;
      console.log("Enough keys pressed & enter was pressed, ending the routine");
      if (enter.status === PsychoJS.Status.STARTED) {
         let theseKeys2 = enter.getKeys({keyList: ['return'], waitRelease: false});
    
      if (theseKeys2.length > 0 && theseKeys2[0].name === 'escape') {
         psychoJS.experiment.experimentEnded = true;
         }
    
      if (theseKeys2.length > 0) {
         enter.keys = theseKeys2[0].name;
         enter.rt = theseKeys2[0].rt;
         continueRoutine = false;
         }
         }
      continueRoutine = false; 
  }else if (textAdd2 === 'space') {
      textAdd2 = ' ';  // Add a space
      keyCount2 ++;
  } else if (textAdd2 === 'backspace') {
      text2.text = text2.text.slice(0, -1);
      textAdd2 = undefined;
    //   keyCount1 ++;
  } else if (['lshift', 'rshift'].includes(textAdd2)) {
      modify = true;
  } else if (textAdd2 !== undefined) {
      if (modify) {
          text2.text = text2.text + textAdd2.toUpperCase();
          modify = false;
      } else {
          text2.text = text2.text + textAdd2
          keyCount2 ++;
      }textAdd2 = undefined;
      
  }


  if (t >= 0.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
    text2.tStart = t; 
    text2.frameNStart = frameN; 
    text2.setAutoDraw(true);
    text2.setText(text2.text);
   }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) {
    return Scheduler.Event.NEXT;
  }

  
  continueRoutine = false; 
  for (const thisComponent of typeNameFriendComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function typeNameFriendRoutineEnd() {
  for (const thisComponent of typeNameFriendComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) { 
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }

  enter.stop();
  psychoJS.experiment.addData("typedNameFriend", text2.text);
  friendName = text2.text;
  console.log(friendName);
  text2.setText('')  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}
//begin routine for typing the celeb name 
var textAdd3;
var keyCount3 = [];
keyCount3 = 0;
var typeNameCelebComponents;
function typeNameCelebRoutineBegin() {
  t = 0;
  typeNameClock.reset(); 
  frameN = -1;
  nameInstructions.setText('Think of a celebrity that you really like. \n\n\nPlease type their name below, then press ENTER to continue:\n\n');
  nameInstructions.setAlignHoriz('center');

  enter.keys = undefined;
  enter.rt = undefined;
  typeNameCelebComponents = [];
  typeNameCelebComponents.push(nameInstructions);
  typeNameCelebComponents.push(enter);
  typeNameCelebComponents.push(text3);

  
  for (const thisComponent of typeNameCelebComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var textAdd;
var keys1;
function typeNameCelebRoutineEachFrame() {
  let continueRoutine = true;
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t; 
    nameInstructions.frameNStart = frameN; 
    nameInstructions.setAutoDraw(true);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t; 
    enter.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); }); 
    psychoJS.window.callOnFlip(function() { enter.start(); }); 
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

 let theseKeys = psychoJS.eventManager.getKeys();
//   if (theseKeys.length > 2){
//       keyCount1 = 2;
//   }
  if (theseKeys.length > 0) {  // at least one key was pressed
    textAdd3 = theseKeys[theseKeys.length-1]; 
    keyCount3 ++;
    console.log("Key count = ", keyCount3);
    }
  if(keyCount3 < 3 && textAdd3 === 'return'){
      textAdd3='';
      continueRoutine = true;
      console.log("Not enough keys pressed, continuing the routine.");
  }else if (keyCount3 >= 3 && textAdd3 === 'return' ) {
      textAdd = ''; 
      continueRoutine = false;
      console.log("Enough keys pressed & enter was pressed, ending the routine");
      if (enter.status === PsychoJS.Status.STARTED) {
         let theseKeys3 = enter.getKeys({keyList: ['return'], waitRelease: false});
    
      if (theseKeys3.length > 0 && theseKeys3[0].name === 'escape') {
         psychoJS.experiment.experimentEnded = true;
         }
    
      if (theseKeys3.length > 0) {
         enter.keys = theseKeys3[0].name;
         enter.rt = theseKeys3[0].rt;
         continueRoutine = false;
         }
         }
      continueRoutine = false; 
  }else if (textAdd3 === 'space') {
      textAdd3 = ' ';  // Add a space
      keyCount3 ++;
  } else if (textAdd3 === 'backspace') {
      text3.text = text3.text.slice(0, -1);
      textAdd3 = undefined;
    //   keyCount1 ++;
  } else if (['lshift', 'rshift'].includes(textAdd3)) {
      modify = true;
  } else if (textAdd3 !== undefined) {
      if (modify) {
          text3.text = text3.text + textAdd3.toUpperCase();
          modify = false;
      } else {
          text3.text = text3.text + textAdd3
          keyCount3 ++;
      }textAdd3 = undefined;
      
  }
  
  if (t >= 0.0 && text3.status === PsychoJS.Status.NOT_STARTED) {
    text3.tStart = t;  // (not accounting for frame time here)
    text3.frameNStart = frameN;  // exact frame index
    text3.setAutoDraw(true);
    text3.setText(text3.text);
   }


  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) {
    return Scheduler.Event.NEXT;
  }
  

  continueRoutine = false; 
  for (const thisComponent of typeNameCelebComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function typeNameCelebRoutineEnd() {
  for (const thisComponent of typeNameCelebComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) {  
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }

  enter.stop();
  psychoJS.experiment.addData("typedNameCeleb", text3.text);
  celebName = text3.text;
  console.log("academic Name = ", schoolName);
  console.log("friend name = ", friendName);
  console.log("celeb Name = ", celebName);
  text3.setText('')  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

//final set of instructions before choice task begins 
var Instructions3Components;
function Instructions3RoutineBegin() {
  t = 0;
  Instructions5Clock.reset(); 
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  Instructions3Components = [];
  Instructions3Components.push(instructions5, inst5A);
  Instructions3Components.push(space);

  for (const thisComponent of Instructions3Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}


//start instruction routine for subjects to type names 
var Instructions2A_Components;
function Instructions2A_RoutineBegin() {
  t = 0;
  Instructions4Clock.reset(); 
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  Instructions2A_Components = [];
  Instructions2A_Components.push(instructions4);
  Instructions2A_Components.push(space);

  for (const thisComponent of Instructions2A_Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function Instructions2A_RoutineEachFrame() {
  let continueRoutine = true; 
  t = Instructions4Clock.getTime();
  frameN = frameN + 1;
  if (t >= 0.0 && instructions4.status === PsychoJS.Status.NOT_STARTED) {
    instructions4.setText("On the following screens, you will be instructed to write down three different words (not names). \n\nPress SPACE to continue.");
    instructions4.tStart = t; 
    instructions4.frameNStart = frameN;  
    instructions4.setAutoDraw(true);
  }

  if (t >= 0.0 && space.status === PsychoJS.Status.NOT_STARTED) {
    space.tStart = t; 
    space.frameNStart = frameN;
    psychoJS.window.callOnFlip(function() { space.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { space.start(); }); 
    psychoJS.window.callOnFlip(function() { space.clearEvents(); });
  }

  if (space.status === PsychoJS.Status.STARTED) {
    let theseKeys = space.getKeys({keyList: ['space'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      space.keys = theseKeys[0].name;  
      space.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) { 
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false; 
  for (const thisComponent of Instructions2A_Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function Instructions2A_RoutineEnd() {
  for (const thisComponent of Instructions2A_Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof space.keys !== undefined) { 
      psychoJS.experiment.addData('space.rt', space.rt);
      routineTimer.reset();
      }

  space.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

//begin name typing for academic routine
var modify;
var typeWordComponents;
function typeWordRoutineBegin() {
  t = 0;
  typeNameClock.reset(); 
  frameN = -1;
  nameInstructions.setText('Think of a word that reminds you of financial success. \n\n\nPlease type that word below, then press ENTER to continue:\n\n');
  enter.keys = undefined;
  enter.rt = undefined;
  typeWordComponents = [];
  typeWordComponents.push(nameInstructions);
  typeWordComponents.push(enter);
  typeWordComponents.push(text5);

  
  for (const thisComponent of typeWordComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var textAdd5;
var keyCount5=[];
var keys5;
keyCount5 = 0;
var theseKeys5;
function typeWordRoutineEachFrame() {
  let continueRoutine = true;
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t; 
    nameInstructions.frameNStart = frameN;
    nameInstructions.setAutoDraw(true);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  
    enter.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });
    psychoJS.window.callOnFlip(function() { enter.start(); }); 
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

//   if (enter.status === PsychoJS.Status.STARTED) {
//     let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});
    
//     if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
//       psychoJS.experiment.experimentEnded = true;
//     }
    
//     if (theseKeys.length > 0) {
//       enter.keys = theseKeys[0].name;
//       enter.rt = theseKeys[0].rt;
//       continueRoutine = false;
//     }
//   }
//   keyCount1 = 0;
  let theseKeys5 = psychoJS.eventManager.getKeys();
//   if (theseKeys.length > 2){
//       keyCount1 = 2;
//   }
  if (theseKeys5.length > 0) {  // at least one key was pressed
    textAdd5 = theseKeys5[theseKeys5.length-1]; 
    keyCount5 ++;
    console.log("Key count = ", keyCount5);
    }
  if(keyCount5 < 6 && textAdd5 === 'return'){
      textAdd5='';
      continueRoutine = true;
      console.log("Not enough keys pressed, continuing the routine.");
  }else if (keyCount5 >= 6 && textAdd5 === 'return' ) {
      textAdd5 = ''; 
      continueRoutine = false;
      console.log("Enough keys pressed & enter was pressed, ending the routine");
      if (enter.status === PsychoJS.Status.STARTED) {
         let theseKeys5 = enter.getKeys({keyList: ['return'], waitRelease: false});
    
      if (theseKeys5.length > 0 && theseKeys5[0].name === 'escape') {
         psychoJS.experiment.experimentEnded = true;
         }
    
      if (theseKeys5.length > 0) {
         enter.keys = theseKeys5[0].name;
         enter.rt = theseKeys5[0].rt;
         continueRoutine = false;
         }
         }
      continueRoutine = false; 
  }else if (textAdd5 === 'space') {
      textAdd5 = ' ';  // Add a space
      keyCount5 ++;
  } else if (textAdd5 === 'backspace') {
      text5.text = text5.text.slice(0, -1);
      textAdd5 = undefined;
    //   keyCount1 ++;
  } else if (['lshift', 'rshift'].includes(textAdd5)) {
      modify = true;
  } else if (textAdd5 !== undefined) {
      if (modify) {
          text5.text = text5.text + textAdd5.toUpperCase();
          modify = false;
      } else {
          text5.text = text5.text + textAdd5
          keyCount5 ++;
      }textAdd5 = undefined;
      
  }
  if (t >= 0.0 && text5.status === PsychoJS.Status.NOT_STARTED) {
    text5.tStart = t; 
    text5.frameNStart = frameN;
    text5.setAutoDraw(true);
    text5.setText(text5.text);
   }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) {
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false; 
  for (const thisComponent of typeWordComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function typeWordRoutineEnd() {
  for (const thisComponent of typeWordComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) {  
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }

  enter.stop();
  psychoJS.experiment.addData("typedSchoolWord", text5.text)
  schoolWord = text5.text;
  console.log(schoolWord);
  text5.setText('')  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}



//begin routine for typing the friend word 
var textAdd7;
var typeWordFriendComponents;
function typeWordFriendRoutineBegin() {
  t = 0;
  typeNameClock.reset(); 
  frameN = -1;
  nameInstructions.setText('Think of a word that reminds you of hanging out socially. \n\n\nPlease type that word below, then press ENTER to continue:\n\n');
  enter.keys = undefined;
  enter.rt = undefined;
  typeWordFriendComponents = [];
  typeWordFriendComponents.push(nameInstructions);
  typeWordFriendComponents.push(enter);
  typeWordFriendComponents.push(text7);

  
  for (const thisComponent of typeWordFriendComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var keys1;
var theseKeys7;
var keyCount7=[];
keyCount7 = 0;
function typeWordFriendRoutineEachFrame() {
  let continueRoutine = true;
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t;
    nameInstructions.frameNStart = frameN; 
    nameInstructions.setAutoDraw(true);
  }

  let theseKeys7 = psychoJS.eventManager.getKeys();
//   if (theseKeys.length > 2){
//       keyCount1 = 2;
//   }
  if (theseKeys7.length > 0) {  // at least one key was pressed
    textAdd7 = theseKeys7[theseKeys7.length-1]; 
    keyCount7 ++;
    console.log("Key count = ", keyCount7);
    }
  if(keyCount7 < 3 && textAdd7 === 'return'){
      textAdd7='';
      continueRoutine = true;
      console.log("Not enough keys pressed, continuing the routine.");
  }else if (keyCount7 >= 3 && textAdd7 === 'return' ) {
      textAdd7 = ''; 
      continueRoutine = false;
      console.log("Enough keys pressed & enter was pressed, ending the routine");
      if (enter.status === PsychoJS.Status.STARTED) {
         let theseKeys7 = enter.getKeys({keyList: ['return'], waitRelease: false});
    
      if (theseKeys7.length > 0 && theseKeys7[0].name === 'escape') {
         psychoJS.experiment.experimentEnded = true;
         }
    
      if (theseKeys7.length > 0) {
         enter.keys = theseKeys7[0].name;
         enter.rt = theseKeys7[0].rt;
         continueRoutine = false;
         }
         }
      continueRoutine = false; 
  }else if (textAdd7 === 'space') {
      textAdd7 = ' ';  // Add a space
      keyCount7 ++;
  } else if (textAdd7 === 'backspace') {
      text7.text = text7.text.slice(0, -1);
      textAdd7 = undefined;
    //   keyCount1 ++;
  } else if (['lshift', 'rshift'].includes(textAdd7)) {
      modify = true;
  } else if (textAdd7 !== undefined) {
      if (modify) {
          text7.text = text7.text + textAdd7.toUpperCase();
          modify = false;
      } else {
          text7.text = text7.text + textAdd7
          keyCount7 ++;
      }textAdd7 = undefined;
      
  }


  if (t >= 0.0 && text7.status === PsychoJS.Status.NOT_STARTED) {
    text7.tStart = t; 
    text7.frameNStart = frameN; 
    text7.setAutoDraw(true);
    text7.setText(text7.text);
   }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) {
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false; 
  for (const thisComponent of typeWordFriendComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function typeWordFriendRoutineEnd() {
  for (const thisComponent of typeWordFriendComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) { 
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }

  enter.stop();
  psychoJS.experiment.addData("typedWordFriend", text7.text);
  friendWord = text7.text;
  console.log(friendWord);
  text7.setText('')  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}
//begin routine for typing the celeb name 
var textAdd8;
var typeWordCelebComponents;
function typeWordCelebRoutineBegin() {
  t = 0;
  typeNameClock.reset(); 
  frameN = -1;
  nameInstructions.setText('Think of a word that makes you think of a celebrity. \n\n\nPlease type that word (not a name) below, then press ENTER to continue:\n\n');
  enter.keys = undefined;
  enter.rt = undefined;
  typeWordCelebComponents = [];
  typeWordCelebComponents.push(nameInstructions);
  typeWordCelebComponents.push(enter);
  typeWordCelebComponents.push(text8);

  
  for (const thisComponent of typeWordCelebComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var theseKeys8;
var textAdd;
var keyCount8 = [];
var keys8;
keyCount8 = 0;
function typeWordCelebRoutineEachFrame() {
  let continueRoutine = true;
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t; 
    nameInstructions.frameNStart = frameN; 
    nameInstructions.setAutoDraw(true);
  }

  let theseKeys8 = psychoJS.eventManager.getKeys();
//   if (theseKeys.length > 2){
//       keyCount1 = 2;
//   }
  if (theseKeys8.length > 0) {  // at least one key was pressed
    textAdd8 = theseKeys8[theseKeys8.length-1]; 
    keyCount8 ++;
    console.log("Key count = ", keyCount8);
    }
  if(keyCount8 < 3 && textAdd8 === 'return'){
      textAdd8='';
      continueRoutine = true;
      console.log("Not enough keys pressed, continuing the routine.");
  }else if (keyCount8 >= 3 && textAdd8 === 'return' ) {
      textAdd = ''; 
      continueRoutine = false;
      console.log("Enough keys pressed & enter was pressed, ending the routine");
      if (enter.status === PsychoJS.Status.STARTED) {
         let theseKeys8 = enter.getKeys({keyList: ['return'], waitRelease: false});
    
      if (theseKeys8.length > 0 && theseKeys8[0].name === 'escape') {
         psychoJS.experiment.experimentEnded = true;
         }
    
      if (theseKeys8.length > 0) {
         enter.keys = theseKeys8[0].name;
         enter.rt = theseKeys8[0].rt;
         continueRoutine = false;
         }
         }
      continueRoutine = false; 
  }else if (textAdd8 === 'space') {
      textAdd8 = ' ';  // Add a space
      keyCount8 ++;
  } else if (textAdd8 === 'backspace') {
      text8.text = text8.text.slice(0, -1);
      textAdd8 = undefined;
    //   keyCount1 ++;
  } else if (['lshift', 'rshift'].includes(textAdd8)) {
      modify = true;
  } else if (textAdd8 !== undefined) {
      if (modify) {
          text8.text = text8.text + textAdd8.toUpperCase();
          modify = false;
      } else {
          text8.text = text8.text + textAdd8
          keyCount8 ++;
      }textAdd8 = undefined;
      
  }
  
  if (t >= 0.0 && text8.status === PsychoJS.Status.NOT_STARTED) {
    text8.tStart = t;  // (not accounting for frame time here)
    text8.frameNStart = frameN;  // exact frame index
    text8.setAutoDraw(true);
    text8.setText(text8.text);
   }


  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) {
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false; 
  for (const thisComponent of typeWordCelebComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function typeWordCelebRoutineEnd() {
  for (const thisComponent of typeWordCelebComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) {  
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }

  enter.stop();
  psychoJS.experiment.addData("typedWordCeleb", text8.text);
  celebWord = text8.text;
  console.log("financial Word = ", schoolWord);
  console.log("friend Word = ", friendWord);
  console.log("celeb Word = ", celebWord);
  text8.setText('')  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}






function Instructions3RoutineEachFrame() {
  let continueRoutine = true; 
  t = Instructions5Clock.getTime();
  frameN = frameN + 1;
  if (t >= 0.0 && instructions5.status === PsychoJS.Status.NOT_STARTED) {
    instructions5.tStart = t; 
    instructions5.frameNStart = frameN;  
    instructions5.setAlignHoriz('center');

    instructions5.setAutoDraw(true);
  }
  if (t >= 0.0 && inst5A.status === PsychoJS.Status.NOT_STARTED) {
    inst5A.tStart = t; 
    inst5A.frameNStart = frameN;  
    inst5A.setAlignHoriz('center');
    inst5A.setAutoDraw(true);
    
  }

  if (t >= 0.0 && space.status === PsychoJS.Status.NOT_STARTED) {
    space.tStart = t; 
    space.frameNStart = frameN;
    psychoJS.window.callOnFlip(function() { space.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { space.start(); }); 
    psychoJS.window.callOnFlip(function() { space.clearEvents(); });
  }

  if (space.status === PsychoJS.Status.STARTED) {
    let theseKeys = space.getKeys({keyList: ['space'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      space.keys = theseKeys[0].name;  
      space.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) { 
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false; 
  for (const thisComponent of Instructions3Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function Instructions3RoutineEnd() {
  for (const thisComponent of Instructions3Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof space.keys !== undefined) { 
      psychoJS.experiment.addData('space.rt', space.rt);
      routineTimer.reset();
      }

  space.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

//final set of instructions before choice task begins 
var Instructions4Components;
function Instructions4RoutineBegin() {
  t = 0;
  Instructions6Clock.reset(); 
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  Instructions4Components = [];
  Instructions4Components.push(instructions6);
  Instructions4Components.push(space);

  for (const thisComponent of Instructions4Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function Instructions4RoutineEachFrame() {
  let continueRoutine = true; 
  t = Instructions6Clock.getTime();
  frameN = frameN + 1;
  if (t >= 0.0 && instructions6.status === PsychoJS.Status.NOT_STARTED) {
    instructions6.tStart = t; 
    instructions6.frameNStart = frameN;  
    instructions6.setAlignHoriz('center');

    instructions6.setAutoDraw(true);
  }

  if (t >= 0.0 && space.status === PsychoJS.Status.NOT_STARTED) {
    space.tStart = t; 
    space.frameNStart = frameN;
    psychoJS.window.callOnFlip(function() { space.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { space.start(); }); 
    psychoJS.window.callOnFlip(function() { space.clearEvents(); });
  }

  if (space.status === PsychoJS.Status.STARTED) {
    let theseKeys = space.getKeys({keyList: ['space'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      space.keys = theseKeys[0].name;  
      space.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) { 
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false; 
  for (const thisComponent of Instructions4Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function Instructions4RoutineEnd() {
  for (const thisComponent of Instructions4Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof space.keys !== undefined) { 
      psychoJS.experiment.addData('space.rt', space.rt);
      routineTimer.reset();
      }

  space.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

//start the choice task
//first show isi, then name of person, then the choice
var AllTrials;
var currentLoop;
function AllTrialsLoopBegin(thisScheduler) {
  AllTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Rows.csv'),
    seed: undefined, name: 'AllTrials'});
  psychoJS.experiment.addLoop(AllTrials);
  currentLoop = AllTrials;  

  for (const thisAllTrial of AllTrials) {
    thisScheduler.add(importConditions(AllTrials));
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(CueRoutineBegin);
    thisScheduler.add(CueRoutineEachFrame);
    thisScheduler.add(CueRoutineEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    const ChoiceBlockLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(ChoiceBlockLoopBegin, ChoiceBlockLoopScheduler);
    thisScheduler.add(ChoiceBlockLoopScheduler);
    thisScheduler.add(ChoiceBlockLoopEnd);

    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

function AllTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(AllTrials);

  return Scheduler.Event.NEXT;
}

// use this to randomly select which name appears, have each name appear four times 
// use this to randomly select which name appears, have each name appear four times 
var bucket = [];
bucket = ["a","b","c","d","e", "f", "g", "h", "i","j","k","l", "m","n","o","p", "q","r","s","t","u","v","w", "x"];
var randomIndex;
var valueIndex;
function getRandomFromBucket() {
    randomIndex = bucket[Math.floor(Math.random()*bucket.length)];
    randomIndex = randomIndex.toString()
    console.log("random index from bucket = ", randomIndex);
    valueIndex = bucket.indexOf(randomIndex)
     if (randomIndex == "a" || randomIndex =="b"|| randomIndex =="c"|| randomIndex =="d"){
         regCue.setText(schoolName);
         }
     if (randomIndex == "i" || randomIndex == "j" || randomIndex == "k" || randomIndex == "l"){
         regCue.setText(friendName);
         }
     if (randomIndex == "q" || randomIndex == "r" || randomIndex == "s" || randomIndex == "t" ) {
         regCue.setText(celebName);
         }
     if (randomIndex == "e" || randomIndex =="f"|| randomIndex =="g"|| randomIndex =="h"){
         regCue.setText(schoolWord);
         }
     if (randomIndex == "m" || randomIndex == "n" || randomIndex == "o" || randomIndex == "p"){
         regCue.setText(friendWord);
         }
     if (randomIndex == "u" || randomIndex == "v" || randomIndex == "w" || randomIndex == "w" ) {
         regCue.setText(celebWord);
         }
     return bucket.splice(valueIndex, 1);
 }




var CueComponents;
var CueClock = new util.Clock()
function CueRoutineBegin() {
  t = 0;
  CueClock.reset();
  frameN = -1;
  routineTimer.add(3.000000);
  CueComponents = [];

  getRandomFromBucket();
  console.log(bucket);

  CueComponents.push(regCue);
  psychoJS.experiment.addData('Name Shown', regCue.text);
  for (const thisComponent of CueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function CueRoutineEachFrame() {
  let continueRoutine = true; 
  t = CueClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && regCue.status === PsychoJS.Status.NOT_STARTED) {
    regCue.tStart = t;  
    regCue.frameNStart = frameN;     
    regCue.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75; 
  if (regCue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    regCue.setAutoDraw(false);
  }
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) {  
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  
  for (const thisComponent of CueComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function CueRoutineEnd() {
  for (const thisComponent of CueComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var ISIComponents;
function ISIRoutineBegin() {
  t = 0;
  ISIClock.reset();
  frameN = -1;
  routineTimer.add(2.000000);
  ISIComponents = [];
  ISIComponents.push(ISItext);
  
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function ISIRoutineEachFrame() {
  let continueRoutine = true;
  t = ISIClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && ISItext.status === PsychoJS.Status.NOT_STARTED) {
    ISItext.tStart = t;  
    ISItext.frameNStart = frameN; 
    ISItext.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  
  if (ISItext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ISItext.setAutoDraw(false);
  }
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) { 
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false; 
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEnd() {
  for (const thisComponent of ISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}
// shorter isi between trials
var isiComponents;
function isiRoutineBegin() {
  t = 0;
  isiClock.reset();
  frameN = -1;
  routineTimer.add(1.000000);
  isiComponents = [];
  isiComponents.push(isitext);
  
  for (const thisComponent of isiComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function isiRoutineEachFrame() {
  let continueRoutine = true;
  t = isiClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && isitext.status === PsychoJS.Status.NOT_STARTED) {
    isitext.tStart = t;  
    isitext.frameNStart = frameN; 
    isitext.setAutoDraw(true);
  }

  frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  
  if (isitext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isitext.setAutoDraw(false);
  }
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) { 
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false; 
  for (const thisComponent of isiComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function isiRoutineEnd() {
  for (const thisComponent of isiComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


// create a loop for the choice blocks; 12 blocks of 5 trials each 
var ChoiceBlockLoop;
function ChoiceBlockLoopBegin(thisScheduler) {
  ChoiceBlockLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'TimeDivisions.csv', Rows),
    seed: undefined, name: 'Trials'});
  psychoJS.experiment.addLoop(ChoiceBlockLoop);
  currentLoop = ChoiceBlockLoop;  

  for (const thisChoiceBlockLoop of ChoiceBlockLoop) {
    thisScheduler.add(importConditions(ChoiceBlockLoop));
    thisScheduler.add(ChoiceRoutineBegin);
    thisScheduler.add(ChoiceRoutineEachFrame);
    thisScheduler.add(ChoiceRoutineEnd);
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


//begin the choice routine
var choiceComponents;
var selectedGame = [];
var moreGameMinText = [];
var lessGameMinText = [];
var lessQuestionMinText = [];
var moreQuestionMinText = [];

var selectedTest = [];
var selectedTestStr = [];
var selectedGameStr = [];
function ChoiceRoutineBegin(){
  t = 0;
  ChoiceClock.reset();
  frameN = -1;
  choiceSelection.keys = undefined;
  choiceSelection.rt = undefined;
  Line.setSize([3, 0.5]);
  Line.setFillColor(new util.Color([(- 1.0), (- 1.0), (- 1.0)]));
  Line.setLineColor(new util.Color([(- 1.0), (- 1.0), (- 1.0)]));
  Line.setLineWidth(7);

    choiceComponents = [Line, andSignLeft, andSignRight, selectedGameImgLeft, selectedGameImgRight, selectedTestImgLeft, selectedTestImgRight, topLeftText, topLeftTime, topRightText, topRightTime, botLeftText, botLeftTime, botRightText, botRightTime, choiceSelection, blank];
    if(g === 1){
        selectedGameImgLeft.setImage("PacmanGam.PNG");
        selectedGameImgRight.setImage("PacmanGam.PNG");
        selectedGame = "Play Pacman";
    }
    if (g === 2){
        selectedGameImgLeft.setImage("TetrisGame.PNG");
        selectedGameImgRight.setImage("TetrisGame.PNG");
        selectedGame = "Play Tetris";
    }
    if (g === 3){
        selectedGameImgLeft.setImage("PinballGame.PNG");
        selectedGameImgRight.setImage("PinballGame.PNG");
        selectedGame = 'Play Pinball';
    }
    
    
    if (q === 1){
        selectedTestImgLeft.setImage("spending.PNG");
        selectedTestImgRight.setImage("spending.PNG");
        selectedTest = 'Spending Tips';
    } 
    if (q === 2){
        selectedTestImgLeft.setImage("saving.PNG");
        selectedTestImgRight.setImage("saving.PNG");
        selectedTest = 'Saving Tips';
    } 
    if ( q === 3){
        selectedTestImgRight.setImage("investing.PNG");
        selectedTestImgLeft.setImage("investing.PNG");
        selectedTest = 'Investing Tips';
    }
    
    selectedGameStr = selectedGame.toString()
    selectedTestStr = selectedTest.toString()
    if (MoreGame == '1'){
        moreGameMinText = " minute";
    }
    else{
        moreGameMinText = " minutes";
    }
        
    if (LessGame == '1'){
        lessGameMinText = " minute";
    }
    else{
        lessGameMinText = " minutes";
    }    
    if (MoreQuestion == '1'){
        moreQuestionMinText = " minute";
    }
    else{
        moreQuestionMinText = " minutes";
    }    
    if (LessQuestion=='1'){
        lessQuestionMinText = " minute";
    }
    else{
        lessQuestionMinText = " minutes";
    }

    if (counterCode === 1){
        topLeftText.setText(selectedGameStr);
        topRightText.setText(selectedGameStr);
        topRightTime.setText(MoreGame + moreGameMinText);
        topLeftTime.setText(LessGame + lessGameMinText);
        botLeftText.setText(selectedTestStr);
        botRightText.setText(selectedTestStr);
        botRightTime.setText(LessQuestion + lessQuestionMinText);
        botLeftTime.setText(MoreQuestion + moreQuestionMinText);
        selectedTestImgLeft.setPos([-0.47, -0.36]);
        selectedTestImgRight.setPos([0.47, -0.36]);
        selectedGameImgLeft.setPos([-0.47, 0.17]);
        selectedGameImgRight.setPos([0.47, 0.17]);
        
    } 
    if (counterCode === 2){
        topLeftText.setText(selectedGameStr);
        topRightText.setText(selectedGameStr);
        topRightTime.setText(MoreGame + moreGameMinText);
        topLeftTime.setText(LessGame + lessGameMinText);
        botLeftText.setText(selectedTestStr);
        botRightText.setText(selectedTestStr);
        botRightTime.setText(LessQuestion + lessQuestionMinText);
        botLeftTime.setText(MoreQuestion + moreQuestionMinText);
        selectedTestImgLeft.setPos([-0.47, -0.36]);
        selectedTestImgRight.setPos([0.47, -0.36]);
        selectedGameImgLeft.setPos([-0.47, 0.17]);
        selectedGameImgRight.setPos([0.47, 0.17]);
    } 
    if (counterCode === 3){
        topLeftText.setText(selectedTestStr);
        topRightText.setText(selectedTestStr);
        topRightTime.setText(MoreQuestion + moreQuestionMinText);
        topLeftTime.setText(LessQuestion + lessQuestionMinText);
        botLeftText.setText(selectedGameStr);
        botRightText.setText(selectedGameStr);
        botRightTime.setText(LessGame + lessGameMinText);
        botLeftTime.setText(MoreGame + moreGameMinText);
        selectedTestImgLeft.setPos([-0.47, 0.17]);
        selectedTestImgRight.setPos([0.47, 0.17]);
        selectedGameImgLeft.setPos([-0.47, -0.36]);
        selectedGameImgRight.setPos([0.47, -0.36]);
    }
    if (counterCode === 4){
        topLeftText.setText(selectedTestStr);
        topRightText.setText(selectedTestStr);
        topRightTime.setText(MoreQuestion + moreQuestionMinText);
        topLeftTime.setText(LessQuestion + lessQuestionMinText);
        botLeftText.setText(selectedGameStr);
        botRightText.setText(selectedGameStr);
        botRightTime.setText(LessGame + lessGameMinText);
        botLeftTime.setText(MoreGame + moreGameMinText);
        selectedTestImgLeft.setPos([-0.47, 0.17]);
        selectedTestImgRight.setPos([0.47, 0.17]);
        selectedGameImgLeft.setPos([-0.47, -0.36]);
        selectedGameImgRight.setPos([0.47, -0.36]);
    }
    
    for (const thisComponent of choiceComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;

}

function ChoiceRoutineEachFrame(){
  let continueRoutine = true; 
  t = ChoiceClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && Line.status === PsychoJS.Status.NOT_STARTED) {
    Line.tStart = t; 
    Line.frameNStart = frameN;
    Line.setAutoDraw(true);
  }

  frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75; 
  if (Line.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Line.setAutoDraw(false);
  }

  if (t >= 0 && choiceSelection.status === PsychoJS.Status.NOT_STARTED) {
    choiceSelection.tStart = t; 
    choiceSelection.frameNStart = frameN;
    psychoJS.window.callOnFlip(function() { choiceSelection.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { choiceSelection.start(); }); 
    psychoJS.window.callOnFlip(function() { choiceSelection.clearEvents(); });
  }

  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75; 
  if (choiceSelection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    choiceSelection.status = PsychoJS.Status.FINISHED;
  }

  if (choiceSelection.status === PsychoJS.Status.STARTED) {
    let theseKeys = choiceSelection.getKeys({keyList: ['1', '2'], waitRelease: false});
    
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) { 
      choiceSelection.keys = theseKeys[0].name; 
      choiceSelection.rt = theseKeys[0].rt;
    }
  }


  if (t >= 0.0 && topLeftText.status === PsychoJS.Status.NOT_STARTED) {
    topLeftText.tStart = t; 
    topLeftText.frameNStart = frameN; 
    topLeftText.setAutoDraw(true);
  }

  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (topLeftText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    topLeftText.setAutoDraw(false);
  }

  if (t >= 0.0 && topRightText.status === PsychoJS.Status.NOT_STARTED) {
    topRightText.tStart = t; 
    topRightText.frameNStart = frameN; 
    topRightText.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (topRightText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    topRightText.setAutoDraw(false);
  }

  if (t >= 0.0 && topLeftTime.status === PsychoJS.Status.NOT_STARTED) {
    topLeftTime.tStart = t; 
    topLeftTime.frameNStart = frameN; 
    topLeftTime.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (topLeftTime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    topLeftTime.setAutoDraw(false);
  }


  if (t >= 0.0 && topRightTime.status === PsychoJS.Status.NOT_STARTED) {
    topRightTime.tStart = t; 
    topRightTime.frameNStart = frameN; 
    topRightTime.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (topRightTime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    topRightTime.setAutoDraw(false);
  }

  if (t >= 0.0 && botRightTime.status === PsychoJS.Status.NOT_STARTED) {
    botRightTime.tStart = t; 
    botRightTime.frameNStart = frameN; 
    botRightTime.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (botRightTime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    botRightTime.setAutoDraw(false);
  }

  if (t >= 0.0 && botLeftTime.status === PsychoJS.Status.NOT_STARTED) {
    botLeftTime.tStart = t; 
    botLeftTime.frameNStart = frameN; 
    botLeftTime.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (botLeftTime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    botLeftTime.setAutoDraw(false);
  }
    if (t >= 0.0 && botRightText.status === PsychoJS.Status.NOT_STARTED) {
    botRightText.tStart = t; 
    botRightText.frameNStart = frameN; 
    botRightText.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (botRightText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    botRightText.setAutoDraw(false);
  }

    if (t >= 0.0 && botLeftText.status === PsychoJS.Status.NOT_STARTED) {
    botLeftText.tStart = t; 
    botLeftText.frameNStart = frameN; 
    botLeftText.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (botLeftText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    botLeftText.setAutoDraw(false);
  }

    if (t >= 0.0 && selectedGameImgRight.status === PsychoJS.Status.NOT_STARTED) {
    selectedGameImgRight.tStart = t; 
    selectedGameImgRight.frameNStart = frameN; 
    selectedGameImgRight.setAutoDraw(true);
  }

  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (selectedGameImgRight.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    selectedGameImgRight.setAutoDraw(false);
  }
    if (t >= 0.0 && selectedGameImgLeft.status === PsychoJS.Status.NOT_STARTED) {
    selectedGameImgLeft.tStart = t; 
    selectedGameImgLeft.frameNStart = frameN; 
    selectedGameImgLeft.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (selectedGameImgLeft.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    selectedGameImgLeft.setAutoDraw(false);
  }

    if (t >= 0.0 && selectedTestImgRight.status === PsychoJS.Status.NOT_STARTED) {
    selectedTestImgRight.tStart = t; 
    selectedTestImgRight.frameNStart = frameN; 
    selectedTestImgRight.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (selectedTestImgRight.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    selectedTestImgRight.setAutoDraw(false);
  }

    if (t >= 0.0 && selectedTestImgLeft.status === PsychoJS.Status.NOT_STARTED) {
    selectedTestImgLeft.tStart = t; 
    selectedTestImgLeft.frameNStart = frameN; 
    selectedTestImgLeft.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (selectedTestImgLeft.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    selectedTestImgLeft.setAutoDraw(false);
  }

  if (t >= 0.0 && andSignLeft.status === PsychoJS.Status.NOT_STARTED) {
    andSignLeft.tStart = t; 
    andSignLeft.frameNStart = frameN; 
    andSignLeft.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (andSignLeft.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    andSignLeft.setAutoDraw(false);
  }
 
  
  if (t >= 0.0 && andSignRight.status === PsychoJS.Status.NOT_STARTED) {
    andSignRight.tStart = t; 
    andSignRight.frameNStart = frameN; 
    andSignRight.setAutoDraw(true);
  }
  frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (andSignRight.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    andSignRight.setAutoDraw(false);
  }


    if (choiceSelection.keys === '1'){
        topLeftText.setColor(new util.Color('green'));
        topLeftTime.setColor(new util.Color('green'));
        botLeftText.setColor(new util.Color('green'));
        botLeftTime.setColor(new util.Color('green'));
        andSignLeft.setColor(new util.Color("green"));
        choiceSelection.status = PsychoJS.Status.FINISHED; 

    }
    if (choiceSelection.keys === '2'){
        topRightText.setColor(new util.Color('green'));
        topRightTime.setColor(new util.Color('green'));
        botRightText.setColor(new util.Color('green'));
        botRightTime.setColor(new util.Color('green'));
        andSignRight.setColor(new util.Color("green"));
        choiceSelection.status = PsychoJS.Status.FINISHED; 

    }
if ((counterCode === 1||counterCode === 2) && (choiceSelection.keys === '1')){
      randomString = ("favoredQs");
    //   chosenQstime= create variable that has the amount of chosen time for the questions (favored or not)
      console.log("favored Qs");
   }
      
  if ((counterCode === 1||counterCode === 2) && (choiceSelection.keys === '2')){
      randomString  = ("favoredGame");
      console.log("favored Game");
  }
  if ((counterCode === 1||counterCode === 2) && (choiceSelection.keys === undefined)){
      randomString = ("no response");
      console.log("no response");
  }
  if ((counterCode === 3||counterCode === 4) && (choiceSelection.keys === undefined)){
     randomString = ("no response");
        console.log("no response");
  }
  if ((counterCode === 3||counterCode === 4) && (choiceSelection.keys === '1')){
       randomString = ("favoredGame");
       console.log("favored game");
   }
  if ((counterCode === 3||counterCode === 4) && (choiceSelection.keys === '2')){
        randomString  = ("favoredQs");
        console.log("favored Qs");
   }


 if ((choiceSelection.keys === '1' || choiceSelection.keys === '2') && blank.status === PsychoJS.Status.NOT_STARTED){
      blank.tStart = t;
      blank.frameNStart = frameN;
      blank.setAutoDraw(true);
      }
  if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
    blank.tStart = t;
    blank.frameNStart = frameN; 
    blank.setAutoDraw(true);
  }

  frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75; 
  if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blank.setAutoDraw(false);
  }
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) {  
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false; 
  for (const thisComponent of choiceComponents)
     if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


var dat;
var corr;
var randomString = [];

function ChoiceRoutineEnd(){
  choiceSelection.stop();
  for (const thisComponent of choiceComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  topRightText.setColor(new util.Color('white'));
  topRightTime.setColor(new util.Color('white'));
  botRightText.setColor(new util.Color('white'));
  botRightTime.setColor(new util.Color('white'));
  topLeftText.setColor(new util.Color('white'));
  topLeftTime.setColor(new util.Color('white'));
  botLeftText.setColor(new util.Color('white'));
  botLeftTime.setColor(new util.Color('white'));
  andSignLeft.setColor(new util.Color('white'));
  andSignRight.setColor(new util.Color('white'));
  if (blank.status===PsychoJS.Status.FINISHED){
      topRightText.setAutoDraw(false);
      topRightTime.setAutoDraw(false);
      botRightText.setAutoDraw(false);
      botRightTime.setAutoDraw(false);
      Line.setAutoDraw(false);
      topLeftText.setAutoDraw(false);
      topLeftTime.setAutoDraw(false);
      botLeftTime.setAutoDraw(false);
      botLeftText.setAutoDraw(false);
      andSignLeft.setAutoDraw(false);
      andSignRight.setAutoDraw(false);
      }

  psychoJS.experiment.addData('Choice Selection', choiceSelection.keys);
  psychoJS.experiment.addData('Choice Selection RT', choiceSelection.rt);

  psychoJS.experiment.addData('Counterbalance Code', counterCode);
  psychoJS.experiment.addData("randomString", randomString);
  

  psychoJS.experiment.addData("Counterbalance Code", counterCode);
  psychoJS.experiment.addData('Choice Selection', choiceSelection.keys);
  if (typeof choiceSelection.keys !== undefined) { 
      routineTimer.reset();
      }

  routineTimer.reset();

  return Scheduler.Event.NEXT;

}

function ChoiceBlockLoopEnd() {
  psychoJS.experiment.removeLoop(AllTrials);

  return Scheduler.Event.NEXT;
}


//Add in an ending screen

var endComponents;
var randGen;
var randomndex;
var endClock;
var favorResp;
var counterCodeCor=[];
var nestedRanString=[];
var nestedMoreQs=[];
var nestedMoreGame = [];
var nestedRanString0=[];
var nestedMoreQs0=[];
var nestedMoreGame0 = [];
var firstIndex;
var QsTime = [];
var GameTime = [];
var QsTimeString = [];
var GameTimeString=[];
var endCounterCode =[];

endClock = new util.Clock();
function EndingRoutineBegin() {
  t = 0;
  endClock.reset(); 
  frameN = -1;
  enter.keys = undefined;
  enter.rt = undefined;
  endComponents = [];
  endComponents.push(endText);
  endComponents.push(enter);
  dat = psychoJS.experiment._trialsData;
  corr = dat.filter(((trial) => trial['Choice Selection'] !== undefined));
  favorResp = corr.map((trial) => trial['randomString']);
  var randomStringCode = Math.floor(Math.random() * corr.length);
  var sliceCorr = corr.slice(randomStringCode, (randomStringCode+1));
  firstIndex = sliceCorr[0];
  console.log("first index of sliceCorr :", firstIndex);
  nestedMoreGame = firstIndex.MoreGame;  
  nestedMoreGame0 = firstIndex[4];
  nestedRanString = firstIndex.randomString;
  nestedRanString0 = firstIndex[19];
  nestedMoreQs = firstIndex.MoreQuestion;
  nestedMoreQs0 = firstIndex[5];
  console.log("nested Random String :", nestedRanString);
  console.log("nestedMoreQs :", nestedMoreQs);
  console.log("nestedMoreGame :", nestedMoreGame);
  console.log("counterCodeCor :", counterCodeCor);
  console.log("Random String Code: " + randomStringCode);


  if((counterCode === 1 || counterCode === 2) && nestedRanString === "favoredQs") {
      QsTime = nestedMoreQs;
      GameTime = 20 - QsTime;
      QsTimeString = QsTime.toString();
      GameTimeString = GameTime.toString();
      console.log("The trial randomly selected your choice to play the game for ", GameTime, "minutes, and to read financial tips for ", QsTime);
      endCounterCode = 1;
  }
    if((counterCode === 1 || counterCode === 2) && nestedRanString === "favoredGame") {
      GameTime = nestedMoreGame;
      QsTime = 20 - GameTime;
      QsTimeString = QsTime.toString();
      GameTimeString = GameTime.toString();
      console.log("The trial randomly selected your choice to play the game for ", GameTime, "minutes, and to read financial tips for ", QsTime);
      endCounterCode = 2;
  }
  
    if((counterCode === 3 || counterCode === 4) && nestedRanString === "favoredQs") {
      QsTime = nestedMoreQs;
      GameTime = 20 - QsTime;
      QsTimeString = QsTime.toString();
      GameTimeString = GameTime.toString();
      console.log("The trial randomly selected your choice to play the game for ", GameTime, "minutes, and to read financial tips for ", QsTime);
      endCounterCode = 3;
      
  }  if((counterCode === 4 || counterCode === 3) && nestedRanString === "favoredGame") {
      GameTime = nestedMoreGame;      
      QsTime = 20 - GameTime;
      QsTimeString = QsTime.toString();
      GameTimeString = GameTime.toString();
      console.log("The trial randomly selected your choice to play the game for ", GameTime, "minutes, and to read financial tips for ", QsTime);
      endCounterCode = 4;
  }


  for (const thisComponent of endComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function EndingRoutineEachFrame() {
  let continueRoutine = true; 
  t = endClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
    endText.tStart = t; 
    endText.frameNStart = frameN;
    endText.setText("Thank you for participating! You have completed this part of the study.\n\n One trial was selected at random, and in that trial you chose to allot the 20 minutes as: \n\n" + GameTimeString + " minutes playing the videogame, and \n\n" + QsTimeString + " minutes reading financial tips.\n\n You will be reminded of this allotment at the end of the study, when you will be prompted to complete these activities. For now, please press ENTER to receive your code to continue with the study."  );
    endText.setAlignHoriz('center');

    endText.setAutoDraw(true);
  }



  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  
    enter.frameNStart = frameN;  
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { enter.start(); });
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      enter.keys = theseKeys[0].name;
      enter.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) {  
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  
  for (const thisComponent of endComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function EndingRoutineEnd() {
  for (const thisComponent of endComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  if (typeof enter.keys !== undefined) { 
      routineTimer.reset();
      }

  enter.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}


var endComponents1;
var endClock1 = new util.Clock();
function EndingRoutineBegin1() {
  t = 0;
  endClock1.reset(); 
  frameN = -1;
  enter.keys = undefined;
  enter.rt = undefined;
  endComponents1 = [];
  endComponents1.push(endText1);
  endComponents1.push(enter);
  
 for (const thisComponent of endComponents1)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;

}

function EndingRoutineEachFrame1() {
  let continueRoutine = true; 
  t = endClock1.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && endText1.status === PsychoJS.Status.NOT_STARTED) {
    endText1.tStart = t; 
    endText1.frameNStart = frameN;
    endText1.setAlignHoriz('center');

    endText1.setText("Your completion code is 422375. \n\n Please type this code into your survey, then press ENTER to submit your work.");
    endText1.setAutoDraw(true);
  }


  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  
    enter.frameNStart = frameN;  
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { enter.start(); });
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      enter.keys = theseKeys[0].name;
      enter.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) {  
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  
  for (const thisComponent of endComponents1)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function EndingRoutineEnd1() {
  for (const thisComponent of endComponents1) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  if (typeof enter.keys !== undefined) { 
      routineTimer.reset();
      }

  enter.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}



function endLoopIteration({thisScheduler, isTrials=true}) {
  return function () {
    if (currentLoop.finished) {
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}
function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}

