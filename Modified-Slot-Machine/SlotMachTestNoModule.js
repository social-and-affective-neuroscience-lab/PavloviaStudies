/********************* 
 * Slotmachtest Test *
 *********************/

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
  // Initialize components for Routine "Instr"
  InstrClock = new util.Clock();
  Instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  earnings = 0
  earningsStr = "$" + str(earnings)
  subID = parseInt(expInfo['participant'])
  
  FiftyGamble = [1,0]
  SixtyGamble = [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0]
  ThirtyGamble = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
  
  earning=0
  chosenMoney = 0
  // Initialize components for Routine "Inst2"
  Inst2Clock = new util.Clock();
  instruct2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct2',
    text: 'You will be given regulation instructions prior to a block of trials. Please employ the strategy while making your decision. \n\nYou will have three seconds to make your choice upon seeing the options. \n\nTo choose the option on the left, press "1". To choose the option on the right, press "2".\n\nYou will first be playing some practice rounds. To begin the practice, press enter!',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  enter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isi2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "PracticeCue"
  PracticeCueClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'EMPHASIZE',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.13,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isi2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Practice"
  PracticeClock = new util.Clock();
  Line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line', 
    vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],
    ori: 90, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  choice = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  GambleAmt = new visual.TextStim({
    win: psychoJS.window,
    name: 'GambleAmt',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  SureAmt = new visual.TextStim({
    win: psychoJS.window,
    name: 'SureAmt',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  GambleProb = new visual.TextStim({
    win: psychoJS.window,
    name: 'GambleProb',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  SureProb = new visual.TextStim({
    win: psychoJS.window,
    name: 'SureProb',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  moneyBank = new visual.Rect ({
    win: psychoJS.window, name: 'moneyBank', 
    width: [0.46, 0.24][0], height: [0.46, 0.24][1],
    ori: 0, pos: [0.68, (- 0.42)],
    lineWidth: 8, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  earningsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'earningsText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.64, (- 0.42)], height: 0.09,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "BeginInst"
  BeginInstClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You will now begin the full task.\n\nPress SPACE to start!',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isi2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi2',
    text: 'default text',
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
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "isi"
  isiClock = new util.Clock();
  isi2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Practice"
  PracticeClock = new util.Clock();
  Line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line', 
    vertices: [[-[1.0, 1.0][0]/2.0, 0], [+[1.0, 1.0][0]/2.0, 0]],
    ori: 90, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  choice = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  GambleAmt = new visual.TextStim({
    win: psychoJS.window,
    name: 'GambleAmt',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  SureAmt = new visual.TextStim({
    win: psychoJS.window,
    name: 'SureAmt',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  GambleProb = new visual.TextStim({
    win: psychoJS.window,
    name: 'GambleProb',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  SureProb = new visual.TextStim({
    win: psychoJS.window,
    name: 'SureProb',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  moneyBank = new visual.Rect ({
    win: psychoJS.window, name: 'moneyBank', 
    width: [0.46, 0.24][0], height: [0.46, 0.24][1],
    ori: 0, pos: [0.68, (- 0.42)],
    lineWidth: 8, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  earningsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'earningsText',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.64, (- 0.42)], height: 0.09,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "ThankYou"
  ThankYouClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '"Thank you for playing!"/n/n\n\n"Your total earnings are $" earnings',
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

function InstrRoutineBegin() {
  //------Prepare to start Routine 'Instr'-------
  t = 0;
  InstrClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  Instructions.setColor(new util.Color('white'));
  Instructions.setPos([0, 0]);
  Instructions.setText('In this part of the study, you will be making a series of monetary decisions.\n\nYou will have the choice between taking a gamble or choosing a sure option. \n\nFor each gamble, you will have a chance of either winning money, losing money, or gaining nothing, while the sure option guarantees a win or loss. \n\nPress space to continue. ');
  Instructions.setFont('Arial');
  Instructions.setHeight(0.06);
  space.keys = undefined;
  space.rt = undefined;
  // keep track of which components have finished
  InstrComponents = [];
  InstrComponents.push(Instructions);
  InstrComponents.push(space);
  
  InstrComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  InstrComponents.forEach( function(thisComponent) {
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

function InstrRoutineEnd() {
  //------Ending Routine 'Instr'-------
  InstrComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
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
  
  Inst2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Inst2Components.forEach( function(thisComponent) {
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

function Inst2RoutineEnd() {
  //------Ending Routine 'Inst2'-------
  Inst2Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
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

function isiRoutineBegin() {
  //------Prepare to start Routine 'isi'-------
  t = 0;
  isiClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  isi2.setText('+');
  // keep track of which components have finished
  isiComponents = [];
  isiComponents.push(isi2);
  
  isiComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  isiComponents.forEach( function(thisComponent) {
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

function isiRoutineEnd() {
  //------Ending Routine 'isi'-------
  isiComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

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
  
  PracticeCueComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  PracticeCueComponents.forEach( function(thisComponent) {
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

function PracticeCueRoutineEnd() {
  //------Ending Routine 'PracticeCue'-------
  PracticeCueComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
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
  trialIterator = PracticeLoop[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisPracticeLoop = result.value;
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
    trialList: 'PracticeSlotMach.csv',
    seed: undefined, name: 'mainLoop'});
  psychoJS.experiment.addLoop(mainLoop); // add the loop to the experiment
  currentLoop = mainLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = mainLoop[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisMainLoop = result.value;
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
  trialIterator = trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial = result.value;
    thisScheduler.add(importConditions(trials));
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

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

function mainLoopLoopEnd() {
  psychoJS.experiment.removeLoop(mainLoop);

  return Scheduler.Event.NEXT;
}

function PracticeRoutineBegin() {
  //------Prepare to start Routine 'Practice'-------
  t = 0;
  PracticeClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  Line.setSize([3, 0.5]);
  Line.setFillColor(new util.Color([(- 1.0), (- 1.0), (- 1.0)]));
  Line.setLineColor(new util.Color([(- 1.0), (- 1.0), (- 1.0)]));
  Line.setLineWidth(7);
  choice.keys = undefined;
  choice.rt = undefined;
  GambleAmt.setColor(new util.Color('white'));
  GambleAmt.setPos([(- 0.41), (- 0.1)]);
  GambleAmt.setText('');
  GambleAmt.setFont('Arial');
  GambleAmt.setHeight(0.11);
  SureAmt.setColor(new util.Color('white'));
  SureAmt.setPos([0.41, (- 0.1)]);
  SureAmt.setText('');
  SureAmt.setFont('Arial');
  SureAmt.setHeight(0.11);
  GambleProb.setColor(new util.Color('white'));
  GambleProb.setPos([(- 0.41), 0.3]);
  GambleProb.setText('');
  GambleProb.setFont('Arial');
  GambleProb.setHeight(0.13);
  SureProb.setColor(new util.Color('white'));
  SureProb.setPos([0.41, 0.3]);
  SureProb.setText('');
  SureProb.setFont('Arial');
  SureProb.setHeight(0.13);
  
  leftVarText=[]
  leftVarMoney = []
  rightVarText = []
  rightVarMoney = []
  result = []
  
  if (subID%2 == 1){
      leftVarText = (gambleWinLoss);
      leftVarMoney = (gamble);
      rightVarText = (sureWinLoss);
      rightVarMoney = (sure);
      }
  if (subID%2 == 0){
      rightVarText= (gambleWinLoss);
      rightVarMoney= (gamble);
      leftVarText= (sureWinLoss);
      leftVarMoney= (sure);
      }
  
  GambleAmt.setText(leftVarMoney)
  SureAmt.setText(rightVarMoney)
  GambleProb.setText(leftVarText)
  SureProb.setText(rightVarText)
  
  leftMoney = parseFloat(leftVarMoney[1:])
  
  rightMoney = parseFloat(rightVarMoney[1:])
  
  WinLossType = parseInt(WinLossCode)
  blank.setText('');
  earningsText.setText(earningsStr);
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
  
  PracticeComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  
  if (choice.keys == '1'){
      GambleAmt.setColor('green');
      chosenMoney = leftMoney;
      }
  if (choice.keys == '2'){
      SureAmt.setColor('green');
      chosenMoney = rightMoney;
      }
      
  if ((choice.keys == '1' or choice.keys == '2') && blank.status == NOT_STARTED){
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
  PracticeComponents.forEach( function(thisComponent) {
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

function PracticeRoutineEnd() {
  //------Ending Routine 'Practice'-------
  PracticeComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('choice.keys', choice.keys);
  if (typeof choice.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('choice.rt', choice.rt);
      }
  
  choice.stop();
  
  if (choice.keys == '1'){
      chosenMoney = leftMoney;
      }
  if (choice.keys == '2'){
      chosenMoney = rightMoney;
      }
  if (choice.keys != None){
      if (subID%2==1){
         if (choice.keys == '1' && WinLossCode== 1){
             print('gambled during win condition');
             probs = int(gambleProb);
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
             print('gamble result:');
             print(result);
             }
             if (result == 1){
                 earnings = earnings + chosenMoney;
                 print('Won money earnings:');
                 print(earnings);
             #    if result == 0: #lose
              #       earnings += 0
         
         if (choice.keys == '1' && WinLossCode==0){  
             print('gambled during lose condition');
            #gamProbability(gamProb)
             probs = int(gambleProb);
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
             print('gamble result:');
             print(result);
             }
             if (result == 1){
                earnings = earnings - chosenMoney;
                print('Lost Money earnings:');
                print(earnings);
                }
           #      if result == 0: #win
           #          earnings += 0
                      
         if (choice.keys == '2'&& WinLossCode ==1){  
             print('did not gamble for win condition');
             earnings = earnings + chosenMoney;
             print('Won sure money earnings:');
             print(earnings)       ;
             }
         if (choice.keys == '2' and WinLossCode == 0){
             earnings = earnings - chosenMoney;
             print('Lost sure Money earnings:');
             print(earnings);
             }
  
  
      if (subID%2==0){
         if (choice.keys == '2' && WinLossCode == 1){ 
             print('gambled during win condition');
             probs = int(gambleProb);
             }
             if (probs == 65){
                 probability = SixtyGamble;
                 print('65% gamble');
                 }
             if (probs == 35){
                 probability = ThirtyGamble;
                 print('35% gamble');
             if (probs == 50){
                 probability = FiftyGamble;
                 print('50% gamble');
                 }
             result = random.choice(probability);
             print('gamble result:');
             print(result);
             }
             if (result == 1){
                 earnings = earnings + chosenMoney;
                 print('won money earnings:');
                 print(earnings);
                 }
              
         if (choice.keys == '2' && WinLossCode == 0){ 
             print('gambled during lose condition');
             
             probs = int(gambleProb);
             }
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
             print('gamble result:');
             print(result);
             }
             if (result == 1){
                 earnings = earnings - chosenMoney;
                 print('Lost Money earnings:');
                 print(earnings);
                 }
                      
         if (choice.keys == '1' && WinLossCode == 1){ 
             print('did not gamble during win condition');
             earnings = earnings + chosenMoney;
             print('Won sure money earnings:');
             print(earnings);
             }
         if (choice.keys == '1' && WinLossCode == 0){ 
             print('did not gamble for loss condition');
             earnings = earnings - chosenMoney;
             print('Lost sure Money earnings:');
             print(earnings);
             }
      earningsStr= str(earnings);
      earningsText.setText(earningsStr);
  GambleAmt.setColor('white');
  SureAmt.setColor('white');
  
  if (blank.status==FINISHED){
      GambleAmt.setAutoDraw(false);
      SureAmt.setAutoDraw(false);
      SureProb.setAutoDraw(false);
      GambleProb.setAutoDraw(false);
      Line.setAutoDraw(false);
      moneyBank.setAutoDraw(false);
      }
  return Scheduler.Event.NEXT;
}

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
  
  BeginInstComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  BeginInstComponents.forEach( function(thisComponent) {
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

function BeginInstRoutineEnd() {
  //------Ending Routine 'BeginInst'-------
  BeginInstComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  earnings = 0;
  earning = 0;
  earningsText.setText("$0.00")
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

function ThankYouRoutineBegin() {
  //------Prepare to start Routine 'ThankYou'-------
  t = 0;
  ThankYouClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  ThankYouComponents = [];
  ThankYouComponents.push(text_3);
  
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
  
  // *text_3* updates
  if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_3.tStart = t;  // (not accounting for frame time here)
    text_3.frameNStart = frameN;  // exact frame index
    text_3.setAutoDraw(true);
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
