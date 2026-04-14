import React, { useState, Children, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = '',
  stepContainerClassName = '',
  contentClassName = '',
  footerClassName = '',
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = 'Previous',
  nextButtonText = 'Next',
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isLastStep = currentStep === totalSteps;

  const updateStep = newStep => {
    if (newStep > totalSteps) {
      setIsCompleted(true);
      onFinalStepCompleted();
      // Reset to step 1 after showing completion
      setTimeout(() => {
        setIsCompleted(false);
        setCurrentStep(1);
        setDirection(0);
        onStepChange(1);
      }, 100);
    } else {
      setCurrentStep(newStep);
      setIsCompleted(false);
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div
      className="flex min-h-full flex-1 flex-col items-center justify-center p-1 sm:p-2"
      {...rest}
    >
      <div
        className={`mx-auto w-full max-w-4xl rounded-xl bg-white shadow-2xl border-2 border-black ${stepCircleContainerClassName}`}
        style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 0, 0, 0.1)' }}
      >
        <div className={`${stepContainerClassName} flex w-full items-center justify-center p-3 sm:p-4`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: clicked => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={clicked => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
              </React.Fragment>
            );
          })}
        </div>
        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={`space-y-1 px-3 sm:px-4 ${contentClassName}`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>
        {!isCompleted && (
          <div className={`px-3 sm:px-4 pb-3 sm:pb-4 ${footerClassName}`}>
            <div className={`mt-2 flex ${currentStep !== 1 ? 'justify-between' : 'justify-end'}`}>
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  className={`duration-300 rounded-lg px-4 py-2 font-semibold text-sm transition ${
                    currentStep === 1
                      ? 'pointer-events-none opacity-50 text-gray-400'
                      : 'text-gray-600 hover:text-[#003F68] border-2 border-gray-300 hover:border-[#003F68]'
                  }`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              <button
                onClick={isLastStep ? handleComplete : handleNext}
                className="duration-300 flex items-center justify-center rounded-lg bg-[#003F68] py-2 px-4 font-semibold text-sm tracking-wide text-white transition hover:bg-[#005a8f] active:bg-[#004a7a] shadow-md hover:shadow-lg"
                {...nextButtonProps}
              >
                {isLastStep ? 'Complete' : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepContentWrapper({ isCompleted, currentStep, direction, children, className }) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      style={{ position: 'relative', overflow: 'hidden', minHeight: '120px' }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: 'spring', duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={h => setParentHeight(h)}>
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: 'absolute', left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: dir => ({
    x: dir >= 0 ? '-100%' : '100%',
    opacity: 0
  }),
  center: {
    x: '0%',
    opacity: 1
  },
  exit: dir => ({
    x: dir >= 0 ? '50%' : '-50%',
    opacity: 0
  })
};

export function Step({ children }) {
  return <div>{children}</div>;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
  const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="relative cursor-pointer outline-none focus:outline-none"
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: '#000000', color: '#ffffff', borderColor: '#000000' },
          active: { scale: 1.1, backgroundColor: '#000000', color: '#ffffff', borderColor: '#000000' },
          complete: { scale: 1, backgroundColor: '#000000', color: '#ffffff', borderColor: '#000000' }
        }}
        transition={{ duration: 0.3 }}
        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full font-semibold border-2 shadow-md"
      >
        {status === 'complete' ? (
          <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        ) : status === 'active' ? (
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-white" />
        ) : (
          <span className="text-xs sm:text-sm text-white">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  const lineVariants = {
    incomplete: { width: 0, backgroundColor: '#e5e7eb' },
    complete: { width: '100%', backgroundColor: '#003F68' }
  };

  return (
    <div className="relative mx-1.5 sm:mx-2 h-0.5 flex-1 overflow-hidden rounded bg-gray-200">
      <motion.div
        className="absolute left-0 top-0 h-full"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? 'complete' : 'incomplete'}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.1, type: 'tween', ease: 'easeOut', duration: 0.3 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

