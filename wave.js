
class Wave {
  constructor(amp, period, phase) {
    this.amplitude = amp;
    this.period = period;
    this.phase = phase;
  }

  evaluate(x) {
    return sin(this.phase + (TWO_PI * x) / this.period) * this.amplitude;
  }

  update() {
    // CORRECTION?
    // phase should change relative to period?
    // this.phase += (10.0 / period);
    this.phase += 0.05;
  }
}
