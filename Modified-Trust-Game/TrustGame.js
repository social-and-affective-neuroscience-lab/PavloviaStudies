/****************** 
 * Trustgame Test *
 ******************/

import { PsychoJS } from 'https://pavlovia.org/lib/core-3.2.js';
import * as core from 'https://pavlovia.org/lib/core-3.2.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data-3.2.js';
import { Scheduler } from 'https://pavlovia.org/lib/util-3.2.js';
import * as util from 'https://pavlovia.org/lib/util-3.2.js';
import * as visual from 'https://pavlovia.org/lib/visual-3.2.js';
import { Sound } from 'https://pavlovia.org/lib/sound-3.2.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'TrustGame';  // from the Builder filename that created this script
let expInfo = {'Participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroRoutineBegin);
flowScheduler.add(IntroRoutineEachFrame);
flowScheduler.add(IntroRoutineEnd);
const CueLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CueLoopLoopBegin, CueLoopLoopScheduler);
flowScheduler.add(CueLoopLoopScheduler);
flowScheduler.add(CueLoopLoopEnd);
flowScheduler.add(ThankYouRoutineBegin);
flowScheduler.add(ThankYouRoutineEachFrame);
flowScheduler.add(ThankYouRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});
var subID;
var subIDArray;
var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess
  subIDArray = Math.floor((Math.random() * 100000) + 1);
  subID = parseInt(subIDArray);
  console.log("subID:" + subID);

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var IntroClock;
var Instructions;
var begin;
var isiClock;
var isiText;
var CueClock;
var cueText;
var cue;
var sendMoney1Clock;
var sendInstructions;
var Player1Name;
var Player1Pic;
var enter;
var text1;
var dollarSign;
var Giver1Clock;
var Feedback;
var sendMoney2Clock;
var sendInst2;
var Player2Name;
var Player2Pic;
var text_2;
var enter2;
var dollar2;
var Giver2Clock;
var Feedback2;
var ThankYouClock;
var tyText;
var globalClock;
var routineTimer;
var backTransfer;
var giveMoney;
var continueRoutine;
giveMoney = [];
var textString;
textString = toString(text1);
var Giver1Components;
var array1;
var array2;
var array3;
var array4;
var array5;
array1 = [0,1,2];
array2 = [0,1,2,3];
array3 = [1,2,3,4,5];
array4 = [2,3,4,5,6];
array5 = [3,4,5,6,7,8]
var backTransferStr;
var array6;
var array7;
var array8;
var array9;
var array10;
array6 = [0,1,2];
array7 = [2,3,4];
array8 = [3,4,5,6,7];
array9 = [4,5,6,7,8,9,10];
array10 = [6,7,8,9,10,11,12];
var textString;
var receiveMoney;
var receiveMoneyStr;
function experimentInit() {
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  Instructions = new visual.TextStim({ win: psychoJS.window,name: 'Instructions',
    text: 'In this task, you will be playing a game with two other people. They will be represented by unique profile pictures.\n\nEach trial you will be playing with one of the other people.\nYou will be given $5 to use every trial. You have the option to give any dollar amount, from $0-$5, to the other player.\n\nWhatever money you choose to give will be tripled. Then the other player will be told to make the same choice-giving some amount of the now-tripled money back to you.\nThe trials are independent, meaning that money will not be compounded and you will start with $5 each trial. At the end of the task, one of the trials will be selected at random for payment.\n\nWhen you are ready to begin, press SPACE!',
    font: 'Arial',units : undefined, pos: [0, 0], height: 0.045,  wrapWidth: 1.45, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 
  });
  
  begin = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isiText = new visual.TextStim({ win: psychoJS.window,name: 'isiText',text: '+',  font: 'Arial',
    units : undefined, pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 
  });
  
  // Initialize components for Routine "Cue"
  CueClock = new util.Clock();
  cueText = new visual.TextStim({
    win: psychoJS.window,
    name: 'cueText',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'cueText',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isiText = new visual.TextStim({
    win: psychoJS.window,
    name: 'isiText',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "sendMoney1"
  sendMoney1Clock = new util.Clock();
  sendInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'sendInstructions',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.11)], height: 0.04,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Player1Name = new visual.TextStim({
    win: psychoJS.window,
    name: 'Player1Name',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Player1Pic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1Pic', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  enter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text1 = new visual.TextStim({ win: psychoJS.window,  name: 'text',  text: '',font: 'Arial',units : undefined,  pos: [0, (- 0.35)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 
  });
  
  dollarSign = new visual.TextStim({win: psychoJS.window,name: 'dollarSign',text: 'default text',
    font: 'Arial',  units : undefined,   pos: [(- 0.05), (- 0.35)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,depth: -6.0 
  });
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isiText = new visual.TextStim({  win: psychoJS.window,name: 'isiText',text: '+',   font: 'Arial', units : undefined,  pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,depth: 0.0 
  });
  
  // Initialize components for Routine "Giver1"
  Giver1Clock = new util.Clock();
  Feedback = new visual.TextStim({ win: psychoJS.window,name: 'Feedback',  text: 'default text',font: 'Arial',  units : undefined,  pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,depth: -1.0 
  });
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isiText = new visual.TextStim({ win: psychoJS.window,    name: 'isiText',    text: '+', font: 'Arial',  units : undefined,    pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,depth: 0.0 
  });
  
  // Initialize components for Routine "sendMoney2"
  sendMoney2Clock = new util.Clock();
  sendInst2 = new visual.TextStim({ win: psychoJS.window,   name: 'sendInst2',  text: 'default text', font: 'Arial',units : undefined, 
    pos: [0, (- 0.11)], height: 0.04,  wrapWidth: 1.4, ori: 0,   color: new util.Color('white'),  opacity: 1,  depth: 0.0 
  });
  
  Player2Name = new visual.TextStim({  win: psychoJS.window,   name: 'Player2Name',text: 'default text',   font: 'Arial',   units : undefined, 
    pos: [0, 0.2], height: 0.06,  wrapWidth: undefined, ori: 0, color: new util.Color('white'),  opacity: 1,depth: -1.0 
  });
  
  Player2Pic = new visual.ImageStim({ win : psychoJS.window,name : 'Player2Pic', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0, color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,texRes : 128, interpolate : true, depth : -2.0  
      
  });
  text_2 = new visual.TextStim({win: psychoJS.window, name: 'text_2',
    text: '', font: 'Arial',units : undefined, pos: [0, (- 0.35)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,depth: -3.0 
  });
  
  enter2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  dollar2 = new visual.TextStim({ win: psychoJS.window, name: 'dollar2',
    text: 'default text',font: 'Arial', units : undefined, pos: [(- 0.05), (- 0.35)], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -6.0 
  });
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isiText = new visual.TextStim({ win: psychoJS.window, name: 'isiText',text: '+', font: 'Arial', units : undefined, pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,depth: 0.0 
  });
  
  // Initialize components for Routine "Giver2"
  Giver2Clock = new util.Clock();
  Feedback2 = new visual.TextStim({ win: psychoJS.window, name: 'Feedback2', text: 'default text',
    font: 'Arial', units : undefined, pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -1.0 
  });
  
  // Initialize components for Routine "ThankYou"
  ThankYouClock = new util.Clock();
  tyText = new visual.TextStim({win: psychoJS.window,name: 'tyText',text: 'Thank you for playing!',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var IntroComponents;
function IntroRoutineBegin() {
  //------Prepare to start Routine 'Intro'-------
  t = 0;
  IntroClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  begin.keys = undefined;
  begin.rt = undefined;
  // keep track of which components have finished
  IntroComponents = [];
  IntroComponents.push(Instructions);
  IntroComponents.push(begin);
  
  for (const thisComponent of IntroComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function IntroRoutineEachFrame() {
  //------Loop for each frame of Routine 'Intro'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = IntroClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Instructions* updates
  if (t >= 0.0 && Instructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Instructions.tStart = t;  // (not accounting for frame time here)
    Instructions.frameNStart = frameN;  // exact frame index
    Instructions.setAutoDraw(true);
  }

  
  // *begin* updates
  if (t >= 0.0 && begin.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    begin.tStart = t;  // (not accounting for frame time here)
    begin.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { begin.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { begin.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { begin.clearEvents(); });
  }

  if (begin.status === PsychoJS.Status.STARTED) {
    let theseKeys = begin.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      begin.keys = theseKeys[0].name;  // just the last key pressed
      begin.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of IntroComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function IntroRoutineEnd() {
  //------Ending Routine 'Intro'-------
  for (const thisComponent of IntroComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('begin.keys', begin.keys);
  if (typeof begin.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('begin.rt', begin.rt);
      routineTimer.reset();
      }
  
  begin.stop();
  // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var CueLoop;
var currentLoop;
function CueLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CueLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'DictatorGame.xlsx',
    seed: undefined, name: 'CueLoop'});
  psychoJS.experiment.addLoop(CueLoop); // add the loop to the experiment
  currentLoop = CueLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCueLoop of CueLoop) {
    thisScheduler.add(importConditions(CueLoop));
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(CueRoutineBegin);
    thisScheduler.add(CueRoutineEachFrame);
    thisScheduler.add(CueRoutineEnd);
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    const randomlyPresentLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(randomlyPresentLoopBegin, randomlyPresentLoopScheduler);
    thisScheduler.add(randomlyPresentLoopScheduler);
    thisScheduler.add(randomlyPresentLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var randomlyPresent;
function randomlyPresentLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  randomlyPresent = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'spreadsheet5.xlsx', Rows),
    seed: undefined, name: 'randomlyPresent'});
  psychoJS.experiment.addLoop(randomlyPresent); // add the loop to the experiment
  currentLoop = randomlyPresent;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRandomlyPresent of randomlyPresent) {
    thisScheduler.add(importConditions(randomlyPresent));
    const SelfishGiverLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(SelfishGiverLoopBegin, SelfishGiverLoopScheduler);
    thisScheduler.add(SelfishGiverLoopScheduler);
    thisScheduler.add(SelfishGiverLoopEnd);
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    const GenerousGiverLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(GenerousGiverLoopBegin, GenerousGiverLoopScheduler);
    thisScheduler.add(GenerousGiverLoopScheduler);
    thisScheduler.add(GenerousGiverLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var SelfishGiver;
function SelfishGiverLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  SelfishGiver = new TrialHandler({
    psychoJS: psychoJS,
    nReps: nReps1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SelfishGiver'});
  psychoJS.experiment.addLoop(SelfishGiver); // add the loop to the experiment
  currentLoop = SelfishGiver;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSelfishGiver of SelfishGiver) {
    thisScheduler.add(importConditions(SelfishGiver));
    thisScheduler.add(sendMoney1RoutineBegin);
    thisScheduler.add(sendMoney1RoutineEachFrame);
    thisScheduler.add(sendMoney1RoutineEnd);
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(Giver1RoutineBegin);
    thisScheduler.add(Giver1RoutineEachFrame);
    thisScheduler.add(Giver1RoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function SelfishGiverLoopEnd() {
  psychoJS.experiment.removeLoop(SelfishGiver);

  return Scheduler.Event.NEXT;
}

var GenerousGiver;
function GenerousGiverLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  GenerousGiver = new TrialHandler({
    psychoJS: psychoJS,
    nReps: nReps2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'GenerousGiver'});
  psychoJS.experiment.addLoop(GenerousGiver); // add the loop to the experiment
  currentLoop = GenerousGiver;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisGenerousGiver of GenerousGiver) {
    thisScheduler.add(importConditions(GenerousGiver));
    thisScheduler.add(sendMoney2RoutineBegin);
    thisScheduler.add(sendMoney2RoutineEachFrame);
    thisScheduler.add(sendMoney2RoutineEnd);
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(Giver2RoutineBegin);
    thisScheduler.add(Giver2RoutineEachFrame);
    thisScheduler.add(Giver2RoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function GenerousGiverLoopEnd() {
  psychoJS.experiment.removeLoop(GenerousGiver);

  return Scheduler.Event.NEXT;
}


function randomlyPresentLoopEnd() {
  psychoJS.experiment.removeLoop(randomlyPresent);

  return Scheduler.Event.NEXT;
}


function CueLoopLoopEnd() {
  psychoJS.experiment.removeLoop(CueLoop);

  return Scheduler.Event.NEXT;
}

var isiComponents;
function isiRoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isiClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  isiComponents = [];
  isiComponents.push(isiText);
  
  for (const thisComponent of isiComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function isiRoutineEachFrame() {
  //------Loop for each frame of Routine 'isi'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = isiClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isiText* updates
  if (t >= 0.0 && isiText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isiText.tStart = t;  // (not accounting for frame time here)
    isiText.frameNStart = frameN;  // exact frame index
    isiText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (isiText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isiText.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of isiComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function isiRoutineEnd() {
  //------Ending Routine 'isi'-------
  for (const thisComponent of isiComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var CueComponents;
function CueRoutineBegin() {
  //------Prepare to start Routine 'Cue'-------
  t = 0;
  CueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(6.000000);
  // update component parameters for each repeat
  cueText.setText('');
  // keep track of which components have finished
  if (subID%2 == 1){
      cueText.setText(CueType1);
      }
  if (subID%2 == 0){
      cueText.setText(CueType2);
      }

  CueComponents = [];
  CueComponents.push(cueText);
  
  for (const thisComponent of CueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function CueRoutineEachFrame() {
  //------Loop for each frame of Routine 'Cue'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = CueClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *cueText* updates
  if (t >= 0.0 && cueText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    cueText.tStart = t;  // (not accounting for frame time here)
    cueText.frameNStart = frameN;  // exact frame index
    cueText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (cueText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    cueText.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of CueComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function CueRoutineEnd() {
  //------Ending Routine 'Cue'-------
  for (const thisComponent of CueComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}
// var modify;
// var textAdd;
// var textVar;
// textVar = new visual.TextStim({ win: psychoJS.window, text: 'default text', font: 'Arial', units : undefined, pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -1.0 
//   });
// function typeText(textVar){
//   textVar.setText('');
//   modify = false;
//   textVar.text = '';
//   textVar.setText('');
//   modify = false;
//   textVar.text = '';
//   let theseKeys = psychoJS.eventManager.getKeys();
//   if (theseKeys.length > 0) {  // at least one key was pressed
//     textAdd = theseKeys[theseKeys.length-1]; 
//     }
    
//   if (textAdd === 'return') {
//      textAdd = '';  // Add nothing
//      continueRoutine = false;  // End routine (if that is what you want)
//   } else if (textAdd === 'space') {
//       textAdd = ' ';  // Add a space
//   } else if (textAdd === 'backspace') {
//       textVar.text = textVar.text.slice(0, -1);
//       textAdd = undefined;
//         //   textAdd = '';  // Add nothing
//             // empty the onscreen text ready for next input (just be sure to save it)
//   } else if (['lshift', 'rshift'].includes(textAdd)) {
//       modify = true;
//   } else if (textAdd !== undefined) {
//       if (modify) {
//           textVar.text = textVar.text + textAdd.toUpperCase();
//           modify = false;
//       } else {
//           textVar.text = textVar.text + textAdd
//       }textAdd = undefined;
        
//       }
// }
//  function giveMoneyFunc(textVar){
//   if (textVar.text ==='5'){
//     giveMoney = 5;
//     console.log('gave $5');
//   }
//   if (texVar.text === '4'){
//     giveMoney = 4;
//     console.log('gave $4');
//   }
//   if (textVar.text ==='3'){
//     giveMoney = 3;
//     console.log('gave $3');
//   }
//   if (textVar.text === '2'){
//     giveMoney =2;
//     console.log('gave $2');
//   }
//   if (textVar.text === '1'){
//     giveMoney = 1;
//     console.log('gave $1');
//   } 
//   if (textVar.text === '0'){
//     giveMoney = 0;
//     console.log('gave $');
//   }
//   if (textVar.text === ''){
//     giveMoney = 0;
//     console.log('gave $0');
//   }
//  }
var modify;
var sendMoney1Components;
function sendMoney1RoutineBegin() {
  //------Prepare to start Routine 'sendMoney1'-------
  t = 0;
  sendMoney1Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  sendInstructions.setText('You have been given $5 to use. \n\n\nPlease indicate how many dollars you will give to Player 1:\n\n');
  Player1Name.setText('Player 1');
  Player1Pic.setPos([0, 0.36]);
  Player1Pic.setSize([0.2, 0.2]);
  if (subID%2===0){
      Player1Pic.setImage('1patterns.png');  
  }
 if (subID%2===1){
     Player1Pic.setImage('3pattern.png')
 }
  enter.keys = undefined;
  enter.rt = undefined;
//   text1.setText('');
//   modify = false;
//   text1.text = '';
  dollarSign.setText('$');
  // keep track of which components have finished
  sendMoney1Components = [];
  sendMoney1Components.push(sendInstructions);
  sendMoney1Components.push(Player1Name);
  sendMoney1Components.push(Player1Pic);
  sendMoney1Components.push(enter);
  sendMoney1Components.push(text1);
  sendMoney1Components.push(dollarSign);
  
  for (const thisComponent of sendMoney1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var textAdd;

var keys1;
function sendMoney1RoutineEachFrame() {
  //------Loop for each frame of Routine 'sendMoney1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = sendMoney1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *sendInstructions* updates
  if (t >= 0.0 && sendInstructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    sendInstructions.tStart = t;  // (not accounting for frame time here)
    sendInstructions.frameNStart = frameN;  // exact frame index
    sendInstructions.setAutoDraw(true);
  }

  
  // *Player1Name* updates
  if (t >= 0.0 && Player1Name.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Player1Name.tStart = t;  // (not accounting for frame time here)
    Player1Name.frameNStart = frameN;  // exact frame index
    Player1Name.setAutoDraw(true);
  }

  
  // *Player1Pic* updates
  if (t >= 0.0 && Player1Pic.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Player1Pic.tStart = t;  // (not accounting for frame time here)
    Player1Pic.frameNStart = frameN;  // exact frame index
    Player1Pic.setAutoDraw(true);
  }

  
  // *enter* updates
  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    enter.tStart = t;  // (not accounting for frame time here)
    enter.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { enter.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      enter.keys = theseKeys[0].name;  // just the last key pressed
      enter.rt = theseKeys[0].rt;
      // a response ends the routine
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
        // empty the onscreen text ready for next input (just be sure to save it)
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
//   typeText(text1);
    // *text* updates
  if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text1.tStart = t;  // (not accounting for frame time here)
    text1.frameNStart = frameN;  // exact frame index
    text1.setAutoDraw(true);
    text1.setText(text1.text);
   }
  if (text1.text ==='5'){
    giveMoney = 5;
    console.log('gave $5');
  }
  if (text1.text === '4'){
    giveMoney = 4;
    console.log('gave $4');
  }
  if (text1.text ==='3'){
    giveMoney = 3;
    console.log('gave $3');
  }
  if (text1.text === '2'){
    giveMoney =2;
    console.log('gave $2');
  }
  if (text1.text === '1'){
    giveMoney = 1;
    console.log('gave $1');
  } 
  if (text1.text === '0'){
    giveMoney = 0;
    console.log('gave $');
  }
  if (text1.text === ''){
    giveMoney = 0;
    console.log('gave $0');
  }
//   giveMoneyStr = toString(giveMoney);
  // *dollarSign* updates
  if (t >= 0.0 && dollarSign.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    dollarSign.tStart = t;  // (not accounting for frame time here)
    dollarSign.frameNStart = frameN;  // exact frame index
    dollarSign.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of sendMoney1Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function sendMoney1RoutineEnd() {
  //------Ending Routine 'sendMoney1'-------
  for (const thisComponent of sendMoney1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }
      
//   giveMoneyFunc(text1);
  if (text1.text ==='5'){
    giveMoney = 5;
    console.log('gave $5');
  }
  if (text1.text === '4'){
    giveMoney = 4;
    console.log('gave $4');
  }
  if (text1.text ==='3'){
    giveMoney = 3;
    console.log('gave $3');
  }
  if (text1.text === '2'){
    giveMoney =2;
    console.log('gave $2');
  }
  if (text1.text === '1'){
    giveMoney = 1;
    console.log('gave $1');
  } 
  if (text1.text === '0'){
    giveMoney = 0;
    console.log('gave $');
  }
  if (text1.text === ''){
    giveMoney = 0;
    console.log('gave $0');
  }
//   giveMoneyStr = toString(giveMoney);
//   console.log("give money string =" + giveMoneyStr);
  enter.stop();
  psychoJS.experiment.addData("typedWord", text1.text)
  text1.setText('')  // empty the onscreen text ready for next input
  // the Routine "sendMoney1" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

function random_Gamble(probability){
  return probability[Math.floor(Math.random()*probability.length)];
 }




function Giver1RoutineBegin() {
  //------Prepare to start Routine 'Giver1'-------
  t = 0;
  Giver1Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(5.000000);
  // update component parameters for each repeat
  Feedback.setText(textString);
  // keep track of which components have finished
  Giver1Components = [];
  Giver1Components.push(Feedback);
  backTransfer = 0;
  receiveMoney = giveMoney * 3;

//   receiveMoneyStr = '$' + toString(receiveMoney);
//   console.log("they received $" + receiveMoneyStr);  
  if (giveMoney === 0){
    backTransfer = 0;
  }
   if (giveMoney === 1){
    backTransfer = random_Gamble(array1);
    console.log("they gave back" + backTransfer);
  }
   if (giveMoney === 2){
    backTransfer = random_Gamble(array2);
    console.log("they gave back" + backTransfer);
  }
   if (giveMoney === 3){
    backTransfer = random_Gamble(array3);
    console.log("they gave back " + backTransfer);
  }
   if (giveMoney === 4){
    backTransfer = random_Gamble(array4);
    console.log("they gave back " + backTransfer);
  }
   if (giveMoney === 5){
    backTransfer = random_Gamble(array5);
    console.log("they gave back" + backTransfer);
  }
//   backTransferStr = toString(backTransfer);
//   console.log("backTransfer string = " + backTransferStr);
  textString = ("You gave Player 1 $" + giveMoney + "\n\nPlayer 1 received $" + receiveMoney + "\n\nPlayer 1 chose to give you $" + backTransfer);
  for (const thisComponent of Giver1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Giver1RoutineEachFrame() {
  //------Loop for each frame of Routine 'Giver1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Giver1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Feedback* updates
  if (t >= 0.0 && Feedback.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Feedback.tStart = t;  // (not accounting for frame time here)
    Feedback.frameNStart = frameN;  // exact frame index
    Feedback.setAutoDraw(true);
    Feedback.setText(textString);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Feedback.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of Giver1Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Giver1RoutineEnd() {
  //------Ending Routine 'Giver1'-------
  for (const thisComponent of Giver1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var sendMoney2Components;

function sendMoney2RoutineBegin() {
  //------Prepare to start Routine 'sendMoney2'-------
  t = 0;
  sendMoney2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  sendInst2.setText('You have been given $5 to use. \n\n\nPlease indicate how many dollars you will give to Player 2:\n\n');
  Player2Name.setText('Player 2');
  Player2Pic.setPos([0, 0.36]);
  Player2Pic.setSize([0.2, 0.2]);
 
  if (subID%2===0){
      Player2Pic.setImage('3pattern.png');  
  }
  if (subID%2===1){
     Player2Pic.setImage('1patterns.png')
  }
  enter2.keys = undefined;
  enter2.rt = undefined;
  dollar2.setText('$');
  text_2.setText('');
  modify = false;
  text_2.text = '';
  // keep track of which components have finished
  sendMoney2Components = [];
  sendMoney2Components.push(sendInst2);
  sendMoney2Components.push(Player2Name);
  sendMoney2Components.push(Player2Pic);
  sendMoney2Components.push(text_2);
  sendMoney2Components.push(enter2);
  sendMoney2Components.push(dollar2);
  
  for (const thisComponent of sendMoney2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var keys2;
var text2;
function sendMoney2RoutineEachFrame() {
  //------Loop for each frame of Routine 'sendMoney2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = sendMoney2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *sendInst2* updates
  if (t >= 0.0 && sendInst2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    sendInst2.tStart = t;  // (not accounting for frame time here)
    sendInst2.frameNStart = frameN;  // exact frame index
    sendInst2.setAutoDraw(true);
  }

  
  // *Player2Name* updates
  if (t >= 0.0 && Player2Name.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Player2Name.tStart = t;  // (not accounting for frame time here)
    Player2Name.frameNStart = frameN;  // exact frame index
    Player2Name.setAutoDraw(true);
  }

  
  // *Player2Pic* updates
  if (t >= 0.0 && Player2Pic.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Player2Pic.tStart = t;  // (not accounting for frame time here)
    Player2Pic.frameNStart = frameN;  // exact frame index
    Player2Pic.setAutoDraw(true);
  }

//   keys2 = event.getKeys(keyList=['0','1','2','3','4','5','return', 'backspace'])
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
    //   text_2.text(text_2.text + textAdd[textAdd.length-1]); 
      text_2.text = text_2.text.slice(0, -1);
      textAdd = undefined;
    //   textAdd = '';  // Add nothing
        // empty the onscreen text ready for next input (just be sure to save it)
  } else if (['lshift', 'rshift'].includes(textAdd)) {
      modify = true;
  } else if (textAdd !== undefined) {
      if (modify) {
          text_2.text = text_2.text + textAdd.toUpperCase();
          modify = false;
      } else {
          text_2.text = text_2.text + textAdd
      }textAdd = undefined;
      
  }

  
  if (text_2.text === '5'){
    giveMoney = 5;
    console.log('gave $5');
  }
  if (text_2.text === '4'){
    giveMoney = 4;
    console.log('gave $4');
  }
  if (text_2.text === '3'){
    giveMoney = 3;
    console.log('gave $3');
  }
  if (text_2.text === '2'){
    giveMoney =2;
    console.log('gave $2');
  }
  if (text_2.text === '1'){
    giveMoney = 1;
    console.log('gave $1');
  } 
  if (text_2.text === '0'){
    giveMoney = 0;
    console.log('gave $0');
  }
  if ('' in theseKeys){
    giveMoney = 0;
  }
//   giveMoneyStr = toString(giveMoney);
  // *text_2* updates
  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
    text_2.setText(text_2.text);
  }

  
  // *enter2* updates
  if (t >= 0.0 && enter2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    enter2.tStart = t;  // (not accounting for frame time here)
    enter2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { enter2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { enter2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { enter2.clearEvents(); });
  }

  if (enter2.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter2.getKeys({keyList: ['return'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      enter2.keys = theseKeys[0].name;  // just the last key pressed
      enter2.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *dollar2* updates
  if (t >= 0.0 && dollar2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    dollar2.tStart = t;  // (not accounting for frame time here)
    dollar2.frameNStart = frameN;  // exact frame index
    dollar2.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of sendMoney2Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function sendMoney2RoutineEnd() {
  //------Ending Routine 'sendMoney2'-------
  for (const thisComponent of sendMoney2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter2.keys', enter2.keys);
  if (typeof enter2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('enter2.rt', enter2.rt);
      routineTimer.reset();
      }
  
  enter2.stop();
  // the Routine "sendMoney2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Giver2Components;
function Giver2RoutineBegin() {
  //------Prepare to start Routine 'Giver2'-------
  t = 0;
  Giver2Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(5.000000);
  // update component parameters for each repeat
  Feedback2.setText(text2);
  // keep track of which components have finished
  backTransfer = [];
  receiveMoney = giveMoney * 3;
//   receiveMoneyStr = '$' + toString(receiveMoney);
//   console.log("they received " + receiveMoneyStr);    
  if (giveMoney == 0){
    backTransfer = 0;
  }
   if (giveMoney == 1){
    backTransfer = random_Gamble(array6);
    console.log("they gave back "+ backTransfer);
  }
   if (giveMoney === 2){
    backTransfer = random_Gamble(array7);
    console.log("they gave back "+ backTransfer);
  }
   if (giveMoney === 3){
    backTransfer = random_Gamble(array8);
    console.log("they gave back "+ backTransfer);
  }
   if (giveMoney === 4){
    backTransfer = random_Gamble(array9);
    console.log("they gave back "+ backTransfer);
  }
   if (giveMoney === 5){
    backTransfer = random_Gamble(array10);
    console.log("they gave back "+ backTransfer);
  }
//   backTransferStr = toString(backTransfer);
//   console.log("backTransfer string = " + backTransferStr);
  textString = ("You gave Player 2 $" + giveMoney + "\n\nPlayer 2 received $" + receiveMoney + "\n\nPlayer 2 chose to give you $" + backTransfer);
  
  Giver2Components = [];
  Giver2Components.push(Feedback2);
  
  for (const thisComponent of Giver2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Giver2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Giver2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Giver2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Feedback2* updates
  if (t >= 0.0 && Feedback2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Feedback2.tStart = t;  // (not accounting for frame time here)
    Feedback2.frameNStart = frameN;  // exact frame index
    Feedback2.setAutoDraw(true);
    Feedback2.setText(textString);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Feedback2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Feedback2.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of Giver2Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Giver2RoutineEnd() {
  //------Ending Routine 'Giver2'-------
  for (const thisComponent of Giver2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var ThankYouComponents;
function ThankYouRoutineBegin() {
  //------Prepare to start Routine 'ThankYou'-------
  t = 0;
  ThankYouClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  ThankYouComponents = [];
  ThankYouComponents.push(tyText);
  
  for (const thisComponent of ThankYouComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ThankYouRoutineEachFrame() {
  //------Loop for each frame of Routine 'ThankYou'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ThankYouClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *tyText* updates
  if (t >= 0.0 && tyText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    tyText.tStart = t;  // (not accounting for frame time here)
    tyText.frameNStart = frameN;  // exact frame index
    tyText.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ThankYouComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ThankYouRoutineEnd() {
  //------Ending Routine 'ThankYou'-------
  for (const thisComponent of ThankYouComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "ThankYou" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
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
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
