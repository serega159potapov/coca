import '/scss/blog.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useActivitySlider, } from './components/blog/activity.js';
import { useArticlesSlider } from './components/blog/articles.js';

useTheme();
useBurger();
useActivitySlider();
useArticlesSlider();

