/************************ 
 * Foodregpavlovia Test *
 ************************/

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
let expName = 'FoodRegPavlovia';  // from the Builder filename that created this script
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
flowScheduler.add(introRoutineBegin);
flowScheduler.add(introRoutineEachFrame);
flowScheduler.add(introRoutineEnd);
flowScheduler.add(practiceCueBegin);
flowScheduler.add(practiceCueEachFrame);
flowScheduler.add(practiceCueEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(beginintroRoutineBegin);
flowScheduler.add(beginintroRoutineEachFrame);
flowScheduler.add(beginintroRoutineEnd);
flowScheduler.add(isiRoutineBegin);
flowScheduler.add(isiRoutineEachFrame);
flowScheduler.add(isiRoutineEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(endRoutineBegin);
flowScheduler.add(endRoutineEachFrame);
flowScheduler.add(endRoutineEnd);
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
  subIDArray = Math.floor((Math.random() * 100000) + 1);
  subID = parseInt(subIDArray);
  console.log("subID:" + subID);

  return Scheduler.Event.NEXT;
}

var introClock;
var Instructions;
var beginInstructions;
var beginintroClock;
var space;
var beginspace;
var CueClock;
var cue;
var ISI;
var ExPicClock;
var exImage;
var PicClock;
var Image;
var ratingsClock;
var ratingQ;
var isiClock;
var Iti;
var BeginInstrClock;
var text;
var globalClock;
var routineTimer;
var scale_msg1;
var scale_msg2;
var scale_msg3;
var slideKeys1;
var slideKeys;
var slider1Clock;
var slider1;
var CueType;
var subID;
var trials_2;
var CueArray1;
var CueArray2;
var ExIti;
var rowArray;
var row;
var practCue;
var practCueClock;
var endText;
var endClock;
var spacek;



subID = parseInt(expInfo.participant);


function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  Instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions',
    text: 'In this part of the study you will be given a regulation strategy to use while viewing various pictures of food.\n\nThen you will use a rating scale to indicate how much you are craving the food item.\n\nPlease use your mouse to select a rating, then press ENTER to submit your response. You will have 5 seconds to make your rating.\n\nYou will first be completing a few practice rounds.\n\nWhen you are ready, press SPACE to start!',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  spacek = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  beginspace = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart:true});
  // Initialize components for Routine "Cue"
  CueClock = new util.Clock();
  cue = new visual.TextStim({
    win: psychoJS.window, text: 'default text',
    font: 'Arial', units : undefined, 
    pos: [0, 0], height: 0.13,  wrapWidth: 1.9, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  endClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'Thank you for participating!\n\nYou have completed this part of the study.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

  
//   cue.setText(CueType)
  
  ISI = new visual.TextStim({
    win: psychoJS.window,
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Pic"
  PicClock = new util.Clock();
  Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "ratings"
  ratingsClock = new util.Clock();
  ratingQ = new visual.TextStim({
    win: psychoJS.window,
    name: 'ratingQ',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.1], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  Iti = new visual.TextStim({
    win: psychoJS.window,
    name: 'Iti',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

  // Initialize components for Routine "BeginInstr"
  beginintroClock = new util.Clock();
  beginInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You will now be completing the full task. \n\nPress SPACE to begin!',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Cue"
  CueClock = new util.Clock();
  cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue',text: 'default text',
    font: 'Arial',pos: [0, 0], height: 0.13,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  practCueClock = new util.Clock();
  practCue = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue',text: 'default text',
    font: 'Arial',pos: [0, 0], height: 0.13,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

 ISI = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Pic"
  PicClock = new util.Clock();
  Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  
  // Initialize components for Routine "ratings"
  ratingsClock = new util.Clock();
  ratingQ = new visual.TextStim({
    win: psychoJS.window,
    name: 'ratingQ',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.1], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  slideKeys = new core.BuilderKeyResponse(psychoJS);
  slideKeys1 = new core.BuilderKeyResponse(psychoJS);
  
  scale_msg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg1',
    text: 'Not at all',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.51), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  scale_msg2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg2',
    text: 'Very much',
    font: 'Arial',
    units : undefined, 
    pos: [(0.51), (- 0.31)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });


  slider1Clock = new util.Clock();
  slider1 = new visual.Slider({
    win: psychoJS.window, name: 'slider1',
    size: [0.9, 0.04], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5'], ticks: [1, 2, 3, 4, 5],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });

  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var introComponents;
function introRoutineBegin() {
  //------Prepare to start Routine 'intro'-------
  t = 0;
  introClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  space.keys = undefined;
  space.rt = undefined;
  // keep track of which components have finished
  introComponents = [];
  introComponents.push(Instructions);
  introComponents.push(space);
  
  for (const thisComponent of introComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function introRoutineEachFrame() {
  //------Loop for each frame of Routine 'intro'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = introClock.getTime();
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
  for (const thisComponent of introComponents)
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


function introRoutineEnd() {
  //------Ending Routine 'intro'-------
  for (const thisComponent of introComponents) {
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
  // the Routine "intro" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var endComponents;
function endRoutineBegin() {
  //------Prepare to start Routine 'intro'-------
  t = 0;
  endClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  spacek.keys = undefined;
  spacek.rt = undefined;
  // keep track of which components have finished
  endComponents = [];
  endComponents.push(endText);
  endComponents.push(spacek);
  
  for (const thisComponent of endComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function endRoutineEachFrame() {
  //------Loop for each frame of Routine 'intro'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = endClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Instructions* updates
  if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    endText.tStart = t;  // (not accounting for frame time here)
    endText.frameNStart = frameN;  // exact frame index
    endText.setAutoDraw(true);
  }

  
  // *space* updates
  if (t >= 0.0 && spacek.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    spacek.tStart = t;  // (not accounting for frame time here)
    spacek.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { spacek.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { spacek.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { spacek.clearEvents(); });
  }

  if (spacek.status === PsychoJS.Status.STARTED) {
    let theseKeys = space.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      spacek.keys = theseKeys[0].name;  // just the last key pressed
      spacek.rt = theseKeys[0].rt;
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
  for (const thisComponent of endComponents)
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


function endRoutineEnd() {
  //------Ending Routine 'intro'-------
  for (const thisComponent of endComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof spacek.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('space.rt', spacek.rt);
      routineTimer.reset();
      }
  
  spacek.stop();
  // the Routine "intro" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}





var trialsLoop;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'FoodRegEx.csv'),
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trialsLoop); // add the loop to the experiment
  currentLoop = trialsLoop;  // we're now the current loop

 // Schedule all the trials in the trialList:
  for (const thisTrial of trialsLoop) {
    thisScheduler.add(importConditions(trialsLoop));
    thisScheduler.add(PicRoutineBegin);
    thisScheduler.add(PicRoutineEachFrame);
    thisScheduler.add(PicRoutineEnd);
    thisScheduler.add(ratingsRoutineBegin);
    thisScheduler.add(ratingsRoutineEachFrame);
    thisScheduler.add(ratingsRoutineEnd);
    thisScheduler.add(isiRoutineBegin);
    thisScheduler.add(isiRoutineEachFrame);
    thisScheduler.add(isiRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trialsLoop);

  return Scheduler.Event.NEXT;
}


function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'foodRows.csv'),
    seed: undefined, name: 'trials_2'});
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

// Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    thisScheduler.add(importConditions(trials_2));
    thisScheduler.add(CueRoutineBegin);
    thisScheduler.add(CueRoutineEachFrame);
    thisScheduler.add(CueRoutineEnd);
    const mainTrialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(mainTrialsLoopBegin, mainTrialsLoopScheduler);
    thisScheduler.add(mainTrialsLoopScheduler);
    thisScheduler.add(mainTrialsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var mainTrials;
function mainTrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  mainTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'FoodReg.xlsx', rows),
    seed: undefined, name: 'mainTrials'});
  psychoJS.experiment.addLoop(mainTrials); // add the loop to the experiment
  currentLoop = mainTrials;  // we're now the current loop

 // Schedule all the trials in the trialList:
  for (const thisMainTrial of mainTrials) {
    thisScheduler.add(importConditions(mainTrials));
    thisScheduler.add(PicRoutineBegin);
    thisScheduler.add(PicRoutineEachFrame);
    thisScheduler.add(PicRoutineEnd);
    thisScheduler.add(ratingsRoutineBegin);
    thisScheduler.add(ratingsRoutineEachFrame);
    thisScheduler.add(ratingsRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function mainTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(mainTrials);

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

var practCueComponents;
function practiceCueBegin() {
  //------Prepare to start Routine 'Cue'-------
  t = 0;
  practCueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(5.000000);
  // update component parameters for each repeat
  if (subID%2 === 0){
      practCue.setText('REACT');
  } 
  if(subID%2===1){
      practCue.setText('REGULATE');
  }
//   cue.setText(CueType);
  ISI.setText('+');
  // keep track of which components have finished
  practCueComponents = [];
  practCueComponents.push(practCue);
  practCueComponents.push(ISI);
  
  for (const thisComponent of practCueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function practiceCueEachFrame() {
  //------Loop for each frame of Routine 'Cue'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = practCueClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *cue* updates
  if (t >= 0.0 && practCue.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    practCue.tStart = t;  // (not accounting for frame time here)
    practCue.frameNStart = frameN;  // exact frame index
    practCue.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (practCue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    practCue.setAutoDraw(false);
  }
  
  // *ISI* updates
  if (t >= 5 && ISI.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ISI.tStart = t;  // (not accounting for frame time here)
    ISI.frameNStart = frameN;  // exact frame index
    ISI.setAutoDraw(true);
  }

  frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
  for (const thisComponent of practCueComponents)
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


function practiceCueEnd() {
  //------Ending Routine 'Cue'-------
  for (const thisComponent of practCueComponents) {
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
  routineTimer.add(5.000000);
  // update component parameters for each repeat
  if (subID%2 === 0){
      cue.setText(CueType1);
  } 
  if(subID%2===1){
      cue.setText(CueType2);
  }
//   cue.setText(CueType);
  ISI.setText('+');
  // keep track of which components have finished
  CueComponents = [];
  CueComponents.push(cue);
  CueComponents.push(ISI);
  
  for (const thisComponent of CueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
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
  
  // *ISI* updates
  if (t >= 3 && ISI.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ISI.tStart = t;  // (not accounting for frame time here)
    ISI.frameNStart = frameN;  // exact frame index
    ISI.setAutoDraw(true);
  }

  frameRemains = 2 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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


var PicComponents;
function PicRoutineBegin() {
  //------Prepare to start Routine 'Pic'-------
  t = 0;
  PicClock.reset(); // clock
  frameN = -1;
  routineTimer.add(8.000000);
  // update component parameters for each repeat
  Image.setSize([1.5, 1]);
  Image.setImage(Picture);
  // keep track of which components have finished
  PicComponents = [];
  PicComponents.push(Image);
  
  for (const thisComponent of PicComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function PicRoutineEachFrame() {
  //------Loop for each frame of Routine 'Pic'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = PicClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Image* updates
  if (t >= 0.0 && Image.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Image.tStart = t;  // (not accounting for frame time here)
    Image.frameNStart = frameN;  // exact frame index
    Image.setAutoDraw(true);
    console.log(Image);
  }

  frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Image.setAutoDraw(false);
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
  for (const thisComponent of PicComponents)
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


function PicRoutineEnd() {
  //------Ending Routine 'Pic'-------
  for (const thisComponent of PicComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}



var ratingsComponents;
function ratingsRoutineBegin() {
  //------Prepare to start Routine 'ratings'-------
  t = 0;
  ratingsClock.reset(); // clock
  frameN = -1;
  routineTimer.add(5.000000);
  // update component parameters for each repeat
  ratingQ.setText('How much are you craving this food?');
  // keep track of which components have finished
  ratingsComponents = [];
  ratingsComponents.push(ratingQ);
  ratingsComponents.push(scale_msg1);
  ratingsComponents.push(scale_msg2);
//   ratingsComponents.push(scale_msg3);
  ratingsComponents.push(slideKeys);
  ratingsComponents.push(slideKeys1);
  ratingsComponents.push(slider1);
  ratingsComponents.push(slider1Clock);


  
  for (const thisComponent of ratingsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ratingsRoutineEachFrame() {
  //------Loop for each frame of Routine 'ratings'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ratingsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *ratingQ* updates
  if (t >= 0.0 && ratingQ.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ratingQ.tStart = t;  // (not accounting for frame time here)
    ratingQ.frameNStart = frameN;  // exact frame index
    ratingQ.setAutoDraw(true);
  }
if (t >= 0.0 && scale_msg1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_msg1.tStart = t;  // (not accounting for frame time here)
    scale_msg1.frameNStart = frameN;  // exact frame index
    scale_msg1.setAutoDraw(true);
  }

  if (t >= 0.0 && scale_msg2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_msg2.tStart = t;  // (not accounting for frame time here)
    scale_msg2.frameNStart = frameN;  // exact frame index
    scale_msg2.setAutoDraw(true);
  }

//   if (t >= 0.0 && scale_msg3.status === PsychoJS.Status.NOT_STARTED) {
//     // keep track of start time/frame for later
//     scale_msg3.tStart = t;  // (not accounting for frame time here)
//     scale_msg3.frameNStart = frameN;  // exact frame index
//     scale_msg3.setAutoDraw(true);
//   }
  
//   display the ratings scale
  if (t >= 0.0 && slider1.status === PsychoJS.Status.NOT_STARTED) {
    slider1.tStart = t;
    slider1.frameNStart = frameN;
    slider1.setAutoDraw(true);
  }

// let them press enter to record the answer
  if (t >= 0.0 && slideKeys.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys.tStart = t;  // (not accounting for frame time here)
    slideKeys.frameNStart = frameN;  // exact frame index
    slideKeys.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
    if (t >= 0.0 && slideKeys1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys1.tStart = t;  // (not accounting for frame time here)
    slideKeys1.frameNStart = frameN;  // exact frame index
    slideKeys1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys1.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
 if (slideKeys.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      // a response ends the routine
      continueRoutine = false;
  
    }
  }
   if (slideKeys1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2', '3', '4', '5', '6', '7']});

    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys1.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys1.rt = slideKeys.clock.getTime();
      // a response ends the routine
      continueRoutine = true;
  
    }
  }
  frameRemains = 5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (ratingQ.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ratingQ.setAutoDraw(false);
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
  for (const thisComponent of ratingsComponents)
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


function ratingsRoutineEnd() {
  //------Ending Routine 'ratings'-------
  for (const thisComponent of ratingsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  psychoJS.experiment.addData('slider1.response', slider1.getRating());
  psychoJS.experiment.addData('slider1.rt', slider1.getRT());
  
  if (slideKeys.keys === undefined || slideKeys.keys.length === 0) {   
    slideKeys.keys = undefined;
  }

  if (typeof slideKeys.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys.rt', slideKeys.rt);
    routineTimer.reset();
  }

  
  routineTimer.reset();
  slider1.reset();
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
  Iti.setText('+');
  // keep track of which components have finished
  isiComponents = [];
  isiComponents.push(Iti);
  
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
  
  // *Iti* updates
  if (t >= 0.0 && Iti.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Iti.tStart = t;  // (not accounting for frame time here)
    Iti.frameNStart = frameN;  // exact frame index
    Iti.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Iti.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Iti.setAutoDraw(false);
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


var beginintroComponents;
function beginintroRoutineBegin() {
  //------Prepare to start Routine 'intro'-------
  t = 0;
  beginintroClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  beginspace.keys = undefined;
  beginspace.rt = undefined;
  // keep track of which components have finished
  beginintroComponents = [];
  beginintroComponents.push(beginInstructions);
  beginintroComponents.push(beginspace);
  
  for (const thisComponent of beginintroComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}
function beginintroRoutineEachFrame() {
  //------Loop for each frame of Routine 'intro'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = beginintroClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Instructions* updates
  if (t >= 0.0 && beginInstructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    beginInstructions.tStart = t;  // (not accounting for frame time here)
    beginInstructions.frameNStart = frameN;  // exact frame index
    beginInstructions.setAutoDraw(true);
  }

  
  // *space* updates
  if (t >= 0.0 && beginspace.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    beginspace.tStart = t;  // (not accounting for frame time here)
    beginspace.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { beginspace.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { beginspace.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { beginspace.clearEvents(); });
  }

  if (beginspace.status === PsychoJS.Status.STARTED) {
    let theseKeys = beginspace.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      beginspace.keys = theseKeys[0].name;  // just the last key pressed
      beginspace.rt = theseKeys[0].rt;
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
  for (const thisComponent of beginintroComponents)
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


function beginintroRoutineEnd() {
  //------Ending Routine 'intro'-------
  for (const thisComponent of beginintroComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }

  beginspace.stop();
  // the Routine "intro" was not non-slip safe, so reset the non-slip timer
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
