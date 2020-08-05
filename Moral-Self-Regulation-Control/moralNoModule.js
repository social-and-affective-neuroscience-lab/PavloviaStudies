/**************** 
 * Moralsr Test *
 ****************/

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
let expName = 'MoralSR';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

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
const IntroLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(IntroLoopLoopBegin, IntroLoopLoopScheduler);
flowScheduler.add(IntroLoopLoopScheduler);
flowScheduler.add(IntroLoopLoopEnd);
const PracticeLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PracticeLoopLoopBegin, PracticeLoopLoopScheduler);
flowScheduler.add(PracticeLoopLoopScheduler);
flowScheduler.add(PracticeLoopLoopEnd);
flowScheduler.add(isi2RoutineBegin);
flowScheduler.add(isi2RoutineEachFrame);
flowScheduler.add(isi2RoutineEnd);
const MainLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(MainLoopLoopBegin, MainLoopLoopScheduler);
flowScheduler.add(MainLoopLoopScheduler);
flowScheduler.add(MainLoopLoopEnd);
flowScheduler.add(ThankYouRoutineBegin);
flowScheduler.add(ThankYouRoutineEachFrame);
flowScheduler.add(ThankYouRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
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


var InstructionsClock;
var InstText;
var space;
var ISIClock;
var isi;
var PracticeDilemmas_2Clock;
var practiceQs;
var space1;
var CueClock;
var cue;
var PracticeAnswersClock;
var leftText;
var rightText;
var ComUn;
var ComAc;
var isi2Clock;
var isi_2;
var MainDilemmasClock;
var text;
var key_resp_2;
var MainAnswersClock;
var leftText1;
var rightText1;
var ThankYouClock;
var TY;
var globalClock;
var routineTimer;
var remText;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  InstText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  isi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "PracticeDilemmas_2"
  PracticeDilemmas_2Clock = new util.Clock();
  practiceQs = new visual.TextStim({
    win: psychoJS.window,
    name: 'practiceQs',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space1 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  remText = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: 'default',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.4], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  isi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Cue"
  CueClock = new util.Clock();
  cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  isi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "PracticeAnswers"
  PracticeAnswersClock = new util.Clock();
  leftText = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  rightText = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  ComUn = new visual.TextStim({
    win: psychoJS.window,
    name: 'ComUn',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.24)], height: 0.033,  wrapWidth: 2.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  ComAc = new visual.TextStim({
    win: psychoJS.window,
    name: 'ComAc',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0.45, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "isi2"
  isi2Clock = new util.Clock();
  isi_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi_2',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "MainDilemmas"
  MainDilemmasClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  isi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Cue"
  CueClock = new util.Clock();
  cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  isi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "MainAnswers"
  MainAnswersClock = new util.Clock();
  leftText1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftText1',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  rightText1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightText1',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  isi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ThankYou"
  ThankYouClock = new util.Clock();
  TY = new visual.TextStim({
    win: psychoJS.window,
    name: 'TY',
    text: 'Thank you for your participation!\n\nYou have completed this part of the study.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var IntroLoop;
var currentLoop;
var trialIterator;
function IntroLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  IntroLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'MoralSelfRegInst.xlsx',
    seed: undefined, name: 'IntroLoop'});
  psychoJS.experiment.addLoop(IntroLoop); // add the loop to the experiment
  currentLoop = IntroLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = IntroLoop[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisIntroLoop = result.value;
    thisScheduler.add(importConditions(IntroLoop));
    thisScheduler.add(InstructionsRoutineBegin);
    thisScheduler.add(InstructionsRoutineEachFrame);
    thisScheduler.add(InstructionsRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function IntroLoopLoopEnd() {
  psychoJS.experiment.removeLoop(IntroLoop);

  return Scheduler.Event.NEXT;
}

var PracticeLoop;
function PracticeLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  PracticeLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'moralRows.xlsx',
    seed: undefined, name: 'PracticeLoop'});
  psychoJS.experiment.addLoop(PracticeLoop); // add the loop to the experiment
  currentLoop = PracticeLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = PracticeLoop[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisPracticeLoop = result.value;
    thisScheduler.add(importConditions(PracticeLoop));
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    const PracticeQsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(PracticeQsLoopBegin, PracticeQsLoopScheduler);
    thisScheduler.add(PracticeQsLoopScheduler);
    thisScheduler.add(PracticeQsLoopEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(CueRoutineBegin);
    thisScheduler.add(CueRoutineEachFrame);
    thisScheduler.add(CueRoutineEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    const practiceAsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(practiceAsLoopBegin, practiceAsLoopScheduler);
    thisScheduler.add(practiceAsLoopScheduler);
    thisScheduler.add(practiceAsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var PracticeQs;
function PracticeQsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  PracticeQs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'MoralSelfReg.csv', rows),
    seed: undefined, name: 'PracticeQs'});
  psychoJS.experiment.addLoop(PracticeQs); // add the loop to the experiment
  currentLoop = PracticeQs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = PracticeQs[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisPracticeQ = result.value;
    thisScheduler.add(importConditions(PracticeQs));
    thisScheduler.add(PracticeDilemmas_2RoutineBegin);
    thisScheduler.add(PracticeDilemmas_2RoutineEachFrame);
    thisScheduler.add(PracticeDilemmas_2RoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function PracticeQsLoopEnd() {
  psychoJS.experiment.removeLoop(PracticeQs);

  return Scheduler.Event.NEXT;
}

var practiceAs;
function practiceAsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practiceAs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'MoralSelfReg.csv', rows),
    seed: undefined, name: 'practiceAs'});
  psychoJS.experiment.addLoop(practiceAs); // add the loop to the experiment
  currentLoop = practiceAs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = practiceAs[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisPracticeA = result.value;
    thisScheduler.add(importConditions(practiceAs));
    thisScheduler.add(PracticeAnswersRoutineBegin);
    thisScheduler.add(PracticeAnswersRoutineEachFrame);
    thisScheduler.add(PracticeAnswersRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function practiceAsLoopEnd() {
  psychoJS.experiment.removeLoop(practiceAs);

  return Scheduler.Event.NEXT;
}


function PracticeLoopLoopEnd() {
  psychoJS.experiment.removeLoop(PracticeLoop);

  return Scheduler.Event.NEXT;
}

var MainLoop;
function MainLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  MainLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'moralRows2.xlsx',
    seed: undefined, name: 'MainLoop'});
  psychoJS.experiment.addLoop(MainLoop); // add the loop to the experiment
  currentLoop = MainLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = MainLoop[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisMainLoop = result.value;
    thisScheduler.add(importConditions(MainLoop));
    const MainQsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(MainQsLoopBegin, MainQsLoopScheduler);
    thisScheduler.add(MainQsLoopScheduler);
    thisScheduler.add(MainQsLoopEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(CueRoutineBegin);
    thisScheduler.add(CueRoutineEachFrame);
    thisScheduler.add(CueRoutineEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    const trials_2LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
    thisScheduler.add(trials_2LoopScheduler);
    thisScheduler.add(trials_2LoopEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var MainQs;
function MainQsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  MainQs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'MoralSelfReg.csv', rows2),
    seed: undefined, name: 'MainQs'});
  psychoJS.experiment.addLoop(MainQs); // add the loop to the experiment
  currentLoop = MainQs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = MainQs[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisMainQ = result.value;
    thisScheduler.add(importConditions(MainQs));
    thisScheduler.add(MainDilemmasRoutineBegin);
    thisScheduler.add(MainDilemmasRoutineEachFrame);
    thisScheduler.add(MainDilemmasRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function MainQsLoopEnd() {
  psychoJS.experiment.removeLoop(MainQs);

  return Scheduler.Event.NEXT;
}

var trials_2;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'MoralSelfReg.csv', rows2),
    seed: undefined, name: 'trials_2'});
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials_2[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial_2 = result.value;
    thisScheduler.add(importConditions(trials_2));
    thisScheduler.add(MainAnswersRoutineBegin);
    thisScheduler.add(MainAnswersRoutineEachFrame);
    thisScheduler.add(MainAnswersRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


function MainLoopLoopEnd() {
  psychoJS.experiment.removeLoop(MainLoop);

  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var InstructionsComponents;
function InstructionsRoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  InstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  InstText.setColor(new util.Color('white'));
  InstText.setPos([0, 0]);
  InstText.setText(Instructions);
  InstText.setFont('Arial');
  InstText.setHeight(0.04);
  space.keys = undefined;
  space.rt = undefined;
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(InstText);
  InstructionsComponents.push(space);
  
  InstructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function InstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *InstText* updates
  if (t >= 0.0 && InstText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    InstText.tStart = t;  // (not accounting for frame time here)
    InstText.frameNStart = frameN;  // exact frame index
    InstText.setAutoDraw(true);
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
  InstructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEnd() {
  //------Ending Routine 'Instructions'-------
  InstructionsComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof space.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('space.rt', space.rt);
      routineTimer.reset();
      }
  
  space.stop();
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
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
  ISIComponents.push(isi);
  
  ISIComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  if (t >= 0.0 && isi.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi.tStart = t;  // (not accounting for frame time here)
    isi.frameNStart = frameN;  // exact frame index
    isi.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (isi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isi.setAutoDraw(false);
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
  ISIComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  ISIComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var PracticeDilemmas_2Components;
function PracticeDilemmas_2RoutineBegin() {
  //------Prepare to start Routine 'PracticeDilemmas_2'-------
  t = 0;
  PracticeDilemmas_2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  practiceQs.setText(PracticeDilemmas);
  space1.keys = undefined;
  space1.rt = undefined;
  // keep track of which components have finished
  PracticeDilemmas_2Components = [];
  PracticeDilemmas_2Components.push(practiceQs);
  PracticeDilemmas_2Components.push(space1);
  
  PracticeDilemmas_2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function PracticeDilemmas_2RoutineEachFrame() {
  //------Loop for each frame of Routine 'PracticeDilemmas_2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = PracticeDilemmas_2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *practiceQs* updates
  if (t >= 0.0 && practiceQs.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    practiceQs.tStart = t;  // (not accounting for frame time here)
    practiceQs.frameNStart = frameN;  // exact frame index
    practiceQs.setAutoDraw(true);
  }

  
  // *space1* updates
  if (t >= 0.0 && space1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    space1.tStart = t;  // (not accounting for frame time here)
    space1.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { space1.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { space1.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { space1.clearEvents(); });
  }

  if (space1.status === PsychoJS.Status.STARTED) {
    let theseKeys = space1.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      space1.keys = theseKeys[0].name;  // just the last key pressed
      space1.rt = theseKeys[0].rt;
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
  PracticeDilemmas_2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function PracticeDilemmas_2RoutineEnd() {
  //------Ending Routine 'PracticeDilemmas_2'-------
  PracticeDilemmas_2Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('space1.keys', space1.keys);
  if (typeof space1.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('space1.rt', space1.rt);
      routineTimer.reset();
      }
  
  space1.stop();
  // the Routine "PracticeDilemmas_2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var CueComponents;
function CueRoutineBegin() {
  //------Prepare to start Routine 'Cue'-------
  t = 0;
  CueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(15.000000);
  // update component parameters for each repeat
  cue.setText(CueInstructions);
  // keep track of which components have finished
  CueComponents = [];
  CueComponents.push(cue);
  
  CueComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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

  frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
  CueComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  CueComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var PracticeAnswersComponents;
function PracticeAnswersRoutineBegin() {
  //------Prepare to start Routine 'PracticeAnswers'-------
  t = 0;
  PracticeAnswersClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  leftText.setText(PracticeLeftText);
  rightText.setText(PracticeRightText);
  ComUn.setText('Completely Unacceptable            2            3            4            5            6           Completely Acceptable');
  ComAc.setText('');
  // keep track of which components have finished
  PracticeAnswersComponents = [];
  PracticeAnswersComponents.push(leftText);
  PracticeAnswersComponents.push(rightText);
  PracticeAnswersComponents.push(ComUn);
  PracticeAnswersComponents.push(ComAc);
  PracticeAnswersComponents.push(remText);
  
  PracticeAnswersComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function PracticeAnswersRoutineEachFrame() {
  //------Loop for each frame of Routine 'PracticeAnswers'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = PracticeAnswersClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *leftText* updates
  if (t >= 0.0 && leftText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftText.tStart = t;  // (not accounting for frame time here)
    leftText.frameNStart = frameN;  // exact frame index
    leftText.setAutoDraw(true);
  }

  
  // *rightText* updates
  if (t >= 0.0 && rightText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightText.tStart = t;  // (not accounting for frame time here)
    rightText.frameNStart = frameN;  // exact frame index
    rightText.setAutoDraw(true);
  }

  if (t >= 0.0 && remText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    remText.tStart = t;  // (not accounting for frame time here)
    remText.frameNStart = frameN;  // exact frame index
    remText.setAutoDraw(true);
  }
  // *ComUn* updates
  if (t >= 0.0 && ComUn.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ComUn.tStart = t;  // (not accounting for frame time here)
    ComUn.frameNStart = frameN;  // exact frame index
    ComUn.setAutoDraw(true);
  }

  
  // *ComAc* updates
  if (t >= 0.0 && ComAc.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ComAc.tStart = t;  // (not accounting for frame time here)
    ComAc.frameNStart = frameN;  // exact frame index
    ComAc.setAutoDraw(true);
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
  PracticeAnswersComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function PracticeAnswersRoutineEnd() {
  //------Ending Routine 'PracticeAnswers'-------
  PracticeAnswersComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "PracticeAnswers" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var isi2Components;
function isi2RoutineBegin() {
  //------Prepare to start Routine 'isi2'-------
  t = 0;
  isi2Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(10.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  isi2Components = [];
  isi2Components.push(isi_2);
  
  isi2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function isi2RoutineEachFrame() {
  //------Loop for each frame of Routine 'isi2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = isi2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi_2* updates
  if (t >= 0.0 && isi_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    isi_2.tStart = t;  // (not accounting for frame time here)
    isi_2.frameNStart = frameN;  // exact frame index
    isi_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (isi_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    isi_2.setAutoDraw(false);
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
  isi2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function isi2RoutineEnd() {
  //------Ending Routine 'isi2'-------
  isi2Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var MainDilemmasComponents;
function MainDilemmasRoutineBegin() {
  //------Prepare to start Routine 'MainDilemmas'-------
  t = 0;
  MainDilemmasClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  text.setText(MainDilemmas);
  key_resp_2.keys = undefined;
  key_resp_2.rt = undefined;
  // keep track of which components have finished
  MainDilemmasComponents = [];
  MainDilemmasComponents.push(text);
  MainDilemmasComponents.push(key_resp_2);
  
  MainDilemmasComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function MainDilemmasRoutineEachFrame() {
  //------Loop for each frame of Routine 'MainDilemmas'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = MainDilemmasClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_2.rt = theseKeys[0].rt;
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
  MainDilemmasComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function MainDilemmasRoutineEnd() {
  //------Ending Routine 'MainDilemmas'-------
  MainDilemmasComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  key_resp_2.stop();
  // the Routine "MainDilemmas" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var MainAnswersComponents;
function MainAnswersRoutineBegin() {
  //------Prepare to start Routine 'MainAnswers'-------
  t = 0;
  MainAnswersClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  leftText1.setText(MainLeftText);
  rightText1.setText(MainRightText);
  // keep track of which components have finished
  MainAnswersComponents = [];
  MainAnswersComponents.push(leftText1);
  MainAnswersComponents.push(rightText1);
  MainAnswersComponents.push(remText);
  
  MainAnswersComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function MainAnswersRoutineEachFrame() {
  //------Loop for each frame of Routine 'MainAnswers'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = MainAnswersClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *leftText1* updates
  if (t >= 0.0 && leftText1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftText1.tStart = t;  // (not accounting for frame time here)
    leftText1.frameNStart = frameN;  // exact frame index
    leftText1.setAutoDraw(true);
  }

    // *leftText1* updates
  if (t >= 0.0 && remText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    remText.tStart = t;  // (not accounting for frame time here)
    remText.frameNStart = frameN;  // exact frame index
    remText.setAutoDraw(true);
    remText.setText(Reminder);
  }
  // *rightText1* updates
  if (t >= 0.0 && rightText1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightText1.tStart = t;  // (not accounting for frame time here)
    rightText1.frameNStart = frameN;  // exact frame index
    rightText1.setAutoDraw(true);
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
  MainAnswersComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function MainAnswersRoutineEnd() {
  //------Ending Routine 'MainAnswers'-------
  MainAnswersComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "MainAnswers" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
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
  ThankYouComponents.push(TY);
  
  ThankYouComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function ThankYouRoutineEachFrame() {
  //------Loop for each frame of Routine 'ThankYou'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ThankYouClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *TY* updates
  if (t >= 0.0 && TY.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    TY.tStart = t;  // (not accounting for frame time here)
    TY.frameNStart = frameN;  // exact frame index
    TY.setAutoDraw(true);
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
  ThankYouComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  ThankYouComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
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
