import { useEffect,useState } from 'react';
import { useSpring, animated } from '@react-spring/web'

import BuildStatus from './components/BuildStatus/BuildStatus';

function App() {
  const [showBuildStatus, setShowBuildStatus] = useState(false);
  const [reverse, setReverse]= useState(false);
  const [delay, setDelay] = useState(3000);
  const animationProps = useSpring({ 
    from: {
      opacity: 0,
    },
    to: { 
      opacity: 1,
    },
    delay,
    reverse
  });

  useEffect(() => {
    setTimeout(() => {
      setShowBuildStatus(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (showBuildStatus) {
      setReverse(true);
      // setDelay(3000);
    }    
  }, [showBuildStatus])

  // if (showBuildStatus) {
  //   return (
      
  //   );
  // }

  return <animated.div style={animationProps}>
  <BuildStatus 
    heading="Build Failed!!!"
    message="There appears to be an issue with the latest push to the {branchName} branch. Please review and fix the build."
    statusLogoAlt="Build Failed"
    statusMessageLogoAlt="Build Failed Dialogue"
    status="failure" />
</animated.div>;
}

export default App;
