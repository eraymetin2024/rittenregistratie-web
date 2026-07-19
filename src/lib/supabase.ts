// Publieke client voor het adminpaneel.
//
// De anon-sleutel is bewust publiek: alle beveiliging zit in Row-Level Security
// op de database. Een bezoeker zonder beheerdersaccount ziet met deze sleutel
// dus niets van de tickets. De service-role-sleutel hoort hier NOOIT.
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://api.rittenregistratie.app',
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc4MTM1MTI4MCwiZXhwIjo0OTM3MDI0ODgwLCJyb2xlIjoiYW5vbiJ9.gRMEKh7zlSnybT2gUINvFC6Y0pQturuF5_Njwk9nkp4',
);
