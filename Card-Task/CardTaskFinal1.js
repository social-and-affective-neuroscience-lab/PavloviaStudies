/*********************** 
 * Cardtaskfinal1 Test *
 ***********************/

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
  units: 'height'
});

// store info about the experiment session:
let expName = 'CardTaskFinal1';  // from the Builder filename that created this script
let expInfo = {'Participant ID *': '', "Age": '', 'Sex ': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));
//set up the scheduler as a reference
const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK, add the functions to the schedule
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin);
flowScheduler.add(InstructionsRoutineEachFrame);
flowScheduler.add(InstructionsRoutineEnd);
flowScheduler.add(Instructions2RoutineBegin);
flowScheduler.add(Instructions2RoutineEachFrame);
flowScheduler.add(Instructions2RoutineEnd);
flowScheduler.add(exInstructionsRoutineBegin);
flowScheduler.add(exInstructionsRoutineEachFrame);
flowScheduler.add(exInstructionsRoutineEnd);
const exTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exTrialsLoopBegin, exTrialsLoopScheduler);
flowScheduler.add(exTrialsLoopScheduler);
flowScheduler.add(exTrialsLoopEnd);
flowScheduler.add(exEndTextRoutineBegin);
flowScheduler.add(exEndTextRoutineEachFrame);
flowScheduler.add(exEndTextRoutineEnd);

flowScheduler.add(firstITIRoutineBegin);
flowScheduler.add(firstITIRoutineEachFrame);
flowScheduler.add(firstITIRoutineEnd);
const alltrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(alltrialsLoopBegin, alltrialsLoopScheduler);
flowScheduler.add(alltrialsLoopScheduler);
flowScheduler.add(alltrialsLoopEnd);
flowScheduler.add(EndTextRoutineBegin);
flowScheduler.add(EndTextRoutineEachFrame);
flowScheduler.add(EndTextRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.1.2';

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
//declare variables
var InstructionsClock;
var Welcome;
var Welcome2;
var Instructions2Clock;
var firstITIClock;
var firstTrialITI;
var code_2Clock;
var Reward_TrialClock;
var polygon;
var text;
var ISI;
var RewardOutcomeClock;
var polygon2_2;
var ITI_2;
var Punishment_trialClock;
var rectangle;
var text1;
var ISI2;
var PunishmentOutcomeClock;
var rectangle2_2;
var ITI2_2;
var EndTextClock;
var Finished;
var globalClock;
var routineTimer;
var nRepsblock1;
var nRepsblock2;
var outcome1;
var outcome2;
var random1_2;
var randomMin2;
var randomMax2;
var random2_2;

var exTextClock;
var exText;
var exRewardClock;
var exISI1;
var exPolygon;
var exText2;
var exISI2;
var exRewardOutcomeClock;
var exPolygon2;
var exFeedback1;
var arrow1;
var exPunClock;
var exISI3;
var exRect;
var exText3;
var exISI4;
var exPunOutcomeClock;
var exRect2;
var exFeedback2;
var arrow2;
var exEndTextClock;
var exEndText;

var exrandom1_2;
var exrandomMin2;
var exrandomMax2;
var exrandom2_2;


function experimentInit() {
    //Initialize example components
  exTextClock = new util.Clock();
  exText = new visual.TextStim({
    win: psychoJS.window,
    name: 'example',
    text: 'You will first be playing three practice rounds to get used to the task and the timing. \n\nAgain, when you see the question mark on the screen, you will have two seconds to respond.\n\n Press `1` or `2` on your keyboard to make a guess.\n\n When you are ready, press ENTER!',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0  
  })  
  
    // Initialize components for Routine "Reward_Trial"
  exRewardClock = new util.Clock();
  exISI1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi1',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  exPolygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon',
    units: psychoJS.window.units,
    width: [0.6], height: [0.8],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  exText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '?',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  exISI2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "RewardOutcome"
  exRewardOutcomeClock = new util.Clock();
  exPolygon2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon2_2',
    units: psychoJS.window.units,
    width: [0.6], height: [0.8],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  exFeedback1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_2',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  arrow1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'arrow1_2',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Punishment_trial"
  exPunClock = new util.Clock();
  exISI3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi2',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  exRect = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle',
    units: psychoJS.window.units,
    width: [0.6], height: [0.8],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  exText3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: '?',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  exISI4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI2',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "PunishmentOutcome"
  exPunOutcomeClock = new util.Clock();
  exRect2 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle2_2',
    units: psychoJS.window.units,
    width: [0.6], height: [0.8],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  exFeedback2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback2_2',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1,
    depth: -1.0 
  });
  
  arrow2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'arrow2_2',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "endText"
  exEndTextClock = new util.Clock();
  exEndText = new visual.TextStim({
    win: psychoJS.window,
    name: 'exEndText',
    text: 'You will now be playing the full game.\n\nPress ENTER to begin!',
    font: 'Arial',
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
    
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  Welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcome',
    text: 'In this part of the study, you will be playing a guessing game in which you will have the chance to earn some money.\n\nOn the next page, you will be given the instructions. Please read them carefully! \n\nPress SPACE to continue.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.065,  wrapWidth: 1.3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instructions2Clock = new util.Clock();
  Welcome2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Inst2',
    text: 'Your job is to guess if a number shown on screen will have a value less than 5 (1 - 4), or greater than 5 (6 - 9).\n\nWhen you see a rectangle with a question mark inside of it, make your guess!\nYou can press `1` if you think it will be less than 5, or `2` if you think it will be greater than 5.\n\nEach correct guess will earn you $0.50, and each incorrect guess will deduct $0.25. \nYou will only have two seconds to respond upon seeing the question mark, so please be ready to guess!\nYour total earnings will be shown at the end of the task. \nPress SPACE to continue.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  

  // Initialize components for Routine "firstITI"
  firstITIClock = new util.Clock();
  firstTrialITI = new visual.TextStim({
    win: psychoJS.window,
    name: 'firstTrialITI',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "code_2"
  code_2Clock = new util.Clock();
  nRepsblock1=0;
  nRepsblock2=0;
  
  // Initialize components for Routine "Reward_Trial"
  Reward_TrialClock = new util.Clock();
  //rectangle
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon',
    units: 'height',
    width: [0.6], height: [0.8],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color('white'),
    fillColor: new util.Color([0,0,0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  

  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  ISI = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "RewardOutcome"
  RewardOutcomeClock = new util.Clock();
  //rectangle
  polygon2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon2_2',
    units: 'height',
    width: [0.6], height: [0.8],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color('white'),
    fillColor: new util.Color([0,0,0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  //number outcome to be displayed
  outcome1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_1',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  

  ITI_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ITI_2',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Punishment_trial"
  Punishment_trialClock = new util.Clock();
//   rectangle
  rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle',
    units: 'height',
    width: [0.6], height: [0.8],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color('white'),
    fillColor: new util.Color([0,0,0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: '?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  ISI2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI2',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "PunishmentOutcome"
  PunishmentOutcomeClock = new util.Clock();
//   rectangle
  rectangle2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle2_2',
    units: 'height',
    width: [0.6], height: [0.8],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color('white'),
    fillColor: new util.Color([0,0,0]),
    opacity: 1, depth: 0, interpolate: true,
  });

//   number outcome to be displayed
  outcome2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  ITI2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ITI2_2',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "EndText"
  EndTextClock = new util.Clock();
  Finished = new visual.TextStim({
    win: psychoJS.window,
    name: 'Finished',
    text: `Thanks for playing! You earned $6.00.\n\nPlease press SPACE to continue to the next part of the study.`,
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var response1;
//var response1_2;
var InstructionsComponents;
function InstructionsRoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  InstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  response1 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(Welcome);
  InstructionsComponents.push(response1);
 
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
  
  // *Welcome* updates
  if (t >= 0.0 && Welcome.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Welcome.tStart = t;  // (not accounting for frame time here)
    Welcome.frameNStart = frameN;  // exact frame index
    Welcome.setAutoDraw(true);
  }

  
  // *response1* updates
  if (t >= 0.0 && response1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response1.tStart = t;  // (not accounting for frame time here)
    response1.frameNStart = frameN;  // exact frame index
    response1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response1.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (response1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      response1.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      response1.rt = response1.clock.getTime();
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
  
  // check responses
  if (response1.keys === undefined || response1.keys.length === 0) {    // No response was made
      response1.keys = undefined;
  }
  
  psychoJS.experiment.addData('response1.keys', response1.keys);
  if (typeof response1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('response1.rt', response1.rt);
      routineTimer.reset();
      }

  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


var response1_2;
var Instructions2Components;
function Instructions2RoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  Instructions2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  response1_2 = new core.BuilderKeyResponse(psychoJS);

  // keep track of which components have finished
  Instructions2Components = [];
  Instructions2Components.push(Welcome2);
  Instructions2Components.push(response1_2);

  for (const thisComponent of Instructions2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function Instructions2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Instructions2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Welcome* updates, show the instructions text
  if (t >= 0.0 && Welcome2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Welcome2.tStart = t;  // (not accounting for frame time here)
    Welcome2.frameNStart = frameN;  // exact frame index
    Welcome2.setAutoDraw(true);
  }

  
  // *response1* updates
  if (t >= 0.0 && response1_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response1_2.tStart = t;  // (not accounting for frame time here)
    response1_2.frameNStart = frameN;  // exact frame index
    response1_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response1.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (response1_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      response1_2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      response1_2.rt = response1.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
      //Welcome.setAutoDraw(false);
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


function Instructions2RoutineEnd() {
  //------Ending Routine 'Instructions'-------
  for (const thisComponent of Instructions2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  

    // check responses
  if (response1_2.keys === undefined || response1_2.keys.length === 0) {    // No response was made
      response1_2.keys = undefined;
  }
  
  psychoJS.experiment.addData('response1_2.keys', response1_2.keys);
  if (typeof response1_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('response1_2.rt', response1_2.rt);
      routineTimer.reset();
      }
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


var exResponse1;
var exInstructionsComponents;
function exInstructionsRoutineBegin() {
  //------Prepare to start Routine 'example instructions'-------
  t = 0;
  exTextClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  exResponse1 = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  exInstructionsComponents = [];
  exInstructionsComponents.push(exText);
  exInstructionsComponents.push(exResponse1);
  
  for (const thisComponent of exInstructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function exInstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'exInstructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = exTextClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *exText* updates
  if (t >= 0.0 && exText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exText.tStart = t;  // (not accounting for frame time here)
    exText.frameNStart = frameN;  // exact frame index
    exText.setAutoDraw(true);
  }

  
  // *exResponse1* updates
  if (t >= 0.0 && exResponse1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exResponse1.tStart = t;  // (not accounting for frame time here)
    exResponse1.frameNStart = frameN;  // exact frame index
    exResponse1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { exResponse1.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (exResponse1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      exResponse1.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      exResponse1.rt = exResponse1.clock.getTime();
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
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of exInstructionsComponents)
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


function exInstructionsRoutineEnd() {
  //------Ending Routine 'exInstructions'-------
  for (const thisComponent of exInstructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (exResponse1.keys === undefined || exResponse1.keys.length === 0) {    // No response was made
      exResponse1.keys = undefined;
  }
  
  psychoJS.experiment.addData('exResponse1.keys', exResponse1.keys);
  if (typeof exResponse1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('exResponse1.rt', exResponse1.rt);
      routineTimer.reset();
      }
  
  // the Routine "exInstructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


var exTrials;
function exTrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  exTrials = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'exTrials'});
  psychoJS.experiment.addLoop(exTrials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisAlltrial of exTrials) {
    thisScheduler.add(importConditions(exTrials));
    const exRewardLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(exRewardLoopBegin, exRewardLoopScheduler);
    thisScheduler.add(exRewardLoopScheduler);
    thisScheduler.add(exRewardLoopEnd);
    const exLossLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(exLossLoopBegin, exLossLoopScheduler);
    thisScheduler.add(exLossLoopScheduler);
    thisScheduler.add(exLossLoopEnd);
    thisScheduler.add(exendLoopIteration(thisAlltrial));
  }

  return Scheduler.Event.NEXT;
}

var exReward;
function exRewardLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  exReward = new TrialHandler({
    psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'exReward'});
  psychoJS.experiment.addLoop(exReward); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisReward of exReward) {
    thisScheduler.add(importConditions(exReward));
    thisScheduler.add(exReward_TrialRoutineBegin);
    thisScheduler.add(exReward_TrialRoutineEachFrame);
    thisScheduler.add(exReward_TrialRoutineEnd);
    thisScheduler.add(exRewardOutcomeRoutineBegin);
    thisScheduler.add(exRewardOutcomeRoutineEachFrame);
    thisScheduler.add(exRewardOutcomeRoutineEnd);
    thisScheduler.add(exendLoopIteration(thisReward));
  }

  return Scheduler.Event.NEXT;
}


function exRewardLoopEnd() {
  psychoJS.experiment.removeLoop(exReward);

  return Scheduler.Event.NEXT;
}

var exLoss;
function exLossLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  exLoss = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'exLoss'});
  psychoJS.experiment.addLoop(exLoss); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisLos of exLoss) {
    thisScheduler.add(importConditions(exLoss));
    thisScheduler.add(exPunishment_trialRoutineBegin);
    thisScheduler.add(exPunishment_trialRoutineEachFrame);
    thisScheduler.add(exPunishment_trialRoutineEnd);
    thisScheduler.add(exPunishmentOutcomeRoutineBegin);
    thisScheduler.add(exPunishmentOutcomeRoutineEachFrame);
    thisScheduler.add(exPunishmentOutcomeRoutineEnd);
    thisScheduler.add(exendLoopIteration(thisLos));
  }

  return Scheduler.Event.NEXT;
}


function exLossLoopEnd() {
  psychoJS.experiment.removeLoop(exLoss);

  return Scheduler.Event.NEXT;
}


function exTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(exTrials);

  return Scheduler.Event.NEXT;
}

var exresponse2;
var exReward_TrialComponents;
function exReward_TrialRoutineBegin() {
  //------Prepare to start Routine 'Reward_Trial'-------
  t = 0;
  exRewardClock.reset(); // clock
  frameN = -1;
  routineTimer.add(6.000000);
  // update component parameters for each repeat
  exresponse2 = new core.BuilderKeyResponse(psychoJS);

  // keep track of which components have finished
  exReward_TrialComponents = [];
  exReward_TrialComponents.push(exISI1);
  exReward_TrialComponents.push(arrow1);  
  exReward_TrialComponents.push(exPolygon);
  exReward_TrialComponents.push(exText2);
  exReward_TrialComponents.push(exFeedback1);
  exReward_TrialComponents.push(exresponse2);
  exReward_TrialComponents.push(exISI2);
  
  for (const thisComponent of exReward_TrialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


var frameRemains;
function exReward_TrialRoutineEachFrame() {
  //------Loop for each frame of Routine 'Reward_Trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = exRewardClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi1* updates
  if (t >= 0.0 && exISI1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exISI1.tStart = t;  // (not accounting for frame time here)
    exISI1.frameNStart = frameN;  // exact frame index
    exISI1.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exISI1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exISI1.setAutoDraw(false);
  }
  
  // *polygon* updates
  if (t >= 2 && exPolygon.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exPolygon.tStart = t;  // (not accounting for frame time here)
    exPolygon.frameNStart = frameN;  // exact frame index
    exPolygon.setAutoDraw(true);
  }

  frameRemains = 2 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exPolygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exPolygon.setAutoDraw(false);
  }
  
  // *text* updates
  if (t >= 2 && exText2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exText2.tStart = t;  // (not accounting for frame time here)
    exText2.frameNStart = frameN;  // exact frame index
    exText2.setAutoDraw(true);
  }

  frameRemains = 2 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exText2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exText2.setAutoDraw(false);
  }
  
  // *response2* updates
  if (t >= 2 && exresponse2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exresponse2.tStart = t;  // (not accounting for frame time here)
    exresponse2.frameNStart = frameN;  // exact frame index
    exresponse2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { exresponse2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = 2 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exresponse2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exresponse2.status = PsychoJS.Status.FINISHED;
  }

  if (exresponse2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      exresponse2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      exresponse2.rt = exresponse2.clock.getTime();
    }
  }
  
  
  // *ISI* updates
  if (t >= 4 && exISI2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exISI2.tStart = t;  // (not accounting for frame time here)
    exISI2.frameNStart = frameN;  // exact frame index
    exISI2.setAutoDraw(true);
  }

  frameRemains = 4 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exISI2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exISI2.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of exReward_TrialComponents)
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


function exReward_TrialRoutineEnd() {
  //------Ending Routine 'Reward_Trial'-------
  for (const thisComponent of exReward_TrialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  //set variables for outcome numbers <5
  var exrandom1;
  var exmin1;
  var exmax1;
  exmin1 = 1;
  exmax1 = 5;
  exrandom1 = Math.floor(Math.random() * (exmax1 - exmin1) ) + exmin1;
  
  //set variables for outcome numbers >5
  var exrandom2;
  var exmin2;
  var exmax2;
  exmin2 = 6;
  exmax2 = 10;
  exrandom2 = Math.floor(Math.random() * (exmax2 - exmin2) ) + exmin2;

  
  // check responses
  if (exresponse2.keys === undefined || exresponse2.keys.length === 0) {    // No response was made
      exresponse2.keys = undefined;
  }
  
  if (exresponse2.keys == '1') {
    exrandom1_2 = exrandom1.toString()
    exFeedback1.setText(exrandom1);
    arrow1.setText('+$0.50');
    arrow1.setColor(new util.Color('green'));
  }
  //   if they guessed more than 5 in the reward trial, give them a number >5 and say they won money, turn text green
  else if (exresponse2.keys == '2') {
    exrandom2_2 = exrandom2.toString()
    exFeedback1.setText(exrandom2);
    arrow1.setText('+$0.50');
    arrow1.setColor(new util.Color('green'));
  }
//   if they did not respond, show other text
  else if (exresponse2.keys == undefined) {
    exFeedback1.setText("No Response");
    arrow1.setText('#');
    arrow1.setColor(new util.Color('white'));
  }

  
  psychoJS.experiment.addData('exresponse2.keys', exresponse2.keys);
  if (typeof exresponse2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('exresponse2.rt', exresponse2.rt);
      }
  
  return Scheduler.Event.NEXT;
}

var exRewardOutcomeComponents;
function exRewardOutcomeRoutineBegin() {
  //------Prepare to start Routine 'RewardOutcome'-------
  t = 0;
  exRewardOutcomeClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat

  // keep track of which components have finished
  exRewardOutcomeComponents = [];
  exRewardOutcomeComponents.push(exPolygon2);
  exRewardOutcomeComponents.push(exFeedback1);
  exRewardOutcomeComponents.push(arrow1);
  
  for (const thisComponent of exRewardOutcomeComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}



function exRewardOutcomeRoutineEachFrame() {
  //------Loop for each frame of Routine 'RewardOutcome'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = exRewardOutcomeClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *polygon2_2* updates
  if (t >= 0 && exPolygon2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exPolygon2.tStart = t;  // (not accounting for frame time here)
    exPolygon2.frameNStart = frameN;  // exact frame index
    exPolygon2.setAutoDraw(true);
  }

  frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exPolygon2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exPolygon2.setAutoDraw(false);
  }
  
  // *feedback1_2* updates
  if (t >= 0 && exFeedback1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exFeedback1.tStart = t;  // (not accounting for frame time here)
    exFeedback1.frameNStart = frameN;  // exact frame index
    exFeedback1.setAutoDraw(true);
  }

  frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exFeedback1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exFeedback1.setAutoDraw(false);
  }
 
  
  // *arrow1_2* updates
  if (t >= 1 && arrow1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    arrow1.tStart = t;  // (not accounting for frame time here)
    arrow1.frameNStart = frameN;  // exact frame index
    arrow1.setAutoDraw(true);
  }

  frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (arrow1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    arrow1.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of exRewardOutcomeComponents)
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


function exRewardOutcomeRoutineEnd() {
  //------Ending Routine 'RewardOutcome'-------
  for (const thisComponent of exRewardOutcomeComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var exresponse3;
var exPunishment_trialComponents;
function exPunishment_trialRoutineBegin() {
  //------Prepare to start Routine 'Punishment_trial'-------
  t = 0;
  exPunClock.reset(); // clock
  frameN = -1;
  routineTimer.add(6.000000);
  // update component parameters for each repeat
  exresponse3 = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  exPunishment_trialComponents = [];
  exPunishment_trialComponents.push(exISI3);
  exPunishment_trialComponents.push(exRect);
  exPunishment_trialComponents.push(exText3);
  exPunishment_trialComponents.push(exFeedback2);
  exPunishment_trialComponents.push(arrow2);
  exPunishment_trialComponents.push(exresponse3);
  exPunishment_trialComponents.push(exISI4);
  
  for (const thisComponent of exPunishment_trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function exPunishment_trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'Punishment_trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = exPunClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *isi2* updates
  if (t >= 0.0 && exISI3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exISI3.tStart = t;  // (not accounting for frame time here)
    exISI3.frameNStart = frameN;  // exact frame index
    exISI3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exISI3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exISI3.setAutoDraw(false);
  }
  
  // *rectangle* updates
  if (t >= 2 && exRect.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exRect.tStart = t;  // (not accounting for frame time here)
    exRect.frameNStart = frameN;  // exact frame index
    exRect.setAutoDraw(true);
  }

  frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exRect.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exRect.setAutoDraw(false);
  }
  
  // *text1* updates
  if (t >= 2 && exText3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exText3.tStart = t;  // (not accounting for frame time here)
    exText3.frameNStart = frameN;  // exact frame index
    exText3.setAutoDraw(true);
  }

  frameRemains = 2 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exText3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exText3.setAutoDraw(false);
  }
  
  // *response3* updates
  if (t >= 2 && exresponse3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exresponse3.tStart = t;  // (not accounting for frame time here)
    exresponse3.frameNStart = frameN;  // exact frame index
    exresponse3.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { exresponse3.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exresponse3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exresponse3.status = PsychoJS.Status.FINISHED;
  }

  if (exresponse3.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      exresponse3.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      exresponse3.rt = exresponse3.clock.getTime();
    }
  }
  
  
  // *ISI2* updates
  if (t >= 4 && exISI4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exISI4.tStart = t;  // (not accounting for frame time here)
    exISI4.frameNStart = frameN;  // exact frame index
    exISI4.setAutoDraw(true);
  }

  frameRemains = 4 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (ISI2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ISI2.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of exPunishment_trialComponents)
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


function exPunishment_trialRoutineEnd() {
  //------Ending Routine 'Punishment_trial'-------
  for (const thisComponent of exPunishment_trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // declare variables for randomization of numbers  <5
 var exrandom1_2_2;
 var exmin1_2;
 var exmax1_2;
 exmin1_2 = 1;
 exmax1_2 = 5;
 exrandom1_2_2 = Math.floor(Math.random() * (exmax1_2 - exmin1_2)) + exmin1_2;
// declare variables for randomization of numbers  >5
 var exrandom2_2_2;
 var exmin2_2;
 exmin2_2 = 6;
 var exmax2_2;
 exmax2_2 = 10;
 exrandom2_2_2 = Math.floor(Math.random() * (exmax2_2 - exmin2_2)) + exmin2_2;

  
  // check responses
  if (exresponse3.keys === undefined || exresponse3.keys.length === 0) {    // No response was made
      exresponse3.keys = undefined;
  }
  
  if (exresponse3.keys == '2') {
    exrandomMin2 = exrandom1_2_2.toString()
    exFeedback2.setText(exrandomMin2);
    arrow2.setText('-$0.25');
    arrow2.setColor(new util.Color('red'));
  }
  //   if they guessed <5 in punishment trial, show a number greater than 5, say they lost money, set text to red
  else if (exresponse3.keys == '1') {
    exrandomMax2 = exrandom2_2_2.toString()
    exFeedback2.setText(exrandomMax2);
    arrow2.setText('-$0.25');
    arrow2.setColor(new util.Color('red'));
  }
//   if they did not respond, show other text
  else if (exresponse3.keys == undefined){
    exFeedback2.setText("No Response");
    arrow2.setText('#');
    arrow2.setColor(new util.Color('white'));
  }

  
  psychoJS.experiment.addData('exresponse3.keys', exresponse3.keys);
  if (typeof exresponse3.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('exresponse3.rt', exresponse3.rt);
      }
  
  return Scheduler.Event.NEXT;
}

var exPunishmentOutcomeComponents;
function exPunishmentOutcomeRoutineBegin() {
  //------Prepare to start Routine 'PunishmentOutcome'-------
  t = 0;
  exPunOutcomeClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
//   exFeedback2.setText(outcome);
//   arrow2.setColor(new util.Color(color));
//  arrow2.setText(money);
  // keep track of which components have finished
  exPunishmentOutcomeComponents = [];
  exPunishmentOutcomeComponents.push(exRect2);
  exPunishmentOutcomeComponents.push(exFeedback2);
  exPunishmentOutcomeComponents.push(arrow2);
  
  for (const thisComponent of exPunishmentOutcomeComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function exPunishmentOutcomeRoutineEachFrame() {
  //------Loop for each frame of Routine 'PunishmentOutcome'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = exPunOutcomeClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *rectangle2_2* updates
  if (t >= 0 && exRect2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exRect2.tStart = t;  // (not accounting for frame time here)
    exRect2.frameNStart = frameN;  // exact frame index
    exRect2.setAutoDraw(true);
  }

  frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exRect2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exRect2.setAutoDraw(false);
  }
  
  // *feedback2_2* updates
  if (t >= 0 && exFeedback2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exFeedback2.tStart = t;  // (not accounting for frame time here)
    exFeedback2.frameNStart = frameN;  // exact frame index
    exFeedback2.setAutoDraw(true);
  }

  frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (exFeedback2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    exFeedback2.setAutoDraw(false);
  }
  
  // *arrow2_2* updates
  if (t >= 1 && arrow2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    arrow2.tStart = t;  // (not accounting for frame time here)
    arrow2.frameNStart = frameN;  // exact frame index
    arrow2.setAutoDraw(true);
  }

  frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (arrow2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    arrow2.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of exPunishmentOutcomeComponents)
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


function exPunishmentOutcomeRoutineEnd() {
  //------Ending Routine 'PunishmentOutcome'-------
  for (const thisComponent of exPunishmentOutcomeComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


var exkey_resp_4;
var exEndTextComponents;
function exEndTextRoutineBegin() {
  //------Prepare to start Routine 'endText'-------
  t = 0;
  exEndTextClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  exkey_resp_4 = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  exEndTextComponents = [];
  exEndTextComponents.push(exEndText);
  exEndTextComponents.push(exkey_resp_4);
  
  for (const thisComponent of exEndTextComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function exEndTextRoutineEachFrame() {
  //------Loop for each frame of Routine 'endText'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = exEndTextClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *exEndText* updates
  if (t >= 0.0 && exEndText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exEndText.tStart = t;  // (not accounting for frame time here)
    exEndText.frameNStart = frameN;  // exact frame index
    exEndText.setAutoDraw(true);
  }

  
  // *key_resp_4* updates
  if (t >= 0.0 && exkey_resp_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    exkey_resp_4.tStart = t;  // (not accounting for frame time here)
    exkey_resp_4.frameNStart = frameN;  // exact frame index
    exkey_resp_4.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { exkey_resp_4.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (exkey_resp_4.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      exkey_resp_4.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      exkey_resp_4.rt = exkey_resp_4.clock.getTime();
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
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of exEndTextComponents)
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


function exEndTextRoutineEnd() {
  //------Ending Routine 'endText'-------
  for (const thisComponent of exEndTextComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (exkey_resp_4.keys === undefined || exkey_resp_4.keys.length === 0) {    // No response was made
      exkey_resp_4.keys = undefined;
  }
  
  psychoJS.experiment.addData('exkey_resp_4.keys', exkey_resp_4.keys);
  if (typeof exkey_resp_4.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('exkey_resp_4.rt', exkey_resp_4.rt);
      routineTimer.reset();
      }
  
  // the Routine "endText" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function exendLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


var firstITIComponents;
function firstITIRoutineBegin() {
  //------Prepare to start Routine 'firstITI'-------
  t = 0;
  firstITIClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  firstITIComponents = [];
  firstITIComponents.push(firstTrialITI);
  
  for (const thisComponent of firstITIComponents)
    if ('status' in thisComponent){
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
    }
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function firstITIRoutineEachFrame() {
  //------Loop for each frame of Routine 'firstITI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = firstITIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *firstTrialITI* updates
  if (t >= 0.0 && firstTrialITI.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    firstTrialITI.tStart = t;  // (not accounting for frame time here)
    firstTrialITI.frameNStart = frameN;  // exact frame index
    firstTrialITI.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (firstTrialITI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    firstTrialITI.setAutoDraw(false);
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
  for (const thisComponent of firstITIComponents)
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


function firstITIRoutineEnd() {
  //------Ending Routine 'firstITI'-------
  for (const thisComponent of firstITIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var alltrials;
var currentLoop;
function alltrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  alltrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'spreadsheet5.xlsx',
    seed: undefined, name: 'alltrials'});
  psychoJS.experiment.addLoop(alltrials); // add the loop to the experiment
  currentLoop = alltrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisAlltrial of alltrials) {
    thisScheduler.add(importConditions(alltrials));
    thisScheduler.add(code_2RoutineBegin);
    thisScheduler.add(code_2RoutineEachFrame);
    thisScheduler.add(code_2RoutineEnd);
    const RewardLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RewardLoopBegin, RewardLoopScheduler);
    thisScheduler.add(RewardLoopScheduler);
    thisScheduler.add(RewardLoopEnd);
    const LossLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(LossLoopBegin, LossLoopScheduler);
    thisScheduler.add(LossLoopScheduler);
    thisScheduler.add(LossLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisAlltrial));
  }

  return Scheduler.Event.NEXT;
}

var Reward;
function RewardLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Reward = new TrialHandler({
    psychoJS: psychoJS,
    nReps: nRepsblock1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Reward'});
  psychoJS.experiment.addLoop(Reward); // add the loop to the experiment
  currentLoop = Reward;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisReward of Reward) {
    thisScheduler.add(importConditions(Reward));
    thisScheduler.add(Reward_TrialRoutineBegin);
    thisScheduler.add(Reward_TrialRoutineEachFrame);
    thisScheduler.add(Reward_TrialRoutineEnd);
    thisScheduler.add(RewardOutcomeRoutineBegin);
    thisScheduler.add(RewardOutcomeRoutineEachFrame);
    thisScheduler.add(RewardOutcomeRoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisReward));
  }

  return Scheduler.Event.NEXT;
}


function RewardLoopEnd() {
  psychoJS.experiment.removeLoop(Reward);

  return Scheduler.Event.NEXT;
}

var Loss;
function LossLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Loss = new TrialHandler({
    psychoJS: psychoJS,
    nReps: nRepsblock2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Loss'});
  psychoJS.experiment.addLoop(Loss); // add the loop to the experiment
  currentLoop = Loss;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLos of Loss) {
    thisScheduler.add(importConditions(Loss));
    thisScheduler.add(Punishment_trialRoutineBegin);
    thisScheduler.add(Punishment_trialRoutineEachFrame);
    thisScheduler.add(Punishment_trialRoutineEnd);
    thisScheduler.add(PunishmentOutcomeRoutineBegin);
    thisScheduler.add(PunishmentOutcomeRoutineEachFrame);
    thisScheduler.add(PunishmentOutcomeRoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisLos));
  }

  return Scheduler.Event.NEXT;
}


function LossLoopEnd() {
  psychoJS.experiment.removeLoop(Loss);

  return Scheduler.Event.NEXT;
}


function alltrialsLoopEnd() {
  psychoJS.experiment.removeLoop(alltrials);

  return Scheduler.Event.NEXT;
}

var code_2Components;
function code_2RoutineBegin() {
  //------Prepare to start Routine 'code_2'-------
  t = 0;
  code_2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
if (selectBlock==1) {
 nRepsblock1=1;
 nRepsblock2=0;
}
else if (selectBlock==2){
 nRepsblock1=0;
 nRepsblock2=1;
}
  // keep track of which components have finished
  code_2Components = [];
  
  for (const thisComponent of code_2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function code_2RoutineEachFrame() {
  //------Loop for each frame of Routine 'code_2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = code_2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of code_2Components)
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


function code_2RoutineEnd() {
  //------Ending Routine 'code_2'-------
  for (const thisComponent of code_2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "code_2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

//declare variables to be used for reward routines
var response2;
var moneyW;
var Reward_TrialComponents;
function Reward_TrialRoutineBegin() {
  //------Prepare to start Routine 'Reward_Trial'-------
  t = 0;
  Reward_TrialClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);
  // update component parameters for each repeat
  
  //set keyboard response
  response2 = new core.BuilderKeyResponse(psychoJS);
//money amounts to be shown
  moneyW = new visual.TextStim({
    win: psychoJS.window,
    name: 'money',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, -0.02], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('green'),  opacity: 1,
    depth: 0.0 
  });
  
  
  // keep track of which components have finished
  Reward_TrialComponents = [];
  Reward_TrialComponents.push(polygon);
  Reward_TrialComponents.push(text);
  Reward_TrialComponents.push(moneyW);
  Reward_TrialComponents.push(outcome1);
  Reward_TrialComponents.push(response2);
  Reward_TrialComponents.push(ISI);

 for (const thisComponent of Reward_TrialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;

}


function Reward_TrialRoutineEachFrame() {
  //------Loop for each frame of Routine 'Reward_Trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Reward_TrialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // draw the rectangle
  if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    polygon.tStart = t;  // (not accounting for frame time here)
    polygon.frameNStart = frameN;  // exact frame index
    polygon.setAutoDraw(true);
  }
//show for 2 seconds then remove
  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    polygon.setAutoDraw(false);
  }
  
  // display the ? for two seconds
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text.setAutoDraw(false);
  }
  
  // give them 2 seconds to respond
  if (t >= 0.0 && response2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response2.tStart = t;  // (not accounting for frame time here)
    response2.frameNStart = frameN;  // exact frame index
    response2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (response2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    response2.status = PsychoJS.Status.FINISHED;
  }

  if (response2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      response2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      response2.rt = response2.clock.getTime();
    }
  }
  
  
  // *ISI* updates
  if (t >= 2.0 && ISI.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ISI.tStart = t;  // (not accounting for frame time here)
    ISI.frameNStart = frameN;  // exact frame index
    ISI.setAutoDraw(true);
  }

  frameRemains = 2.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (ISI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ISI.setAutoDraw(false);
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
  for (const thisComponent of Reward_TrialComponents)
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


function Reward_TrialRoutineEnd() {
  //------Ending Routine 'Reward_Trial'-------

  for (const thisComponent of Reward_TrialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  //set variables for outcome numbers <5
  var random1;
  var min1;
  var max1;
  min1 = 1;
  max1 = 5;
  random1 = Math.floor(Math.random() * (max1 - min1) ) + min1;
  
  //set variables for outcome numbers >5
  var random2;
  var min2;
  var max2;
  min2 = 6;
  max2 = 10;
  random2 = Math.floor(Math.random() * (max2 - min2) ) + min2;
  
  // check the response
  if (response2.keys === undefined || response2.keys.length === 0) {    // No response was made
      response2.keys = undefined;
  }

  Reward.addData('response2.keys',response2.keys);
  if (response2.keys != undefined) {
      Reward.addData('response2.rt', response2.rt);
  }
  
//   if they guessed less than 5 in the reward trial, give them a number <5 and say they won money, turn text green
  if (response2.keys == '1') {
    random1_2 = random1.toString()
    outcome1.setText(random1_2);
    moneyW.setText('+$0.50');
    moneyW.setColor(new util.Color('green'));
  }
  //   if they guessed more than 5 in the reward trial, give them a number >5 and say they won money, turn text green
  else if (response2.keys == '2') {
    random2_2 = random2.toString()
    outcome1.setText(random2_2);
    moneyW.setText('+$0.50');
    moneyW.setColor(new util.Color('green'));
  }
//   if they did not respond, show other text
  else if (response2.keys == undefined) {
    outcome1.setText("No Response");
    moneyW.setText('#');
    moneyW.setColor(new util.Color('white'));
  }
        

  psychoJS.experiment.addData('response2.keys', response2.keys);
  if (typeof response2.keys !== 'undefined') {  // we had a response
    psychoJS.experiment.addData('response2.rt', response2.rt);
  }
  
  return Scheduler.Event.NEXT;
}

var RewardOutcomeComponents;
function RewardOutcomeRoutineBegin() {
  //------Prepare to start Routine 'RewardOutcome'-------
  t = 0;
  RewardOutcomeClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);
  RewardOutcomeComponents = [];
  RewardOutcomeComponents.push(polygon2_2);
  RewardOutcomeComponents.push(outcome1);
  RewardOutcomeComponents.push(moneyW);
  RewardOutcomeComponents.push(ITI_2);
  
  for (const thisComponent of RewardOutcomeComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function RewardOutcomeRoutineEachFrame() {
  //------Loop for each frame of Routine 'RewardOutcome'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = RewardOutcomeClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  //draw rectangle for 2 seconds
  if (t >= 0 && polygon2_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    polygon2_2.tStart = t;  // (not accounting for frame time here)
    polygon2_2.frameNStart = frameN;  // exact frame index
    polygon2_2.setAutoDraw(true);
  }

  frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (polygon2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    polygon2_2.setAutoDraw(false);
  }
  
  // display the number feedback for 1 second
  if (t >= 0 && outcome1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome1.tStart = t;  // (not accounting for frame time here)
    outcome1.frameNStart = frameN;  // exact frame index
    outcome1.setAutoDraw(true);
  }

  frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome1.setAutoDraw(false);
  }
  

  //display the money feedback for 1 second
  if (t >= 1 && moneyW.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    moneyW.tStart = t;  // (not accounting for frame time here)
    moneyW.frameNStart = frameN;  // exact frame index
    moneyW.setAutoDraw(true);
  }

  frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (moneyW.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    moneyW.setAutoDraw(false);
  }
  
  // show the + for 2 seconds
  if (t >= 2.0 && ITI_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ITI_2.tStart = t;  // (not accounting for frame time here)
    ITI_2.frameNStart = frameN;  // exact frame index
    ITI_2.setAutoDraw(true);
  }

  frameRemains = 2.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (ITI_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ITI_2.setAutoDraw(false);
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
  for (const thisComponent of RewardOutcomeComponents)
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


function RewardOutcomeRoutineEnd() {
  //------Ending Routine 'RewardOutcome'-------
  for (const thisComponent of RewardOutcomeComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

// declare variables for punishment trial
var moneyL;
var response3;
var Punishment_trialComponents;
function Punishment_trialRoutineBegin() {
  //------Prepare to start Routine 'Punishment_trial'-------
  t = 0;
  Punishment_trialClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);
  // update component parameters for each repeat
  response3 = new core.BuilderKeyResponse(psychoJS);
  moneyL = new visual.TextStim({
    win: psychoJS.window,
    name: 'money',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, -0.02], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: 0.0 
  });
  

  // keep track of which components have finished
  Punishment_trialComponents = [];
  Punishment_trialComponents.push(rectangle);
  Punishment_trialComponents.push(text1);
  Punishment_trialComponents.push(moneyL);
  Punishment_trialComponents.push(outcome2);
  Punishment_trialComponents.push(response3);
  Punishment_trialComponents.push(ISI2);

 for (const thisComponent of Punishment_trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;

}


function Punishment_trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'Punishment_trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Punishment_trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // draw the rectangle for 2 seconds
  if (t >= 0.0 && rectangle.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rectangle.tStart = t;  // (not accounting for frame time here)
    rectangle.frameNStart = frameN;  // exact frame index
    rectangle.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (rectangle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    rectangle.setAutoDraw(false);
  }
  
  // show the ? for 2 seconds
  if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text1.tStart = t;  // (not accounting for frame time here)
    text1.frameNStart = frameN;  // exact frame index
    text1.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text1.setAutoDraw(false);
  }
  
  // let them respond within 2 seconds
  if (t >= 0.0 && response3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response3.tStart = t;  // (not accounting for frame time here)
    response3.frameNStart = frameN;  // exact frame index
    response3.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response3.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (response3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    response3.status = PsychoJS.Status.FINISHED;
  }

  if (response3.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      response3.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      response3.rt = response3.clock.getTime();
    }
  }
  
  
  // *ISI2* updates
  if (t >= 2.0 && ISI2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ISI2.tStart = t;  // (not accounting for frame time here)
    ISI2.frameNStart = frameN;  // exact frame index
    ISI2.setAutoDraw(true);
  }

  frameRemains = 2.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (ISI2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ISI2.setAutoDraw(false);
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
  for (const thisComponent of Punishment_trialComponents)
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


function Punishment_trialRoutineEnd() {
  //------Ending Routine 'Punishment_trial'-------
  for (const thisComponent of Punishment_trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
// declare variables for randomization of numbers  <5
var random1_2_2;
var min1_2;
var max1_2;
min1_2 = 1;
max1_2 = 5;
random1_2_2 = Math.floor(Math.random() * (max1_2 - min1_2)) + min1_2;
// declare variables for randomization of numbers  >5
var random2_2_2;
var min2_2;
min2_2 = 6;
var max2_2;
max2_2 = 10;
random2_2_2 = Math.floor(Math.random() * (max2_2 - min2_2)) + min2_2;
  
  // check responses
  if (response3.keys === undefined || response3.keys.length === 0) {    // No response was made
      response3.keys = undefined;
  }
  
  psychoJS.experiment.addData('response3.keys', response3.keys);
  if (typeof response3.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('response3.rt', response3.rt);
  }
  
  
  if (response3.keys != undefined) {
    psychoJS.experiment.addData('response3.rt', response3.rt);
  }
//   if they guessed >5 in punishment trial, show a number less than 5, say they lost money, set text to red
  if (response3.keys == '2') {
    randomMin2 = random1_2_2.toString()
    outcome2.setText(randomMin2);
    moneyL.setText('-$0.25');
    moneyL.setColor(new util.Color('red'));
  }
  //   if they guessed <5 in punishment trial, show a number greater than 5, say they lost money, set text to red
  else if (response3.keys == '1') {
    randomMax2 = random2_2_2.toString()
    outcome2.setText(randomMax2);
    moneyL.setText('-$0.25');
    moneyL.setColor(new util.Color('red'));
  }
//   if they did not respond, show other text
  else if (response3.keys == undefined){
    outcome2.setText("No Response");
    moneyL.setText('#');
    moneyL.setColor(new util.Color('white'));
  }

  
  return Scheduler.Event.NEXT;
}

var PunishmentOutcomeComponents;
function PunishmentOutcomeRoutineBegin() {
  //------Prepare to start Routine 'PunishmentOutcome'-------
  t = 0;
  PunishmentOutcomeClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);

  PunishmentOutcomeComponents = [];
  PunishmentOutcomeComponents.push(rectangle2_2);
  PunishmentOutcomeComponents.push(moneyL);
  PunishmentOutcomeComponents.push(outcome2);
  PunishmentOutcomeComponents.push(ITI2_2);
  
  for (const thisComponent of PunishmentOutcomeComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function PunishmentOutcomeRoutineEachFrame() {
  //------Loop for each frame of Routine 'PunishmentOutcome'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = PunishmentOutcomeClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // draw rectangle
  if (t >= 0 && rectangle2_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rectangle2_2.tStart = t;  // (not accounting for frame time here)
    rectangle2_2.frameNStart = frameN;  // exact frame index
    rectangle2_2.setAutoDraw(true);
  }

  frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (rectangle2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    rectangle2_2.setAutoDraw(false);
  }
  
  // display number feedback for 1 second
  if (t >= 0 && outcome2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome2.tStart = t;  // (not accounting for frame time here)
    outcome2.frameNStart = frameN;  // exact frame index
    outcome2.setAutoDraw(true);
  }

  frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome2.setAutoDraw(false);
  }
  
  // display the money feedback for 1 second
  if (t >= 1 && moneyL.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    moneyL.tStart = t;  // (not accounting for frame time here)
    moneyL.frameNStart = frameN;  // exact frame index
    moneyL.setAutoDraw(true);
  }

  frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (moneyL.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    moneyL.setAutoDraw(false);
  }
  
  // *ITI2_2* updates
  if (t >= 2 && ITI2_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ITI2_2.tStart = t;  // (not accounting for frame time here)
    ITI2_2.frameNStart = frameN;  // exact frame index
    ITI2_2.setAutoDraw(true);
  }

  frameRemains = 2 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (ITI2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ITI2_2.setAutoDraw(false);
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
  for (const thisComponent of PunishmentOutcomeComponents)
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


function PunishmentOutcomeRoutineEnd() {
  //------Ending Routine 'PunishmentOutcome'-------
  for (const thisComponent of PunishmentOutcomeComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var key_resp_2;
var EndTextComponents;
function EndTextRoutineBegin() {
  //------Prepare to start Routine 'EndText'-------
  t = 0;
  EndTextClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_2 = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  EndTextComponents = [];
  EndTextComponents.push(Finished);
  EndTextComponents.push(key_resp_2);
  
  for (const thisComponent of EndTextComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function EndTextRoutineEachFrame() {
  //------Loop for each frame of Routine 'EndText'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = EndTextClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display end text
  if (t >= 0.0 && Finished.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Finished.tStart = t;  // (not accounting for frame time here)
    Finished.frameNStart = frameN;  // exact frame index
    Finished.setAutoDraw(true);
  }

  
  //press keyboard to finish
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    key_resp_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_2.rt = key_resp_2.clock.getTime();
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
  for (const thisComponent of EndTextComponents)
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


function EndTextRoutineEnd() {
  //------Ending Routine 'EndText'-------
  for (const thisComponent of EndTextComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (key_resp_2.keys === undefined || key_resp_2.keys.length === 0) {    // No response was made
      key_resp_2.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  // the Routine "EndText" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisScheduler, thisTrial) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      thisScheduler.stop();
    } else if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
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
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
//   when they press space, redirect to choice task
  window.location.replace("https://run.pavlovia.org/SANlab/modified-slot-machine-game");
  return Scheduler.Event.QUIT;
}
