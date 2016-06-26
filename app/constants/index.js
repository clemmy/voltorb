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
  },
  nurseMessages: {
    hospital: {
      covered: {
        msg: "Oh no. Feel better hun. The good news is that you are covered for hospital fees as well as a good portion of your prescriptions. Let me know if I can help you with anything else hun."
      },
      notCovered: {
        msg: "Oh my. You poor thing. Unfortunately, you are not covered for hospital fees. I believe you should still go seek a health professional though to get that checked. If I can help you with anything else and I mean anything, let me know."
      }
    },
    medical: {
      covered: {
        msg: "Ouch. That must not feel good. You are covered for doctor visits as well as some drug precriptions. My suggestion is to see your doctor as soon as possible hun. And sweetie, let me know if you have anymore questions."
      },
      notCovered: {
        msg: "That doesn’t sound too good. Are you feeling alright? The thing is that you are not covered for doctor visits or any consultation. My suggestion is still to seek out your doctor as soon as possible hun. And sweetie, let me know if you have anymore questions."
      }
    },
    dental: {
      covered: {
        msg: "No no no. You must be in pain dear. You are absolutely covered for dental care and should definitely go see your dentist as soon as possible. You be good now. Let me know if I can help you with anything else."
      },
      notCovered: {
        msg: "Oh dear. You must be in a lot of pain right now. The bad news is that you are not covered for dental work but you should still go see your dentist before it gets worst. You let me know if you need anything else okay hun?"
      }
    },
    vision: {
      covered: {
        msg: "Hm, you have beautiful eyes hun. You are covered for eye exams and possibly the glasses as well so get that checked out. Let’s get you seeing properly again. Let me know if you need anything else hun."
      },
      notCovered: {
        msg: "Your eyes are mesmerizing sweetie. Unfortunately, your eyes are not covered by your insurance which means that you’ll probably have to pay for better vision. Definitely talk to your local eye professionals to arrange something. And sweetie, let me know if you need anything else."
      }
    },
    unknown: {
      msg: "Oops. I couldn’t catch that. Can you rephrase?"
    }
  }
}
