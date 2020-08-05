/**************************** 
 * Moralsrbinarychoice Test *
 ****************************/

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
let expName = 'MoralSRBinaryChoice';  // from the Builder filename that created this script
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
flowScheduler.add(BeginInstrRoutineBegin);
flowScheduler.add(BeginInstrRoutineEachFrame);
flowScheduler.add(BeginInstrRoutineEnd);
const MainLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(MainLoopLoopBegin, MainLoopLoopScheduler);
flowScheduler.add(MainLoopLoopScheduler);
flowScheduler.add(MainLoopLoopEnd);
flowScheduler.add(ThankYouRoutineBegin);
flowScheduler.add(ThankYouRoutineEachFrame);
flowScheduler.add(ThankYouRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

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

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  InstText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: 1.4, ori: 0,
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
    pos: [0, 0], height: 0.06,  wrapWidth: 1.4, ori: 0,
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
    pos: [0, 0], height: 0.13,  wrapWidth: 1.5, ori: 0,
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
  key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  conBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'conBlank',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  RemText = new visual.TextStim({
    win: psychoJS.window,
    name: 'RemText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.32], height: 0.055,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  leftText = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), 0.0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  rightText = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, 0.0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'Yes',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.33)], height: 0.05,  wrapWidth: 2.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  No = new visual.TextStim({
    win: psychoJS.window,
    name: 'No',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.0, (- 0.41)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  var earnings;
  earnings = 0 
  
  var earningsStr;
  earningsStr = ("$" + str(earnings))
  
  var subID;
  subID = parseInt(expInfo['participant'])
  
  var FiftyGamble;
  var SixtyGamble;
  var ThirtyGamble; 
  
  FiftyGamble = [1,0];
  SixtyGamble = [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0];
  ThirtyGamble = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
  
  var earning;
  earning = 0;
  
  var choseCode;
  choseCode = [];
  
  var chanceResult;
  chanceResult = [];
  
  var probability;
  function gamProbability(GroupProb){
      probs = int(GroupProb);
      if (probs == 65){
          probability = SixtyGamble;
          print('65% chance');
          }
      if (probs == 35){
          probability = ThirtyGamble;
          print('35% chance');
          }
      if (probs == 50){
          probability = FiftyGamble;
          print('50% chance');
          }
   }
  function gambleFunc(GroupProb){
      probs = int(GroupProb)
      if (probs == 65){
          probability = SixtyGamble;
          print('65% chance');
          }
      if (probs == 35){
          probability = ThirtyGamble;
          print('35% chance');
          }
      if (probs == 50){
          probability = FiftyGamble;
          print('50% chance');
          }
      result = random.choice(probability);
      print('Chance result:');
      print(result);
      }
  Question = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.2)], height: 0.055,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
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
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  FeedbackVar = new visual.TextStim({
    win: psychoJS.window,
    name: 'FeedbackVar',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
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
  
  // Initialize components for Routine "BeginInstr"
  BeginInstrClock = new util.Clock();
  instructions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions2',
    text: 'You will now begin the main part of the task.\n\nPress SPACE to start!',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  // Initialize components for Routine "MainDilemmas"
  MainDilemmasClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 1.4, ori: 0,
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
    pos: [0, 0], height: 0.13,  wrapWidth: 1.5, ori: 0,
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
  
  // Initialize components for Routine "MainAnswers_2"
  MainAnswers_2Clock = new util.Clock();
  key_resp_3 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  conBlank2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'conBlank2',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  RemText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RemText2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.32], height: 0.055,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  leftText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftText2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), 0.0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  rightText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightText2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, 0.0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  yes2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yes2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.33)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  no2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'no2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.0, (- 0.41)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  
  Question2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.2)], height: 0.055,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
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
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  FeedbackVar = new visual.TextStim({
    win: psychoJS.window,
    name: 'FeedbackVar',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: 1.4, ori: 0,
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
    const practiceAsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(practiceAsLoopBegin, practiceAsLoopScheduler);
    thisScheduler.add(practiceAsLoopScheduler);
    thisScheduler.add(practiceAsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

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
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(PracticeAnswersRoutineBegin);
    thisScheduler.add(PracticeAnswersRoutineEachFrame);
    thisScheduler.add(PracticeAnswersRoutineEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(FeedbackRoutineBegin);
    thisScheduler.add(FeedbackRoutineEachFrame);
    thisScheduler.add(FeedbackRoutineEnd);
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
  for (const thisMainLoop of MainLoop) {
    thisScheduler.add(importConditions(MainLoop));
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
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
    const trials_2LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
    thisScheduler.add(trials_2LoopScheduler);
    thisScheduler.add(trials_2LoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

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
  for (const thisMainQ of MainQs) {
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
  for (const thisTrial_2 of trials_2) {
    thisScheduler.add(importConditions(trials_2));
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(MainAnswers_2RoutineBegin);
    thisScheduler.add(MainAnswers_2RoutineEachFrame);
    thisScheduler.add(MainAnswers_2RoutineEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(FeedbackRoutineBegin);
    thisScheduler.add(FeedbackRoutineEachFrame);
    thisScheduler.add(FeedbackRoutineEnd);
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

function CueRoutineBegin() {
  //------Prepare to start Routine 'Cue'-------
  t = 0;
  CueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(8.000000);
  // update component parameters for each repeat
  cue.setText(CueInstructions1);
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

  frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

function PracticeAnswersRoutineBegin() {
  //------Prepare to start Routine 'PracticeAnswers'-------
  t = 0;
  PracticeAnswersClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp.keys = undefined;
  key_resp.rt = undefined;
  conBlank.setText('');
  RemText.setText(Reminder);
  leftText.setText(PracticeLeftText);
  rightText.setText(PracticeRightText);
  Yes.setText("Implement the plan ('y')");
  No.setText("Do nothing ('n')");
  Question.setText('What do you do?');
  // keep track of which components have finished
  PracticeAnswersComponents = [];
  PracticeAnswersComponents.push(key_resp);
  PracticeAnswersComponents.push(conBlank);
  PracticeAnswersComponents.push(RemText);
  PracticeAnswersComponents.push(leftText);
  PracticeAnswersComponents.push(rightText);
  PracticeAnswersComponents.push(Yes);
  PracticeAnswersComponents.push(No);
  PracticeAnswersComponents.push(Question);
  
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
    let theseKeys = key_resp.getKeys({keyList: ['y', 'n'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp.keys = theseKeys[0].name;  // just the last key pressed
      key_resp.rt = theseKeys[0].rt;
    }
  }
  
  
  // *conBlank* updates
  if (((len(key_resp.keys) > 0)) && conBlank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    conBlank.tStart = t;  // (not accounting for frame time here)
    conBlank.frameNStart = frameN;  // exact frame index
    conBlank.setAutoDraw(true);
  }

  if (conBlank.status === PsychoJS.Status.STARTED && t >= (conBlank.tStart + 2)) {
    conBlank.setAutoDraw(false);
  }
  
  // *RemText* updates
  if (t >= 0.0 && RemText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    RemText.tStart = t;  // (not accounting for frame time here)
    RemText.frameNStart = frameN;  // exact frame index
    RemText.setAutoDraw(true);
  }

  if (RemText.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == FINISHED))) {
    RemText.setAutoDraw(false);
  }
  
  // *leftText* updates
  if (t >= 0.0 && leftText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftText.tStart = t;  // (not accounting for frame time here)
    leftText.frameNStart = frameN;  // exact frame index
    leftText.setAutoDraw(true);
  }

  if (leftText.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == FINISHED))) {
    leftText.setAutoDraw(false);
  }
  
  // *rightText* updates
  if (t >= 0.0 && rightText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightText.tStart = t;  // (not accounting for frame time here)
    rightText.frameNStart = frameN;  // exact frame index
    rightText.setAutoDraw(true);
  }

  if (rightText.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == FINISHED))) {
    rightText.setAutoDraw(false);
  }
  
  // *Yes* updates
  if (t >= 0.0 && Yes.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Yes.tStart = t;  // (not accounting for frame time here)
    Yes.frameNStart = frameN;  // exact frame index
    Yes.setAutoDraw(true);
  }

  if (Yes.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == FINISHED))) {
    Yes.setAutoDraw(false);
  }
  
  // *No* updates
  if (t >= 0.0 && No.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    No.tStart = t;  // (not accounting for frame time here)
    No.frameNStart = frameN;  // exact frame index
    No.setAutoDraw(true);
  }

  if (No.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == FINISHED))) {
    No.setAutoDraw(false);
  }
  
  if (key_resp.keys == 'y'){
      Yes.setColor('red');
      }
  if (key_resp.keys == 'n'){
      No.setColor('red');
      }
  
  
  if (key_resp.keys == 'y' || key_resp.keys == 'n'){
      key_resp.status = FINISHED;
      }
  
  // *Question* updates
  if (t >= 0.0 && Question.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question.tStart = t;  // (not accounting for frame time here)
    Question.frameNStart = frameN;  // exact frame index
    Question.setAutoDraw(true);
  }

  if (Question.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == FINISHED))) {
    Question.setAutoDraw(false);
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
  psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
  if (typeof key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      }
  
  key_resp.stop();
  if (key_resp.keys == 'y'){
      choseCode = 1;
      }
  if (key_resp.keys == 'n'){
      choseCode = 0;
      }
  
  if (choseCode == 0 ){  
      print('Chose to do nothing, play out the probability ');
      probs = int(GroupProb);
      if (probs == 65){
          probability = SixtyGamble;
          print('65% gamble');
          }
      if (probs == 35){
          probability = ThirtyGamble;
          print('35% gamble');
          }
      if (probs == 50){
          probability = FiftyGamble;
          print('50% gamble');
          }
      result = random.choice(probability);
      print('Chance result:');
      print(result);
      if (result == 1){
          print('The group escaped!');
          print(earnings);
          chanceResult = (" was saved.");
          }
      if (result == 0){
          print('The group died! :(');
          chanceResult = (' died.');
          }
    }
  
  
  
  Yes.setColor('white')
  No.setColor('white')
  
  if (conBlank.status == FINISHED){
      leftText.setAutoDraw(False);
      rightText.setAutoDraw(False);
      Yes.setAutoDraw(False);
      No.setAutoDraw(False);
      RemText.setAutoDraw(False);
      Question.setAutoDraw(False);
      continueRoutine = False ;
      }
  // the Routine "PracticeAnswers" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

function FeedbackRoutineBegin() {
  //------Prepare to start Routine 'Feedback'-------
  t = 0;
  FeedbackClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);
  // update component parameters for each repeat
  FeedbackVar.setColor(new util.Color('white'));
  FeedbackVar.setPos([0, 0]);
  FeedbackVar.setText('default');
  FeedbackVar.setFont('Arial');
  FeedbackVar.setHeight(0.07);
  var groupNum;
  var numPeople;
  var groupResult;
  var nounStr;
  var resultGroup;
  
  groupNum = parseInt(GroupNumber);
  numPeople = str(groupNum);
  groupResult = str(chanceResult);
  nounStr = str(Noun);
  resultGroup = ("of " + numPeople + nounStr + groupResult);
  
  if (choseCode == 1){
      FeedbackVar.setText(ChosePlan);
      }
      
  if (choseCode == 0){
      FeedbackVar.setText(ChoseNothing + resultGroup);
      }
  // keep track of which components have finished
  FeedbackComponents = [];
  FeedbackComponents.push(FeedbackVar);
  
  for (const thisComponent of FeedbackComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function FeedbackRoutineEachFrame() {
  //------Loop for each frame of Routine 'Feedback'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = FeedbackClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *FeedbackVar* updates
  if (t >= 0.0 && FeedbackVar.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    FeedbackVar.tStart = t;  // (not accounting for frame time here)
    FeedbackVar.frameNStart = frameN;  // exact frame index
    FeedbackVar.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (FeedbackVar.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    FeedbackVar.setAutoDraw(false);
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
  for (const thisComponent of FeedbackComponents)
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

function FeedbackRoutineEnd() {
  //------Ending Routine 'Feedback'-------
  for (const thisComponent of FeedbackComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

function isi2RoutineBegin() {
  //------Prepare to start Routine 'isi2'-------
  t = 0;
  isi2Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
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

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

function BeginInstrRoutineBegin() {
  //------Prepare to start Routine 'BeginInstr'-------
  t = 0;
  BeginInstrClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_4.keys = undefined;
  key_resp_4.rt = undefined;
  // keep track of which components have finished
  BeginInstrComponents = [];
  BeginInstrComponents.push(instructions2);
  BeginInstrComponents.push(key_resp_4);
  
  for (const thisComponent of BeginInstrComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function BeginInstrRoutineEachFrame() {
  //------Loop for each frame of Routine 'BeginInstr'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = BeginInstrClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instructions2* updates
  if (t >= 0.0 && instructions2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructions2.tStart = t;  // (not accounting for frame time here)
    instructions2.frameNStart = frameN;  // exact frame index
    instructions2.setAutoDraw(true);
  }

  
  // *key_resp_4* updates
  if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_4.tStart = t;  // (not accounting for frame time here)
    key_resp_4.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
  }

  if (key_resp_4.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_4.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_4.rt = theseKeys[0].rt;
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
  for (const thisComponent of BeginInstrComponents)
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

function BeginInstrRoutineEnd() {
  //------Ending Routine 'BeginInstr'-------
  for (const thisComponent of BeginInstrComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
  if (typeof key_resp_4.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
      routineTimer.reset();
      }
  
  key_resp_4.stop();
  // the Routine "BeginInstr" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

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
  
  for (const thisComponent of MainDilemmasComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
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
  for (const thisComponent of MainDilemmasComponents)
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

function MainDilemmasRoutineEnd() {
  //------Ending Routine 'MainDilemmas'-------
  for (const thisComponent of MainDilemmasComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
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

function MainAnswers_2RoutineBegin() {
  //------Prepare to start Routine 'MainAnswers_2'-------
  t = 0;
  MainAnswers_2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_3.keys = undefined;
  key_resp_3.rt = undefined;
  conBlank2.setText('');
  RemText2.setText(Reminder);
  leftText2.setText(MainLeftText);
  rightText2.setText(MainRightText);
  yes2.setText("Implement the plan ('y')");
  no2.setText("Do nothing ('n')");
  Question2.setText('What do you do?');
  // keep track of which components have finished
  MainAnswers_2Components = [];
  MainAnswers_2Components.push(key_resp_3);
  MainAnswers_2Components.push(conBlank2);
  MainAnswers_2Components.push(RemText2);
  MainAnswers_2Components.push(leftText2);
  MainAnswers_2Components.push(rightText2);
  MainAnswers_2Components.push(yes2);
  MainAnswers_2Components.push(no2);
  MainAnswers_2Components.push(Question2);
  
  for (const thisComponent of MainAnswers_2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function MainAnswers_2RoutineEachFrame() {
  //------Loop for each frame of Routine 'MainAnswers_2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = MainAnswers_2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *key_resp_3* updates
  if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
  }

  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_3.getKeys({keyList: ['y', 'n'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_3.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_3.rt = theseKeys[0].rt;
    }
  }
  
  
  // *conBlank2* updates
  if (((len(key_resp_3.keys) > 0)) && conBlank2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    conBlank2.tStart = t;  // (not accounting for frame time here)
    conBlank2.frameNStart = frameN;  // exact frame index
    conBlank2.setAutoDraw(true);
  }

  if (conBlank2.status === PsychoJS.Status.STARTED && t >= (conBlank2.tStart + 2)) {
    conBlank2.setAutoDraw(false);
  }
  
  // *RemText2* updates
  if (t >= 0.0 && RemText2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    RemText2.tStart = t;  // (not accounting for frame time here)
    RemText2.frameNStart = frameN;  // exact frame index
    RemText2.setAutoDraw(true);
  }

  if (RemText2.status === PsychoJS.Status.STARTED && Boolean((conBlank2.status == FINISHED))) {
    RemText2.setAutoDraw(false);
  }
  
  // *leftText2* updates
  if (t >= 0.0 && leftText2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftText2.tStart = t;  // (not accounting for frame time here)
    leftText2.frameNStart = frameN;  // exact frame index
    leftText2.setAutoDraw(true);
  }

  if (leftText2.status === PsychoJS.Status.STARTED && Boolean((conBlank2.status == FINISHED))) {
    leftText2.setAutoDraw(false);
  }
  
  // *rightText2* updates
  if (t >= 0.0 && rightText2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightText2.tStart = t;  // (not accounting for frame time here)
    rightText2.frameNStart = frameN;  // exact frame index
    rightText2.setAutoDraw(true);
  }

  if (rightText2.status === PsychoJS.Status.STARTED && Boolean((conBlank2.status == FINISHED))) {
    rightText2.setAutoDraw(false);
  }
  
  // *yes2* updates
  if (t >= 0.0 && yes2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    yes2.tStart = t;  // (not accounting for frame time here)
    yes2.frameNStart = frameN;  // exact frame index
    yes2.setAutoDraw(true);
  }

  if (yes2.status === PsychoJS.Status.STARTED && Boolean((conBlank2.status == FINISHED))) {
    yes2.setAutoDraw(false);
  }
  
  // *no2* updates
  if (t >= 0.0 && no2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    no2.tStart = t;  // (not accounting for frame time here)
    no2.frameNStart = frameN;  // exact frame index
    no2.setAutoDraw(true);
  }

  if (no2.status === PsychoJS.Status.STARTED && Boolean((conBlank2.status == FINISHED))) {
    no2.setAutoDraw(false);
  }
  
  if (key_resp_3.keys == 'y'){
      yes2.setColor('red');
      }
  if (key_resp_3.keys == 'n'){
      no2.setColor('red');
      }
  
  
  if (key_resp_3.keys == 'y' || key_resp.keys == 'n'){
      key_resp_3.status = FINISHED;
      }
  
  // *Question2* updates
  if (t >= 0.0 && Question2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question2.tStart = t;  // (not accounting for frame time here)
    Question2.frameNStart = frameN;  // exact frame index
    Question2.setAutoDraw(true);
  }

  if (Question2.status === PsychoJS.Status.STARTED && Boolean((conBlank2.status == FINISHED))) {
    Question2.setAutoDraw(false);
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
  for (const thisComponent of MainAnswers_2Components)
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

function MainAnswers_2RoutineEnd() {
  //------Ending Routine 'MainAnswers_2'-------
  for (const thisComponent of MainAnswers_2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
  if (typeof key_resp_3.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      }
  
  key_resp_3.stop();
  if (key_resp_3.keys == 'y'){
      choseCode = 1;
      }
  if (key_resp_3.keys == 'n'){
      choseCode = 0;
      }
  
  if (choseCode == 0 ){  
      print('Chose to do nothing, play out the probability ');
      probs = int(GroupProb);
      if (probs == 65){
          probability = SixtyGamble;
          print('65% gamble');
          }
      if (probs == 35){
          probability = ThirtyGamble;
          print('35% gamble');
          }
      if (probs == 50){
          probability = FiftyGamble;
          print('50% gamble');
          }
      result = random.choice(probability);
      print('Chance result:');
      print(result);
      if (result == 1){
          print('The group escaped!');
          print(earnings);
          chanceResult = (" was saved.");
          }
      if (result == 0){
          print('The group died! :(');
          chanceResult = (' died.');
          }
    }
  
  
  
  yes2.setColor('white')
  no2.setColor('white')
  
  if (conBlank2.status == FINISHED){
      leftText2.setAutoDraw(False);
      rightText2.setAutoDraw(False);
      yes2.setAutoDraw(False);
      no2.setAutoDraw(False);
      RemText2.setAutoDraw(False);
      Question2.setAutoDraw(False);
      continueRoutine = False ;
      }
  // the Routine "MainAnswers_2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

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
