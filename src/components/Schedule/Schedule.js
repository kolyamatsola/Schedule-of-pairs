import React from 'react';
import './Schedule.css';

function Schedule() {
  return (
    <div className="schedule-page">
      <h2>Розклад занять</h2>

      {/* Основний контейнер для таблиці та пошуку */}
      <div className="content-container">
        
        {/* Ліва секція з розкладом */}
        <div className="schedule-table">
          <h3>Schedule with links to classes</h3>
          {/* Тут буде таблиця з розкладом */}
          <table>
            <thead>
              <tr>
                <th>Час</th>
                <th>Предмет</th>
                <th>Посилання</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00 - 10:30</td>
                <td>Математика</td>
                <td><a href="#">Join Class</a></td>
              </tr>
              <tr>
                <td>11:00 - 12:30</td>
                <td>Алгоритми</td>
                <td><a href="#">Join Class</a></td>
              </tr>
              {/* Додайте більше рядків */}
            </tbody>
          </table>
        </div>

        {/* Права секція з пошуком */}
        <div className="search-form">
          <h3>Choosing a specialty and course</h3>
          <form>
            <div className="form-group">
              <label htmlFor="faculty">Факультет:</label>
              <input type="text" id="faculty" placeholder="Введіть ваш факультет" />
            </div>

            <div className="form-group">
              <label htmlFor="speciality">Спеціальність:</label>
              <input type="text" id="speciality" placeholder="Введіть вашу спеціальність" />
            </div>

            <button type="submit" className="btn-search">Пошук</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
