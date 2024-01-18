(function() {
    const src = 'https://woof.will-myers.com/nested-dropdowns-demo';
    const component = document.querySelector('.iframe-resize');
    const iframeWrapper = component.querySelector('.iframe-wrapper');
    const iframe = component.querySelector('iframe');
    const resizeBar = component.querySelector('.resize-bar');
    const clickToDemo = component.querySelector('.click-to-demo button');
    const reset = component.querySelector('.reset');
    let isResizing = false;
  
    resizeBar.addEventListener('mousedown', function(e) {
      e.preventDefault();
      isResizing = true;
      component.dataset.isResizing = 'true'
    });
    document.addEventListener('mousemove', function(e) {
      if (isResizing) {
        const newWidth = e.clientX - iframeWrapper.getBoundingClientRect().left;
        const componentWidth = component.clientWidth;
        if (newWidth >= (componentWidth)) {
          iframeWrapper.style.width = `${componentWidth}px`;
          return;
        }
        iframeWrapper.style.width = `${newWidth}px`;
      }
    });
    document.addEventListener('mouseup', function(e) {
      isResizing = false;
      component.dataset.isResizing = 'false'
    });
    clickToDemo.addEventListener('click', function() {
      component.dataset.state = 'active'
    });
    component.addEventListener('click', () => {
      if (iframe.src === src) {
        component.removeAttribute('data-new-source')
        return;
      } else {
        component.setAttribute('data-new-source','')
      }
      
    })
    reset.addEventListener('click', () => {
      iframe.src = src;
    })
    window.addEventListener('resize', () => {
        iframeWrapper.style.width = `100%`;
    })
  }())