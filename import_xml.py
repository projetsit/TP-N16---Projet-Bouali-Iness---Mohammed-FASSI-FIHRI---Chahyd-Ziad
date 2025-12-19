

import xml.etree.ElementTree as ET

def parse_horaires_xml(filepath='data/horaires.xml'):
    
    tree = ET.parse(filepath)
    root = tree.getroot()
    
    values = []
    for horaire in root.findall('horaire'):
        ligne_id = horaire.find('ligne_id').text
        station_id = horaire.find('station_id').text
        timestamp = horaire.find('timestamp').text.replace('T', ' ')
        values.append(f"({ligne_id}, {station_id}, '{timestamp}')")
    
    print(',\n'.join(values) + ';')

if __name__ == '__main__':
    parse_horaires_xml()
