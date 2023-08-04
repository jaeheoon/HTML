import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [list, setLists] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]);

  let content = null;
  let contentControl = null;
  let title, body = null;
  // mode의 값에 따라 상세정보(Article) 다르게 보여주기
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web" />
  } else if (mode === 'READ') {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        title = list[i].title;
        body = list[i].body;
      }
    }
    content = <Article title={title} body={body} />
    contentControl = <>
      <li><a href={"/update/" + id} onClick={event => {
        event.preventDefault();
        setMode('UPDATE')
      }}>Update</a></li>
      <li> <input type="button" value="Delete" onClick={() => {
        let newLists = [...list];
        newLists.splice(id-1, 1);
        setLists(newLists);
        setMode('WELCOME');
      }} />
      </li></>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      const newList = { id: nextId, title: title, body: body };
      const newLists = [...list];
      newLists.push(newList);
      setLists(newLists);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if (mode === 'UPDATE') {
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      const updatedList = { id: id, title: title, body: body };
      const newLists = [...list];
      for (let i = 0; i < newLists.length; i++) {
        if (newLists[i].id === id) {
          newLists[i] = updatedList;
          break;
        }
      }
      setLists(newLists);
      setMode('READ');
    }}></Update>
  }

  // 모드 변경
  const changMode = (id) => {
    if (id) {
      setMode('READ');
      setId(id);
    } else {
      setMode('WELCOME');
    }
  }

  return (
    <div>
      {/* JSX 주석 */}
      <Header title="오늘부터 React 수업" onChangeMode={changMode} />
      <Nav topics={list} onChangeMode={changMode} />
      {content}
      <ul>
        <li> <a href="/create" onClick={event => {
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a></li>
        {contentControl}
      </ul>
    </div>
  );
}

export default App;
