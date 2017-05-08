import React from 'react';
import PropTypes from 'prop-types';

const Scroller = () => {

  function scroller() {
    scrollTo(document.body, 0, 1250);
  }

  function scrollTo(element, to, duration) {
      var start = element.scrollTop,
          change = to - start,
          currentTime = 0,
          increment = 20;

      var animateScroll = function(){
          currentTime += increment;
          var val = Math.easeInOutQuad(currentTime, start, change, duration);
          element.scrollTop = val;
          if(currentTime < duration) {
              setTimeout(animateScroll, increment);
          }
      };
      animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
  	if (t < 1) return c/2*t*t + b;
  	t--;
  	return -c/2 * (t*(t-2) - 1) + b;
  };

  window.onscroll = () => showToTopBtn();

  function showToTopBtn() {
    if (document.body.scrollTop > window.outerHeight) {
      document.querySelector('.btn__to-top').classList.add('show');
    } else {
      document.querySelector('.btn__to-top').classList.remove('show');
    }
  }

  return (
    <a className="btn__to-top" onClick={() => scroller()}>Up</a>
  );
};

export default Scroller;
