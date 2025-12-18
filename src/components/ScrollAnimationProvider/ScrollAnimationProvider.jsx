import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollAnimationProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // ページ遷移時にスクロール位置をリセット
    window.scrollTo(0, 0);
    
    // すべてのアニメーション要素をリセット
    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((el) => {
      el.classList.remove('animate-in');
    });
    
    // 少し遅延してからObserverをセットアップ（DOM更新を待つ）
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const initScrollAnimations = () => {
    const elements = document.querySelectorAll('[data-scroll]');
    
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 遅延がある場合は待ってからアニメーション
            const delay = entry.target.dataset.scrollDelay;
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, parseInt(delay));
            } else {
              entry.target.classList.add('animate-in');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    elements.forEach((el) => {
      // 既に画面内にある要素はすぐにアニメーション
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add('animate-in');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  };

  return children;
};




