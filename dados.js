var distancias = { 
    'Aracaju' :
      {'Aracaju':0, 'Belem':2079, 'Belo Horizonte':1578, 'Brasilia':1650, 'Campo Grande': 2764, 
       'Cuiaba':2773, 'Curitiba':2595, 'Florianópolis':2892, 'Fortaleza':1183, 'Goiania':1848,
       'João Pessoa':611, 'Maceio':294, 'Manaus':5215, 'Natal':788, 'Porto Alegre':3296,
       'Porto Velho': 4230, 'Recife':501, 'Rio Branco':4763, 'Rio de Janeiro':1855, 
       'Salvador':356, 'São Luiz':1578, 'São Paulo':2187, 'Teresina':1142, 'Vitoria':1408
      },
     'Belem': {'Aracaju':2079, 'Belem':0, 'Belo Horizonte':1578, 'Brasilia':1650, 'Campo Grande': 2764, 'Cuiaba':2773,
               'Curitiba':2595, 'Florianópolis':2892, 'Fortaleza':1183, 'Goiania':1848, 'João Pessoa':611, 'Maceio':294, 
               'Manaus':5215,'Natal':788,'Porto Alegre':3296, 'Porto Velho': 4230, 'Recife':501, 
               'Rio Branco':4763, 'Rio de Janeiro':1855, 'Salvador':356, 'São Luiz':1578, 'São Paulo':2187, 
               'Teresina':1142, 'Vitoria':1408},

     'Belo Horizonte':{'Aracaju':1578, 'Belem':2824, 'Belo Horizonte':0, 'Brasilia':741, 'Campo Grande': 1453, 'Cuiaba':1594, 'Curitiba':1004, 'Florianópolis':1301, 'Fortaleza':2528, 'Goiania':906, 'João Pessoa':2171, 'Maceio':1854, 'Manaus':3951, 'Natal':2348, 'Porto Alegre':1712, 'Porto Velho': 3050, 'Recife':2061, 
                       'Rio Branco':3584, 'Rio de Janeiro':434, 'Salvador':1372, 'São Luiz':2738, 'São Paulo':586, 'Teresina':2302, 'Vitoria':524},

     'Brasilia':{'Aracaju':1652, 'Belem':2120, 'Belo Horizonte':716, 'Brasilia':0, 'Campo Grande': 1134, 'Cuiaba':1133, 'Curitiba':1366, 'Florianópolis':1673, 'Fortaleza':2208, 'Goiania':209, 'João Pessoa':2245, 'Maceio':1928, 'Manaus':3490, 'Natal':2422, 'Porto Alegre':2027, 'Porto Velho': 2589, 'Recife':2135, 
                'Rio Branco':3123, 'Rio de Janeiro':1148, 'Salvador':1446, 'São Luiz':2157, 'São Paulo':1015, 'Teresina':1789, 'Vitoria':1238},

     'Campo Grande':{'Aracaju':2765, 'Belem':2942, 'Belo Horizonte':1453, 'Brasilia':1134, 'Campo Grande':0, 'Cuiaba':694, 'Curitiba':991, 'Florianópolis':1298, 'Fortaleza':3407, 'Goiania':935, 'João Pessoa':3357, 'Maceio':3040, 'Manaus':3051, 'Natal':3537, 'Porto Alegre':1518, 'Porto Velho': 2150, 'Recife':3247, 
                     'Rio Branco':2684, 'Rio de Janeiro':1444, 'Salvador':2568, 'São Luiz':2979, 'São Paulo':1014, 'Teresina':2911, 'Vitoria':1892},

     'Cuiaba':{'Aracaju':2775, 'Belem':2941, 'Belo Horizonte':1594, 'Brasilia':1133, 'Campo Grande': 694, 'Cuiaba':0, 'Curitiba':1679, 'Florianopólis':1986, 'Fortaleza':3046, 'Goiania':934, 'João Pessoa':3366, 'Maceio':3049, 'Manaus':2357, 'Natal':3543, 'Porto Alegre':2206, 'Porto Velho': 1456, 'Recife':3256, 
               'Rio Branco':1990, 'Rio de Janeiro':2017, 'Salvador':2567, 'São Luiz':2978, 'São Paulo':1614, 'Teresina':2910, 'Vitoria':2119},

     'Curitiba':{'Aracaju':2595, 'Belem':3193, 'Belo Horizonte':1004, 'Brasilia':1366, 'Campo Grande': 991, 'Cuiaba':1679, 'Curitiba':0, 'Florianópolis':300, 'Fortaleza':3541, 'Goiania':1186, 'João Pessoa':3188, 'Maceio':2871, 'Manaus':4036, 'Natal':3365, 'Porto Alegre':711, 'Porto Velho': 3135, 'Recife':3078, 
                 'Rio Branco':3669, 'Rio de Janeiro':852, 'Salvador':2385, 'São Luiz':3230, 'São Paulo':408, 'Teresina':3143, 'Vitoria':1300},

     'Florianopolis':{'Aracaju':2892, 'Belem':3500, 'Belo Horizonte':1301, 'Brasilia':1673, 'Campo Grande': 1298, 'Cuiaba':1986, 'Curitiba':300, 'Florianópolis':0, 'Fortaleza':3838, 'Goiania':1493, 'João Pessoa':3485, 'Maceio':3168, 'Manaus':4343, 'Natal':3662, 'Porto Alegre':476, 'Porto Velho': 3442, 'Recife':3375, 
                      'Rio Branco':3976, 'Rio de Janeiro':1144, 'Salvador':2682, 'Sao Luiz':3537, 'São Paulo':705, 'Teresina':3450, 'Vitoria':1597},

     'Fortaleza':{'Aracaju':1183, 'Belem':1610, 'Belo Horizonte':2528, 'Brasilia':2200, 'Campo Grande': 3407, 'Cuiaba':3406, 'Curitiba':3541, 'Florianópolis':3838, 'Fortaleza':0, 'Goiania':2482, 'João Pessoa':688, 'Maceio':1075, 'Manaus':5763, 'Natal':537, 'Porto Alegre':4242, 'Porto Velho': 4865, 'Recife':800, 
                  'Rio Branco':5396, 'Rio de Janeiro':2805, 'Salvador':1389, 'São Luiz':1070, 'São Paulo':3127, 'Teresina':634, 'Vitoria':2397},

     'Goiania':{'Aracaju':1848, 'Belem':2017, 'Belo Horizonte':906, 'Brasilia':209, 'Campo Grande': 935, 'Cuiaba':934, 'Curitiba':1186, 'Florianópolis':1493, 'Fortaleza':2482, 'Goiania':0, 'João Pessoa':2442, 'Maceio':2105, 'Manaus':3291, 'Natal':2619, 'Porto Alegre':1847, 'Porto Velho': 2390, 'Recife':2332, 
                'Rio Branco':2924, 'Rio de Janeiro':1338, 'Salvador':1643, 'São Luiz':2054, 'São Paulo':926, 'Teresina':1886, 'Vitoria':1428},

     'Joao Pessoa':{'Aracaju':611, 'Belem':2161, 'Belo Horizonte':2171, 'Brasilia':2245, 'Campo Grande': 3357, 'Cuiaba':3366, 'Curitiba':3188, 'Florianópolis':3485, 'Fortaleza':688, 'Goiania':2442, 'João Pessoa':0, 'Maceio':395, 'Manaus':5808, 'Natal':185, 'Porto Alegre':3889, 'Porto Velho': 4822, 'Recife':120, 
                    'Rio Branco':5356, 'Rio de Janeiro':2448, 'Salvador':949, 'São Luiz':1660, 'São Paulo':2770, 'Teresina':1224, 'Vitoria':2001},

     'Maceio':{'Aracaju':294, 'Belem':2173, 'Belo Horizonte':1854, 'Brasilia':1930, 'Campo Grande': 3040, 'Cuiaba':3049, 'Curitiba':2871, 'Florianopolis':3168, 'Fortaleza':1075, 'Goiania':2125, 'João Pessoa':395, 'Maceio':0, 'Manaus':5491, 'Natal':572, 'Porto Alegre':3572, 'Porto Velho': 4505, 'Recife':285, 
               'Rio Branco':5039, 'Rio de Janeiro':2131, 'Salvador':632, 'São Luiz':1672, 'São Paulo':2453, 'Teresina':1236, 'Vitoria':1684},

     'Manaus':{'Aracaju':5215, 'Belem':5298, 'Belo Horizonte':3951, 'Brasilia':3490, 'Campo Grande': 3051, 'Cuiaba':2357, 'Curitiba':4036, 'Florianópolis':4443, 'Fortaleza':5763, 'Goiania':3291, 'João Pessoa':5808, 'Maceio':5491, 'Manaus':0, 'Natal':5985, 'Porto Alegre':4563, 'Porto Velho': 901, 'Recife':5698, 
               'Rio Branco':1445, 'Rio de Janeiro':4374, 'Salvador':5009, 'São Luiz':5335, 'São Paulo':3971, 'Teresina':5267, 'Vitoria':4476},

     'Natal':{'Aracaju':788, 'Belem':2108, 'Belo Horizonte':2348, 'Brasilia':2422, 'Campo Grande': 3534, 'Cuiaba':3543, 'Curitiba':3365, 'Florianópolis':3662, 'Fortaleza':537, 'Goiania':2618, 'João Pessoa':185, 'Maceio':572, 'Manaus':5985, 'Natal':0, 'Porto Alegre':4066, 'Porto Velho': 4999, 'Recife':297, 
              'Rio Branco':5533, 'Rio de Janeiro':2625, 'Salvador':1126, 'São Luiz':1607, 'São Paulo':2947, 'Teresina':1171, 'Vitoria':2178},

     'Porto Alegre':{'Aracaju':3296, 'Belem':3852, 'Belo Horizonte':1712, 'Brasilia':2027, 'Campo Grande': 1518, 'Cuiaba':2206, 'Curitiba':711, 'Florianópolis':476, 'Fortaleza':4242, 'Goiania':1847, 'João Pessoa':3889, 'Maceio':3572, 'Manaus':4563, 'Natal':4066, 'Porto Alegre':0, 'Porto Velho': 3662, 'Recife':3779, 
                     'Rio Branco':4196, 'Rio de Janeiro':1553, 'Salvador':3090, 'São Luiz':3891, 'São Paulo':1109, 'Teresina':3804, 'Vitoria':2001},

     'Porto Velho':{'Aracaju':4230, 'Belem':4397, 'Belo Horizonte':3050, 'Brasilia':2589, 'Campo Grande': 2150, 'Cuiaba':1456, 'Curitiba':3135, 'Florianópolis':3442, 'Fortaleza':4862, 'Goiania':2390, 'João Pessoa':4822, 'Maceio':4505, 'Manaus':901, 'Natal':4998, 'Porto Alegre':3662, 'Porto Velho': 0, 'Recife':4712, 
                    'Rio Branco':544, 'Rio de Janeiro':3473, 'Salvador':4023, 'São Luiz':4434, 'São Paulo':3070, 'Teresina':4366, 'Vitoria':3575},

     'Recife':{'Aracaju':501, 'Belem':2074, 'Belo Horizonte':2061, 'Brasilia': 2135, 'Campo Grande':3247, 'Cuiaba':2773, 'Curitiba':3078, 'Florianópolis':3375, 'Fortaleza':800, 'Goiania':2332, 'João Pessoa':120, 'Maceio':285, 'Manaus':5698, 'Natal':297, 'Porto Alegre':3779, 'Porto Velho': 4712, 'Recife':0, 
                'Rio Branco':5243, 'Rio de Janeiro':2338, 'Salvador': 839, 'São Luiz':1573, 'São Paulo':2660, 'Teresina':1137, 'Vitoria':1891},

     'Rio Branco':{'Aracaju':4763, 'Belem':4931, 'Belo Horizonte':3584, 'Brasilia':3123, 'Campo Grande': 2684, 'Cuiaba':1990, 'Curitiba':3669, 'Florianópolis':3976, 'Fortaleza':5396, 'Goiania':2924, 'João Pessoa':5356, 'Maceio':5039, 'Manaus':1445, 'Natal':5533, 'Porto Alegre':4196, 'Porto Velho': 544, 'Recife':5243, 
                    'Rio Branco':0, 'Rio de Janeiro':4007, 'Salvador':4457, 'São Luiz':4968, 'São Paulo':3604, 'Teresina':4900, 'Vitoria':4109},

     'Rio de Janeiro':{'Aracaju':1855, 'Belem':3250, 'Belo Horizonte':434, 'Brasilia':1148, 'Campo Grande': 1444, 'Cuiaba':2017, 'Curitiba':852, 'Florianópolis':1144, 'Fortaleza':2805, 'Goiania':1338, 'João Pessoa':2448, 'Maceio':2131, 'Manaus':4374, 'Natal':2625, 'Porto Alegre':1553, 'Porto Velho': 3473, 'Recife':2338, 
                       'Rio Branco':4007, 'Rio de Janeiro':0, 'Salvador':1649, 'São Luiz':3015, 'São Paulo':429, 'Teresina':2579, 'Vitoria':521},

     'Salvador':{'Aracaju':356, 'Belem':2100, 'Belo Horizonte':1372, 'Brasilia':1446, 'Campo Grande': 2568, 'Cuiaba':2566, 'Curitiba':2385, 'Florianópolis':2682, 'Fortaleza':1389, 'Goiania':1643, 'João Pessoa':949, 'Maceio':632, 'Manaus':5009, 'Natal':1126, 'Porto Alegre':3090, 'Porto Velho': 4023, 'Recife':839, 
                 'Rio Branco':4457, 'Rio de Janeiro':1649, 'Salvador':0, 'São Luiz':1599, 'São Paulo':2187, 'Teresina':1163, 'Vitoria':1202},

     'São Luiz':{'Aracaju':1578, 'Belem':806, 'Belo Horizonte':2738, 'Brasilia':2157, 'Campo Grande': 2979, 'Cuiaba':2978, 'Curitiba':3230, 'Florianópolis':3537, 'Fortaleza':1070, 'Goiania':2054, 'João Pessoa':1660, 'Maceio':1672, 'Manaus':5335, 'Natal':1607, 'Porto Alegre':3891, 'Porto Velho': 4434, 'Recife':1573, 
                 'Rio Branco':4968, 'Rio de Janeiro':3015, 'Salvador':356, 'São Luiz':0, 'São Paulo':1962, 'Teresina':446, 'Vitoria':2607},

     'São Paulo':{'Aracaju':2187, 'Belem':2933, 'Belo Horizonte':586, 'Brasilia':1015, 'Campo Grande':1014, 'Cuiaba':1614, 'Curitiba':408, 'Florianópolis':705, 'Fortaleza':3127, 'Goiania':926, 'João Pessoa':2770, 'Maceio':2453, 'Manaus':3971, 'Natal':2947, 'Porto Alegre':1109, 'Porto Velho': 3070, 'Recife':2660, 
                 'Rio Branco':3604, 'Rio de Janeiro':429, 'Salvador':1962, 'São Luiz':2970, 'São Paulo':0, 'Teresina':2792, 'Vitoria':882},

     'Teresina':{'Aracaju':1142, 'Belem':947, 'Belo Horizonte':2302, 'Brasilia':1789, 'Campo Grande': 2911, 'Cuiaba':2910, 'Curitiba':3143, 'Florianópolis':3450, 'Fortaleza':634, 'Goiania':1986, 'João Pessoa':1224, 'Maceio':1236, 'Manaus':5267, 'Natal':1171, 'Porto Alegre':3804, 'Porto Velho': 4366, 'Recife':1137, 
                 'Rio Branco':4900, 'Rio de Janeiro':2579, 'Salvador':1163, 'São Luiz':446, 'São Paulo':2792, 'Teresina':0, 'Vitoria':2171},

     'Vitoria':{'Aracaju':1408, 'Belem':3108, 'Belo Horizonte':524, 'Brasilia':1239, 'Campo Grande': 1892, 'Cuiaba':2119, 'Curitiba':1300, 'Florianópolis':1597, 'Fortaleza':2397, 'Goiania':1428, 'João Pessoa':2001, 'Maceio':1684, 'Manaus':4476, 'Natal':2178, 'Porto Alegre':2001, 'Porto Velho': 3575, 'Recife':1891, 
                'Rio Branco':4109, 'Rio de Janeiro':521, 'Salvador':1202, 'São Luiz':2607, 'São Paulo':882, 'Teresina':2171, 'Vitoria':0}}
    // Fim do Array