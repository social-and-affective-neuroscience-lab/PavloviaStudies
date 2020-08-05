/*******************
 * Academicsr Test *
 *******************/

import { PsychoJS } from 'https://pavlovia.org/lib/core-3.2.js';
import * as core from 'https://pavlovia.org/lib/core-3.2.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data-3.2.js';
import { Scheduler } from 'https://pavlovia.org/lib/util-3.2.js';
import * as util from 'https://pavlovia.org/lib/util-3.2.js';
import * as visual from 'https://pavlovia.org/lib/visual-3.2.js';
import { Sound } from 'https://pavlovia.org/lib/sound-3.2.js';

var psychoJS = new PsychoJS({
  debug: true
});

psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

let expName = 'AcademicSR';
let expInfo = {'Participant': ''};
var frameDur;
var frameRemains;
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

flowScheduler.add(updateInfo);
flowScheduler.add(InstructionsRoutineBegin);
flowScheduler.add(InstructionsRoutineEachFrame);
flowScheduler.add(InstructionsRoutineEnd);
flowScheduler.add(typeNameRoutineBegin);
flowScheduler.add(typeNameRoutineEachFrame);
flowScheduler.add(typeNameRoutineEnd);

flowScheduler.add(typeNameFriendRoutineBegin);
flowScheduler.add(typeNameFriendRoutineEachFrame);
flowScheduler.add(typeNameFriendRoutineEnd);
flowScheduler.add(typeNameCelebRoutineBegin);
flowScheduler.add(typeNameCelebRoutineEachFrame);
flowScheduler.add(typeNameCelebRoutineEnd);
flowScheduler.add(Instructions2RoutineBegin);
flowScheduler.add(Instructions2RoutineEachFrame);
flowScheduler.add(Instructions2RoutineEnd);

const AllTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AllTrialsLoopBegin, AllTrialsLoopScheduler);
flowScheduler.add(AllTrialsLoopScheduler);
flowScheduler.add(AllTrialsLoopEnd);
flowScheduler.add(EndRoutineBegin);
flowScheduler.add(EndRoutineEachFrame);
flowScheduler.add(EndRoutineEnd);
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
var globalClock;
var testQsClock;
var InstructionsClock;
var instruct;
InstructionsClock = new util.Clock();
instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'In this part of the study, you will be choosing between answering standardized test questions or playing a videogame. \n\nBefore making these decisions, you will first be prompted to type the names of people who are important to you. \n\nPress SPACE to continue.',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });
var Instructions2Clock;
var instruct2;
Instructions2Clock = new util.Clock();
instruct2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'One of these names will appear on the screen before you make your decisions. While making your decisions, please imagine that the person whose name appeared is there with you, and is watching you make your decisions. \n\nPress SPACE to begin!',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });
var space;
space = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var pacmanEnter;
pacmanEnter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var pacmanText;
pacmanText = new visual.TextStim({ win: psychoJS.window, text: 'Please press ENTER to continue',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.08,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });
var ISIClock;
var CueClock;
var regCue;
var pacmanGameClock;
pacmanGameClock = new util.Clock();
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
var enter;
enter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

ISIClock = new util.Clock();
CueClock = new util.Clock();
regCue = new visual.TextStim({
    win: psychoJS.window,
    name: 'regCue',
    text: 'REGULATE',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });
var ChoiceClock;
var choiceQ;

ChoiceClock = new util.Clock();
choiceQ = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceQ',
    text: "Please indicate which option you would like to complete by pressing '1' for the choice on the left, or '2' for the choice on the right. ",
    font: 'Arial',
    units : undefined,
    pos: [0, 0.35], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });
var choiceResp;
var testChoice;
var videogameChoice;
choiceResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

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

testChoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'testChoice',
    text: 'Practice Standardized Test Questions',
    font: 'Arial',
    units : undefined,
    pos: [(- 0.41), 0.15], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

videogameChoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'videogameChoice',
    text: 'Play a Videogame',
    font: 'Arial',
    units : undefined,
    pos: [0.41, 0.15], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0
  });
var gre;
var gmat;
var lsat;
var game;
var blank;
var key_resp;  
var isiText;
var isiClock;
isiClock = new util.Clock();
isiText = new visual.TextStim({ win: psychoJS.window,    name: 'isiText',    text: '+', font: 'Arial',  units : undefined,    pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0, color: new util.Color('white'),  opacity: 1,depth: 0.0 });
var ISIText;
ISIText = new visual.TextStim({ win: psychoJS.window,    name: 'isiText',    text: '+', font: 'Arial',  units : undefined,    pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0, color: new util.Color('white'),  opacity: 1,depth: 0.0 });

  
blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0
  });
var testQuestionsChoiceClock;
var testQChoice;
  
testQuestionsChoiceClock = new util.Clock();
testQChoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'testQChoice',
    text: "What test would you like to practice for? Use the keys '1', '2', '3' to move up and down, then press ENTER to select.",
    font: 'Arial',
    units : undefined,
    pos: [0, 0.35], height: 0.055,  wrapWidth: 1.3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });
var image1;
var image_2;
image1 = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.105], size : [0.3, 0.11], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
image_2 = new visual.ImageStim({win : psychoJS.window, name : 'image_2', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.05)], size : [0.3, 0.11], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
    });
  var image_3;
  var upDown;
  var polygon;
  var enter;
  
image_3 = new visual.ImageStim({win : psychoJS.window, name : 'image_3', units : undefined,   image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.2)], size : [0.3, 0.11],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0
  });
  upDown = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});


enter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
// var numArray;
// numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// var trialNumber;
// trialNumber = numpy.random.choice(numArray, replace = false);

var TextQuestion;
var letterKey;
var enterKey;
var choiceA;
var choiceB;
var choiceC;
var qInstClock;
var textInst;
qInstClock = new util.Clock();
textInst = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'For the following questions, use the keys "a", "b", "c", "d", "e" to make your choice, then press ENTER to see the answer.\n\nPress SPACE to begin.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.055,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});  
testQsClock = new util.Clock();
TextQuestion = new visual.TextStim({
    win: psychoJS.window,
    name: 'TextQuestion',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, 0.311], height: 0.026,  wrapWidth: 1.45, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

letterKey = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

enterKey = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

choiceA = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceA',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0
  });

choiceB = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceB',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, (- 0.1)], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0
  });

choiceC = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceC',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, (- 0.2)], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0
  });
var choiceD;
var choiceE;
  
choiceD = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceD',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, (- 0.3)], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0
  });

choiceE = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceE',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, (- 0.4)], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0
  });
var conBlank;
  
conBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'conBlank',
    text: '',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0
  });
var GameClock;
var gameInstructions;
var spaceKey;
  
GameClock = new util.Clock();
gameInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'gameInstructions',
    text: 'You will be playing Pacman! When you press SPACE, it will open in a new tab. When you see the GAME OVER screen, please return to this tab to continue. \n\nWhen you are ready, press SPACE to begin!',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

spaceKey = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var pacmanClock;
var routineTimer;
pacmanClock = new util.Clock();
globalClock = new util.Clock(); 
routineTimer = new util.CountdownTimer();  
var text1;
text1 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });

var text2;
text2 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
var text3;
text3 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.15)], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });

var textString;
textString = toString(text1);
var textString2;
textString2 = toString(text2);
var textString3;
textString3 = toString(text3);


var t;
var frameN;
var InstructionsComponents;
function InstructionsRoutineBegin() {
  t = 0;
  InstructionsClock.reset(); 
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  InstructionsComponents = [];
  InstructionsComponents.push(instruct);
  InstructionsComponents.push(space);

  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function InstructionsRoutineEachFrame() {
  let continueRoutine = true; 
  t = InstructionsClock.getTime();
  frameN = frameN + 1;
  if (t >= 0.0 && instruct.status === PsychoJS.Status.NOT_STARTED) {
    instruct.tStart = t; 
    instruct.frameNStart = frameN;  
    instruct.setAutoDraw(true);
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
  for (const thisComponent of InstructionsComponents)
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

function InstructionsRoutineEnd() {
  for (const thisComponent of InstructionsComponents) {
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

var Instructions2Components;
function Instructions2RoutineBegin() {
  t = 0;
  Instructions2Clock.reset(); 
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  Instructions2Components = [];
  Instructions2Components.push(instruct2);
  Instructions2Components.push(space);

  for (const thisComponent of Instructions2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function Instructions2RoutineEachFrame() {
  let continueRoutine = true; 
  t = Instructions2Clock.getTime();
  frameN = frameN + 1;
  if (t >= 0.0 && instruct2.status === PsychoJS.Status.NOT_STARTED) {
    instruct2.tStart = t; 
    instruct2.frameNStart = frameN;  
    instruct2.setAutoDraw(true);
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
      routineTimer.reset();
      }

  space.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

var EndClock;
EndClock = new util.Clock();
var EndComponents;
function EndRoutineBegin() {
  t = 0;
  EndClock.reset(); 
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  instruct.setText('Thank you for participating! \n\nYou have completed this part of the study')
  EndComponents = [];
  EndComponents.push(instruct);
  EndComponents.push(space);

  for (const thisComponent of EndComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function EndRoutineEachFrame() {
  let continueRoutine = true;
  t = InstructionsClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && instruct.status === PsychoJS.Status.NOT_STARTED) {
    instruct.tStart = t;  
    instruct.frameNStart = frameN; 
    instruct.setAutoDraw(true);
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
  for (const thisComponent of EndComponents)
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

function EndRoutineEnd() {
  for (const thisComponent of EndComponents) {
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


var isiComponents;
function isiRoutineBegin() {
  t = 0;
  isiClock.reset();
  frameN = -1;
  routineTimer.add(2.000000);
  isiComponents = [];
  isiComponents.push(isiText);
  
  for (const thisComponent of isiComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function isiRoutineEachFrame() {
  let continueRoutine = true;
  t = isiClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && isiText.status === PsychoJS.Status.NOT_STARTED) {
    isiText.tStart = t;  
    isiText.frameNStart = frameN; 
    isiText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  
  if (isiText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isiText.setAutoDraw(false);
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

var ISIComponents;
function ISIRoutineBegin() {
  t = 0;
  ISIClock.reset();
  frameN = -1;
  routineTimer.add(2.000000);

  ISIComponents = [];
  ISIComponents.push(ISIText);
  
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function ISIRoutineEachFrame() {
  let continueRoutine = true; 
  t = ISIClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && ISIText.status === PsychoJS.Status.NOT_STARTED) {
    ISIText.tStart = t;  
    ISIText.frameNStart = frameN;
    ISIText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75; 
  if (ISIText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ISIText.setAutoDraw(false);
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

var AllTrials;
var currentLoop;
function AllTrialsLoopBegin(thisScheduler) {
  AllTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'RowsExcel.xlsx'),
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
    thisScheduler.add(ChoiceRoutineBegin);
    thisScheduler.add(ChoiceRoutineEachFrame);
    thisScheduler.add(ChoiceRoutineEnd);
    const QuestionTrialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(QuestionTrialsLoopBegin, QuestionTrialsLoopScheduler);
    thisScheduler.add(QuestionTrialsLoopScheduler);
    thisScheduler.add(QuestionTrialsLoopEnd);
    const GameTrialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(GameTrialsLoopBegin, GameTrialsLoopScheduler);
    thisScheduler.add(GameTrialsLoopScheduler);
    thisScheduler.add(GameTrialsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}
var QuestionTrials;
var doTestPractice = [];
var doGame = [];
function QuestionTrialsLoopBegin(thisScheduler) {
  QuestionTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doTestPractice, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'QuestionTrials'});
  psychoJS.experiment.addLoop(QuestionTrials);
  currentLoop = QuestionTrials;  

  for (const thisQuestionTrial of QuestionTrials) {
    thisScheduler.add(importConditions(QuestionTrials));
    thisScheduler.add(testQuestionsChoiceRoutineBegin);
    thisScheduler.add(testQuestionsChoiceRoutineEachFrame);
    thisScheduler.add(testQuestionsChoiceRoutineEnd);
    thisScheduler.add(qInstRoutineBegin);
    thisScheduler.add(qInstRoutineEachFrame);
    thisScheduler.add(qInstRoutineEnd);
    const Questions5LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(Questions5LoopBegin, Questions5LoopScheduler);
    thisScheduler.add(Questions5LoopScheduler);
    thisScheduler.add(Questions5LoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}
var Questions5;
function Questions5LoopBegin(thisScheduler) {
  Questions5 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'QuestionsText.xlsx', Rows),
    seed: undefined, name: 'Questions5'});
  psychoJS.experiment.addLoop(Questions5);
  currentLoop = Questions5;  

  for (const thisQuestions5 of Questions5) {
    thisScheduler.add(importConditions(Questions5));
    thisScheduler.add(testQsRoutineBegin);
    thisScheduler.add(testQsRoutineEachFrame);
    thisScheduler.add(testQsRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


var modify;
var typeNameComponents;
function typeNameRoutineBegin() {
  //------Prepare to start Routine 'sendMoney1'-------
  t = 0;
  typeNameClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  nameInstructions.setText('Think of the person who has been most instrumental to your academic career. \n\n\nPlease type their name below, then press ENTER to continue:\n\n');
  enter.keys = undefined;
  enter.rt = undefined;
//   text1.setText('');
//   modify = false;
//   text1.text = '';
  // keep track of which components have finished
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
var keys1;
function typeNameRoutineEachFrame() {
  let continueRoutine = true; // until we're told otherwise
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t;  // (not accounting for frame time here)
    nameInstructions.frameNStart = frameN;  // exact frame index
    nameInstructions.setAutoDraw(true);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  // (not accounting for frame time here)
    enter.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { enter.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});
    
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      enter.keys = theseKeys[0].name;  // just the last key pressed
      enter.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }
  
  //   keys1 = event.getKeys(keyList=['0','1','2','3','4','5','return', 'backspace'])
   
  let theseKeys = psychoJS.eventManager.getKeys();
  if (theseKeys.length > 0) {  // at least one key was pressed
    textAdd = theseKeys[theseKeys.length-1]; 
    }

  if (textAdd === 'return') {
      textAdd = '';  // Add nothing
      continueRoutine = false;  // End routine (if that is what you want)
  } else if (textAdd === 'space') {
      textAdd = ' ';  // Add a space
  } else if (textAdd === 'backspace') {
      text1.text = text1.text.slice(0, -1);
      textAdd = undefined;
    //   textAdd = '';  // Add nothing
  } else if (['lshift', 'rshift'].includes(textAdd)) {
      modify = true;
  } else if (textAdd !== undefined) {
      if (modify) {
          text1.text = text1.text + textAdd.toUpperCase();
          modify = false;
      } else {
          text1.text = text1.text + textAdd
      }textAdd = undefined;
      
  }
  if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
    text1.tStart = t;  // (not accounting for frame time here)
    text1.frameNStart = frameN;  // exact frame index
    text1.setAutoDraw(true);
    text1.setText(text1.text);
   }

//   giveMoneyStr = toString(giveMoney);

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
  if (typeof enter.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }

  enter.stop();
  psychoJS.experiment.addData("typedName", text1.text)
  schoolName = text1.text;
  console.log(schoolName);
  text1.setText('')  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}
var textAdd2;
var typeNameFriendComponents;
function typeNameFriendRoutineBegin() {
  //------Prepare to start Routine 'sendMoney1'-------
  t = 0;
  typeNameClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  nameInstructions.setText('Think of the person you hang out with the most socially. \n\n\nPlease type their name below, then press ENTER to continue:\n\n');
  enter.keys = undefined;
  enter.rt = undefined;
//   text1.setText('');
//   modify = false;
//   text1.text = '';
  // keep track of which components have finished
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
function typeNameFriendRoutineEachFrame() {
  let continueRoutine = true; // until we're told otherwise
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t;  // (not accounting for frame time here)
    nameInstructions.frameNStart = frameN;  // exact frame index
    nameInstructions.setAutoDraw(true);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  // (not accounting for frame time here)
    enter.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { enter.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});
    
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      enter.keys = theseKeys[0].name;  // just the last key pressed
      enter.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }
  
  //   keys1 = event.getKeys(keyList=['0','1','2','3','4','5','return', 'backspace'])
   
  let theseKeys = psychoJS.eventManager.getKeys();
  if (theseKeys.length > 0) {  // at least one key was pressed
    textAdd2 = theseKeys[theseKeys.length-1]; 
    }

  if (textAdd2 === 'return') {
      textAdd2 = '';  // Add nothing
      continueRoutine = false;  // End routine (if that is what you want)
  } else if (textAdd2 === 'space') {
      textAdd2 = ' ';  // Add a space
  } else if (textAdd2 === 'backspace') {
      text2.text = text2.text.slice(0, -1);
      textAdd2 = undefined;
    //   textAdd = '';  // Add nothing
  } else if (['lshift', 'rshift'].includes(textAdd2)) {
      modify = true;
  } else if (textAdd2 !== undefined) {
      if (modify) {
          text2.text = text2.text + textAdd2.toUpperCase();
          modify = false;
      } else {
          text2.text = text2.text + textAdd2
      }textAdd2 = undefined;
      
  }
  if (t >= 0.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
    text2.tStart = t;  // (not accounting for frame time here)
    text2.frameNStart = frameN;  // exact frame index
    text2.setAutoDraw(true);
    text2.setText(text2.text);
   }
//   giveMoneyStr = toString(giveMoney);

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
  if (typeof enter.keys !== undefined) {  // we had a response
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
var textAdd3;
var typeNameCelebComponents;
function typeNameCelebRoutineBegin() {
  //------Prepare to start Routine 'sendMoney1'-------
  t = 0;
  typeNameClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  nameInstructions.setText('Think of a celebrity that you really like. \n\n\nPlease type their name below, then press ENTER to continue:\n\n');
  enter.keys = undefined;
  enter.rt = undefined;
//   text1.setText('');
//   modify = false;
//   text1.text = '';
  // keep track of which components have finished
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
  let continueRoutine = true; // until we're told otherwise
  t = nameClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && nameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    nameInstructions.tStart = t;  // (not accounting for frame time here)
    nameInstructions.frameNStart = frameN;  // exact frame index
    nameInstructions.setAutoDraw(true);
  }

  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;  // (not accounting for frame time here)
    enter.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { enter.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});
    
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      enter.keys = theseKeys[0].name;  // just the last key pressed
      enter.rt = theseKeys[0].rt;
      continueRoutine = false;
    }
  }
  
  //   keys1 = event.getKeys(keyList=['0','1','2','3','4','5','return', 'backspace'])
   
  let theseKeys = psychoJS.eventManager.getKeys();
  if (theseKeys.length > 0) {  // at least one key was pressed
    textAdd3 = theseKeys[theseKeys.length-1]; 
    }

  if (textAdd3 === 'return') {
      textAdd3 = '';  // Add nothing
      continueRoutine = false;  // End routine (if that is what you want)
  } else if (textAdd3 === 'space') {
      textAdd3 = ' ';  // Add a space
  } else if (textAdd3 === 'backspace') {
      text3.text = text3.text.slice(0, -1);
      textAdd3 = undefined;
    //   textAdd = '';  // Add nothing
  } else if (['lshift', 'rshift'].includes(textAdd3)) {
      modify = true;
  } else if (textAdd3 !== undefined) {
      if (modify) {
          text3.text = text3.text + textAdd3.toUpperCase();
          modify = false;
      } else {
          text3.text = text3.text + textAdd3
      }textAdd3 = undefined;
      
  }
  if (t >= 0.0 && text3.status === PsychoJS.Status.NOT_STARTED) {
    text3.tStart = t;  // (not accounting for frame time here)
    text3.frameNStart = frameN;  // exact frame index
    text3.setAutoDraw(true);
    text3.setText(text3.text);
   }

//   giveMoneyStr = toString(giveMoney);

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
  if (typeof enter.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }

  enter.stop();
  psychoJS.experiment.addData("typedNameCeleb", text3.text);
  celebName = text3.text;
  console.log("school Name = ", schoolName);
  console.log("friend name = ", friendName);
  console.log("celeb Name = ", celebName);
  text3.setText('')  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}




function Questions5LoopEnd() {
  psychoJS.experiment.removeLoop(Questions5);

  return Scheduler.Event.NEXT;
}

function QuestionTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(QuestionTrials);

  return Scheduler.Event.NEXT;
}
var GameTrials;
function GameTrialsLoopBegin(thisScheduler) {
  GameTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doGame, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'GameTrials'});
  psychoJS.experiment.addLoop(GameTrials); 
  currentLoop = GameTrials; 

  for (const thisGameTrial of GameTrials) {
    thisScheduler.add(importConditions(GameTrials));
    thisScheduler.add(GameRoutineBegin);
    thisScheduler.add(GameRoutineEachFrame);
    thisScheduler.add(GameRoutineEnd);
    // thisScheduler.add(pacmanRoutineBegin);
    // thisScheduler.add(pacmanRoutineEachFrame);
    // thisScheduler.add(pacmanRoutineEnd);
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}
var trials;
function trialsLoopBegin(thisScheduler) {
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); 
  currentLoop = trials;  

  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(pacGameRoutineBegin);
    thisScheduler.add(pacGameRoutineEachFrame);
    thisScheduler.add(pacGameRoutineEnd);
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

function GameTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(GameTrials);

  return Scheduler.Event.NEXT;
}

function AllTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(AllTrials);

  return Scheduler.Event.NEXT;
}
var bucket = [];
bucket = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q", "r","s","t","u","v","w","x"];
var randomIndex;
var valueIndex;
function getRandomFromBucket() {
    randomIndex = bucket[Math.floor(Math.random()*bucket.length)];
    randomIndex = randomIndex.toString()
    console.log("random index from bucket = ", randomIndex);
    valueIndex = bucket.indexOf(randomIndex)
     if (randomIndex == "a" || randomIndex =="b"|| randomIndex =="c"|| randomIndex =="d"|| randomIndex =="e" || randomIndex =="f"||randomIndex =="g"|| randomIndex =="h"){
         regCue.setText(schoolName);
         }
     if (randomIndex == "i" || randomIndex == "j" || randomIndex == "k" || randomIndex == "l" || randomIndex == "m" || randomIndex == "n" || randomIndex == "o" || randomIndex == "p"){
         regCue.setText(friendName);
         }
     if (randomIndex == "q" || randomIndex == "r" || randomIndex == "s" || randomIndex == "t" || randomIndex == "u" || randomIndex == "v" || randomIndex == "w" || randomIndex == "x"  ) {
         regCue.setText(celebName);
         }
     return bucket.splice(valueIndex, 1);
 }


var CueComponents;
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
gre = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gre', units : undefined,
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.41), 0.02], size : [0.3, 0.105],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0
  });
gmat = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gmat', units : undefined,
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.41), (- 0.13)], size : [0.3, 0.11],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0
  });
lsat = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lsat', units : undefined,
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.41), (- 0.27)], size : [0.3, 0.11],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0
  });
game = new visual.ImageStim({
    win : psychoJS.window,
    name : 'game', units : undefined,
    image : undefined, mask : undefined,
    ori : 0, pos : [0.41, (- 0.19)], size : [0.4, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0
  });
var ChoiceComponents;
function ChoiceRoutineBegin() {
  t = 0;
  ChoiceClock.reset();
  frameN = -1;
  choiceResp.keys = undefined;
  choiceResp.rt = undefined;
  gre.setImage("gre.jpg");
  gmat.setImage("gmat.jpg");
  lsat.setImage("lsat.jpg");
  game.setImage("game.jpg");
  doGame = []
  doTestPractice = []
  blank.setText('');
  ChoiceComponents = [];
  ChoiceComponents.push(choiceQ);
  ChoiceComponents.push(choiceResp);
  ChoiceComponents.push(testChoice);
  ChoiceComponents.push(videogameChoice);
  ChoiceComponents.push(gre);
  ChoiceComponents.push(gmat);
  ChoiceComponents.push(lsat);
  ChoiceComponents.push(game);
  ChoiceComponents.push(blank);

  for (const thisComponent of ChoiceComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function ChoiceRoutineEachFrame() {
  let continueRoutine = true; 
  t = ChoiceClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && choiceQ.status === PsychoJS.Status.NOT_STARTED) {
    choiceQ.tStart = t; 
    choiceQ.frameNStart = frameN; 
    choiceQ.setAutoDraw(true);
  }

  if (choiceQ.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    choiceQ.setAutoDraw(false);
  }

  if (t >= 0.0 && choiceResp.status === PsychoJS.Status.NOT_STARTED) {
    choiceResp.tStart = t;  
    choiceResp.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { choiceResp.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { choiceResp.start(); }); 
    psychoJS.window.callOnFlip(function() { choiceResp.clearEvents(); });
  }

  if (choiceResp.status === PsychoJS.Status.STARTED && Boolean((choiceQ.status == FINISHED))) {
    choiceResp.status = PsychoJS.Status.FINISHED;
  }

  if (choiceResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = choiceResp.getKeys({keyList: ['1', '2'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      choiceResp.keys = theseKeys[0].name; 
      choiceResp.rt = theseKeys[0].rt;
    }
  }
    if (choiceResp.keys == '1'){
        testChoice.setColor(new util.Color('green'));
    }
    if (choiceResp.keys == '2'){
        videogameChoice.setColor(new util.Color('green'));
    }

  if (choiceResp.keys == '2' || choiceResp.keys == '1'){
    choiceResp.status = (PsychoJS.Status.FINISHED);
  }

  if (t >= 0.0 && testChoice.status === PsychoJS.Status.NOT_STARTED) {
    testChoice.tStart = t;  
    testChoice.frameNStart = frameN; 
    testChoice.setAutoDraw(true);
  }

  if (testChoice.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    testChoice.setAutoDraw(false);
  }

  if (t >= 0.0 && videogameChoice.status === PsychoJS.Status.NOT_STARTED) {
    videogameChoice.tStart = t; 
    videogameChoice.frameNStart = frameN; 
    videogameChoice.setAutoDraw(true);
  }

  if (videogameChoice.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    videogameChoice.setAutoDraw(false);
  }

  if (t >= 0.0 && gre.status === PsychoJS.Status.NOT_STARTED) {
    gre.tStart = t;  
    gre.frameNStart = frameN; 
    gre.setImage('gre.jpg');
    gre.setAutoDraw(true);
  }

  if (gre.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    gre.setAutoDraw(false);
  }

  if (t >= 0.0 && gmat.status === PsychoJS.Status.NOT_STARTED) {
    gmat.tStart = t; 
    gmat.frameNStart = frameN;
    gmat.setImage('gmat.jpg');
    gmat.setAutoDraw(true);
  }

  if (gmat.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    gmat.setAutoDraw(false);
  }

  if (t >= 0.0 && lsat.status === PsychoJS.Status.NOT_STARTED) {
    lsat.tStart = t; 
    lsat.frameNStart = frameN; 
    lsat.setImage('lsat.jpg');
    lsat.setAutoDraw(true);
  }

  if (lsat.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    lsat.setAutoDraw(false);
  }

  if (t >= 0.0 && game.status === PsychoJS.Status.NOT_STARTED) {
    game.tStart = t;  
    game.frameNStart = frameN; 
    game.setImage('game.jpg')
    game.setAutoDraw(true);
  }

  if (game.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    game.setAutoDraw(false);
  }

  if ((choiceResp.keys !== undefined) && blank.status === PsychoJS.Status.NOT_STARTED) {
    blank.tStart = t;  
    blank.frameNStart = frameN;  
    blank.setAutoDraw(true);
  }

  if (blank.status === PsychoJS.Status.STARTED && t >= (blank.tStart + 1.5)) {
    blank.setAutoDraw(false);
  }
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) {  
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false; 
  for (const thisComponent of ChoiceComponents)
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

function ChoiceRoutineEnd() {
  for (const thisComponent of ChoiceComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('choiceResp.keys', choiceResp.keys);
  if (typeof choiceResp.keys !== undefined) {  
      psychoJS.experiment.addData('choiceResp.rt', choiceResp.rt);
      }
  videogameChoice.setColor(new util.Color('white'));
  testChoice.setColor(new util.Color('white'));
  if (choiceResp.keys == '1'){
      doTestPractice = 1;
      doGame = 0;
  }
  if (choiceResp.keys == '2'){
      doTestPractice = 0;
      doGame = 1;
  }
  choiceResp.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var testQuestionsChoiceComponents;
var y;
var q;
var z;
y = 0;
q = [];
polygon = new visual.Rect ({win: psychoJS.window, name: 'polygon',
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, y],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1.0, depth: -5, interpolate: true,
  });

function testQuestionsChoiceRoutineBegin() {
  t = 0;
  testQuestionsChoiceClock.reset(); 
  frameN = -1;
  upDown.keys = undefined;
  image1.setImage('gre.jpg');
  image_2.setImage("gmat.jpg");
  image_3.setImage("lsat.jpg");
  upDown.rt = undefined;
  polygon.setOpacity(1);
  polygon.setSize([0.32, 0.13]);
  polygon.setOri(0);
  polygon.setLineWidth(8);
  enter.keys = undefined;
  enter.rt = undefined;
  testQuestionsChoiceComponents = [];
  testQuestionsChoiceComponents.push(testQChoice);
  testQuestionsChoiceComponents.push(image1);
  testQuestionsChoiceComponents.push(image_2);
  testQuestionsChoiceComponents.push(image_3);
  testQuestionsChoiceComponents.push(upDown);
  testQuestionsChoiceComponents.push(polygon);
  testQuestionsChoiceComponents.push(enter);
  
  if(upDown.keys === '1'){
      y = 0.105;
  }
  if(upDown.keys === '2'){
      y = -0.05;
  }
  if(upDown.keys === '3'){
      y = -0.2;
  }
  for (const thisComponent of testQuestionsChoiceComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function testQuestionsChoiceRoutineEachFrame() {
  let continueRoutine = true; 
  t = testQuestionsChoiceClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && testQChoice.status === PsychoJS.Status.NOT_STARTED) {
    testQChoice.tStart = t;  
    testQChoice.frameNStart = frameN; 
    testQChoice.setAutoDraw(true);
  }


  if (t >= 0.0 && image1.status === PsychoJS.Status.NOT_STARTED) {
    image1.tStart = t;  
    image1.frameNStart = frameN;
    image1.setImage('gre.jpg');
    image1.setAutoDraw(true);
  }


  if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
    image_2.tStart = t; 
    image_2.frameNStart = frameN;
    image_2.setImage("gmat.jpg");
    image_2.setAutoDraw(true);
  }


  if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
    image_3.tStart = t;  
    image_3.frameNStart = frameN;  
    image_3.setImage("lsat.jpg");
    image_3.setAutoDraw(true);
  }


  if (t >= 0.0 && upDown.status === PsychoJS.Status.NOT_STARTED) {
    upDown.tStart = t; 
    upDown.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { upDown.clock.reset(); }); 
    psychoJS.window.callOnFlip(function() { upDown.start(); });
    psychoJS.window.callOnFlip(function() { upDown.clearEvents(); });
  }

  if (upDown.status === PsychoJS.Status.STARTED) {
    let theseKeys = upDown.getKeys({keyList: ['1', '2', '3'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      upDown.keys = theseKeys[0].name;  
      upDown.rt = theseKeys[0].rt;
    }
  }

  if(upDown.keys === '1'){
      y = 0.105;
  }
  if(upDown.keys == '2'){
      y = -0.05;
  }
  if(upDown.keys === '3'){
      y = -0.2;
  }
  if ((((upDown.keys == '1') || (upDown.keys == '2') || (upDown.keys == '3') || (upDown.keys == '4'))) && polygon.status === PsychoJS.Status.NOT_STARTED) {
    polygon.tStart = t; 
    polygon.frameNStart = frameN;  
    polygon.setAutoDraw(true);
  }


  if (polygon.status === PsychoJS.Status.STARTED){ 
    polygon.setPos([0, y]);
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
  for (const thisComponent of testQuestionsChoiceComponents)
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

function testQuestionsChoiceRoutineEnd() {
  for (const thisComponent of testQuestionsChoiceComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('upDown.keys', upDown.keys);
  if (typeof upDown.keys !== undefined) { 
      psychoJS.experiment.addData('upDown.rt', upDown.rt);
      }

  upDown.stop();
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) {  
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }
  if (upDown.keys === '1' && enter.keys !== undefined){
      q = 1;
  }
  if (upDown.keys === '2' && enter.keys !== undefined){
      q = 2;
  }
  if (upDown.keys === '3' && enter.keys !==undefined){
      q = 3;
  }
  if (upDown.keys === undefined && enter.keys !== undefined){
      q = 1;
  }
  enter.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var qInstComponents;
function qInstRoutineBegin() {
  t = 0;
  qInstClock.reset(); 
  frameN = -1;
  key_resp.keys = undefined;
  key_resp.rt = undefined;
  qInstComponents = [];
  qInstComponents.push(textInst);
  qInstComponents.push(key_resp);
  
  for (const thisComponent of qInstComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function qInstRoutineEachFrame() {
  let continueRoutine = true; 
  t = qInstClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && textInst.status === PsychoJS.Status.NOT_STARTED) {
    textInst.tStart = t;  
    textInst.frameNStart = frameN;
    textInst.setAutoDraw(true);
  }

  
  if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
    key_resp.tStart = t;
    key_resp.frameNStart = frameN;  
    psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); }); 
    psychoJS.window.callOnFlip(function() { key_resp.start(); });
    psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
  }

  if (key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
    
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  
      key_resp.keys = theseKeys[0].name; 
      key_resp.rt = theseKeys[0].rt;
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
  for (const thisComponent of qInstComponents)
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

function qInstRoutineEnd() {
  for (const thisComponent of qInstComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
  if (typeof key_resp.keys !== undefined) { 
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      routineTimer.reset();
      }
  
  key_resp.stop();
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


var testQsComponents;
var answerKey;
function testQsRoutineBegin() {
  t = 0;
  testQsClock.reset(); 
  frameN = -1;
  TextQuestion.setText('PLACEHOLDER');
  answerKey = [];
  letterKey.keys = undefined;
  letterKey.rt = undefined;
  enterKey.keys = undefined;
  enterKey.rt = undefined;
  choiceA.setText('QA');
  choiceB.setText('QB');
  choiceC.setText('QC');
  choiceD.setText('QD');
  choiceE.setText('QE');
  testQsComponents = [];
  testQsComponents.push(TextQuestion);
  testQsComponents.push(letterKey);
  testQsComponents.push(enterKey);
  testQsComponents.push(choiceA);
  testQsComponents.push(choiceB);
  testQsComponents.push(choiceC);
  testQsComponents.push(choiceD);
  testQsComponents.push(choiceE);
  testQsComponents.push(conBlank);
  

  if (q === 3){
      TextQuestion.setText(LSAT);
      choiceA.setText(LSATQA);
      choiceB.setText(LSATQB);
      choiceC.setText(LSATQC);
      choiceD.setText(LSATQD);
      choiceE.setText(LSATQE);
      answerKey = (LSATAs);
  }
    
  if (q === 2){
      TextQuestion.setText(GMAT);
      choiceA.setText(GMATQA);
      choiceB.setText(GMATQB);
      choiceC.setText(GMATQC);
      choiceD.setText(GMATQD);
      choiceE.setText(GMATQE);
      answerKey = (GMATAs);
  }
    
  if (q === 1){
      TextQuestion.setText(GRE);
      choiceA.setText(GREQA);
      choiceB.setText(GREQB);
      choiceC.setText(GREQC);
      choiceD.setText(GREQD);
      choiceE.setText(GREQE);
      answerKey = (GREA);
  }
    
  for (const thisComponent of testQsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function testQsRoutineEachFrame() {
  let continueRoutine = true; 
  t = testQsClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && TextQuestion.status === PsychoJS.Status.NOT_STARTED) {
    TextQuestion.tStart = t;  
    TextQuestion.frameNStart = frameN;  
    TextQuestion.setAutoDraw(true);
  }

  if (TextQuestion.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    TextQuestion.setAutoDraw(false);
  }

  if (t >= 0.0 && letterKey.status === PsychoJS.Status.NOT_STARTED) {
    letterKey.tStart = t;  
    letterKey.frameNStart = frameN; 
    psychoJS.window.callOnFlip(function() { letterKey.clock.reset(); }); 
    psychoJS.window.callOnFlip(function() { letterKey.start(); }); 
    psychoJS.window.callOnFlip(function() { letterKey.clearEvents(); });
  }

  if (letterKey.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == STARTED))) {
    letterKey.status = PsychoJS.Status.FINISHED;
  }

  if (letterKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = letterKey.getKeys({keyList: ['a', 'b', 'c', 'd', 'e'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      letterKey.keys = theseKeys[0].name; 
      letterKey.rt = theseKeys[0].rt;
    }
  }
  if ((letterKey.keys === 'a' && enterKey.keys === 'return') && answerKey === 'a'){
      choiceA.setColor(new util.Color('green'));
  }
  if ((letterKey.keys === 'b' && enterKey.keys === 'return') && answerKey === 'b'){
      choiceB.setColor(new util.Color('green'));
  }
  if ((letterKey.keys === 'c' && enterKey.keys === 'return') && answerKey === 'c'){
      choiceC.setColor(new util.Color('green'));
  }
  if ((letterKey.keys === 'd' && enterKey.keys === 'return') && answerKey === 'd'){
      choiceD.setColor(new util.Color('green'));
  }
  if ((letterKey.keys === 'e' && enterKey.keys === 'return') && answerKey === 'e'){
      choiceE.setColor(new util.Color('green'));
  }
    
  if ((letterKey.keys === 'a' && enterKey.keys === 'return') && answerKey !== 'a'){
      choiceA.setColor(new util.Color('red'));
  }
  if ((letterKey.keys === 'b' && enterKey.keys === 'return') && answerKey !== 'b'){
      choiceB.setColor(new util.Color('red'));
  }
  if ((letterKey.keys === 'c' && enterKey.keys === 'return') && answerKey !== 'c'){
      choiceC.setColor(new util.Color('red'));
  }
  if ((letterKey.keys === 'd' && enterKey.keys === 'return') && answerKey !== 'd'){
      choiceD.setColor(new util.Color('red'));
  }
  if ((letterKey.keys === 'e' && enterKey.keys == 'return') && answerKey !== 'e'){
      choiceE.setColor(new util.Color('red'));
  }

  if ((enterKey.keys === 'return' && letterKey.keys !== 'a') && answerKey === 'a'){
      choiceA.setColor(new util.Color('green'));
  }
  if ((enterKey.keys === 'return' && letterKey.keys !== 'b') && answerKey === 'b'){
      choiceB.setColor(new util.Color('green'));
  }
  if ((enterKey.keys === 'return' && letterKey.keys !== 'c') && answerKey === 'c'){
      choiceC.setColor(new util.Color('green'));
  }
  if ((enterKey.keys === 'return' && letterKey.keys !== 'd') && answerKey === 'd'){
      choiceD.setColor(new util.Color('green'));
  }
  if ((enterKey.keys === 'return' && letterKey.keys !== 'e') && answerKey === 'e'){
      choiceE.setColor(new util.Color('green'));
  }

  if (t >= 0.0 && enterKey.status === PsychoJS.Status.NOT_STARTED) {
    enterKey.tStart = t; 
    enterKey.frameNStart = frameN;  
    psychoJS.window.callOnFlip(function() { enterKey.clock.reset(); }); 
    psychoJS.window.callOnFlip(function() { enterKey.start(); }); 
    psychoJS.window.callOnFlip(function() { enterKey.clearEvents(); });
  }

  if (enterKey.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == STARTED))) {
    enterKey.status = PsychoJS.Status.FINISHED;
  }

  if (enterKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = enterKey.getKeys({keyList: ['return'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) { 
      enterKey.keys = theseKeys[0].name;  
      enterKey.rt = theseKeys[0].rt;
    }
  }


  if (t >= 0.0 && choiceA.status === PsychoJS.Status.NOT_STARTED) {
    choiceA.tStart = t; 
    choiceA.frameNStart = frameN; 
    choiceA.setAutoDraw(true);
  }

  if (choiceA.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceA.setAutoDraw(false);
  }

  if (t >= 0.0 && choiceB.status === PsychoJS.Status.NOT_STARTED) {
    choiceB.tStart = t; 
    choiceB.frameNStart = frameN; 
    choiceB.setAutoDraw(true);
  }

  if (choiceB.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceB.setAutoDraw(false);
  }

  if (t >= 0.0 && choiceC.status === PsychoJS.Status.NOT_STARTED) {
    choiceC.tStart = t; 
    choiceC.frameNStart = frameN; 
    choiceC.setAutoDraw(true);
  }

  if (choiceC.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceC.setAutoDraw(false);
  }

  if (t >= 0.0 && choiceD.status === PsychoJS.Status.NOT_STARTED) {
    choiceD.tStart = t;  
    choiceD.frameNStart = frameN;  
    choiceD.setAutoDraw(true);
  }

  if (choiceD.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceD.setAutoDraw(false);
  }

  if (t >= 0.0 && choiceE.status === PsychoJS.Status.NOT_STARTED) {
    choiceE.tStart = t;  
    choiceE.frameNStart = frameN; 
    choiceE.setAutoDraw(true);
  }

  if (choiceE.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceE.setAutoDraw(false);
  }

  if (((enterKey.keys == 'return')) && conBlank.status === PsychoJS.Status.NOT_STARTED) {
    conBlank.tStart = t;  
    conBlank.frameNStart = frameN;  
    conBlank.setAutoDraw(true);
  }

  if (conBlank.status === PsychoJS.Status.STARTED && t >= (conBlank.tStart + 2.5)) {
    conBlank.setAutoDraw(false);
  }
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  if (!continueRoutine) {  
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  
  for (const thisComponent of testQsComponents)
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

function testQsRoutineEnd() {
  for (const thisComponent of testQsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('letterKey.keys', letterKey.keys);
  if (typeof letterKey.keys !== undefined) {  
      psychoJS.experiment.addData('letterKey.rt', letterKey.rt);
      }

  choiceA.setColor(new util.Color('white'));
  choiceB.setColor(new util.Color('white'));
  choiceC.setColor(new util.Color('white'));
  choiceD.setColor(new util.Color('white'));
  choiceE.setColor(new util.Color('white'));
  letterKey.stop();
  doTestPractice = 0;
  psychoJS.experiment.addData('enterKey.keys', enterKey.keys);
  if (typeof enterKey.keys !== undefined) { 
      psychoJS.experiment.addData('enterKey.rt', enterKey.rt);
      }

  enterKey.stop();
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var GameComponents;
function GameRoutineBegin() {
  t = 0;
  GameClock.reset(); 
  frameN = -1;
  spaceKey.keys = undefined;
  spaceKey.rt = undefined;
  GameComponents = [];
  GameComponents.push(gameInstructions);
  GameComponents.push(spaceKey);

  for (const thisComponent of GameComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function GameRoutineEachFrame() {
  let continueRoutine = true;
  t = GameClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && gameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    gameInstructions.tStart = t;  
    gameInstructions.frameNStart = frameN; 
    gameInstructions.setAutoDraw(true);
  }


  if (t >= 0.0 && spaceKey.status === PsychoJS.Status.NOT_STARTED) {
    spaceKey.tStart = t; 
    spaceKey.frameNStart = frameN;  
    psychoJS.window.callOnFlip(function() { spaceKey.clock.reset(); }); 
    psychoJS.window.callOnFlip(function() { spaceKey.start(); });
    psychoJS.window.callOnFlip(function() { spaceKey.clearEvents(); });
  }

  if (spaceKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = spaceKey.getKeys({keyList: ['space'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      spaceKey.keys = theseKeys[0].name;  
      spaceKey.rt = theseKeys[0].rt;
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
  for (const thisComponent of GameComponents)
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

function GameRoutineEnd() {
  for (const thisComponent of GameComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('spaceKey.keys', spaceKey.keys);
  if (typeof spaceKey.keys !== undefined) {  
      psychoJS.experiment.addData('spaceKey.rt', spaceKey.rt);
      routineTimer.reset();
      }

  spaceKey.stop();
  window.open("http://JoanneStasiak.github.io", "_blank");
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}


var pacGameComponents;
function pacGameRoutineBegin() {
  t = 0;
  pacmanClock.reset(); 
  frameN = -1;
  pacmanEnter.keys = undefined;
  pacmanEnter.rt = undefined;
  pacGameComponents = [];
  pacGameComponents.push(pacmanText);
  pacGameComponents.push(pacmanEnter);

  for (const thisComponent of pacGameComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function pacGameRoutineEachFrame() {
  let continueRoutine = true; 
  t = pacmanGameClock.getTime();
  frameN = frameN + 1;

  if (t >= 0.0 && pacmanText.status === PsychoJS.Status.NOT_STARTED) {
    pacmanText.tStart = t; 
    pacmanText.frameNStart = frameN; 
    pacmanText.setAutoDraw(true);
  }


  if (t >= 0.0 && pacmanEnter.status === PsychoJS.Status.NOT_STARTED) {
    pacmanEnter.tStart = t;  
    pacmanEnter.frameNStart = frameN;  
    psychoJS.window.callOnFlip(function() { pacmanEnter.clock.reset(); });  
    psychoJS.window.callOnFlip(function() { pacmanEnter.start(); });
    psychoJS.window.callOnFlip(function() { pacmanEnter.clearEvents(); });
  }

  if (pacmanEnter.status === PsychoJS.Status.STARTED) {
    let theseKeys = pacmanEnter.getKeys({keyList: ['return'], waitRelease: false});

    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  
      pacmanEnter.keys = theseKeys[0].name;
      pacmanEnter.rt = theseKeys[0].rt;
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
  for (const thisComponent of pacGameComponents)
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

function pacGameRoutineEnd() {
  for (const thisComponent of pacGameComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('pacmanEnter.keys', pacmanEnter.keys);
  if (typeof pacmanEnter.keys !== undefined) { 
      psychoJS.experiment.addData('pacmanEnter.rt', pacmanEnter.rt);
      routineTimer.reset();
      }

  pacmanEnter.stop();
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
