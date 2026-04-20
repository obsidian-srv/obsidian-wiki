<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <a href="/">На главную</a>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    gap: 1rem;
  }
  
  .not-found p {
    margin-bottom: 25px;
  }

  .not-found h1 {
    font-size: 150px;
    font-weight: 800;
    margin-bottom: 50px;
  }
  
  .not-found a {
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 999px;
    padding: 0.5rem 1.5rem;
    color: var(--vp-c-brand-1);
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .not-found a:hover {
    background: var(--vp-c-brand-soft);
  }
  </style>