/********************* 
 * Slotmachtest Test *
 *********************/

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
let expName = 'SlotMachTest';  // from the Builder filename that created this script

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
flowScheduler.add(InstrRoutineBegin);
flowScheduler.add(InstrRoutineEachFrame);
flowScheduler.add(InstrRoutineEnd);
flowScheduler.add(Inst2RoutineBegin);
flowScheduler.add(Inst2RoutineEachFrame);
flowScheduler.add(Inst2RoutineEnd);
flowScheduler.add(Inst3RoutineBegin);
flowScheduler.add(Inst3RoutineEachFrame);
flowScheduler.add(Inst3RoutineEnd);
flowScheduler.add(ISIRoutineBegin);
flowScheduler.add(ISIRoutineEachFrame);
flowScheduler.add(ISIRoutineEnd);
flowScheduler.add(PracticeCueRoutineBegin);
flowScheduler.add(PracticeCueRoutineEachFrame);
flowScheduler.add(PracticeCueRoutineEnd);
const PracticeLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PracticeLoopLoopBegin, PracticeLoopLoopScheduler);
flowScheduler.add(PracticeLoopLoopScheduler);
flowScheduler.add(PracticeLoopLoopEnd);
flowScheduler.add(BeginInstRoutineBegin);
flowScheduler.add(BeginInstRoutineEachFrame);
flowScheduler.add(BeginInstRoutineEnd);
// flowScheduler.add(isiRoutineBegin);
// flowScheduler.add(isiRoutineEachFrame);
// flowScheduler.add(isiRoutineEnd);
const mainLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mainLoopLoopBegin, mainLoopLoopScheduler);
flowScheduler.add(mainLoopLoopScheduler);
flowScheduler.add(mainLoopLoopEnd);
flowScheduler.add(ThankYouRoutineBegin);
flowScheduler.add(ThankYouRoutineEachFrame);
flowScheduler.add(ThankYouRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});
var subIDArray;
var subID;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    var frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  subIDArray = Math.floor((Math.random() * 100000) + 1);
  subID = subIDArray[0];
  console.log("subID:" + subID);
  return Scheduler.Event.NEXT;
}

// function experimentInit() {
  // Initialize components for Routine "Instr"
var InstrClock = new util.Clock();
var Instructions = new visual.TextStim({win: psychoJS.window,text: 'default text',font: 'Arial',units : undefined, pos: [0, 0], height: 1.0,  wrapWidth: 1.5,color: new util.Color('white'),  opacity: 1});

var space = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var t;

// var earningsStr;
// earningsStr = new visual.TextStim({win: psychoJS.window,name: 'GambleAmt',text: '',font: 'Arial',units : undefined, pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -2.0 });




// var subID;
// subID = parseInt(subIDStr)


var frameRemains;
// var earning=0
var chosenMoney = 0
// Initialize components for Routine "Inst2"
var Inst2Clock = new util.Clock();
var instruct3 = new visual.TextStim({win: psychoJS.window,text: 'You will have three seconds to make your choice upon seeing the options. \n\nTo choose the option on the left, press "1". To choose the option on the right, press "2".\n\nYou will first be playing some practice rounds. To begin the practice, press enter!',font: 'Arial',units : undefined, pos: [0, 0], height: 0.045,  wrapWidth: 1.5, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0});
var Inst3Clock = new util.Clock();
var instruct2 = new visual.TextStim({win: psychoJS.window,text: 'You will be instructed to either "DE-EMPHASIZE" or "EMPHASIZE." When you see the word "DE-EMPHASIZE," we would like you to reinterpret the upcoming decision as one of many opportunities, and that the outcome is not very important. Try to think that the decision is not a big deal; you will have other chances. \n\nWhen you see the word "EMPHASIZE" we would like you to stress the importance of the upcoming decision. Please reinterpret the upcoming decision as very important and one in which you need to make the right choice. \n\nPress SPACE to continue.',font: 'Arial',units : undefined, pos: [0, 0], height: 0.045,  wrapWidth: 1.5, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0});
var enter3 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

var enter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

// Initialize components for Routine "isi"
var isiClock = new util.Clock();
var isi2 = new visual.TextStim({win: psychoJS.window,name: 'isi2',text: '+',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });

// Initialize components for Routine "PracticeCue"
var PracticeCueClock = new util.Clock();
var text = new visual.TextStim({win: psychoJS.window,name: 'text',text: 'EMPHASIZE',font: 'Arial',units : undefined, pos: [0, 0], height: 0.13,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });

// Initialize components for Routine "isi"
var isi1Clock = new util.Clock();
var isi1 = new visual.TextStim({win: psychoJS.window,name: 'isi2',text: '+',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });

// Initialize components for Routine "Practice"
var PracticeClock = new util.Clock();
var Line = new visual.ShapeStim ({win: psychoJS.window, name: 'Line', vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],ori: 90, pos: [0, 0],lineWidth: 1.0, lineColor: new util.Color(1.0),fillColor: new util.Color(1.0),opacity: 1, depth: 0, interpolate: true,});

var choice = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

var GambleAmt = new visual.TextStim({win: psychoJS.window,name: 'GambleAmt',text: '',font: 'Arial',units : undefined, pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -2.0 });

var SureAmt = new visual.TextStim({win: psychoJS.window,name: 'SureAmt',text: '',font: 'Arial',units : undefined, pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -3.0 });

var GambleProb = new visual.TextStim({win: psychoJS.window,text: '',font: 'Arial',units : undefined, pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -4.0 });

var SureProb = new visual.TextStim({win: psychoJS.window,name: 'SureProb',text: '',font: 'Arial',units : undefined, pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -5.0 });

var blank = new visual.TextStim({win: psychoJS.window,name: 'blank',text: '',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -7.0 });

var moneyBank = new visual.Rect ({win: psychoJS.window, name: 'moneyBank', width: [0.46, 0.24][0], height: [0.46, 0.24][1],ori: 0, pos: [0.68, (- 0.42)],lineWidth: 8, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),fillColor: new util.Color(undefined),opacity: 1, depth: -8, interpolate: true,});

var earningsText = new visual.TextStim({win: psychoJS.window,name: 'earningsText',text: 'default text',font: 'Arial',units : undefined, pos: [0.64, (- 0.42)], height: 0.09,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: -9.0 });

// Initialize components for Routine "BeginInst"
var BeginInstClock = new util.Clock();
var text_2 = new visual.TextStim({win: psychoJS.window,name: 'text_2',text: 'You will now begin the full task. Your money bank will begin with the $6.00 you earned from the card task. \n\nPress SPACE to start!',font: 'Arial',units : undefined, pos: [0, 0], height: 0.055,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });

var key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var ISIClock = new util.Clock();
var isi5 = new visual.TextStim({win: psychoJS.window,name: 'isi5',text: '+',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });
// Initialize components for Routine "isi"
var isi3Clock = new util.Clock();
var isi3 = new visual.TextStim({win: psychoJS.window,name: 'isi2',text: '+',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });

// Initialize components for Routine "Cue"
var CueClock = new util.Clock();
var cue = new visual.TextStim({win: psychoJS.window,name: 'cue',text: 'default text',font: 'Arial',units : undefined, pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });

// Initialize components for Routine "isi"
var isi4Clock = new util.Clock();
var isi4 = new visual.TextStim({win: psychoJS.window,name: 'isi2',text: '+',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });

// Initialize components for Routine "Practice"
var PracticeClock = new util.Clock();
var Line = new visual.ShapeStim ({win: psychoJS.window, name: 'Line', vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],ori: 90, pos: [0, 0],lineWidth: 1.0, lineColor: new util.Color(1.0),fillColor: new util.Color(1.0),opacity: 1, depth: 0, interpolate: true,});

var choice = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

// Initialize components for Routine "ThankYou"
var ThankYouClock = new util.Clock();
var tyText = new visual.TextStim({win: psychoJS.window,name: 'tyText',text: "default",font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });


var FiftyGamble;
var SixtyGamble;
var ThirtyGamble; 
var array
var result;
var probability;
FiftyGamble = [1,0];
SixtyGamble = [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0];
ThirtyGamble = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
function random_Gamble(probability){
  return probability[Math.floor(Math.random()*probability.length)];
 }

var feedbackVar;
feedbackVar = [];
var feedbackText;
feedbackText  = new visual.TextStim({win: psychoJS.window,name: 'fb',text: "default",font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,color: new util.Color('white'),  opacity: 1,depth: 0.0 });

var feedbackClock;
feedbackClock = new util.Clock();

// Create some handy timers
var globalClock = new util.Clock();  // to track the time since experiment started
var routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine

var t;
var frameN;
var InstrComponents;
function InstrRoutineBegin() {
  //------Prepare to start Routine 'Instr'-------
  t = 0;
  InstrClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  Instructions.setColor(new util.Color('white'));
  Instructions.setPos([0, 0]);
  Instructions.setText('In this part of the study, you will be making a series of monetary decisions.\n\nYou will have the choice between taking a gamble or choosing a sure option. For each gamble, you will have a chance of either winning money, losing money, or gaining nothing, while the sure option guarantees a win or loss. \n\nYou will be given regulation instructions prior to a block of trials. Please employ the strategy while making your decision. \n\nPress SPACE to continue. ');
  Instructions.setFont('Arial');
  Instructions.setHeight(0.045);
  space.keys = undefined;
  space.rt = undefined;
  // keep track of which components have finished
  InstrComponents = [];
  InstrComponents.push(Instructions);
  InstrComponents.push(space);
  
  for (const thisComponent of InstrComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function InstrRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instr'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstrClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Instructions* updates
  if (t >= 0.0 && Instructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Instructions.tStart = t;  // (not accounting for frame time here)
    Instructions.frameNStart = frameN;  // exact frame index
    Instructions.setAutoDraw(true);
  }

  
  // *space* updates
  if (t >= 0.0 && space.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    space.tStart = t;  // (not accounting for frame time here)
    space.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { space.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { space.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { space.clearEvents(); });
  }

  if (space.status === PsychoJS.Status.STARTED) {
    let theseKeys = space.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      space.keys = theseKeys[0].name;  // just the last key pressed
      space.rt = theseKeys[0].rt;
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
  for (const thisComponent of InstrComponents)
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

function InstrRoutineEnd() {
  //------Ending Routine 'Instr'-------
  for (const thisComponent of InstrComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof space.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('space.rt', space.rt);
      routineTimer.reset();
      }
  
  space.stop();
  // the Routine "Instr" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}
var Inst2Components;
function Inst2RoutineBegin() {
  //------Prepare to start Routine 'Inst2'-------
  t = 0;
  Inst2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  enter.keys = undefined;
  enter.rt = undefined;
  // keep track of which components have finished
  Inst2Components = [];
  Inst2Components.push(instruct2);
  Inst2Components.push(enter);
  
  for (const thisComponent of Inst2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function Inst2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Inst2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Inst2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instruct2* updates
  if (t >= 0.0 && instruct2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruct2.tStart = t;  // (not accounting for frame time here)
    instruct2.frameNStart = frameN;  // exact frame index
    instruct2.setAutoDraw(true);
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
    let theseKeys = enter.getKeys({keyList: ['space'], waitRelease: false});
    
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
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of Inst2Components)
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

function Inst2RoutineEnd() {
  //------Ending Routine 'Inst2'-------
  for (const thisComponent of Inst2Components) {
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
  // the Routine "Inst2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Inst3Components;
function Inst3RoutineBegin() {
  //------Prepare to start Routine 'Inst2'-------
  t = 0;
  Inst3Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  enter3.keys = undefined;
  enter3.rt = undefined;
  // keep track of which components have finished
  Inst3Components = [];
  Inst3Components.push(instruct3);
  Inst3Components.push(enter3);
  
  for (const thisComponent of Inst3Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function Inst3RoutineEachFrame() {
  //------Loop for each frame of Routine 'Inst2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Inst3Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instruct2* updates
  if (t >= 0.0 && instruct3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruct3.tStart = t;  // (not accounting for frame time here)
    instruct3.frameNStart = frameN;  // exact frame index
    instruct3.setAutoDraw(true);
  }

  
  // *enter* updates
  if (t >= 0.0 && enter3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    enter3.tStart = t;  // (not accounting for frame time here)
    enter3.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { enter3.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { enter3.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { enter3.clearEvents(); });
  }

  if (enter3.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter3.getKeys({keyList: ['return'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      enter3.keys = theseKeys[0].name;  // just the last key pressed
      enter3.rt = theseKeys[0].rt;
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
  for (const thisComponent of Inst3Components)
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

function Inst3RoutineEnd() {
  //------Ending Routine 'Inst2'-------
  for (const thisComponent of Inst3Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter3.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('enter.rt', enter3.rt);
      routineTimer.reset();
      }
  
  enter3.stop();
  // the Routine "Inst2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}



var PracticeCueComponents;
function PracticeCueRoutineBegin() {
  //------Prepare to start Routine 'PracticeCue'-------
  t = 0;
  PracticeCueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  PracticeCueComponents = [];
  PracticeCueComponents.push(text);
  
  for (const thisComponent of PracticeCueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function PracticeCueRoutineEachFrame() {
  //------Loop for each frame of Routine 'PracticeCue'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = PracticeCueClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text.setAutoDraw(false);
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
  for (const thisComponent of PracticeCueComponents)
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

function PracticeCueRoutineEnd() {
  //------Ending Routine 'PracticeCue'-------
  for (const thisComponent of PracticeCueComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


var PracticeLoop;
var currentLoop;
function PracticeLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  PracticeLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'PracticeSlotMach.csv', '0:3'),
    seed: undefined, name: 'PracticeLoop'});
  psychoJS.experiment.addLoop(PracticeLoop); // add the loop to the experiment
  currentLoop = PracticeLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPracticeLoop of PracticeLoop) {
    thisScheduler.add(importConditions(PracticeLoop));
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(PracticeRoutineBegin);
    thisScheduler.add(PracticeRoutineEachFrame);
    thisScheduler.add(PracticeRoutineEnd);
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(feedbackRoutineBegin);
    thisScheduler.add(feedbackRoutineEachFrame);
    thisScheduler.add(feedbackRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

function PracticeLoopLoopEnd() {
  psychoJS.experiment.removeLoop(PracticeLoop);

  return Scheduler.Event.NEXT;
}

var isiComponents;
function isiRoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isiClock.reset(); // clock
  frameN = -1;
  routineTimer.add(5.000000);
  // update component parameters for each repeat
  isi2.setText('+');
  // keep track of which components have finished
  isiComponents = [];
  isiComponents.push(isi2);
  
  for (const thisComponent of isiComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function isiRoutineEachFrame() {
  //------Loop for each frame of Routine 'isi'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = isiClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi2* updates
  if (t >= 0.0 && isi2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi2.tStart = t;  // (not accounting for frame time here)
    isi2.frameNStart = frameN;  // exact frame index
    isi2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (isi2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isi2.setAutoDraw(false);
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

var mainLoop;
function mainLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  mainLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'SlotMachRows.csv',
    seed: undefined, name: 'mainLoop'});
  psychoJS.experiment.addLoop(mainLoop); // add the loop to the experiment
  currentLoop = mainLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisMainLoop of mainLoop) {
    thisScheduler.add(importConditions(mainLoop));
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(CueRoutineBegin);
    thisScheduler.add(CueRoutineEachFrame);
    thisScheduler.add(CueRoutineEnd);
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
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'SlotMachine.csv', Rows),
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(isi1RoutineBegin);
    thisScheduler.add(isi1RoutineEachFrame);
    thisScheduler.add(isi1RoutineEnd);
    thisScheduler.add(MainRoutineBegin);
    thisScheduler.add(MainRoutineEachFrame);
    thisScheduler.add(MainRoutineEnd);
    thisScheduler.add(isi3RoutineBegin);
    thisScheduler.add(isi3RoutineEachFrame);
    thisScheduler.add(isi3RoutineEnd);
    thisScheduler.add(feedbackRoutineBegin);
    thisScheduler.add(feedbackRoutineEachFrame);
    thisScheduler.add(feedbackRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

function mainLoopLoopEnd() {
  psychoJS.experiment.removeLoop(mainLoop);

  return Scheduler.Event.NEXT;
}

var isi1Components;
function isi1RoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isi1Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  isi2.setText('+');
  // keep track of which components have finished
  isi1Components = [];
  isi1Components.push(isi1);
  
  for (const thisComponent of isi1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function isi1RoutineEachFrame() {
  //------Loop for each frame of Routine 'isi'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = isi1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi2* updates
  if (t >= 0.0 && isi1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi1.tStart = t;  // (not accounting for frame time here)
    isi1.frameNStart = frameN;  // exact frame index
    isi1.setAutoDraw(true);
    console.log('isi1 being shown ');
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (isi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isi1.setAutoDraw(false);
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
  for (const thisComponent of isi1Components)
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

function isi1RoutineEnd() {
  //------Ending Routine 'isi'-------
  for (const thisComponent of isi1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


var isi3Components;
function isi3RoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isi3Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  isi3.setText('+');
  // keep track of which components have finished
  isi3Components = [];
  isi3Components.push(isi3);
  
  for (const thisComponent of isi3Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function isi3RoutineEachFrame() {
  //------Loop for each frame of Routine 'isi'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = isi3Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi2* updates
  if (t >= 0.0 && isi3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi3.tStart = t;  // (not accounting for frame time here)
    isi3.frameNStart = frameN;  // exact frame index
    isi3.setAutoDraw(true);
    console.log('isi3 being shown');
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (isi3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isi3.setAutoDraw(false);
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
  for (const thisComponent of isi3Components)
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

function isi3RoutineEnd() {
  //------Ending Routine 'isi'-------
  for (const thisComponent of isi3Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var isi4Components;
function isi4RoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isi4Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  isi4.setText('+');
  // keep track of which components have finished
  isi4Components = [];
  isi4Components.push(isi4);
  
  for (const thisComponent of isi4Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function isi4RoutineEachFrame() {
  //------Loop for each frame of Routine 'isi'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = isi4Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi2* updates
  if (t >= 0.0 && isi4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi4.tStart = t;  // (not accounting for frame time here)
    isi4.frameNStart = frameN;  // exact frame index
    isi4.setAutoDraw(true);
    console.log('isi4 being shown');
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (isi4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isi4.setAutoDraw(false);
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
  for (const thisComponent of isi4Components)
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

function isi4RoutineEnd() {
  //------Ending Routine 'isi'-------
  for (const thisComponent of isi4Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


var PracticeComponents;
var leftMoney;
var rightMoney;
var leftVarText;
var leftVarMoney;
var rightVarText;
var rightVarMoney;
var result;
var chosenMoney;
var probs;
var probability;
var leftMoneyVar;
var rightMoneyVar;



// var earn;
var earnings;
var earningsStr;
earnings = 0;
var earningsFixed;
earningsFixed = earnings.toFixed(2);
earningsStr = earningsFixed.toString();
function PracticeRoutineBegin() {
  //------Prepare to start Routine 'Practice'-------
  t = 0;
  PracticeClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat

  if (subID%2 == 1){
      leftVarText = (gambleWinLoss);
      leftVarMoney = (gamble);
      rightVarText = (sureWinLoss);
      rightVarMoney = (sure);
      }
  if (subID%2== 0){
      rightVarText= (gambleWinLoss);
      rightVarMoney= (gamble);
      leftVarText= (sureWinLoss);
      leftVarMoney= (sure);
      }
  
  leftMoneyVar = parseFloat(leftVarMoney);
  rightMoneyVar = parseFloat(rightVarMoney);
  leftMoney = "$" + parseFloat(leftVarMoney).toFixed(2);
  rightMoney = "$" + parseFloat(rightVarMoney).toFixed(2);
  var WinLossType;
  WinLossType = parseInt(WinLossCode)
  blank.setText('');
//   earningsText.setText(earningsStr);
  Line.setSize([3, 0.5]);
  Line.setFillColor(new util.Color([(- 1.0), (- 1.0), (- 1.0)]));
  Line.setLineColor(new util.Color([(- 1.0), (- 1.0), (- 1.0)]));
  Line.setLineWidth(7);
  choice.keys = undefined;
  choice.rt = undefined;
  GambleAmt.setColor(new util.Color('white'));
  GambleAmt.setPos([(- 0.41), (- 0.1)]);
  GambleAmt.setFont('Arial');
  GambleAmt.setHeight(0.11);
  SureAmt.setColor(new util.Color('white'));
  SureAmt.setPos([0.41, (- 0.1)]);
  SureAmt.setFont('Arial');
  SureAmt.setHeight(0.11);
  GambleProb.setColor(new util.Color('white'));
  GambleProb.setPos([(- 0.41), 0.3]);
  GambleProb.setFont('Arial');
  GambleProb.setHeight(0.13);
  SureProb.setColor(new util.Color('white'));
  SureProb.setPos([0.41, 0.3]);
  SureProb.setFont('Arial');
  SureProb.setHeight(0.13);
  earningsText.setText("$0.00");

//   earn = earnings.toFixed(2);
//   earningsText.setText("$" + toString(earn));

  // keep track of which components have finished
  PracticeComponents = [];
  PracticeComponents.push(Line);
  PracticeComponents.push(choice);
  PracticeComponents.push(GambleAmt);
  PracticeComponents.push(SureAmt);
  PracticeComponents.push(GambleProb);
  PracticeComponents.push(SureProb);
  PracticeComponents.push(blank);
  PracticeComponents.push(moneyBank);
  PracticeComponents.push(earningsText);
//   PracticeComponents.push(probability);  
//   PracticeComponents.push(FiftyGamble);
//   PracticeComponents.push(ThirtyGamble);  
//   PracticeComponents.push(SixtyGamble);

  for (const thisComponent of PracticeComponents)
    if ('status' in thisComponent){
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
    }

  return Scheduler.Event.NEXT;
}

function PracticeRoutineEachFrame() {
  //------Loop for each frame of Routine 'Practice'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = PracticeClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Line* updates
  if (t >= 0.0 && Line.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Line.tStart = t;  // (not accounting for frame time here)
    Line.frameNStart = frameN;  // exact frame index
    Line.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Line.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Line.setAutoDraw(false);
  }
  
  // *choice* updates
  if (t >= 0 && choice.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choice.tStart = t;  // (not accounting for frame time here)
    choice.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { choice.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { choice.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { choice.clearEvents(); });
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    choice.status = PsychoJS.Status.FINISHED;
  }

  if (choice.status === PsychoJS.Status.STARTED) {
    let theseKeys = choice.getKeys({keyList: ['1', '2'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      choice.keys = theseKeys[0].name;  // just the last key pressed
      choice.rt = theseKeys[0].rt;
    }
  }
  
  
  // *GambleAmt* updates
  if (t >= 0 && GambleAmt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    GambleAmt.tStart = t;  // (not accounting for frame time here)
    GambleAmt.frameNStart = frameN;  // exact frame index
    GambleAmt.setAutoDraw(true);  
    GambleAmt.setText(leftMoney);

  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (GambleAmt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    GambleAmt.setAutoDraw(false);
  }
  
  // *SureAmt* updates
  if (t >= 0 && SureAmt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    SureAmt.tStart = t;  // (not accounting for frame time here)
    SureAmt.frameNStart = frameN;  // exact frame index
    SureAmt.setAutoDraw(true);
    SureAmt.setText(rightMoney);

  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (SureAmt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    SureAmt.setAutoDraw(false);
  }
  
  // *GambleProb* updates
  if (t >= 0 && GambleProb.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    GambleProb.tStart = t;  // (not accounting for frame time here)
    GambleProb.frameNStart = frameN;  // exact frame index
    GambleProb.setAutoDraw(true);
    GambleProb.setText(leftVarText);

  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (GambleProb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    GambleProb.setAutoDraw(false);
  }
  
  // *SureProb* updates
  if (t >= 0 && SureProb.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    SureProb.tStart = t;  // (not accounting for frame time here)
    SureProb.frameNStart = frameN;  // exact frame index
    SureProb.setAutoDraw(true);
    SureProb.setText(rightVarText);
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (SureProb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    SureProb.setAutoDraw(false);
  }
  
  if (choice.keys === '1'){
      GambleAmt.setColor(new util.Color("green"));;
      chosenMoney = leftMoney;
      choice.status = PsychoJS.Status.FINISHED;
      }
  if (choice.keys === '2'){
      SureAmt.setColor(new util.Color("green"));;
      chosenMoney = rightMoney;
      choice.status = PsychoJS.Status.FINISHED;
      }
      
  if ((choice.keys === '1' || choice.keys === '2') && blank.status === PsychoJS.Status.NOT_STARTED){
      blank.tStart = t;
      blank.frameNStart = frameN;
      blank.setAutoDraw(true);
      }
  
  // *blank* updates
  if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blank.tStart = t;  // (not accounting for frame time here)
    blank.frameNStart = frameN;  // exact frame index
    blank.setAutoDraw(true);
  }

  frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blank.setAutoDraw(false);
  }
  
  // *moneyBank* updates
  if (t >= 0.0 && moneyBank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    moneyBank.tStart = t;  // (not accounting for frame time here)
    moneyBank.frameNStart = frameN;  // exact frame index
    moneyBank.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (moneyBank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    moneyBank.setAutoDraw(false);
  }
  
  // *earningsText* updates
  if (t >= 0.0 && earningsText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    earningsText.tStart = t;  // (not accounting for frame time here)
    earningsText.frameNStart = frameN;  // exact frame index
    earningsText.setAutoDraw(true);
    earningsText.setText("$" + earningsStr);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (earningsText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    earningsText.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
//   'status' in thisComponent && 
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of PracticeComponents)
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

function PracticeRoutineEnd() {
  //------Ending Routine 'Practice'-------
  choice.stop();
  
  if (choice.keys == '1'){
      chosenMoney = leftMoneyVar;
      }
  if (choice.keys == '2'){
      chosenMoney = rightMoneyVar;
      }
  if (choice.keys !== undefined){
      if (subID%2==1){
         if (choice.keys == '1' && WinLossCode== 1){
             console.log('gambled during win condition');
             probs = parseInt(gambleProb);
             if (probs === 65){
                 probability = SixtyGamble;
                 result = random_Gamble(probability);
                 console.log('65% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 35){
                 probability = ThirtyGamble;
                 result = random_Gamble(probability);
                 console.log('35% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 50){
                 probability = FiftyGamble;
                 result = random_Gamble(probability);
                 console.log('50% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
            //  return result;
            
             if (result === 1){
                 feedbackVar = 1;
                 earnings = earnings + chosenMoney;
                 console.log('Won money earnings:');
                 console.log(earnings);
             }
             if (result === 0){
                 feedbackVar = 3;
             }
            //  #    if result == 0: #lose
            //   #       earnings += 0
             }
         if (choice.keys === '1' && WinLossCode===0){  
             console.log('gambled during lose condition');
            // #gamProbability(gamProb)
             probs = parseInt(gambleProb);
             if (probs === 65){
                 probability = SixtyGamble;
                 result = random_Gamble(probability);
                 console.log('65% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 35){
                 probability = ThirtyGamble;
                 result = random_Gamble(probability);
                 console.log('35% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 50){
                 probability = FiftyGamble;
                 result = random_Gamble(probability);
                 console.log('50% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             
             
            //  return result;
             if (result === 1){
                feedbackVar = 2;
                earnings = earnings - chosenMoney;
                console.log('Lost Money earnings:');
                console.log(earnings);
                }
             if(result === 0){
                 feedbackVar = 3;
             }
            }
        //   #      if result == 0: #win
        //   #          earnings += 0
                      
         if (choice.keys === '2'&& WinLossCode ===1){  
             console.log('did not gamble for win condition');
             earnings = earnings + chosenMoney;
             feedbackVar = 1;
             console.log('Won sure money earnings:');
             console.log(earnings);
             }
         if (choice.keys === '2' && WinLossCode === 0){
             earnings = earnings - chosenMoney;
             feedbackVar = 2;
             console.log('Lost sure Money earnings:');
             console.log(earnings);
             }
  
      }
      if (subID%2==0){
         if (choice.keys === '2' && WinLossCode === 1){ 
             console.log('gambled during win condition');
             probs = parseInt(gambleProb);
             
             if (probs === 65){
                 probability = SixtyGamble;
                 result = random_Gamble(probability);
                 console.log('65% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 35){
                 probability = ThirtyGamble;
                 result = random_Gamble(probability);
                 console.log('35% gamble');
                 console.log('gamble result:');
                 console.log(result);
             }
             if (probs === 50){
                 probability = FiftyGamble;
                 result = random_Gamble(probability);
                 console.log('50% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             
            //  return result;
             
             if (result === 1){
                 feedbackVar = 1;
                 earnings = earnings + chosenMoney;
                 console.log('won money earnings:');
                 console.log(earnings);
                 }
             if(result === 0) {
                 feedbackVar = 3;
             }
             }  
         if (choice.keys === '2' && WinLossCode === 0){ 
             console.log('gambled during lose condition');
             
             probs = parseInt(gambleProb);
             
             if (probs === 65){
                 probability = SixtyGamble;
                 result = random_Gamble(probability);
                 console.log('65% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 35){
                 probability = ThirtyGamble;
                 result = random_Gamble(probability);
                 console.log('35% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 50){
                 probability = FiftyGamble;
                 result = random_Gamble(probability);
                 console.log('50% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             
            //  return result;
             
             if (result === 1){
                 feedbackVar = 2;
                 earnings = earnings - chosenMoney;
                 console.log('Lost Money earnings:');
                 console.log(earnings);
                 }
             if(result === 0){
                 feedbackVar = 3;
                }
             }         
         if (choice.keys === '1' && WinLossCode === 1){ 
             console.log('did not gamble during win condition');
             feedbackVar = 1;
             earnings = earnings + chosenMoney;
             console.log('Won sure money earnings:');
             console.log(earnings);
             }
         if (choice.keys === '1' && WinLossCode === 0){ 
             console.log('did not gamble for loss condition');
             earnings = earnings - chosenMoney;
             feedbackVar = 2;
             console.log('Lost sure Money earnings:');
             console.log(earnings);
             }
      }
    //   var earn;
    //   earn = earnings.toFixed(2);
     
  }
  GambleAmt.setColor(new util.Color("white"));
  SureAmt.setColor(new util.Color("white"));
  earningsFixed = earnings.toFixed(2);
  earningsStr = earningsFixed.toString();
  earningsText.setText("$" + earningsStr);
  if (blank.status===PsychoJS.Status.FINISHED){
      GambleAmt.setAutoDraw(false);
      SureAmt.setAutoDraw(false);
      SureProb.setAutoDraw(false);
      GambleProb.setAutoDraw(false);
      Line.setAutoDraw(false);
      moneyBank.setAutoDraw(false);
      earningsText.setAutoDraw(false);
      }
  for (const thisComponent of PracticeComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('choice.keys', choice.keys);
  if (typeof choice.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('choice.rt', choice.rt);
      }
  
  
  return Scheduler.Event.NEXT;
}

var chosenStr;
var winVar;
winVar = [];
var feedbackComponents;
function feedbackRoutineBegin() {
  //------Prepare to start Routine 'PracticeCue'-------
  t = 0;
  feedbackClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  feedbackComponents = [];
  feedbackComponents.push(feedbackText);
  chosenStr = "$" + chosenMoney.toFixed(2);
  if(feedbackVar=== 1 ) {
      feedbackText.setText("You won " + chosenStr);
  }
  if(feedbackVar=== 2 ) {
      feedbackText.setText("You lost " + chosenStr);
  }
  if (feedbackVar === 3 && WinLossCode === 1){
      feedbackText.setText("You won $0.00");
  }
  if (feedbackVar === 3 && WinLossCode === 0){
      feedbackText.setText("You lost $0.00");
  }
  if (choice.keys === undefined) {
      feedbackText.setText("No response made");
  }
  for (const thisComponent of feedbackComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function feedbackRoutineEachFrame() {
  //------Loop for each frame of Routine 'PracticeCue'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = feedbackClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && feedbackText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    feedbackText.tStart = t;  // (not accounting for frame time here)
    feedbackText.frameNStart = frameN;  // exact frame index
    feedbackText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (feedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    feedbackText.setAutoDraw(false);
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
  for (const thisComponent of feedbackComponents)
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

function feedbackRoutineEnd() {
  //------Ending Routine 'PracticeCue'-------
  for (const thisComponent of feedbackComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}




var MainClock;
MainClock = new util.Clock();
var MainComponents;
function MainRoutineBegin() {
  //------Prepare to start Routine 'Practice'-------
  t = 0;
  MainClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat

  if (subID%2 == 1){
      leftVarText = (gambleWinLoss);
      leftVarMoney = (gamble);
      rightVarText = (sureWinLoss);
      rightVarMoney = (sure);
      }
  if (subID%2== 0){
      rightVarText= (gambleWinLoss);
      rightVarMoney= (gamble);
      leftVarText= (sureWinLoss);
      leftVarMoney= (sure);
      }
  
  leftMoneyVar = parseFloat(leftVarMoney);
  rightMoneyVar = parseFloat(rightVarMoney);
  leftMoney = "$" + parseFloat(leftVarMoney).toFixed(2);
  rightMoney = "$" + parseFloat(rightVarMoney).toFixed(2);
  var WinLossType;
  WinLossType = parseInt(WinLossCode)
  blank.setText('');
//   earningsText.setText(earningsStr);
  Line.setSize([3, 0.5]);
  Line.setFillColor(new util.Color([(- 1.0), (- 1.0), (- 1.0)]));
  Line.setLineColor(new util.Color([(- 1.0), (- 1.0), (- 1.0)]));
  Line.setLineWidth(7);
  choice.keys = undefined;
  choice.rt = undefined;
  GambleAmt.setColor(new util.Color('white'));
  GambleAmt.setPos([(- 0.41), (- 0.1)]);
  GambleAmt.setFont('Arial');
  GambleAmt.setHeight(0.11);
  SureAmt.setColor(new util.Color('white'));
  SureAmt.setPos([0.41, (- 0.1)]);
  SureAmt.setFont('Arial');
  SureAmt.setHeight(0.11);
  GambleProb.setColor(new util.Color('white'));
  GambleProb.setPos([(- 0.41), 0.3]);
  GambleProb.setFont('Arial');
  GambleProb.setHeight(0.13);
  SureProb.setColor(new util.Color('white'));
  SureProb.setPos([0.41, 0.3]);
  SureProb.setFont('Arial');
  SureProb.setHeight(0.13);
  earningsText.setText("$0.00");

//   earn = earnings.toFixed(2);
//   earningsText.setText("$" + toString(earn));

  // keep track of which components have finished
  MainComponents = [];
  MainComponents.push(Line);
  MainComponents.push(choice);
  MainComponents.push(GambleAmt);
  MainComponents.push(SureAmt);
  MainComponents.push(GambleProb);
  MainComponents.push(SureProb);
  MainComponents.push(blank);
  MainComponents.push(moneyBank);
  MainComponents.push(earningsText);
//   PracticeComponents.push(probability);  
//   PracticeComponents.push(FiftyGamble);
//   PracticeComponents.push(ThirtyGamble);  
//   PracticeComponents.push(SixtyGamble);

  for (const thisComponent of MainComponents)
    if ('status' in thisComponent){
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
    }

  return Scheduler.Event.NEXT;
}

function MainRoutineEachFrame() {
  //------Loop for each frame of Routine 'Practice'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = MainClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Line* updates
  if (t >= 0.0 && Line.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Line.tStart = t;  // (not accounting for frame time here)
    Line.frameNStart = frameN;  // exact frame index
    Line.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Line.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Line.setAutoDraw(false);
  }
  
  // *choice* updates
  if (t >= 0 && choice.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choice.tStart = t;  // (not accounting for frame time here)
    choice.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { choice.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { choice.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { choice.clearEvents(); });
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    choice.status = PsychoJS.Status.FINISHED;
  }

  if (choice.status === PsychoJS.Status.STARTED) {
    let theseKeys = choice.getKeys({keyList: ['1', '2'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      choice.keys = theseKeys[0].name;  // just the last key pressed
      choice.rt = theseKeys[0].rt;
    }
  }
  
  
  // *GambleAmt* updates
  if (t >= 0 && GambleAmt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    GambleAmt.tStart = t;  // (not accounting for frame time here)
    GambleAmt.frameNStart = frameN;  // exact frame index
    GambleAmt.setAutoDraw(true);  
    GambleAmt.setText(leftMoney);

  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (GambleAmt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    GambleAmt.setAutoDraw(false);
  }
  
  // *SureAmt* updates
  if (t >= 0 && SureAmt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    SureAmt.tStart = t;  // (not accounting for frame time here)
    SureAmt.frameNStart = frameN;  // exact frame index
    SureAmt.setAutoDraw(true);
    SureAmt.setText(rightMoney);

  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (SureAmt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    SureAmt.setAutoDraw(false);
  }
  
  // *GambleProb* updates
  if (t >= 0 && GambleProb.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    GambleProb.tStart = t;  // (not accounting for frame time here)
    GambleProb.frameNStart = frameN;  // exact frame index
    GambleProb.setAutoDraw(true);
    GambleProb.setText(leftVarText);

  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (GambleProb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    GambleProb.setAutoDraw(false);
  }
  
  // *SureProb* updates
  if (t >= 0 && SureProb.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    SureProb.tStart = t;  // (not accounting for frame time here)
    SureProb.frameNStart = frameN;  // exact frame index
    SureProb.setAutoDraw(true);
    SureProb.setText(rightVarText);
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (SureProb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    SureProb.setAutoDraw(false);
  }
  
  if (choice.keys === '1'){
      GambleAmt.setColor(new util.Color("green"));;
      chosenMoney = leftMoney;
      choice.status = PsychoJS.Status.FINISHED;
      }
  if (choice.keys === '2'){
      SureAmt.setColor(new util.Color("green"));;
      chosenMoney = rightMoney;
      choice.status = PsychoJS.Status.FINISHED;
      }
      
  if ((choice.keys === '1' || choice.keys === '2') && blank.status === PsychoJS.Status.NOT_STARTED){
      blank.tStart = t;
      blank.frameNStart = frameN;
      blank.setAutoDraw(true);
      }
  
  // *blank* updates
  if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blank.tStart = t;  // (not accounting for frame time here)
    blank.frameNStart = frameN;  // exact frame index
    blank.setAutoDraw(true);
  }

  frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blank.setAutoDraw(false);
  }
  
  // *moneyBank* updates
  if (t >= 0.0 && moneyBank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    moneyBank.tStart = t;  // (not accounting for frame time here)
    moneyBank.frameNStart = frameN;  // exact frame index
    moneyBank.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (moneyBank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    moneyBank.setAutoDraw(false);
  }
  
  // *earningsText* updates
  if (t >= 0.0 && earningsText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    earningsText.tStart = t;  // (not accounting for frame time here)
    earningsText.frameNStart = frameN;  // exact frame index
    earningsText.setAutoDraw(true);
    earningsText.setText("$" + earningsStr);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (earningsText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    earningsText.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
//   'status' in thisComponent && 
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of MainComponents)
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

function MainRoutineEnd() {
  //------Ending Routine 'Practice'-------
  choice.stop();
  
  if (choice.keys == '1'){
      chosenMoney = leftMoneyVar;
      }
  if (choice.keys == '2'){
      chosenMoney = rightMoneyVar;
      }
  if (choice.keys !== undefined){
      if (subID%2==1){
         if (choice.keys == '1' && WinLossCode== 1){
             console.log('gambled during win condition');
             probs = parseInt(gambleProb);
             if (probs === 65){
                 probability = SixtyGamble;
                 result = random_Gamble(probability);
                 console.log('65% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 35){
                 probability = ThirtyGamble;
                 result = random_Gamble(probability);
                 console.log('35% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 50){
                 probability = FiftyGamble;
                 result = random_Gamble(probability);
                 console.log('50% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
            //  return result;
            
             if (result === 1){
                 feedbackVar = 1;
                 earnings = earnings + chosenMoney;
                 console.log('Won money earnings:');
                 console.log(earnings);
             }
             if(result === 0) {
                 feedbackVar = 3;
             }
            //  #    if result == 0: #lose
            //   #       earnings += 0
             }
         if (choice.keys === '1' && WinLossCode===0){  
             console.log('gambled during lose condition');
            // #gamProbability(gamProb)
             probs = parseInt(gambleProb);
             if (probs === 65){
                 probability = SixtyGamble;
                 result = random_Gamble(probability);
                 console.log('65% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 35){
                 probability = ThirtyGamble;
                 result = random_Gamble(probability);
                 console.log('35% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 50){
                 probability = FiftyGamble;
                 result = random_Gamble(probability);
                 console.log('50% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             
             
            //  return result;
             if (result === 1){
                feedbackVar = 2;
                earnings = earnings - chosenMoney;
                console.log('Lost Money earnings:');
                console.log(earnings);
                }
             if(result === 0) {
                 feedbackVar = 3;
             }
            }
        //   #      if result == 0: #win
        //   #          earnings += 0
                      
         if (choice.keys === '2'&& WinLossCode ===1){  
             console.log('did not gamble for win condition');
             earnings = earnings + chosenMoney;
             console.log('Won sure money earnings:');
             feedbackVar = 1;
             console.log(earnings);
             }
         if (choice.keys === '2' && WinLossCode === 0){
             earnings = earnings - chosenMoney;
             console.log('Lost sure Money earnings:');
             feedbackVar = 2;
             console.log(earnings);
             }
  
      }
      if (subID%2==0){
         if (choice.keys === '2' && WinLossCode === 1){ 
             console.log('gambled during win condition');
             probs = parseInt(gambleProb);
             
             if (probs === 65){
                 probability = SixtyGamble;
                 result = random_Gamble(probability);
                 console.log('65% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 35){
                 probability = ThirtyGamble;
                 result = random_Gamble(probability);
                 console.log('35% gamble');
                 console.log('gamble result:');
                 console.log(result);
             }
             if (probs === 50){
                 probability = FiftyGamble;
                 result = random_Gamble(probability);
                 console.log('50% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             
            //  return result;
             
             if (result === 1){
                 earnings = earnings + chosenMoney;
                 console.log('won money earnings:');
                 console.log(earnings);
                 feedbackVar = 1;
                 }
             if(result === 0){
                 feedbackVar = 3;
             }
             }  
         if (choice.keys === '2' && WinLossCode === 0){ 
             console.log('gambled during lose condition');
             
             probs = parseInt(gambleProb);
             
             if (probs === 65){
                 probability = SixtyGamble;
                 result = random_Gamble(probability);
                 console.log('65% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 35){
                 probability = ThirtyGamble;
                 result = random_Gamble(probability);
                 console.log('35% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             if (probs === 50){
                 probability = FiftyGamble;
                 result = random_Gamble(probability);
                 console.log('50% gamble');
                 console.log('gamble result:');
                 console.log(result);
                 }
             
            //  return result;
             
             if (result === 1){
                 feedbackVar = 1;
                 earnings = earnings - chosenMoney;
                 console.log('Lost Money earnings:');
                 console.log(earnings);
                 }
             if(result === 0){
                 feedbackVar = 3;
             }
             }         
         if (choice.keys === '1' && WinLossCode === 1){ 
             feedbackVar = 1;
             console.log('did not gamble during win condition');
             earnings = earnings + chosenMoney;
             console.log('Won sure money earnings:');
             console.log(earnings);
             }
         if (choice.keys === '1' && WinLossCode === 0){ 
             feedbackVar = 2;
             console.log('did not gamble for loss condition');
             earnings = earnings - chosenMoney;
             console.log('Lost sure Money earnings:');
             console.log(earnings);
             }
      }
    //   var earn;
    //   earn = earnings.toFixed(2);
     
  }
  GambleAmt.setColor(new util.Color("white"));
  SureAmt.setColor(new util.Color("white"));
  earningsFixed = earnings.toFixed(2);
  earningsStr = earningsFixed.toString();
  earningsText.setText("$" + earningsStr);
  if (blank.status===PsychoJS.Status.FINISHED){
      GambleAmt.setAutoDraw(false);
      SureAmt.setAutoDraw(false);
      SureProb.setAutoDraw(false);
      GambleProb.setAutoDraw(false);
      Line.setAutoDraw(false);
      moneyBank.setAutoDraw(false);
      earningsText.setAutoDraw(false);
      }
  for (const thisComponent of MainComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('choice.keys', choice.keys);
  if (typeof choice.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('choice.rt', choice.rt);
      }
  
  
  return Scheduler.Event.NEXT;
}


var ISIComponents;
function ISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  ISIClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISIComponents = [];
  ISIComponents.push(isi5);
  
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function ISIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi* updates
  if (t >= 0.0 && isi5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi5.tStart = t;  // (not accounting for frame time here)
    isi5.frameNStart = frameN;  // exact frame index
    isi5.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (isi5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isi5.setAutoDraw(false);
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
  for (const thisComponent of ISIComponents)
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


function ISIRoutineEnd() {
  //------Ending Routine 'ISI'-------
  for (const thisComponent of ISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var  BeginInstComponents;
function BeginInstRoutineBegin() {
  //------Prepare to start Routine 'BeginInst'-------
  t = 0;
  BeginInstClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp.keys = undefined;
  key_resp.rt = undefined;
  // keep track of which components have finished
  BeginInstComponents = [];
  BeginInstComponents.push(text_2);
  BeginInstComponents.push(key_resp);
  BeginInstComponents.push(earningsText);  
  for (const thisComponent of BeginInstComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function BeginInstRoutineEachFrame() {
  //------Loop for each frame of Routine 'BeginInst'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = BeginInstClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_2* updates
  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  
  // *key_resp* updates
  if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp.tStart = t;  // (not accounting for frame time here)
    key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
  }

  if (key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp.keys = theseKeys[0].name;  // just the last key pressed
      key_resp.rt = theseKeys[0].rt;
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
  for (const thisComponent of BeginInstComponents)
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
// earnings = 6;
// earningsFixed = earnings.toFixed(2);
// earningsStr = earningsFixed.toString();
// earningsText.setText("$6.00")
function BeginInstRoutineEnd() {
  //------Ending Routine 'BeginInst'-------
  for (const thisComponent of BeginInstComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  earnings = 6;
  earningsFixed = earnings.toFixed(2);
  earningsStr = earningsFixed.toString();
  earningsText.setText("$6.00")
//   earningsText.setText("$0.00")
  psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
  if (typeof key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      routineTimer.reset();
      }
  
  key_resp.stop();
  // the Routine "BeginInst" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}
var CueComponents;
function CueRoutineBegin() {
  //------Prepare to start Routine 'Cue'-------
  t = 0;
  CueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  cue.setText(CueType);
  // keep track of which components have finished
  CueComponents = [];
  CueComponents.push(cue);
  
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
  
  // *cue* updates
  if (t >= 0.0 && cue.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    cue.tStart = t;  // (not accounting for frame time here)
    cue.frameNStart = frameN;  // exact frame index
    cue.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    cue.setAutoDraw(false);
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
    tyText.setText("Thank you for playing!\n\nYour total earnings are $" + earningsStr)
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
