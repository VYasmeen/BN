// Mock data: 50+ global mental health organisations
export const mockOrganisations = [
  // USA
  {
    id: '1',
    name: 'BetterHelp',
    type: 'therapist',
    region: 'north_america',
    country: 'United States',
    city: 'San Francisco, CA',
    cost_type: 'paid',
    cost_per_session: 60,
    short_desc: 'Licensed therapists via video, phone, or messaging',
    long_desc: 'BetterHelp connects you with a licensed therapist for online counseling. Available 24/7 with affordable plans.',
    website_url: 'https://betterhelp.com',
    image_url: 'https://via.placeholder.com/150?text=BetterHelp',
    verified: true,
    rating: 4.5,
    rating_count: 2340,
    modalities: ['video', 'chat', 'phone'],
    languages: ['en', 'es'],
    contacts: [{ type: 'website', value: 'betterhelp.com' }],
    availability: { notes: '24/7 online access' }
  },
  {
    id: '2',
    name: 'The Mental Health Coalition',
    type: 'ngo',
    region: 'north_america',
    country: 'United States',
    city: 'New York, NY',
    cost_type: 'free',
    short_desc: 'Free mental health resources and community support',
    long_desc: 'Non-profit providing free mental health education, support groups, and crisis resources.',
    website_url: 'https://themhc.org',
    image_url: 'https://via.placeholder.com/150?text=TMHC',
    verified: true,
    rating: 4.3,
    rating_count: 892,
    modalities: ['in_person', 'chat', 'phone'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '+1-800-123-4567' }],
    availability: { notes: 'Mon-Fri 9am-9pm EST' }
  },
  {
    id: '3',
    name: 'Talkspace',
    type: 'therapist',
    region: 'north_america',
    country: 'United States',
    city: 'New York, NY',
    cost_type: 'paid',
    cost_per_session: 65,
    short_desc: 'Licensed therapists via messaging & video',
    long_desc: 'Get therapy from licensed therapists via unlimited messaging and weekly video sessions.',
    website_url: 'https://talkspace.com',
    image_url: 'https://via.placeholder.com/150?text=Talkspace',
    verified: true,
    rating: 4.4,
    rating_count: 1560,
    modalities: ['chat', 'video'],
    languages: ['en'],
    contacts: [{ type: 'website', value: 'talkspace.com' }],
    availability: { notes: '24/7 messaging access' }
  },
  {
    id: '4',
    name: 'NAMI (National Alliance on Mental Illness)',
    type: 'ngo',
    region: 'north_america',
    country: 'United States',
    city: 'Arlington, VA',
    cost_type: 'free',
    short_desc: 'Mental health support groups and advocacy',
    long_desc: 'NAMI provides peer support groups, education programs, and advocacy for mental health.',
    website_url: 'https://nami.org',
    image_url: 'https://via.placeholder.com/150?text=NAMI',
    verified: true,
    rating: 4.6,
    rating_count: 3200,
    modalities: ['in_person', 'phone', 'chat'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '+1-800-950-6264' }],
    availability: { notes: 'Local groups + 24/7 helpline' }
  },

  // UK
  {
    id: '5',
    name: 'Rethink Mental Illness',
    type: 'ngo',
    region: 'europe',
    country: 'United Kingdom',
    city: 'London',
    cost_type: 'free',
    short_desc: 'Mental health support and advocacy in UK',
    long_desc: 'Rethink provides information, support services, and campaigns to improve mental health care.',
    website_url: 'https://www.rethink.org',
    image_url: 'https://via.placeholder.com/150?text=Rethink',
    verified: true,
    rating: 4.3,
    rating_count: 1200,
    modalities: ['phone', 'chat', 'in_person'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '+44 300 500 0927' }],
    availability: { notes: 'Mon-Fri 9am-5pm GMT' }
  },
  {
    id: '6',
    name: 'Mind UK',
    type: 'ngo',
    region: 'europe',
    country: 'United Kingdom',
    city: 'London',
    cost_type: 'free',
    short_desc: 'Mental health information and support',
    long_desc: 'Leading mental health charity providing information, support, and local services.',
    website_url: 'https://www.mind.org.uk',
    image_url: 'https://via.placeholder.com/150?text=Mind',
    verified: true,
    rating: 4.5,
    rating_count: 2890,
    modalities: ['phone', 'chat', 'in_person'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '0300 123 3393' }],
    availability: { notes: '24/7 Text service, 9-5pm call' }
  },
  {
    id: '7',
    name: 'Counselling Directory UK',
    type: 'therapist',
    region: 'europe',
    country: 'United Kingdom',
    city: 'London',
    cost_type: 'paid',
    cost_per_session: 50,
    short_desc: 'Find accredited counsellors and therapists',
    long_desc: 'Directory of qualified therapists offering counselling across UK.',
    website_url: 'https://www.counselling-directory.org.uk',
    image_url: 'https://via.placeholder.com/150?text=CounsellingDir',
    verified: true,
    rating: 4.2,
    rating_count: 1050,
    modalities: ['in_person', 'video', 'phone'],
    languages: ['en'],
    contacts: [{ type: 'website', value: 'counselling-directory.org.uk' }],
    availability: { notes: 'Varies by therapist' }
  },

  // India
  {
    id: '8',
    name: 'iCall Foundation',
    type: 'ngo',
    region: 'asia',
    country: 'India',
    city: 'Mumbai',
    cost_type: 'free',
    short_desc: 'Emotional support through phone and chat',
    long_desc: 'iCall provides free emotional support, information, and resource counselling for mental health issues.',
    website_url: 'https://www.icallhelpline.org',
    image_url: 'https://via.placeholder.com/150?text=iCall',
    verified: true,
    rating: 4.7,
    rating_count: 2150,
    modalities: ['phone', 'chat'],
    languages: ['en', 'hi'],
    contacts: [{ type: 'phone', value: '9152987821' }],
    availability: { notes: '24/7 support available' }
  },
  {
    id: '9',
    name: 'Vandrevala Foundation',
    type: 'ngo',
    region: 'asia',
    country: 'India',
    city: 'Mumbai',
    cost_type: 'free',
    short_desc: 'Emotional support helpline in India',
    long_desc: 'Provides emotional support and mental health awareness in India.',
    website_url: 'https://www.vandrevalafoundation.com',
    image_url: 'https://via.placeholder.com/150?text=Vandrevala',
    verified: true,
    rating: 4.6,
    rating_count: 1890,
    modalities: ['phone', 'chat'],
    languages: ['en', 'hi'],
    contacts: [{ type: 'phone', value: '9999 77 6666' }],
    availability: { notes: '24/7 helpline' }
  },
  {
    id: '10',
    name: 'The Wellness Collective India',
    type: 'therapist',
    region: 'asia',
    country: 'India',
    city: 'Bangalore',
    cost_type: 'paid',
    cost_per_session: 30,
    short_desc: 'Affordable therapy and counselling in India',
    long_desc: 'Licensed therapists providing affordable mental health counselling and therapy.',
    website_url: 'https://thewellnesscollective.in',
    image_url: 'https://via.placeholder.com/150?text=TWC',
    verified: true,
    rating: 4.4,
    rating_count: 892,
    modalities: ['video', 'phone', 'in_person'],
    languages: ['en', 'hi'],
    contacts: [{ type: 'phone', value: '+91 9876543210' }],
    availability: { notes: '10am-10pm IST Mon-Sun' }
  },
  {
    id: '11',
    name: 'Youth Assurance Scheme',
    type: 'ngo',
    region: 'asia',
    country: 'India',
    city: 'Delhi',
    cost_type: 'free',
    short_desc: 'Mental health support for youth in India',
    long_desc: 'Youth-focused mental health organization providing free counselling and awareness.',
    website_url: 'https://youthassurance.org',
    image_url: 'https://via.placeholder.com/150?text=YAS',
    verified: true,
    rating: 4.5,
    rating_count: 1200,
    modalities: ['phone', 'chat', 'in_person'],
    languages: ['en', 'hi'],
    contacts: [{ type: 'phone', value: '+91 11 4141 4141' }],
    availability: { notes: 'Mon-Fri 9am-9pm IST' }
  },

  // Australia
  {
    id: '12',
    name: 'Beyond Blue Australia',
    type: 'ngo',
    region: 'oceania',
    country: 'Australia',
    city: 'Melbourne',
    cost_type: 'free',
    short_desc: 'Mental health support and information',
    long_desc: 'Leading mental health support service offering information, support, and resources.',
    website_url: 'https://www.beyondblue.org.au',
    image_url: 'https://via.placeholder.com/150?text=BeyondBlue',
    verified: true,
    rating: 4.6,
    rating_count: 2340,
    modalities: ['phone', 'chat', 'in_person'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '1300 224 636' }],
    availability: { notes: '24/7 support available' }
  },
  {
    id: '13',
    name: 'Mindful Minds Australia',
    type: 'therapist',
    region: 'oceania',
    country: 'Australia',
    city: 'Sydney',
    cost_type: 'sliding_scale',
    short_desc: 'Affordable therapy and mindfulness services',
    long_desc: 'Psychologists and counsellors offering sliding scale rates for mental health support.',
    website_url: 'https://mindfulmids.com.au',
    image_url: 'https://via.placeholder.com/150?text=MindfullMinds',
    verified: true,
    rating: 4.5,
    rating_count: 1120,
    modalities: ['in_person', 'video', 'phone'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '+61 2 9123 4567' }],
    availability: { notes: 'Mon-Fri 8am-6pm AEST' }
  },

  // Canada
  {
    id: '14',
    name: 'Talk Suicide Canada',
    type: 'helpline',
    region: 'north_america',
    country: 'Canada',
    city: 'Toronto',
    cost_type: 'free',
    short_desc: 'Suicide prevention and support service',
    long_desc: 'Free suicide prevention service available 24/7 for Canadians in crisis.',
    website_url: 'https://www.talksuicide.ca',
    image_url: 'https://via.placeholder.com/150?text=TalkSuicide',
    verified: true,
    rating: 4.7,
    rating_count: 1890,
    modalities: ['phone', 'chat'],
    languages: ['en', 'fr'],
    contacts: [{ type: 'phone', value: '1-833-456-4566' }],
    availability: { notes: '24/7 available' }
  },
  {
    id: '15',
    name: 'Psychology Today Canada',
    type: 'therapist',
    region: 'north_america',
    country: 'Canada',
    city: 'Toronto',
    cost_type: 'paid',
    cost_per_session: 75,
    short_desc: 'Find licensed psychologists and therapists',
    long_desc: 'Directory of qualified mental health professionals across Canada.',
    website_url: 'https://ca.psychologytoday.com',
    image_url: 'https://via.placeholder.com/150?text=PsychToday',
    verified: true,
    rating: 4.4,
    rating_count: 2100,
    modalities: ['in_person', 'video'],
    languages: ['en', 'fr'],
    contacts: [{ type: 'website', value: 'ca.psychologytoday.com' }],
    availability: { notes: 'Varies by therapist' }
  },

  // South Africa
  {
    id: '16',
    name: 'Befrienders South Africa',
    type: 'helpline',
    region: 'africa',
    country: 'South Africa',
    city: 'Cape Town',
    cost_type: 'free',
    short_desc: 'Emotional support helpline',
    long_desc: 'Provides emotional support and suicide prevention services.',
    website_url: 'https://befrienders.co.za',
    image_url: 'https://via.placeholder.com/150?text=BefriendersSA',
    verified: true,
    rating: 4.5,
    rating_count: 950,
    modalities: ['phone', 'chat'],
    languages: ['en', 'zu', 'xh'],
    contacts: [{ type: 'phone', value: '+27 11 715 2000' }],
    availability: { notes: '24/7 available' }
  },
  {
    id: '17',
    name: 'South African Depression & Anxiety Group',
    type: 'ngo',
    region: 'africa',
    country: 'South Africa',
    city: 'Johannesburg',
    cost_type: 'free',
    short_desc: 'Support groups and resources',
    long_desc: 'Non-profit providing support groups, information, and advocacy for mental health.',
    website_url: 'https://www.sadag.org',
    image_url: 'https://via.placeholder.com/150?text=SADAG',
    verified: true,
    rating: 4.6,
    rating_count: 1340,
    modalities: ['in_person', 'phone', 'chat'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '011 714 4779' }],
    availability: { notes: 'Mon-Fri 7:30am-3:30pm SAST' }
  },

  // Brazil
  {
    id: '18',
    name: 'Psicólogo Brasil',
    type: 'therapist',
    region: 'south_america',
    country: 'Brazil',
    city: 'São Paulo',
    cost_type: 'paid',
    cost_per_session: 40,
    short_desc: 'Encontre psicólogos qualificados',
    long_desc: 'Plataforma para encontrar psicólogos licenciados em todo Brasil.',
    website_url: 'https://www.psicologobrasil.com.br',
    image_url: 'https://via.placeholder.com/150?text=PsicoBr',
    verified: true,
    rating: 4.3,
    rating_count: 1800,
    modalities: ['video', 'in_person'],
    languages: ['pt'],
    contacts: [{ type: 'phone', value: '+55 11 3333-3333' }],
    availability: { notes: 'Mon-Sat 8am-10pm BRT' }
  },
  {
    id: '19',
    name: 'CVV (Centro de Valorização da Vida)',
    type: 'helpline',
    region: 'south_america',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    cost_type: 'free',
    short_desc: 'Suicide prevention and emotional support',
    long_desc: 'CVV offers free suicide prevention and emotional support in Brazil.',
    website_url: 'https://www.cvv.org.br',
    image_url: 'https://via.placeholder.com/150?text=CVV',
    verified: true,
    rating: 4.7,
    rating_count: 2560,
    modalities: ['phone', 'chat', 'email'],
    languages: ['pt'],
    contacts: [{ type: 'phone', value: '188' }],
    availability: { notes: '24/7 available' }
  },

  // Mexico
  {
    id: '20',
    name: 'Fundación Juconi',
    type: 'ngo',
    region: 'north_america',
    country: 'Mexico',
    city: 'Mexico City',
    cost_type: 'free',
    short_desc: 'Mental health support and therapy',
    long_desc: 'Non-profit providing mental health services and support to vulnerable populations.',
    website_url: 'https://www.juconi.org.mx',
    image_url: 'https://via.placeholder.com/150?text=Juconi',
    verified: true,
    rating: 4.4,
    rating_count: 1200,
    modalities: ['in_person', 'phone'],
    languages: ['es'],
    contacts: [{ type: 'phone', value: '+52 55 5660-7000' }],
    availability: { notes: 'Mon-Fri 9am-6pm CST' }
  },
  {
    id: '21',
    name: 'Teléfono de la Angustia',
    type: 'helpline',
    region: 'north_america',
    country: 'Mexico',
    city: 'Mexico City',
    cost_type: 'free',
    short_desc: 'Crisis and suicide prevention helpline',
    long_desc: 'Free phone support for mental health crises and suicide prevention.',
    website_url: 'https://www.telefonodelaangustia.org',
    image_url: 'https://via.placeholder.com/150?text=TelAngustia',
    verified: true,
    rating: 4.6,
    rating_count: 1950,
    modalities: ['phone'],
    languages: ['es'],
    contacts: [{ type: 'phone', value: '55 5259 8121' }],
    availability: { notes: '24/7 available' }
  },

  // Japan
  {
    id: '22',
    name: 'TELL Lifeline Japan',
    type: 'helpline',
    region: 'asia',
    country: 'Japan',
    city: 'Tokyo',
    cost_type: 'free',
    short_desc: 'Mental health support in multiple languages',
    long_desc: 'TELL provides multilingual mental health support and crisis intervention.',
    website_url: 'https://www.telljp.com',
    image_url: 'https://via.placeholder.com/150?text=TELL',
    verified: true,
    rating: 4.5,
    rating_count: 1120,
    modalities: ['phone', 'chat'],
    languages: ['en', 'ja'],
    contacts: [{ type: 'phone', value: '+81 3-5774-0992' }],
    availability: { notes: '24/7 available' }
  },
  {
    id: '23',
    name: 'Cocoro no Yama',
    type: 'ngo',
    region: 'asia',
    country: 'Japan',
    city: 'Osaka',
    cost_type: 'sliding_scale',
    short_desc: 'Mental health counselling and support',
    long_desc: 'Organization providing therapy and counselling with sliding scale rates.',
    website_url: 'https://www.coroonyama.org',
    image_url: 'https://via.placeholder.com/150?text=CoronoYama',
    verified: true,
    rating: 4.3,
    rating_count: 850,
    modalities: ['in_person', 'video'],
    languages: ['ja'],
    contacts: [{ type: 'phone', value: '+81 6-6123-4567' }],
    availability: { notes: 'Tue-Sun 10am-7pm JST' }
  },

  // Germany
  {
    id: '24',
    name: 'Telefonseelsorge Deutschland',
    type: 'helpline',
    region: 'europe',
    country: 'Germany',
    city: 'Berlin',
    cost_type: 'free',
    short_desc: 'Telephone counselling and emotional support',
    long_desc: 'Germany\'s largest crisis support service providing free telephone counselling.',
    website_url: 'https://www.telefonseelsorge.de',
    image_url: 'https://via.placeholder.com/150?text=TelSeelsorge',
    verified: true,
    rating: 4.6,
    rating_count: 2340,
    modalities: ['phone', 'chat', 'email'],
    languages: ['de'],
    contacts: [{ type: 'phone', value: '0800-1110111 or 0800-1110222' }],
    availability: { notes: '24/7 available' }
  },
  {
    id: '25',
    name: 'Deutsche Psychologische Gesellschaft',
    type: 'therapist',
    region: 'europe',
    country: 'Germany',
    city: 'Berlin',
    cost_type: 'paid',
    cost_per_session: 55,
    short_desc: 'Find licensed psychologists in Germany',
    long_desc: 'Directory of registered psychologists and therapists across Germany.',
    website_url: 'https://www.dpg.de',
    image_url: 'https://via.placeholder.com/150?text=DPG',
    verified: true,
    rating: 4.4,
    rating_count: 1670,
    modalities: ['in_person', 'video'],
    languages: ['de'],
    contacts: [{ type: 'website', value: 'dpg.de' }],
    availability: { notes: 'Varies by therapist' }
  },

  // France
  {
    id: '26',
    name: 'SOS Amitié',
    type: 'helpline',
    region: 'europe',
    country: 'France',
    city: 'Paris',
    cost_type: 'free',
    short_desc: 'Emotional support and suicide prevention',
    long_desc: 'French helpline providing emotional support and suicide prevention services.',
    website_url: 'https://www.sosamitie.org',
    image_url: 'https://via.placeholder.com/150?text=SOSAmitie',
    verified: true,
    rating: 4.6,
    rating_count: 2100,
    modalities: ['phone', 'chat'],
    languages: ['fr'],
    contacts: [{ type: 'phone', value: '09 72 39 40 50' }],
    availability: { notes: '24/7 available' }
  },
  {
    id: '27',
    name: 'Psychologie.com France',
    type: 'therapist',
    region: 'europe',
    country: 'France',
    city: 'Paris',
    cost_type: 'paid',
    cost_per_session: 50,
    short_desc: 'Trouvez un psychologue en France',
    long_desc: 'Répertoire de psychologues et thérapeutes agréés en France.',
    website_url: 'https://www.psychologie.com',
    image_url: 'https://via.placeholder.com/150?text=Psycho.com',
    verified: true,
    rating: 4.3,
    rating_count: 1450,
    modalities: ['in_person', 'video'],
    languages: ['fr'],
    contacts: [{ type: 'website', value: 'psychologie.com' }],
    availability: { notes: 'Mon-Sat by appointment' }
  },

  // Singapore
  {
    id: '28',
    name: 'Institute of Mental Health Singapore',
    type: 'hospital',
    region: 'asia',
    country: 'Singapore',
    city: 'Singapore',
    cost_type: 'paid',
    cost_per_session: 45,
    short_desc: 'Major mental health hospital and clinic',
    long_desc: 'Leading psychiatric hospital providing comprehensive mental health services.',
    website_url: 'https://www.imh.com.sg',
    image_url: 'https://via.placeholder.com/150?text=IMH',
    verified: true,
    rating: 4.5,
    rating_count: 2890,
    modalities: ['in_person', 'phone'],
    languages: ['en', 'zh', 'ms', 'ta'],
    contacts: [{ type: 'phone', value: '+65 6389 2000' }],
    availability: { notes: 'Mon-Fri 8am-5pm SGT' }
  },
  {
    id: '29',
    name: 'Mindful Singapore',
    type: 'therapist',
    region: 'asia',
    country: 'Singapore',
    city: 'Singapore',
    cost_type: 'paid',
    cost_per_session: 60,
    short_desc: 'Psychology services and mindfulness',
    long_desc: 'Private practice offering therapy, counselling, and mindfulness programs.',
    website_url: 'https://www.mindfulsingapore.com',
    image_url: 'https://via.placeholder.com/150?text=MindfulSG',
    verified: true,
    rating: 4.4,
    rating_count: 1200,
    modalities: ['in_person', 'video'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '+65 6123 4567' }],
    availability: { notes: 'Mon-Sat 10am-6pm SGT' }
  },

  // Kenya
  {
    id: '30',
    name: 'Befrienders Kenya',
    type: 'helpline',
    region: 'africa',
    country: 'Kenya',
    city: 'Nairobi',
    cost_type: 'free',
    short_desc: 'Crisis support and emotional help',
    long_desc: 'Kenya\'s leading emotional support and suicide prevention helpline.',
    website_url: 'https://befrienderskenya.org',
    image_url: 'https://via.placeholder.com/150?text=BefriendersKE',
    verified: true,
    rating: 4.5,
    rating_count: 1560,
    modalities: ['phone', 'chat'],
    languages: ['en', 'sw'],
    contacts: [{ type: 'phone', value: '+254 722 178 177' }],
    availability: { notes: '24/7 available' }
  },
  {
    id: '31',
    name: 'Chirezi Mental Health',
    type: 'therapist',
    region: 'africa',
    country: 'Kenya',
    city: 'Nairobi',
    cost_type: 'sliding_scale',
    short_desc: 'Therapy and counselling services',
    long_desc: 'Psychology practice offering therapy with affordable sliding scale rates.',
    website_url: 'https://www.chirezimentalhealth.co.ke',
    image_url: 'https://via.placeholder.com/150?text=Chirezi',
    verified: true,
    rating: 4.4,
    rating_count: 850,
    modalities: ['in_person', 'video'],
    languages: ['en', 'sw'],
    contacts: [{ type: 'phone', value: '+254 20 2234 567' }],
    availability: { notes: 'Mon-Fri 9am-5pm EAT' }
  },

  // Philippines
  {
    id: '32',
    name: 'Hopeline Philippines',
    type: 'helpline',
    region: 'asia',
    country: 'Philippines',
    city: 'Manila',
    cost_type: 'free',
    short_desc: 'Suicide prevention and crisis support',
    long_desc: 'Free suicide prevention and emotional support service for Filipinos.',
    website_url: 'https://www.hopeline.org.ph',
    image_url: 'https://via.placeholder.com/150?text=Hopeline',
    verified: true,
    rating: 4.6,
    rating_count: 1890,
    modalities: ['phone', 'chat'],
    languages: ['en', 'tl'],
    contacts: [{ type: 'phone', value: '(02) 804-4673' }],
    availability: { notes: '24/7 available' }
  },
  {
    id: '33',
    name: 'Makabago Psikolohiya',
    type: 'therapist',
    region: 'asia',
    country: 'Philippines',
    city: 'Manila',
    cost_type: 'sliding_scale',
    short_desc: 'Psychology and counselling services',
    long_desc: 'Affordable psychology services with sliding scale fees for Filipinos.',
    website_url: 'https://www.makabagohealth.ph',
    image_url: 'https://via.placeholder.com/150?text=Makabago',
    verified: true,
    rating: 4.3,
    rating_count: 1120,
    modalities: ['in_person', 'video'],
    languages: ['en', 'tl'],
    contacts: [{ type: 'phone', value: '+63 2 123 4567' }],
    availability: { notes: 'Mon-Sat 9am-6pm PHT' }
  },

  // Indonesia
  {
    id: '34',
    name: 'Daya Sejati Foundation',
    type: 'ngo',
    region: 'asia',
    country: 'Indonesia',
    city: 'Jakarta',
    cost_type: 'free',
    short_desc: 'Mental health support and advocacy',
    long_desc: 'Indonesian foundation providing mental health support and education.',
    website_url: 'https://www.dayasejati.org.id',
    image_url: 'https://via.placeholder.com/150?text=DayaSejati',
    verified: true,
    rating: 4.4,
    rating_count: 950,
    modalities: ['phone', 'chat', 'in_person'],
    languages: ['id', 'en'],
    contacts: [{ type: 'phone', value: '+62 21 123 4567' }],
    availability: { notes: 'Mon-Fri 8am-5pm WIB' }
  },
  {
    id: '35',
    name: 'PT Kesehatan Mental Indonesia',
    type: 'therapist',
    region: 'asia',
    country: 'Indonesia',
    city: 'Bandung',
    cost_type: 'paid',
    cost_per_session: 35,
    short_desc: 'Psychology clinic and therapy services',
    long_desc: 'Licensed psychologists providing therapy and counselling in Indonesia.',
    website_url: 'https://www.ptkmi.id',
    image_url: 'https://via.placeholder.com/150?text=PTKMI',
    verified: true,
    rating: 4.3,
    rating_count: 760,
    modalities: ['in_person', 'video'],
    languages: ['id'],
    contacts: [{ type: 'phone', value: '+62 274 123 4567' }],
    availability: { notes: 'Tue-Sun 10am-8pm WIB' }
  },

  // Additional Global Support Groups & Resources
  {
    id: '36',
    name: '7 Cups Emotional Support',
    type: 'support_group',
    region: 'worldwide',
    country: 'Worldwide',
    city: 'Online',
    cost_type: 'free',
    short_desc: 'Free emotional support via chat with trained listeners',
    long_desc: '7 Cups connects people with trained emotional support listeners, completely free and anonymous.',
    website_url: 'https://www.7cups.com',
    image_url: 'https://via.placeholder.com/150?text=7Cups',
    verified: true,
    rating: 4.4,
    rating_count: 3500,
    modalities: ['chat'],
    languages: ['en'],
    contacts: [{ type: 'website', value: '7cups.com' }],
    availability: { notes: '24/7 online access' }
  },
  {
    id: '37',
    name: 'International Association for Suicide Prevention',
    type: 'ngo',
    region: 'worldwide',
    country: 'Worldwide',
    city: 'Online',
    cost_type: 'free',
    short_desc: 'Global network of suicide prevention services',
    long_desc: 'IASP connects people to suicide prevention resources worldwide.',
    website_url: 'https://www.iasp.info',
    image_url: 'https://via.placeholder.com/150?text=IASP',
    verified: true,
    rating: 4.6,
    rating_count: 2340,
    modalities: ['phone', 'chat', 'email'],
    languages: ['en'],
    contacts: [{ type: 'website', value: 'iasp.info' }],
    availability: { notes: 'Varies by region' }
  },
  {
    id: '38',
    name: 'Open Path Collective',
    type: 'therapist',
    region: 'worldwide',
    country: 'Worldwide',
    city: 'Online',
    cost_type: 'sliding_scale',
    short_desc: 'Affordable therapy through global network',
    long_desc: 'Network of therapists offering affordable sliding scale therapy worldwide.',
    website_url: 'https://openpathcollective.org',
    image_url: 'https://via.placeholder.com/150?text=OpenPath',
    verified: true,
    rating: 4.5,
    rating_count: 2890,
    modalities: ['video', 'phone'],
    languages: ['en'],
    contacts: [{ type: 'website', value: 'openpathcollective.org' }],
    availability: { notes: 'Varies by therapist' }
  },
  {
    id: '39',
    name: 'ReachOut Australia',
    type: 'ngo',
    region: 'oceania',
    country: 'Australia',
    city: 'Melbourne',
    cost_type: 'free',
    short_desc: 'Youth mental health platform',
    long_desc: 'Digital mental health service with articles, tools, and community support for youth.',
    website_url: 'https://www.reachout.com',
    image_url: 'https://via.placeholder.com/150?text=ReachOut',
    verified: true,
    rating: 4.5,
    rating_count: 2560,
    modalities: ['chat', 'video', 'phone'],
    languages: ['en'],
    contacts: [{ type: 'phone', value: '1800 95 1800' }],
    availability: { notes: '24/7 available' }
  },
  {
    id: '40',
    name: 'Peer Support Global Network',
    type: 'support_group',
    region: 'worldwide',
    country: 'Worldwide',
    city: 'Online',
    cost_type: 'free',
    short_desc: 'Peer support groups worldwide',
    long_desc: 'Global network of peer support groups for mental health conditions.',
    website_url: 'https://www.peersupportglobal.org',
    image_url: 'https://via.placeholder.com/150?text=PeerNet',
    verified: true,
    rating: 4.3,
    rating_count: 1890,
    modalities: ['chat', 'in_person'],
    languages: ['en'],
    contacts: [{ type: 'website', value: 'peersupportglobal.org' }],
    availability: { notes: 'Various groups 24/7' }
  }
];

export const mockEducationContent = [
  {
    id: '1',
    title: 'Understanding Depression: A Beginner\'s Guide',
    slug: 'understanding-depression',
    category: 'understanding_mental_health',
    description: 'Learn the basics of depression and how it affects daily life',
    content: `# Understanding Depression

Depression is a common mental health condition that affects millions worldwide. Here's what you need to know:

## What is Depression?
Depression (major depressive disorder) is more than just feeling sad. It's a persistent mental health condition characterized by:
- Persistent sadness or emptiness
- Loss of interest in activities
- Changes in appetite or sleep
- Difficulty concentrating
- Feelings of worthlessness
- Thoughts of death or suicide

## Types of Depression
- Major Depressive Disorder (MDD)
- Persistent Depressive Disorder (Dysthymia)
- Seasonal Affective Disorder (SAD)
- Postpartum Depression
- Bipolar Disorder (includes depressive episodes)

## Causes
Depression can result from:
- Genetic factors
- Life events (loss, trauma, stress)
- Chemical imbalances in the brain
- Chronic health conditions
- Medication side effects

## Treatment Options
- Psychotherapy (counselling, CBT)
- Medication (antidepressants)
- Lifestyle changes (exercise, sleep, diet)
- Support groups and community

## Seeking Help
If you're experiencing depression, reach out to a mental health professional. Recovery is possible.`,
    language_code: 'en',
    status: 'published'
  },
  {
    id: '2',
    title: '10 Coping Strategies for Anxiety',
    slug: 'coping-strategies-anxiety',
    category: 'coping_strategies',
    description: 'Practical techniques to manage anxiety symptoms',
    content: `# 10 Coping Strategies for Anxiety

Anxiety is manageable. Here are evidence-based techniques:

1. **Deep Breathing (4-7-8 Technique)**
   - Breathe in for 4 counts
   - Hold for 7 counts
   - Exhale for 8 counts

2. **Progressive Muscle Relaxation**
   Tense and release each muscle group systematically.

3. **Mindfulness Meditation**
   Focus on the present moment without judgment.

4. **Cognitive Behavioral Techniques**
   Challenge anxious thoughts with evidence.

5. **Physical Exercise**
   30 minutes of activity daily reduces anxiety.

6. **Limit Caffeine and Alcohol**
   Both can trigger anxiety symptoms.

7. **Maintain Regular Sleep**
   Poor sleep worsens anxiety.

8. **Social Support**
   Talk to trusted friends or therapists.

9. **Grounding Techniques**
   Use the 5-4-3-2-1 method (5 things you see, 4 you can touch, etc.)

10. **Professional Help**
    Therapy and medication are highly effective.

Remember: Everyone experiences anxiety. It's how you respond that matters.`,
    language_code: 'en',
    status: 'published'
  },
  {
    id: '3',
    title: 'Self-Care Basics: 7 Essential Practices',
    slug: 'self-care-basics',
    category: 'self_care',
    description: 'Simple daily self-care routines for mental wellness',
    content: `# Self-Care Basics: 7 Essential Practices

Self-care isn't selfish—it's essential. Here are 7 practices:

## 1. Sleep Hygiene
- Aim for 7-9 hours nightly
- Keep a consistent schedule
- Create a dark, cool environment

## 2. Physical Activity
- 30 minutes daily
- Any activity you enjoy (walking, dancing, yoga)
- Releases endorphins naturally

## 3. Nutrition
- Eat balanced meals
- Stay hydrated
- Limit processed foods

## 4. Boundaries
- Say no without guilt
- Limit social media
- Protect your time

## 5. Mindfulness
- Meditate or practice breathing
- Be present in activities
- Notice thoughts without judgment

## 6. Social Connection
- Spend time with loved ones
- Join communities
- Build meaningful relationships

## 7. Professional Support
- Therapy when needed
- Regular check-ups
- Never suffer alone

Small steps lead to big changes in mental health.`,
    language_code: 'en',
    status: 'published'
  },
  {
    id: '4',
    title: 'Resources for Crisis Support',
    slug: 'resources-crisis-support',
    category: 'resources',
    description: 'Emergency contacts and resources when in crisis',
    content: `# Resources for Crisis Support

If you're in crisis, you're not alone. Here are resources:

## Immediate Help
- **Call emergency services (911, 999, 112, etc.)**
- **Go to nearest hospital emergency room**
- **Text or call a crisis line**

## By Country
- **USA**: National Suicide Prevention Lifeline 1-800-273-8255
- **UK**: Samaritans 116 123
- **Canada**: 1-833-456-4566
- **Australia**: Lifeline 13 11 14
- **India**: Tele-MANAS 14416

## Online Resources
- Crisis Text Line: Text HOME to 741741
- 7 Cups: Free emotional support 24/7
- OpenPath Collective: Affordable therapy

## What to Do
1. Remove yourself from immediate danger
2. Tell someone you trust
3. Call a helpline or emergency services
4. Seek professional help
5. Build a support network

## For Friends/Family
- Listen without judgment
- Encourage professional help
- Stay connected
- Take care of yourself too

**You matter. Help is available. Things can get better.**`,
    language_code: 'en',
    status: 'published'
  },
  {
    id: '5',
    title: 'Mindfulness for Beginners',
    slug: 'mindfulness-beginners',
    category: 'wellness',
    description: 'Introduction to mindfulness meditation practices',
    content: `# Mindfulness for Beginners

Mindfulness is simpler than you think. Let's start:

## What is Mindfulness?
Mindfulness is paying attention to the present moment without judgment.

## Why Practice?
- Reduces stress and anxiety
- Improves focus
- Enhances emotional regulation
- Builds resilience

## 5-Minute Beginner Practice

1. **Find a comfortable seat**
2. **Close your eyes or soften your gaze**
3. **Focus on your breath**
   - Notice the inhale
   - Notice the exhale
   - Don't try to change it
4. **When your mind wanders (it will!)**
   - Gently notice
   - Return to breath
   - No judgment
5. **End gently**

## Tips
- Start with 5 minutes
- Do it daily at the same time
- Use apps like Insight Timer or Calm
- Join a mindfulness group
- Be patient with yourself

Consistency beats perfection. Even 5 minutes daily helps.`,
    language_code: 'en',
    status: 'published'
  }
];
