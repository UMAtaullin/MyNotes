import React from 'react';
import cls from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const handleMouseEnter = (event) => {
    event.currentTarget.classList.add(cls.active);
  };

  const handleMouseLeave = (event) => {
    if (!event.currentTarget.classList.contains(cls.active)) {
      event.currentTarget.classList.remove(cls.active);
    }
  };

  const handleClick = (event) => {
    // Удаляем класс active с других элементов
    const items = document.querySelectorAll(`.${cls.item}`);
    items.forEach(item => item.classList.remove(cls.active));
    
    // Добавляем класс active к текущему элементу
    event.currentTarget.classList.add(cls.active);
  };

  return (
    <nav className={cls.nav}>
      <div className={cls.row}>
        <div
          className={cls.item}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <NavLink to='layout'>Layout</NavLink>
        </div>
        <div
          className={cls.item}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <NavLink to='js'>JS</NavLink>
        </div>
        <div
          className={cls.item}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <NavLink to='react'>React</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
