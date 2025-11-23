// data.ts

import { Place } from '../types';

export const importantPlaces: Place[] = [
  { id: 'cro_office', categoryKey: 'service', mapQuery: 'CRO Office, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'railway_enquiry', categoryKey: 'help', mapQuery: 'Tirupati Railway Station Enquiry, Tirupati, Andhra Pradesh' },
  { id: 'ttd_info_desk', categoryKey: 'help', mapQuery: 'TTD Information Center, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'accommodation_counters', categoryKey: 'service', mapQuery: 'TTD Accommodation Counter, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'drinking_water', categoryKey: 'facility', mapQuery: 'Drinking Water Point, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'toilets', categoryKey: 'facility', mapQuery: 'Public Toilet, Tirumala, Tirupati, Andhra Pradesh' },
];

export const emergencyServices: Place[] = [
  { id: 'medical_emergency', categoryKey: 'emergency', mapQuery: 'Aswini Hospital, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'police_security', categoryKey: 'emergency', mapQuery: 'Police Station, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'fire_station', categoryKey: 'emergency', mapQuery: 'Fire Station, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'helpline', categoryKey: 'emergency', mapQuery: 'TTD Control Room, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'lost_and_found', categoryKey: 'help', mapQuery: 'TTD Lost and Found Center, Tirumala, Tirupati, Andhra Pradesh' },
];

export const spiritualPlaces: Place[] = [
  { id: 'main_temple', categoryKey: 'temple', mapQuery: 'Srivari Temple, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'bedi_anjaneyaswamy', categoryKey: 'temple', mapQuery: 'Bedi Anjaneyaswamy Temple, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'varaha_swamy', categoryKey: 'temple', mapQuery: 'Sri Varahaswami Temple, Tirumala, Tirupati, Andhra Pradesh' },
  { id: 'papavinasanam', categoryKey: 'theertham', mapQuery: 'Papavinasanam Theertham, Tirumala, Andhra Pradesh' },
  { id: 'akasha_ganga', categoryKey: 'theertham', mapQuery: 'Akasa Ganga, Tirumala, Andhra Pradesh' },
  { id: 'japali_theertham', categoryKey: 'theertham', mapQuery: 'Japali Theertham, Tirumala, Andhra Pradesh' },
  { id: 'sila_thoranam', categoryKey: 'view_point', mapQuery: 'Silathoranam, Tirumala, Andhra Pradesh' },
  { id: 'gogarbham', categoryKey: 'view_point', mapQuery: 'Gogarbham Dam, Tirumala, Andhra Pradesh' },
  { id: 'srivari_padalu', categoryKey: 'sacred_spot', mapQuery: 'Srivari Padalu, Tirumala, Andhra Pradesh' },
  { id: 'chakra_theertham', categoryKey: 'theertham', mapQuery: 'Chakra Theertham, Tirumala, Andhra Pradesh' },
];
