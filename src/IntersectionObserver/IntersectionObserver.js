const Observer = (anim, ...elements) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(anim);
      } else {
        entry.target.classList.remove(anim);
      }
    });
  });

  elements.forEach((ele) => observer.observe(ele));
};

export default Observer;
