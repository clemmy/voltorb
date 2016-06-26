export default {
  planCategory: {
    medical: {
      prettyText: 'Medical',
      serviceTypes: [
        'health_benefit_plan_coverage',
        'allergy_testing',
        'consultation',
        'diagnostic_medical',
        'physician_visit_office_sick',
        'physician_visit_office_well',
        'routine_physical'
      ]
    },
    teeth: {
      prettyText: 'Teeth',
      serviceTypes: [
        'orthodontics',
        'routine_preventive_dental',
        'dental_care'
      ]
    },
    eye: {
      prettyText: 'Eye',
      serviceTypes: [
        'vision_optometry',
        'eyewear_and_accessories',
        'eye'
      ]
    },
    prescription: {
      prettyText: 'Prescription',
      serviceTypes: [
        'generic_prescription_drug',
        'pharmacy',
        'physical_medicine'
      ]
    },
    emergency: {
      prettyText: 'Emergency',
      serviceTypes: [
        'hospital_ambulatory_surgical',
        'hospital_emergency_accident',
        'hospital_emergency_medical',
        'urgent_care'
      ]
    },
    xray: {
      prettyText: 'X-Ray',
      serviceTypes: [
        'mri_cat_scan'
      ]
    },
    hospitalRepairs: {
      prettyText: 'Hospital Repairs',
      serviceTypes: [
        'intensive_care',
        'hospital_inpatient',
        'prosthetic_device'
      ]
    },
    immunizations: {
      prettyText: 'Immunizations',
      serviceTypes: [
        'flu_vaccination',
        'immunizations'
      ]
    },
    mentalHealth: {
      prettyText: 'Mental Health',
      serviceTypes: [
        'mental_health'
      ]
    },
    ear: {
      prettyText: 'Ear',
      serviceTypes: [
        'audiology_exam'
      ]
    },
    longTermCare: {
      prettyText: 'Long Term Care',
      serviceTypes: [
        'rehabilitation',
        'long_term_care'
      ]
    }
  },
  serviceTypes: {
    health_benefit_plan_coverage: {
      keywords: ['health', 'benefit', 'plan', 'coverage', 'medical']
    },
    allergy_testing: {
      keywords: ['allergy', 'testing', 'medical']
    },
    consultation: {
      keywords: ['consultation', 'medical']
    },
    diagnostic_medical: {
      keywords: ['diagnose', 'diagnostic', 'medical']
    },
    physician_visit_office_sick: {
      keywords: ['doctor', 'physician', 'office', 'sick', 'walkin', 'medical']
    },
    physician_visit_office_well: {
      keywords: ['doctor', 'physician', 'office', 'well', 'walkin', 'medical']
    },
    routine_physical: {
      keywords: ['routine', 'physical', 'exam', 'medical']
    },
    orthodontics: {
      keywords: ['orthodontics', 'teeth']
    },
    routine_preventive_dental: {
      keywords: ['routine', 'preventive', 'dental', 'teeth']
    },
    dental_care: {
      keywords: ['dental', 'care', 'dentist', 'teeth']
    },
    vision_optometry: {
      keywords: ['vision', 'optometry', 'eye', 'exam']
    },
    eyewear_and_accessories: {
      keywords: ['glasses', 'eyewear', 'accessories', 'vision', 'eye']
    },
    eye: {
      keywords: ['eye', 'vision', 'optical']
    },
    generic_prescription_drug: {
      keywords: ['generic', 'prescription', 'drug', 'pharmacy']
    },
    pharmacy: {
      keywords: ['prescription', 'drug', 'pharmacy']
    },
    physical_medicine: {
      keywords: ['prescription', 'drug', 'pharmacy', 'physical', 'medicine']
    },
    hospital_ambulatory_surgical: {
      keywords: ['hospital', 'ambulatory', 'surgical', 'surgery']
    },
    hospital_emergency_accident: {
      keywords: ['hospital', 'ambulance', 'surgical', 'surgery', 'emergency', 'fatal', 'broken']
    },
    hospital_emergency_medical: {
      keywords: ['hospital', 'emergency', 'ambulance', 'medical']
    },
    urgent_care: {
      keywords: ['urgent', 'care']
    },
    mri_cat_scan: {
      keywords: ['mri', 'cat', 'scan', 'xray']
    },
    intensive_care: {
      keywords: ['intensive', 'care', 'hospital']
    },
    hospital_inpatient: {
      keywords: ['hospital', 'inpatient']
    },
    prosthetic_device: {
      keywords: ['prosthetic', 'device', 'hospital', 'repair']
    },
    flu_vaccination: {
      keywords: ['flu', 'vaccination', 'immunization']
    },
    immunizations: {
      keywords: ['flu', 'vaccination', 'immunization']
    },
    mental_health: {
      keywords: ['mental', 'health']
    },
    audiology_exam: {
      keywords: ['audiology', 'exam', 'ears', 'ear']
    },
    rehabilitation: {
      keywords: ['long', 'term', 'rehabilitation']
    },
    long_term_care: {
      keywords: ['long', 'term', 'care']
    }
  }
}
