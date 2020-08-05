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
const mainLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mainLoopBegin, mainLoopScheduler);
flowScheduler.add(mainLoopScheduler);
flowScheduler.add(mainLoopEnd);
flowScheduler.add(ThankYouRoutineBegin);
flowScheduler.add(ThankYouRoutineEachFrame);
flowScheduler.add(ThankYouRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
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
var practISIClock;
var practisi;
var PracticeDilemmas_2Clock;
var practiceQs;
var practenter;
var practrightText;
var practleftText;
var practslideKeys;
var practslider1;
var PracticeAClock;
var practscale_msg1;
var practscale_msg2;
var practmsg1;
var practmsg2;
var space1;
var CueClock;
var cue;
var mainISIClock;
var mainisi;
var mainISIClock;
var mainisi;
var mainDilemmasClock;
var mainquestions;
var mainenter;
var mainright;
var mainleft;
var mainslideKeys;
var mainslider1;
var mainAnswersClock;
var practscale_msg1;
var practscale_msg2;
var mainmsg1;
var mainmsg2;
var mainspace1;
var mainCueClock;
var maincue;
var PracticeAnswersClock;
var leftText;
var rightText;
var isi2Clock;
var isi_2;
var text;
var key_resp_2;
var leftText1;
var rightText1;
var ThankYouClock;
var TY;
var globalClock;
var routineTimer;
var slider1Clock;
var slider1;
var slideKeys1;
var slideKeys;
var scale_msg1;
var scale_msg2;

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
  
  mainspace1 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ISI"
  mainISIClock = new util.Clock();
  mainisi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  practISIClock = new util.Clock();
  practisi = new visual.TextStim({
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
  mainDilemmasClock = new util.Clock();
  mainquestions = new visual.TextStim({
    win: psychoJS.window,text: 'default text',
    font: 'Arial', units : undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  space1 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

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
    pos: [0, 0], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  mainCueClock = new util.Clock();
  maincue = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.5, ori: 0,
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
  
  practrightText = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });

   practleftText = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mainAnswersClock = new util.Clock();
  mainleft = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftText',
    text: 'default text',
    font: 'Arial',
    pos: [(- 0.5), 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mainright = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
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
  
  slider1Clock = new util.Clock();
  slider1 = new visual.Slider({
    win: psychoJS.window, name: 'slider1',
    size: [1.2, 0.04], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  slideKeys1 = new core.BuilderKeyResponse(psychoJS);
  
  mainslider1Clock = new util.Clock();
  mainslider1 = new visual.Slider({
    win: psychoJS.window, name: 'slider1',
    size: [1.2, 0.04], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  mainslideKeys = new core.BuilderKeyResponse(psychoJS);
  
  slideKeys = new core.BuilderKeyResponse(psychoJS);
  
  scale_msg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg1',
    text: 'Completely Unacceptable',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.61), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  scale_msg2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg2',
    text: 'Completely Acceptable',
    font: 'Arial',
    units : undefined, 
    pos: [(0.61), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });


  practslideKeys = new core.BuilderKeyResponse(psychoJS);
  practenter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  mainenter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  practscale_msg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg1',
    text: 'Completely Unacceptable',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.61), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  practscale_msg2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg2',
    text: 'Completely Acceptable',
    font: 'Arial',
    units : undefined, 
    pos: [(0.61), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  practmsg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg1',
    text: 'Completely Unacceptable',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.61), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  practmsg2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg2',
    text: 'Completely Acceptable',
    font: 'Arial',
    units : undefined, 
    pos: [(0.61), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  mainmsg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg1',
    text: 'Completely Unacceptable',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.61), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  mainmsg2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg2',
    text: 'Completely Acceptable',
    font: 'Arial',
    units : undefined, 
    pos: [(0.61), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  
  PracticeAClock = new util.Clock();
  practslider1 = new visual.Slider({
    win: psychoJS.window, name: 'slider1',
    size: [1.2, 0.04], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
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
  for (const thisIntroLoop of IntroLoop) {
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
    trialList: 'moralRows.csv',
    seed: undefined, name: 'PracticeLoop'});
  psychoJS.experiment.addLoop(PracticeLoop); // add the loop to the experiment
  currentLoop = PracticeLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPracticeLoop of PracticeLoop) {
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
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'PracticeMoralSelfReg.csv', rows),
    seed: undefined, name: 'PracticeQs'});
  psychoJS.experiment.addLoop(PracticeQs); // add the loop to the experiment
  currentLoop = PracticeQs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPracticeQ of PracticeQs) {
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
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'PracticeMoralSelfReg.csv', rows),
    seed: undefined, name: 'practiceAs'});
  psychoJS.experiment.addLoop(practiceAs); // add the loop to the experiment
  currentLoop = practiceAs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPracticeA of practiceAs) {
    thisScheduler.add(importConditions(practiceAs));
    thisScheduler.add(PracticeAnswersRoutineBegin);
    thisScheduler.add(PracticeAnswersRoutineEachFrame);
    thisScheduler.add(PracticeAnswersRoutineEnd);
    thisScheduler.add(practISIRoutineBegin);
    thisScheduler.add(practISIRoutineEachFrame);
    thisScheduler.add(practISIRoutineEnd);
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


var mainLoop;
function mainLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  mainLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'moralRows2.csv',
    seed: undefined, name: 'mainLoop'});
  psychoJS.experiment.addLoop(mainLoop); // add the loop to the experiment
  currentLoop = mainLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thismainLoop of mainLoop) {
    thisScheduler.add(importConditions(mainLoop));
    thisScheduler.add(mainISIRoutineBegin);
    thisScheduler.add(mainISIRoutineEachFrame);
    thisScheduler.add(mainISIRoutineEnd);
    const mainQsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(mainQsLoopBegin, mainQsLoopScheduler);
    thisScheduler.add(mainQsLoopScheduler);
    thisScheduler.add(mainQsLoopEnd);
    thisScheduler.add(mainISIRoutineBegin);
    thisScheduler.add(mainISIRoutineEachFrame);
    thisScheduler.add(mainISIRoutineEnd);
    thisScheduler.add(mainCueRoutineBegin);
    thisScheduler.add(mainCueRoutineEachFrame);
    thisScheduler.add(mainCueRoutineEnd);
    thisScheduler.add(mainISIRoutineBegin);
    thisScheduler.add(mainISIRoutineEachFrame);
    thisScheduler.add(mainISIRoutineEnd);
    const mainAsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(mainAsLoopBegin, mainAsLoopScheduler);
    thisScheduler.add(mainAsLoopScheduler);
    thisScheduler.add(mainAsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var mainQs;
function mainQsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  mainQs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'MoralSelfReg.xlsx', rows2),
    seed: undefined, name: 'mainQs'});
  psychoJS.experiment.addLoop(mainQs); // add the loop to the experiment
  currentLoop = mainQs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thismainQ of mainQs) {
    thisScheduler.add(importConditions(mainQs));
    thisScheduler.add(mainDilemmasRoutineBegin);
    thisScheduler.add(mainDilemmasRoutineEachFrame);
    thisScheduler.add(mainDilemmasRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function mainQsLoopEnd() {
  psychoJS.experiment.removeLoop(PracticeQs);

  return Scheduler.Event.NEXT;
}


var mainAs;
function mainAsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  mainAs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'MoralSelfReg.xlsx', rows2),
    seed: undefined, name: 'mainAs'});
  psychoJS.experiment.addLoop(mainAs); // add the loop to the experiment
  currentLoop = mainAs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thismainA of mainAs) {
    thisScheduler.add(importConditions(mainAs));
    thisScheduler.add(PracticeAnswersRoutineBegin);
    thisScheduler.add(PracticeAnswersRoutineEachFrame);
    thisScheduler.add(PracticeAnswersRoutineEnd);
    // thisScheduler.add(mainAnswersRoutineBegin);
    // thisScheduler.add(mainAnswersRoutineEachFrame);
    // thisScheduler.add(MainAnswersRoutineEnd);
    thisScheduler.add(mainISIRoutineBegin);
    thisScheduler.add(mainISIRoutineEachFrame);
    thisScheduler.add(mainISIRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function mainAsLoopEnd() {
  psychoJS.experiment.removeLoop(mainAs);

  return Scheduler.Event.NEXT;
}


function mainLoopEnd() {
  psychoJS.experiment.removeLoop(mainLoop);

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
  
  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
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
  for (const thisComponent of InstructionsComponents)
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


function InstructionsRoutineEnd() {
  //------Ending Routine 'Instructions'-------
  for (const thisComponent of InstructionsComponents) {
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


var practISIComponents;
function practISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  practISIClock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.500000);
  // update component parameters for each repeat
  // keep track of which components have finished
  practISIComponents = [];
  practISIComponents.push(practisi);
  
  for (const thisComponent of practISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function practISIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = practISIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi* updates
  if (t >= 0.0 && practisi.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    practisi.tStart = t;  // (not accounting for frame time here)
    practisi.frameNStart = frameN;  // exact frame index
    practisi.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (practisi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    practisi.setAutoDraw(false);
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
  for (const thisComponent of practISIComponents)
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


function practISIRoutineEnd() {
  //------Ending Routine 'ISI'-------
  for (const thisComponent of practISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var mainISIComponents;
function mainISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  mainISIClock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.500000);
  // update component parameters for each repeat
  // keep track of which components have finished
  mainISIComponents = [];
  mainISIComponents.push(mainisi);
  
  for (const thisComponent of mainISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

// var frameRemains;
function mainISIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = mainISIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi* updates
  if (t >= 0.0 && mainisi.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mainisi.tStart = t;  // (not accounting for frame time here)
    mainisi.frameNStart = frameN;  // exact frame index
    mainisi.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (mainisi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
   mainisi.setAutoDraw(false);
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
  for (const thisComponent of mainISIComponents)
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


function mainISIRoutineEnd() {
  //------Ending Routine 'ISI'-------
  for (const thisComponent of mainISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
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
  
  for (const thisComponent of PracticeDilemmas_2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
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
  for (const thisComponent of PracticeDilemmas_2Components)
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


function PracticeDilemmas_2RoutineEnd() {
  //------Ending Routine 'PracticeDilemmas_2'-------
  for (const thisComponent of PracticeDilemmas_2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
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


var mainDilemmasComponents;
function mainDilemmasRoutineBegin() {
  //------Prepare to start Routine 'PracticeDilemmas_2'-------
  t = 0;
  mainDilemmasClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  mainquestions.setText(MainDilemmas);
  mainspace1.keys = undefined;
  mainspace1.rt = undefined;
  // keep track of which components have finished
  mainDilemmasComponents = [];
  mainDilemmasComponents.push(mainquestions);
  mainDilemmasComponents.push(mainspace1);
  
  for (const thisComponent of mainDilemmasComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function mainDilemmasRoutineEachFrame() {
  //------Loop for each frame of Routine 'PracticeDilemmas_2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = mainDilemmasClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *practiceQs* updates
  if (t >= 0.0 && mainquestions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mainquestions.tStart = t;  // (not accounting for frame time here)
    mainquestions.frameNStart = frameN;  // exact frame index
    mainquestions.setAutoDraw(true);
  }

  
  // *space1* updates
  if (t >= 0.0 && mainspace1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mainspace1.tStart = t;  // (not accounting for frame time here)
    mainspace1.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { mainspace1.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { mainspace1.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { mainspace1.clearEvents(); });
  }

  if (mainspace1.status === PsychoJS.Status.STARTED) {
    let theseKeys = mainspace1.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      mainspace1.keys = theseKeys[0].name;  // just the last key pressed
      mainspace1.rt = theseKeys[0].rt;
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
  for (const thisComponent of mainDilemmasComponents)
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


function mainDilemmasRoutineEnd() {
  //------Ending Routine 'mainDilemmas_2'-------
  for (const thisComponent of mainDilemmasComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('mainspace1.keys', mainspace1.keys);
  if (typeof mainspace1.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('mainspace1.rt', mainspace1.rt);
      routineTimer.reset();
      }
  mainspace1.stop();
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



var mainCueComponents;
function mainCueRoutineBegin() {
  //------Prepare to start Routine 'Cue'-------
  t = 0;
  mainCueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(15.000000);
  // update component parameters for each repeat
  maincue.setText(CueInstructions);
  // keep track of which components have finished
  mainCueComponents = [];
  mainCueComponents.push(maincue);
  
  for (const thisComponent of mainCueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function mainCueRoutineEachFrame() {
  //------Loop for each frame of Routine 'Cue'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = mainCueClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *cue* updates
  if (t >= 0.0 && maincue.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    maincue.tStart = t;  // (not accounting for frame time here)
    maincue.frameNStart = frameN;  // exact frame index
    maincue.setAutoDraw(true);
  }

  frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (maincue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    maincue.setAutoDraw(false);
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
  for (const thisComponent of mainCueComponents)
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


function mainCueRoutineEnd() {
  //------Ending Routine 'Cue'-------
  for (const thisComponent of CueComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}



var practslider1Clock;
practslider1Clock = new util.Clock();
 
var PracticeAnswersComponents;
function PracticeAnswersRoutineBegin() {
  //------Prepare to start Routine 'PracticeAnswers'-------
  t = 0;
  PracticeAnswersClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  practleftText.setText(PracticeLeftText);
  practrightText.setText(PracticeRightText);

  // keep track of which components have finished
  PracticeAnswersComponents = [];
  PracticeAnswersComponents.push(practslider1);
  PracticeAnswersComponents.push(practslideKeys);
  PracticeAnswersComponents.push(practenter);
  PracticeAnswersComponents.push(practslider1Clock);
  PracticeAnswersComponents.push(practmsg1);
  PracticeAnswersComponents.push(practmsg2);
  PracticeAnswersComponents.push(practleftText);
  PracticeAnswersComponents.push(practrightText);

  
  for (const thisComponent of PracticeAnswersComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
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
  if (t >= 0.0 && practleftText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    practleftText.tStart = t;  // (not accounting for frame time here)
    practleftText.frameNStart = frameN;  // exact frame index
    practleftText.setAutoDraw(true);
  }

  
  // *rightText* updates
  if (t >= 0.0 && practrightText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    practrightText.tStart = t;  // (not accounting for frame time here)
    practrightText.frameNStart = frameN;  // exact frame index
    practrightText.setAutoDraw(true);
  }
if (t >= 0.0 && practmsg1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    practmsg1.tStart = t;  // (not accounting for frame time here)
    practmsg1.frameNStart = frameN;  // exact frame index
    practmsg1.setAutoDraw(true);
  }

  if (t >= 0.0 && practscale_msg2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    practmsg2.tStart = t;  // (not accounting for frame time here)
    practmsg2.frameNStart = frameN;  // exact frame index
    practmsg2.setAutoDraw(true);
  }
  if (t >= 0.0 && practslider1.status === PsychoJS.Status.NOT_STARTED) {
    practslider1.tStart = t;
    practslider1.frameNStart = frameN;
    practslider1.setAutoDraw(true);
  }

// let them press enter to record the answer
  if (t >= 0.0 && practslideKeys.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    practslideKeys.tStart = t;  // (not accounting for frame time here)
    practslideKeys.frameNStart = frameN;  // exact frame index
    practslideKeys.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

 if (practslideKeys.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      practslideKeys.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
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
  for (const thisComponent of PracticeAnswersComponents)
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


function PracticeAnswersRoutineEnd() {
  //------Ending Routine 'PracticeAnswers'-------
  for (const thisComponent of PracticeAnswersComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "PracticeAnswers" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  practslider1.reset();

  return Scheduler.Event.NEXT;
}




var mainslider1Clock;
mainslider1Clock = new util.Clock();
 
var mainAnswersComponents;
function mainAnswersRoutineBegin() {
  //------Prepare to start Routine 'PracticeAnswers'-------
  t = 0;
  mainAnswersClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  mainleft.setText(LeftText);
  mainright.setText(RightText);

  // keep track of which components have finished
  mainAnswersComponents = [];
  mainAnswersComponents.push(mainslider1);
  mainAnswersComponents.push(mainslideKeys);
  mainAnswersComponents.push(mainenter);
  mainAnswersComponents.push(mainslider1Clock);
  mainAnswersComponents.push(mainmsg1);
  mainAnswersComponents.push(mainmsg2);
  mainAnswersComponents.push(mainleft);
  mainAnswersComponents.push(mainright);

  
  for (const thisComponent of mainAnswersComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function mainAnswersRoutineEachFrame() {
  //------Loop for each frame of Routine 'PracticeAnswers'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = mainAnswersClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *leftText* updates
  if (t >= 0.0 && mainleft.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mainleft.tStart = t;  // (not accounting for frame time here)
    mainleft.frameNStart = frameN;  // exact frame index
    mainleft.setAutoDraw(true);
  }

  
  // *rightText* updates
  if (t >= 0.0 && mainright.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mainright.tStart = t;  // (not accounting for frame time here)
    mainright.frameNStart = frameN;  // exact frame index
    mainright.setAutoDraw(true);
  }
if (t >= 0.0 && mainmsg1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mainmsg1.tStart = t;  // (not accounting for frame time here)
    mainmsg1.frameNStart = frameN;  // exact frame index
    mainmsg1.setAutoDraw(true);
  }

  if (t >= 0.0 && mainmsg2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mainmsg2.tStart = t;  // (not accounting for frame time here)
    mainmsg2.frameNStart = frameN;  // exact frame index
    mainmsg2.setAutoDraw(true);
  }
  if (t >= 0.0 && practslider1.status === PsychoJS.Status.NOT_STARTED) {
    mainslider1.tStart = t;
    mainslider1.frameNStart = frameN;
    mainslider1.setAutoDraw(true);
  }

// let them press enter to record the answer
  if (t >= 0.0 && mainslideKeys.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mainslideKeys.tStart = t;  // (not accounting for frame time here)
    mainslideKeys.frameNStart = frameN;  // exact frame index
    mainslideKeys.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() {mainslideKeys.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

 if (mainslideKeys.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      mainslideKeys.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
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
  for (const thisComponent of mainAnswersComponents)
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


function MainAnswersRoutineEnd() {
  //------Ending Routine 'PracticeAnswers'-------
  for (const thisComponent of MainAnswersComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "PracticeAnswers" was not non-slip safe, so reset the non-slip timer
  mainroutineTimer.reset();
  mainslider1.reset();

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
  
  for (const thisComponent of isi2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
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
  for (const thisComponent of isi2Components)
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
  //------Ending Routine 'isi2'-------
  for (const thisComponent of isi2Components) {
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
  ThankYouComponents.push(TY);
  
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
