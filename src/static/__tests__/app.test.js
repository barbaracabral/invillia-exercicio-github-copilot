const fs = require('fs');
const path = require('path');
const { getByText, getByLabelText, getByRole, waitFor } = require('@testing-library/dom');

describe('app.js UI', () => {
  const indexPath = path.resolve(__dirname, '../index.html');
  const appPath = path.resolve(__dirname, '../app.js');

  beforeEach(() => {
    // reset DOM to index.html
    const html = fs.readFileSync(indexPath, 'utf8');
    document.documentElement.innerHTML = html;

    // Clear module cache so requiring app.js picks up the fresh DOM and current mocks
    jest.resetModules();
  });

  afterEach(() => {
    // restore fetch mock if used
    if (global.fetch && global.fetch.mockRestore) {
      global.fetch.mockRestore();
    }
  });

  test('loads activities and populates list and select', async () => {
    const activitiesResponse = {
      'Chess Club': {
        description: 'Play chess and learn strategies',
        schedule: 'Mondays 3pm',
        max_participants: 10,
        participants: ['a@x.com', 'b@x.com']
      }
    };

    // mock fetch for GET /activities
    global.fetch = jest.fn((url, opts) => {
      if (url === '/activities') {
        return Promise.resolve({ ok: true, json: async () => activitiesResponse });
      }
      return Promise.resolve({ ok: false });
    });

    // require the script (it registers DOMContentLoaded listener)
    require(path.resolve(__dirname, '../app.js'));

    // dispatch DOMContentLoaded so the script runs
    document.dispatchEvent(new Event('DOMContentLoaded'));

    // wait until the activities list is populated
    await waitFor(() => {
      const activitiesList = document.getElementById('activities-list');
      expect(activitiesList.textContent).toContain('Chess Club');
    });

    const activitySelect = document.getElementById('activity');
    // Should have an option for Chess Club
    const optionFound = Array.from(activitySelect.options).some(o => o.value === 'Chess Club');
    expect(optionFound).toBe(true);
  });

  test('submitting signup form POSTs and shows success message', async () => {
    const activitiesResponse = {
      'Drama Club': {
        description: 'Acting and stagecraft',
        schedule: 'Wednesdays 4pm',
        max_participants: 20,
        participants: []
      }
    };

    // first call for GET /activities, second call for POST
    global.fetch = jest.fn((url, opts) => {
      if (url === '/activities') {
        return Promise.resolve({ ok: true, json: async () => activitiesResponse });
      }

      if (url.startsWith('/activities/Drama%20Club/signup')) {
        return Promise.resolve({ ok: true, json: async () => ({ message: 'Successfully signed up' }) });
      }

      return Promise.resolve({ ok: false, json: async () => ({ detail: 'Not found' }) });
    });

    // load script and trigger DOMContentLoaded
    require(path.resolve(__dirname, '../app.js'));
    document.dispatchEvent(new Event('DOMContentLoaded'));

    // Wait until activities loaded and select populated
    await waitFor(() => expect(document.getElementById('activities-list').textContent).toContain('Drama Club'));

    // fill form
    const emailInput = document.getElementById('email');
    const select = document.getElementById('activity');
    const form = document.getElementById('signup-form');
    const messageDiv = document.getElementById('message');

    emailInput.value = 'student@mergington.edu';
    // select the Drama Club option
    select.value = 'Drama Club';

    // submit the form
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    // Wait for the message to be updated
    await waitFor(() => {
      expect(messageDiv.className).toContain('success');
      expect(messageDiv.textContent).toContain('Successfully signed up');
    });
  });
});
