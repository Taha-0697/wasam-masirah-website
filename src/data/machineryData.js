export const machinerySimulatorData = [
  {
    id: 'crane-50t',
    name: 'Mobile Crane 50T (Tadano)',
    category: 'Lifting Machinery',
    serial: 'MC-2026-9921',
    status: 'PASSED & CERTIFIED',
    nextDue: '2027-02-15',
    checkpoints: [
      { item: 'Load Moment Indicator (LMI)', result: 'PASSED (0.1% accuracy)' },
      { item: 'Main Hoist Wire Rope NDT', result: 'NO DEFECTS DETECTED' },
      { item: 'Outrigger Hydraulic Pressure', result: '350 BAR (NOMINAL)' },
      { item: 'Brake & Anti-Two-Block Sensor', result: 'VERIFIED OPERATIONAL' }
    ]
  },
  {
    id: 'excavator-cat',
    name: 'Caterpillar 336 Excavator',
    category: 'Earth Moving Machinery',
    serial: 'EX-2026-4410',
    status: 'PASSED & CERTIFIED',
    nextDue: '2027-01-30',
    checkpoints: [
      { item: 'Bucket Attachment Weld MPI', result: 'ZERO CRACK DETECTION' },
      { item: 'Boom Cylinder Pressure Test', result: '380 BAR (PASSED)' },
      { item: 'Operator FOPS/ROPS Structure', result: 'CERTIFIED COMPLIANT' },
      { item: 'Quick Coupler Safety Latch', result: 'LOCK FUNCTION OK' }
    ]
  },
  {
    id: 'scissor-lift',
    name: 'Genie GS-3246 Scissor Lift',
    category: 'MEWP Platform',
    serial: 'SL-2026-1188',
    status: 'PASSED & CERTIFIED',
    nextDue: '2026-12-20',
    checkpoints: [
      { item: 'Emergency Lowering Valve', result: 'TESTED & RESPONSIVE' },
      { item: 'Platform Anchor Eye Bolt NDT', result: 'DPT CLEARED' },
      { item: 'Tilt Sensor & Alarm System', result: 'CALIBRATED OK' },
      { item: 'Pothole Protection System', result: 'DEPLOYMENT FUNCTIONAL' }
    ]
  },
  {
    id: 'pressure-vessel',
    name: 'Air Receiver Vessel (10 Bar)',
    category: 'Pressure Equipment',
    serial: 'PV-2026-0773',
    status: 'PASSED & CERTIFIED',
    nextDue: '2027-04-10',
    checkpoints: [
      { item: 'Ultrasonic Thickness Measurement', result: '12.4mm (ABOVE MINIMUM)' },
      { item: 'Safety Relief Valve Calibration', result: 'POPS AT 10.2 BAR' },
      { item: 'Hydrostatic Pressure Test', result: '15 BAR SUSTAINED 30MIN' },
      { item: 'Internal Visual Inspection', result: 'ZERO CORROSION DEPOSIT' }
    ]
  }
];
