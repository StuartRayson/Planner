import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css';
import Moment from 'moment';

import ContentApiSrvc from '../../../shared/services/contentApiSrvc';
import Article from '../../molecules/article/Article.jsx';

class Planner extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      error: null
    };

    this.schedulerData = new SchedulerData(new Moment().format(DATE_FORMAT), ViewTypes.Week);

    Moment.locale('en');
    this.schedulerData.setLocaleMoment(Moment);

    const resources = [
      {
        id: 'r1',
        name: 'Resource1'
      },
      {
        id: 'r2',
        name: 'Resource2'
      },
      {
        id: 'r3',
        name: 'Resource3'
      }
    ];

    this.schedulerData.setResources(resources);

    const events = [
      {
        id: 1,
        start: '2018-12-2 09:30:00',
        end: '2018-12-9 23:30:00',
        resourceId: 'r1',
        title: 'I am finished',
        bgColor: '#D9D9D9'
      },
      {
        id: 2,
        start: '2017-12-18 12:30:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r2',
        title: 'I am not resizable',
        resizable: false
      },
      {
        id: 3,
        start: '2017-12-19 12:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r3',
        title: 'I am not movable',
        movable: false
      },
      {
        id: 4,
        start: '2017-12-19 14:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r1',
        title: 'I am not start-resizable',
        startResizable: false
      },
      {
        id: 5,
        start: '2017-12-19 15:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r2',
        title: 'R2 has recurring tasks every week on Tuesday, Friday',
        rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
        bgColor: '#f759ab'
      }
    ];

    this.schedulerData.setEvents(events);
    console.log(this.schedulerData);
  }

  componentDidMount() {
    ContentApiSrvc.getArticles()
      .then(data => this.setState({
        articles: data,
        loading: false,
        error: null
      }))
      .catch((reason) => {
        this.setState({
          error: reason,
          loading: false
        });
      });
  }

  prevClick = (schedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(schedulerData.events);
    this.setState({
      viewModel: schedulerData
    });
  }

  nextClick = (schedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(schedulerData.events);
    this.setState({
      viewModel: schedulerData
    });
  }

  render() {
    return (
      <div className="t-homepage">
        <h1>Planner</h1>
        <Scheduler
          schedulerData={this.schedulerData}
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          onSelectDate={() => {}}
          onViewChange={() => {}}
          eventItemClick={() => {}}
        />
        <div>
          {this.state.loading && <div style={{ textAlign: 'center', fontSize: '42px' }}><span role="img" aria-label="loading">⌛</span></div>}
          {this.state.error && <div style={{ textAlign: 'center', fontSize: '42px' }}>{this.props.errorMessage}</div>}

          {this.state.articles.map(article => (
            <Article
              key={article.id}
              title={article.title}
              content={article.body}
            />)
          )}
        </div>
      </div>
    );
  }
}

Planner.propTypes = {
  errorMessage: PropTypes.string
};


export default Planner;
