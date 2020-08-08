import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import TeacherItem from '../../components/teacherItem';

import './styles.css';

const TeacherList: React.FC = () => (
  <div id="page-teacher-list" className="container">
    <Header title="Este são os proffys disponíveis">
      <form id="search-teachers">
        <div className="input-block">
          <label htmlFor="subject">Matéria</label>
          <input type="text" id="subject" />
        </div>

        <div className="input-block">
          <label htmlFor="week-day">Dia da semana</label>
          <input type="text" id="week-day" />
        </div>

        <div className="input-block">
          <label htmlFor="time">Hora</label>
          <input type="text" id="time" />
        </div>
      </form>
    </Header>
    <main>
      <TeacherItem
        description="Entusiasta pelo saber"
        matter="computação"
        name="Delfio Francisco"
        pricePerHour="150,00"
      />
    </main>
  </div>
);

export default TeacherList;
