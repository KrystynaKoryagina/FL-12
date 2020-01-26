const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function createStructure(elem, arrData) {
  const ul = document.createElement('ul');

  arrData.forEach(obj => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const i = document.createElement('i');
    const span = document.createElement('span');
    const children = obj.children;

    i.classList.add('material-icons');

    if(obj.folder) {
      li.classList.add('folder');
      i.textContent = 'folder';
      a.addEventListener('click', toggleFolderState);
    } else {
      i.textContent = 'insert_drive_file';
      li.classList.add('file');
    }
  
    span.textContent = `${obj.title}`;
  
    li.appendChild(a);
    a.appendChild(i);
    a.appendChild(span);
    ul.appendChild(li);
    
    if(children) {
      const allSpan = ul.querySelectorAll('span');
      
      allSpan.forEach(span => {
        if(span.textContent === obj.title) {
          const li = span.closest('li');

          createStructure(li, children);
        }
      });
    }

    if(obj.folder && !children) {
      const span = document.createElement('span');
      span.classList.add('text');
      span.textContent = 'Folder is empty';

      li.appendChild(span);
    }
  });
  
  elem.appendChild(ul);
}

function toggleFolderState(e) {
  e.preventDefault();

  const link = e.currentTarget;
  const parent = link.parentElement;
  const icon = link.firstElementChild;

  parent.classList.toggle('open');

  icon.textContent = parent.classList.contains('open') ? 'folder_open' : 'folder';
}

createStructure(rootNode, structure);
