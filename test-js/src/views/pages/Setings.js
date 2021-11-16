const Setings = {
  render: async () => {
    const view = /* html */ `
    <main>
      <div class="col-8" style="margin: 0 auto">
        <div div class="settings__volume-on-container form-check form-switch mt-5">
          <input class="form-check-input" type="checkbox" id="volume-on" />
          <label class="form-check-label" for="volume-on">Game sound</label>
        </div>
        <div
          class="settings__volume-container mt-4"
          style="width: 100%; max-width: 400px"
        >
          <label for="volume" class="form-label">Volume</label>
          <input
            type="range"
            class="form-range"
            id="volume"
            min="0"
            max="1"
            value="0.5"
            step="0.01"
          />
        </div>
        <div class="settings__time-on-container form-check form-switch mt-4">
          <input class="form-check-input" type="checkbox" id="time-on" />
          <label class="form-check-label" for="time-on">Time game</label>
        </div>

        <div
          class="settings__time-second-container mt-4"
          style="width: 100%; max-width: 400px"
        >
          <label for="second" class="form-label">Time to answer:<br>
          Value = <span id="value-second-input">20</span> Sec</label>
          <input
            type="range"
            class="form-range"
            id="second"
            min="5"
            max="30"
            value="20"
            step="5"
          />
        </div>
        <button type="button" class="btn btn-secondary mt-4">Default</button>
        <button type="button" class="btn btn-dark mt-4">Save</button>
      </div>
    </main>
        `;
    return view;
  },
  after_render: async () => {},
};

export default Setings;
