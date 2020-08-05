/********************* 
 * Slotmachtest Test *
 *********************/

import { PsychoJS } from 'https://pavlovia.org/lib/core.js';
import * as core from 'https://pavlovia.org/lib/core.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data.js';
import { Scheduler } from 'https://pavlovia.org/lib/util.js';
import * as util from 'https://pavlovia.org/lib/util.js';
import * as visual from 'https://pavlovia.org/lib/visual.js';
import { Sound } from 'https://pavlovia.org/lib/sound.js';

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
let expInfo = {'Participant': '', 'Age': '', 'Sex': '', 'Race': ''};

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
flowScheduler.add(isiRoutineBegin);
flowScheduler.add(isiRoutineEachFrame);
flowScheduler.add(isiRoutineEnd);
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
const mainLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mainLoopLoopBegin, mainLoopLoopScheduler);
flowScheduler.add(mainLoopLoopScheduler);
flowScheduler.add(mainLoopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);
var PracticeLoop;
var mainLoop;
var currentLoop;
// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});
var frameDur;
var earningsConcat;
var frameRemains;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.0';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var WinLossType;
var InstrClock;
var Instructions;
var space;
var Inst2Clock;
var enter;
var instruct2;
var key_resp;
var isiClock;
var isi2;
var PracticeCueClock;
var text;
var PracticeClock;
var Line;
var choice;
var GambleAmt;
var SureAmt;
var GambleProb;
var SureProb;
var earnings;
var earningsStr;
var subID;
var FiftyGamble;
var SixtyGamble;
var ThirtyGamble;
var earning;
var chosenMoney;
var probs;
var probability;
var result;
var probs;
var moneyBank;
var earningsText;
var BeginInstClock;
var text_2;
var CueClock;
var cue;
var globalClock;
var routineTimer;
var isiClock3;
var isi3;
var isiClock4;
var isi4;
var isi3Components;

InstrClock = new util.Clock();
Instructions = new visual.TextStim({win: psychoJS.window,text: 'In this part of the study, you will be making a series of monetary decisions. \n\nYou will have the choice between taking a gamble or choosing a sure option. \n\nFor each gamble, you will have a chance of either winning money, losing money, or not changing ',font: 'Arial',units : undefined, pos: [0, 0], height: 0.065,  wrapWidth: 1.6,color: new util.Color('white')});
space = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
Inst2Clock = new util.Clock();
instruct2 = new visual.TextStim({win: psychoJS.window,text: 'You will be given regulation intsructions prior to a block of trials. Please employ the strategy while making your decision. \n\nYou will have three seconds to make your choice upon seeing the options. \n\nTo choose the option on the left, press "1". To choose the option on the right, press "2".\n\nYou will first be playing some practice rounds. To begin the practice, press enter!',font: 'Arial',units : undefined, pos: [0, 0], height: 0.065,  wrapWidth: 1.6,color: new util.Color('white')});
enter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
isiClock = new util.Clock();
isi2 = new visual.TextStim({win: psychoJS.window,text: '+',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined,color: new util.Color('white')});
isiClock3 = new util.Clock();
isi3 = new visual.TextStim({win: psychoJS.window,text: '+',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined,color: new util.Color('white')});
isiClock4 = new util.Clock();
isi4= new visual.TextStim({win: psychoJS.window,text: '+',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined,color: new util.Color('white')});
PracticeCueClock = new util.Clock();
text = new visual.TextStim({win: psychoJS.window, text:'REGULATE', font: 'Arial', units: undefined, pos:[0,0], height: 0.1, wrapWidth:undefined, color:new util.Color('white')});
Line = new visual.ShapeStim({win: psychoJS.window, name: 'Line',units: undefined,vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],ori: 90, pos: [0, 0],lineWidth: 1.0, lineColor: new util.Color(1.0),fillColor: new util.Color(1.0),opacity: 1, depth: 0, interpolate: true});
choice = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
GambleAmt = new visual.TextStim({win: psychoJS.window, text:'default', font:'Arial', units: undefined, pos:[-0.41,-0.1], height: 0.11, wrapWidth: undefined, color:new util.Color('white')});
SureAmt = new visual.TextStim({win: psychoJS.window, text:'default', font:'Arial', units: undefined, pos:[0.41,-0.1], height: 0.11, wrapWidth: undefined, color:new util.Color('white')});
GambleProb = new visual.TextStim({win: psychoJS.window, text:'default', font:'Arial', units: undefined, pos:[-0.41,0.3], height: 0.13, wrapWidth: undefined, color:new util.Color('white')});
SureProb = new visual.TextStim({win: psychoJS.window, text:'default', font:'Arial', units: undefined, pos:[0.41,0.3], height: 0.13, wrapWidth: undefined, color:new util.Color('white')});
earnings = new visual.TextStim({win: psychoJS.window, text:'default', font:'Arial', units: undefined, pos:[0,0], height: 0.1, wrapWidth: undefined, color:new util.Color('white')});
moneyBank = new visual.Rect ({win: psychoJS.window,units: undefined,width: [0.46, 0.24][0], height: [0.46, 0.24][1],ori: 0, pos: [0.68, (- 0.42)],lineWidth: 8, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),fillColor: new util.Color(undefined),opacity: 1, depth: -8, interpolate: true});
earningsText = new visual.TextStim({win: psychoJS.window,text: '',font: 'Arial',units : undefined, pos: [0.67, -0.42], height: 0.1, color: new util.Color('white')});
BeginInstClock = new util.Clock();
text_2 = new visual.TextStim({win: psychoJS.window,text: 'You will now begin the full task. Press enter to start!',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined,color: new util.Color('white')});
CueClock = new util.Clock();
cue = new visual.TextStim({win: psychoJS.window,text: 'default text',font: 'Arial',units : undefined, pos: [0, 0], height: 0.15,  wrapWidth: undefined, color: new util.Color('white')}); 
PracticeClock = new util.Clock();
globalClock = new util.Clock();
routineTimer = new util.CountdownTimer();

earningsStr = "$" + String(earnings);
subID = parseInt(expInfo['participant']);
FiftyGamble = [1,0];
ThirtyGamble = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
SixtyGamble = [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0];
earning = 0 ;
chosenMoney = 0;

function random_Gamble(prob){
  return prob[Math.floor(Math.random()*prob.length)];
 }


function gamProbability(gamProb){
    probs = parseInt(gamProb);
    if(probs === 65){
        probability = SixtyGamble;
    }
    if(probs === 35){
        probability = ThirtyGamble;
    }
    if(probs === 50){
        probability = FiftyGamble;
    }
    result = random_Gamble(probability);
}

function loseFunc(chosenMoney, earning){
    earning -= chosenMoney;
}

function winFunc(chosenMoney, earnings){
    earning += chosenMoney;
}

function earningsFunct(gamProb, chosenMoney, WinLossType, earning){
    if(subID%2===0){
        if(choice.keys === '1' && WinLossType === 1){
            probs = parseInt(gamProb);
            if(probs === 65){
                probability = SixtyGamble;
                }
            if(probs === 35){
                probability = ThirtyGamble;
                }
            if(probs === 50){
                probability = FiftyGamble;
                }
            result = random_Gamble(probability);
            if (result === 1){
                earning += chosenMoney;
                }
        }
        if(choice.keys === '1' && WinLossType === 0){
            probs = parseInt(gamProb);
            if(probs === 65){
                probability = SixtyGamble;
                }
            if(probs === 35){
                probability = ThirtyGamble;
                }
            if(probs === 50){
                probability = FiftyGamble;
                }
            result = random_Gamble(probability);
            if (result === 1){
                earning -= chosenMoney;
                }
            }          
        if(choice.keys === '2' && WinLossType === 1){
            earnings += chosenMoney;
           }
        if(choice.keys === '2' && WinLossType === 0){
            earnings -= chosenMoney;
        }
    }
    if(subID%2===1){
        if(choice.keys === '2' && WinLossType === 1){
            probs = parseInt(gamProb);
            if(probs === 65){
                probability = SixtyGamble;
                }
            if(probs === 35){
                probability = ThirtyGamble;
                }
            if(probs === 50){
                probability = FiftyGamble;
                }
            result = random_Gamble(probability);
            if (result === 1){
                earning += chosenMoney;
                }
        }
        if(choice.keys === '2' && WinLossType === 0){
            probs = parseInt(gamProb);
            if(probs === 65){
                probability = SixtyGamble;
                }
            if(probs === 35){
                probability = ThirtyGamble;
                }
            if(probs === 50){
                probability = FiftyGamble;
                }
            result = random_Gamble(probability);
            if (result === 1){
                earning -= chosenMoney;
                }
            }          
        if(choice.keys === '1' && WinLossType === 1){
            earnings += chosenMoney;
           }
        if(choice.keys === '1' && WinLossType === 0){
            earnings -= chosenMoney;
        }
    }
}

var InstrComponents;
var t;
var frameN;

function InstrRoutineBegin() {
  t = 0;
  InstrClock.reset(); // clock
  frameN = -1;
  space.keys = undefined;
  space.rt = undefined;
  InstrComponents = [Instructions, space];

  for (const thisComponent of InstrComponents)
    if ('status' in thisComponent){
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
    }
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
  enter.keys = undefined;
  enter.rt = undefined;
  Inst2Components = [instruct2, enter];

  for (const thisComponent of Inst2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function Inst2RoutineEachFrame() {
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Inst2Clock.getTime();
  frameN = frameN + 1;
  if (t >= 0.0 && instruct2.status === PsychoJS.Status.NOT_STARTED) {
    instruct2.tStart = t;
    instruct2.frameNStart = frameN;  // exact frame index
    instruct2.setAutoDraw(true);
  }

  
  // *enter* updates
  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    enter.tStart = t;
    enter.frameNStart = frameN;
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });
    psychoJS.window.callOnFlip(function() { enter.start(); });
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

var isiComponents;
function isiRoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isiClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  isi2.setText('+');
  // keep track of which components have finished
  isiComponents = [isi2];

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

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
var isi2Components;


function isi2RoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isiClock3.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  isi3.setText('+');
  // keep track of which components have finished
  isi2Components = [isi3];

  for (const thisComponent of isi2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function isi2RoutineEachFrame() {
  //------Loop for each frame of Routine 'isi'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = isiClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi2* updates
  if (t >= 0.0 && isi3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi3.tStart = t;  // (not accounting for frame time here)
    isi3.frameNStart = frameN;  // exact frame index
    isi3.setAutoDraw(true);
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

function isi2RoutineEnd() {
  //------Ending Routine 'isi'-------
  for (const thisComponent of isi2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}
function isi3RoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isiClock4.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  isi4.setText('+');
  // keep track of which components have finished
  isi3Components = [isi4];

  for (const thisComponent of isi3Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function isi3RoutineEachFrame() {
  //------Loop for each frame of Routine 'isi'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = isiClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi2* updates
  if (t >= 0.0 && isi4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi4.tStart = t;  // (not accounting for frame time here)
    isi4.frameNStart = frameN;  // exact frame index
    isi4.setAutoDraw(true);
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

function isi3RoutineEnd() {
  //------Ending Routine 'isi'-------
  for (const thisComponent of isi3Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


var PracticeCueComponents;
function PracticeCueRoutineBegin() {
  t = 0;
  PracticeCueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  PracticeCueComponents = [text];

  for (const thisComponent of PracticeCueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function PracticeCueRoutineEachFrame() {
  let continueRoutine = true; 

  t = PracticeCueClock.getTime();
  frameN = frameN + 1;
  
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    text.tStart = t; 
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text.setAutoDraw(false);
  }

  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of PracticeCueComponents)
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

function PracticeCueRoutineEnd() {
  for (const thisComponent of PracticeCueComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

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
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

function PracticeLoopLoopEnd() {
  psychoJS.experiment.removeLoop(PracticeLoop);

  return Scheduler.Event.NEXT;
}

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
    thisScheduler.add(isi2RoutineBegin);
    thisScheduler.add(isi2RoutineEachFrame);
    thisScheduler.add(isi2RoutineEnd);
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
    thisScheduler.add(isi3RoutineBegin);
    thisScheduler.add(isi3RoutineEachFrame);
    thisScheduler.add(isi3RoutineEnd);
    thisScheduler.add(PracticeRoutineBegin);
    thisScheduler.add(PracticeRoutineEachFrame);
    thisScheduler.add(PracticeRoutineEnd);
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
var blank;
var PracticeComponents;
blank = new visual.TextStim({win: psychoJS.window,text: '',font: 'Arial',units : undefined, pos: [0, 0], height: 0.1,  wrapWidth: undefined, color: new util.Color('white'),  opacity: 1,depth: -7.0 });
var leftVarText = [];
var rightVarText = [];
var leftVarMoney = [];
var rightVarMoney = [];
var result = [];
var leftMoney = [];
var rightMoney = [];
function PracticeRoutineBegin(){
  t = 0;
  PracticeClock.reset(); // clock
  frameN = -1;

  if (subID%2 === 1){
      leftVarText = (gambleWinLoss);
      leftVarMoney = (gamble);
      rightVarText = (sureWinLoss);
      rightVarMoney = (sure);
  }
  if (subID%2===0){
      leftVarText = (sureWinLoss);
      leftVarMoney = (sure);
      rightVarText = (gambleWinLoss);
      rightVarMoney = (gamble);
  }
  GambleAmt.setText(leftVarMoney);
  SureAmt.setText(rightVarMoney);
  GambleProb.setText(leftVarText);
  SureProb.setText(rightVarText);
  
  leftMoney = parseFloat(leftVarMoney).toFixed(2);
  rightMoney = parseFloat(rightVarMoney).toFixed(2);
  WinLossType = parseInt(WinLossCode);
  blank.setText('');
  earningsText.setText(earningsStr);
  
  PracticeComponents = [Line, choice, blank, GambleAmt, SureAmt, GambleProb, SureProb, moneyBank, earningsText];
  for (const thisComponent of PracticeComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function PracticeRoutineEachFrame() {
  //------Loop for each frame of Routine 'Practice'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
//   PracticeComponents = [Line, choice, blank, GambleAmt, SureAmt, GambleProb, SureProb, moneyBank, earningsText];
  t = PracticeClock.getTime();
  frameN = frameN + 1;
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
     
 if (t >= 0 && GambleAmt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
     GambleAmt.tStart = t;  // (not accounting for frame time here)
     GambleAmt.frameNStart = frameN;  // exact frame index
     GambleAmt.setAutoDraw(true);
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
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (SureProb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
     SureProb.setAutoDraw(false);
  }
  if (choice.keys === '1'){
      GambleAmt.setColor(new util.Color('green'));
      chosenMoney = leftMoney;
      }
  if (choice.keys === '2'){
      SureAmt.setColor(new util.Color('green'));
      chosenMoney = rightMoney;
      }
      
  if ((choice.keys === '1' || choice.keys === '2') && blank.status == PsychoJS.Status.NOT_STARTED){
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
  for (const thisComponent of PracticeComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
   }
  psychoJS.experiment.addData('choice.keys', choice.keys);
  if (typeof choice.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('choice.rt', choice.rt);
      }
  
  choice.stop();

  if (choice.keys === '1'){
      chosenMoney = leftMoney;
    }
  if (choice.keys === '2'){
      chosenMoney = rightMoney;
  }
  if(choice.keys !== undefined){
      if (subID%2===1){
          if (choice.keys === '1' && WinLossCode === 1){
              probs = parseInt(gambleProb);
              if (probs === 65){
                  probability = SixtyGamble;
              }
              if (probs === 35){
                  probability = ThirtyGamble;
              }
              if(probs === 50){
                  probability = FiftyGamble;
              }
              result = random_Gamble(probability);
              if(result===1){
                  earnings += chosenMoney;
              }
            }
          
          if (choice.keys === '1' && WinLossCode === 0){
              probs = parseInt(gambleProb);
              if (probs === 65){
                  probability = SixtyGamble;
              }
              if (probs === 35){
                  probability = ThirtyGamble;
              }
              if(probs === 50){
                  probability = FiftyGamble;
              }
              result = random_Gamble(probability);
              if(result===1){
                  earnings -= chosenMoney;
              }
          }
         if (choice.keys === '2' && WinLossCode === 1) {
             earnings += chosenMoney;
         }
         if(choice.keys === '2' && WinLossCode === 0){
             earnings -= chosenMoney;
         }
      }
      if (subID%2===0){
          if (choice.keys === '2' && WinLossCode === 1){
              probs = parseInt(gambleProb);
              if (probs === 65){
                  probability = SixtyGamble;
              }
              if (probs === 35){
                  probability = ThirtyGamble;
              }
              if(probs === 50){
                  probability = FiftyGamble;
              }
              result = random_Gamble(probability);
              if(result===1){
                  earnings += chosenMoney;
              }
          }
          if (choice.keys === '2' && WinLossCode === 0){
              probs = parseInt(gambleProb);
              if (probs === 65){
                  probability = SixtyGamble;
              }
              if (probs === 35){
                  probability = ThirtyGamble;
              }
              if(probs === 50){
                  probability = FiftyGamble;
              }
              result = random_Gamble(probability);
              if(result===1){
                  earnings -= chosenMoney;
              }
          }
         if (choice.keys === '1' && WinLossCode === 1) {
             earnings += chosenMoney;
         }
         if(choice.keys === '1' && WinLossCode === 0){
             earnings -= chosenMoney;
         }
      }
      earningsStr = String(earnings);
      earningsText.setText(earningsStr);
  }
  earningsText.setText(earningsStr);
  GambleAmt.setColor(new util.Color('white'));
  SureAmt.setColor(new util.Color('white'));
  
  if(blank.status === PsychoJS.Status.FINISHED){
      GambleAmt.setAutoDraw(false);
      SureAmt.setAutoDraw(false);
      SureProb.setAutoDraw(false);
      GambleProb.setAutoDraw(false);
      Line.setAutoDraw(false);
      moneyBank.setAutoDraw(false);
  }
  return Scheduler.Event.NEXT;
   
}

var BeginInstComponents;
var beginKey;
beginKey = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

function BeginInstRoutineBegin() {
  t = 0;
  BeginInstClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  BeginInstComponents = [text_2, beginKey];

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

 if (t >= 0.0 && beginKey.status === PsychoJS.Status.NOT_STARTED) {
    beginKey.tStart = t;
    beginKey.frameNStart = frameN;
    psychoJS.window.callOnFlip(function() { beginKey.clock.reset(); });
    psychoJS.window.callOnFlip(function() { beginKey.start(); });
    psychoJS.window.callOnFlip(function() { beginKey.clearEvents(); });
  }

  if (beginKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = beginKey.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      beginKey.keys = theseKeys[0].name;  // just the last key pressed
      beginKey.rt = theseKeys[0].rt;
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

function BeginInstRoutineEnd() {
  //------Ending Routine 'Inst2'-------
  for (const thisComponent of BeginInstComponents) {
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

var CueComponents;
function CueRoutineBegin() {
  //------Prepare to start Routine 'Cue'-------
  t = 0;
  CueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
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

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
