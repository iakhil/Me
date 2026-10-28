(() => {
  'use strict';

  const controls = document.querySelector('.archive-controls');
  if (!controls) return;

  const search = document.querySelector('#project-search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('.archive-item')];
  const count = document.querySelector('#project-count');
  const emptyState = document.querySelector('.empty-state');
  let category = 'All';

  const filterProjects = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;

    for (const project of projects) {
      const matchesCategory = category === 'All' || project.dataset.category === category;
      const matchesQuery = project.querySelector('.archive-copy').textContent.toLocaleLowerCase().includes(query);
      project.hidden = !(matchesCategory && matchesQuery);
      if (!project.hidden) visible += 1;
    }

    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    }
    count.textContent = `${visible} project${visible === 1 ? '' : 's'}${visible !== projects.length ? ` of ${projects.length}` : ''}`;
    emptyState.hidden = visible !== 0;
  };

  for (const button of buttons) {
    button.addEventListener('click', () => {
      category = button.dataset.filter;
      filterProjects();
    });
  }
  search.addEventListener('input', filterProjects);
  document.querySelector('#reset-filters').addEventListener('click', () => {
    category = 'All';
    search.value = '';
    filterProjects();
    search.focus();
  });

  controls.hidden = false;
  filterProjects();
})();
