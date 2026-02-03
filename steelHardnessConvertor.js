const hardnessA1 = [[255, 80, 76.0, null, null, null, null, null, null, null, null],
                    [270, 85, 80.7, 41.0, null, null, null, null, null, null, null],
                    [285, 90, 85.5, 48.0, 82.6, null, null, null, null, null, null],
                    [305, 95, 90.2, 52.0, (84.8), null, null, null, null, null, null],
                    [320, 100, 95.0, 56.2, 87.0, null, null, null, null, null, null],
                    [335, 105, 99.8, (58.6), (88.4), null, null, null, null, null, null],
                    [350, 110, 105, 62.3, 90.5, null, null, null, null, null, null],
                    [370, 115, 109, (64.5), (92.1), null, null, null, null, null, null],
                    [385, 120, 114, 66.7, 93.6, null, null, null, null, null, null],
                    [400, 125, 119, 68.0, 95.0, null, null, null, null, null, null],
                    [415, 130, 124, 71.2, 96.4, null, null, null, null, null, null],
                    [430, 135, 128, (73.1), (97.7), null, null, null, null, null, null],
                    [450, 140, 133, 75.0, 99.0,  null, null, null, null, null, null],
                    [465, 145, 138, (76.8), (100.2), null, null, null, null, null, null],
                    [480, 150, 143, 78.7, 101.4, null, null, null, null, null, null],
                    [495, 155, 147, (80.2), (102.5), null, null, null, null, null, null],
                    [510, 160, 152, 81.7, 103.6, null, null, null, null, null, null],
                    [530, 165, 156, (83.4), (104.6), null, null, null, null, null, null],
                    [545, 170, 162, 85, 105.5, null, null, null, null, null, null],
                    [560, 175, 166, (86.1), (106.4), null, null, null, null, null, null],
                    [575, 180, 171, 87.1, 107.2, null, null, null, null, null, null],
                    [595, 185, 176, (88.3), (108.0), null, null, null, null, null, null],
                    [610, 190, 181, 89.5, 108.7, null, null, null, null, null, null],
                    [625, 195, 185, (90.5), (109.4), null, null, null, null, null, null],
                    [640, 200, 190, 91.5, 110.1, null, null, null, null, null, null],
                    [660, 205, 195, 92.5, (110.7), null, null, null, null, null, null],
                    [675, 210, 199, 93.5, 111.3, null, null, null, null, null, null],
                    [690, 215, 204, 94.0, (111.9), null, null, null, null, null, null],
                    [705, 220, 209, 95.0, 112.4, null, null, null, null, null, null],
                    [720, 225, 214, 96.0, (112.9), null, null, null, null, null, null],
                    [740, 230, 219, 96.7, 113.4, null, null, null, null, null, null],
                    [755, 235, 223, (97.4), ((113.9)), null, null, null, null, null, null],
                    [770, 240, 228, 98.1, 114.3, 20.3, 60.7, 40.3, 69.6, 41.7, 19.9],
                    [785, 245, 233, (98.8), ((114.7)), 21.3, 61.2, 41.1, 70.1, 42.5, 21.1],
                    [800, 250, 238, 99.5, 115.1, 22.2, 61.6, 41.7, 70.6, 43.4, 22.2],
                    [820, 255, 242, (100.3), null, 23.1, 62.0, 42.2, 71.1, 44.2, 23.2],
                    [835, 260, 247, (101), null, 24.0, 62.4, 43.1, 71.6, 45.0, 24.3], 
                    [850, 265, 252, ((101.5)), null, 24.8, 62.7, 43.7, 72.1, 45.7, 25.2],
                    [865, 270, 257, (102), null, 25.6, 63.1, 44.3, 72.6, 46.4, 26.2],
                    [880, 275, 261, ((103)), null, 26.4, 63.5, 44.9, 73.0, 47.2, 27.1],
                    [900, 280, 266, (104), null, 27.1, 63.8, 45.3, 73.4, 47.8, 27.9],
                    [915, 285, 271, ((104.5)), null, 27.8, 64.2, 46.0, 73.8, 48.4, 28.7],
                    [930, 290, 276, (105), null, 28.5, 64.5, 46.5, 74.2, 49.0, 29.5],
                    [950, 295, 280, null, null, 29.2, 64.8, 47.1, 74.6, 49.7, 30.4],
                    [965, 300, 285, null, null, 29.8, 65.2, 47.5, 74.9, 50.2, 31.1],
                    [995, 310, 295, null, null, 31.0, 65.8, 48.4, 75.6, 51.3, 32.5],
                    [1030, 320, 304, null, null, 32.2, 66.4, 49.4, 76.2, 52.3, 33.9],
                    [1060, 330, 314, null, null, 33.3, 67.0, 50.2, 76.8, 53.6, 35.2],
                    [1095, 340, 323, null, null, 34.4, 67.6, 51.1, 77.4, 54.4, 36.5],
                    [1125, 350, 333, null, null, 35.5, 68.1, 51.9, 78.0, 55.4, 37.8],
                    [1155, 360, 342, null, null, 36.6, 68.7, 52.8, 78.6, 56.4, 39.1],
                    [1190, 370, 352, null, null, 37.7, 69.2, 53.6, 79.2, 57.4, 40.4],
                    [1220, 380, 361, null, null, 38.8, 69.8, 54.4, 79.8, 58.4, 41.7],
                    [1255, 390, 371, null, null, 39.8, 70.3, 55.3, 80.3, 59.3, 42.9],
                    [1290, 400, 380, null, null, 40.8, 70.8, 56.0, 80.8, 60.2, 44.1],
                    [1320, 410, 390, null, null, 41.8, 71.4, 56.8, 81.4, 61.1, 45.3],
                    [1350, 420, 399, null, null, 42.7, 71.8, 57.5, 81.8, 61.9, 46.4],
                    [1385, 430, 409, null, null, 43.6, 72.3, 58.2, 82.3, 62.7, 47.4],
                    [1420, 440, 418, null, null, 44.5, 72.8, 58.8, 82.8, 63.5, 48.4],
                    [1455, 450, 428, null, null, 45.3, 73.3, 59.4, 83.2, 64.3, 49.4],
                    [1485, 460, 437, null, null, 46.1, 73.6, 60.1, 83.6, 64.9, 50.4],
                    [1520, 470, 447, null, null, 46.9, 74.1, 60.7, 83.9, 65.7, 51.3],
                    [1555, 480, 456, null, null, 47.7, 74.5, 61.3, 84.3, 66.4, 52.2],
                    [1595, 490, 466, null, null, 48.4, 74.9, 61.6, 84.7, 67.1, 53.1],
                    [1630, 500, 475, null, null, 49.1, 75.3, 62.2, 85.0, 67.7, 53.9],
                    [1665, 510, 485, null, null, 49.8, 75.7, 62.9, 85.4, 68.3, 54.7],
                    [1700, 520, 494, null, null, 50.5, 76.1, 63.5, 85.7, 69.0, 55.6],
                    [1740, 530, 504, null, null, 51.1, 76.4, 63.9, 86.0, 69.5, 56.2],
                    [1775, 540, 513, null, null, 51.7, 76.7, 64.4, 86.3, 70.0, 57.0],
                    [1810, 550, 523, null, null, 52.3, 77.0, 64.8, 86.6, 70.5, 57.8],
                    [1845, 560, 532, null, null, 53.0, 77.4, 65.4, 86.9, 71.2, 58.6],
                    [1880, 570, 542, null, null, 53.6, 77.8, 65.8, 87.2, 71.7, 59.3],
                    [1920, 580, 551, null, null, 54.1, 78.0, 66.2, 87.5, 72.1, 59.9],
                    [1955, 590, 561, null, null, 54.7, 78.4, 66.7, 87.8, 72.7, 60.5],
                    [1995, 600, 570, null, null, 55.2, 78.6, 67.0, 88.0, 73.2, 61.2],
                    [2030, 610, 580, null, null, 55.7, 78.9, 67.5, 88.2, 73.7, 61.7],
                    [2070, 620, 589, null, null, 56.3, 79.2, 67.9, 88.5, 74.2, 62.4],
                    [2105, 630, 599, null, null, 56.8, 79.5, 68.3, 88.8, 74.6, 63.0],
                    [2145, 640, 608, null, null, 57.3, 79.8, 68.7, 89.0, 75.1, 63.5],
                    [2180, 650, 618, null, null, 57.8, 80.0, 69.0, 89.2, 75.5, 64.1],
                    [null, 660, null, null, null, 58.3, 80.3, 69.4, 89.5, 75.9, 64.7],
                    [null, 670, null, null, null, 58.8, 80.6, 69.8, 89.7, 76.4, 65.3],
                    [null, 680, null, null, null, 59.2, 80.8, 70.1, 89.8, 76.8, 65.7],
                    [null, 690, null, null, null, 59.7, 81.1, 70.5, 90.1, 77.2, 66.2],
                    [null, 700, null, null, null, 60.1, 81.3, 70.8, 90.3, 77.6, 66.7],
                    [null, 720, null, null, null, 61.0, 81.8, 71.5, 90.7, 78.4, 67.7],
                    [null, 740, null, null, null, 61.8, 82.2, 72.1, 91.0, 79.1, 68.6],
                    [null, 760, null, null, null, 62.5, 82.6, 72.6, 91.2, 79.7, 69.4],
                    [null, 780, null, null, null, 63.3, 83.0, 73.3, 91.5, 80.4, 70.2],
                    [null, 800, null, null, null, 64.0, 83.4, 73.8, 91.8, 81.1, 71.0],
                    [null, 820, null, null, null, 64.7, 83.8, 74.3, 92.1, 81.7, 71.8],
                    [null, 840, null, null, null, 65.3, 84.1, 74.8, 92.3, 82.2, 72.2],
                    [null, 860, null, null, null, 65.9, 84.4, 75.3, 92.5, 82.7, 73.1],
                    [null, 880, null, null, null, 66.4, 84.7, 75.7, 92.7, 83.1, 73.6],
                    [null, 900, null, null, null, 67.0, 85.0, 76.1, 92.9, 83.6, 74.2],
                    [null, 920, null, null, null, 67.5, 85.3, 76.5, 93.0, 84.0, 74.8],
                    [null, 940, null, null, null, 68.0, 85.6, 76.9, 93.2, 84.4, 75.4]
    ];

const hardnessB1 = [[210, 205, 15.3, 57.2, 13.4, 36.1, 65.2, 94.8, 110.4, 65.4, 76.8, 89.2, 651],
                    [220, 215, 17.4, 58.4, 15.9, 38.1, 66.5, 96.7, 111.4, 67.6, 78.5, 90.0, 683],
                    [230, 225, 19.3, 59.6, 18.2, 40.4, 67.8, 98.4, 112.4, 69.6, 80.0, 90.8, 716],
                    [240, 235, 21.2, 60.6, 20.4, 41.8, 68.9, 100.0, 113.3, 71.4, 81.4, 91.4, 748],
                    [250, 245, 22.9, 61.6, 22.5, 43.4, 70.0, 101.4, 114.1, 73.0, 82.5, 92.0, 781],
                    [260, 255, 24.6, 62.5, 24.4, 45.0, 71.0, 102.7, 114.9, 74.4, 83.6, 92.5, 813],
                    [270, 266, 26.2, 63.4, 26.3, 46.5, 72.0, 103.9, 115.6, 75.7, 84.5, (92.6), 845],
                    [280, 276, 27.7, 64.3, 28.1, 47.9, 72.9, 105.0, 116.2, 76.9, 85.4, (92.7), 877],
                    [290, 286, 29.1, 65.0, 29.8, 49.3, 73.7, 106.0, 116.8, 77.9, 86.1, (92.8), 909],
                    [300, 296, 30.5, 65.8, 31.4, 50.5, 74.5, 106.9, 117.3, 78.9, 86.8, (92.9), 940],
                    [310, 306, 31.8, 66.5, 32.9, 51.8, 75.3, 107.7, 117.8, 79.7, 87.4, 94.3, 972],
                    [320, 316, 33.1, 67.2, 34.4, 52.9, 76.0, 108.5, 118.3, 80.5, 88.0, 94.6, 1003],
                    [330, 326, 34.3, 67.8, 35.8, 54.0, 76.7, 109.2, 118.8, 81.2, 88.4, 94.8, 1035],
                    [340, 336, 35.4, 68.5, 37.2, 55.1, 77.3, 109.9, 119.2, 81.9, 88.9, 95.0, 1070],
                    [350, 345, 36.5, 69.1, 38.4, 56.1, 78.0, 110.5, 119.6, 82.5, 89.3, 95.2, 1097],
                    [360, 355, 37.6, 69.6, 39.7, 57.1, 78.6, 111.1, (119.9), 83.0, 89.6, 95.4, 1128],
                    [370, 365, 38.6, 70.2, 40.9, 58.0, 79.1, (111.7), (120.3), (83.5), 89.9, (95.5), 1159],
                    [380, 375, 39.6, 70.7, 42.0, 58.9, 79.7, (112.2), (120.6), (84.0), 90.2, (95.6), 1189],
                    [390, 385, 40.6, 71.2, 43.2, 59.8, 80.2, (112.7), (120.9), (84.4), 90.5, (95.7), 1220],
                    [400, 395, 41.5, 71.7, 44.2, 60.6, 80.7, (113.1), (121.2), (84.8), 90.7, (95.8), 1250],
                    [410, 405, 42.4, 72.2, 45.3, 61.4, 81.2, (113.6), (121.5), (85.1), 90.9, (95.9), 1281],
                    [420, 414, 43.2, 72.6, 46.3, 62.2, 81.6, null, null, null, null, null, 1311],
                    [430, 424, 44.1, 73.0, 47.2, 63.0, 82.1, null, null, null, null, null, 1341],
                    [440, 434, 44.9, 73.5, 48.2, 63.7, 82.5, null, null, null, null, null, 1371],
                    [450, 444, 45.7, 73.9, 49.1, 64.4, 82.9, null, null, null, null, null, 1401],
                    [460, 453, 46.4, 74.3, 50.0, 65.1, 83.3, null, null, null, null, null, 1430],
                    [470, 463, 47.2, 74.6, 50.8, 65.8, 83.7, null, null, null, null, null, 1460],
                    [480, 473, 47.9, 75.0, 51.7, 66.4, 84.1, null, null, null, null, null, null],
                    [490, 482, 48.6, 75.4, 52.5, 67.0, 84.4, null, null, null, null, null, null],
                    [500, 492, 49.2, 75.7, 53.2, 67.6, 84.8, null, null, null, null, null, null],
                    [510, 501, 49.9, 76.0, 54.0, 68.2, 85.1, null, null, null, null, null, null],
                    [520, 511, 50.5, 76.4, 54.8, 68.8, 85.4, null, null, null, null, null, null],
                    [530, 520, 51.2, 76.7, 55.5, 69.3, 85.8, null, null, null, null, null, null],
                    [540, 530, 51.8, 77.0, 56.2, 69.9, 86.1, null, null, null, null, null, null],
                    [550, 539, 52.4, 77.3, 56.8, 70.4, 86.4, null, null, null, null, null, null],
                    [560, 549, 52.9, 77.6, 57.5, 70.9, 86.6, null, null, null, null, null, null],
                    [570, 558, 53.5, 77.9, 58.2, 71.4, 86.9, null, null, null, null, null, null],
                    [580, 568, 54.0, 78.2, 58.8, 71.9, 87.2, null, null, null, null, null, null],
                    [590, 577, 54.6, 78.4, 59.4, 72.4, 87.5, null, null, null, null, null, null],
                    [600, 586, 55.1, 78.7, 60.0, 72.8, 87.7, null, null, null, null, null, null],
                    [610, 596, 55.6, 78.9, 60.6, 73.3, 88.0, null, null, null, null, null, null],
                    [620, 605, 56.1, 79.2, 61.2, 73.7, 88.2, null, null, null, null, null, null],
                    [630, 614, 56.6, 79.4, 61.7, 74.2, 88.5, null, null, null, null, null, null],
                    [640, 623, 57.1, 79.7, 62.3, 74.6, 88.7, null, null, null, null, null, null],
                    [650, 632, 57.5, 79.9, 62.8, 75.0, 88.9, null, null, null, null, null, null]
                ];

const hardnessB2 = [[140, null, null, null, null, null, null, null, null, null, null, null, 460],
                    [150, 152, null, (48.4), null, (21.5), (56.6), 81.0, 102.5, 51.6, 68.4, 85.1, 503],
                    [160, 162, (1.0), (50.2), null, (24.4), (58.3), 83.9, 104.1, 54.8, 70.5, 86.2, 544],
                    [170, 173, (4.0), (51.9), (0.8), (27.0), (60.0), 86.6, 105.6, 57.7, 72.4, 87.2, 585],
                    [180, 183, (6.8), (53.4), (4.0), (29.5), (61.5), 89.0, 106.9, 60.2, 74.1, 88.0, 624],
                    [190, 193, (9.4), (54.8), (7.0), (31.8), (62.9), 91.2, 108.1, 62.5, 75.6, 88.8, 661],
                    [200, 203, (11.9), (56.2), (9.9), (34.0), (64.3), 93.2, 109.2, 64.6, 77.0, 89.4, 697],
                    [210, 214, (14.2), (57.4), (12.6), (36.1), (65.6), 95.0, 110.3, 66.4, 78.3, 90.0, 732],
                    [220, 223, (16.4), (58.6), (15.1), (38.1), 66.8, 96.7, 111.2, 68.2, 79.5, 90.6, 765],
                    [230, 233, (18.5), (59.7), 17.6, 39.9, 67.9, 98.3, 112.2, 69.7, 80.6, 91.1, 796],
                    [240, 243, 20.5, 60.7, 19.9, 41.7, 69.0, 99.8, 113.0, 71.2, 81.6, 91.6, 826],
                    [250, 252, 22.4, 61.7, 22.1, 43.3, 70.0, (101.2), 113.8, (72.5), (82.6), 92.0, null],
                    [260, 262, 24.3, 62.6, 24.2, 44.9, 71.0, (102.5), 114.6, (73.7), (83.5), 92.4, null],
                    [270, 271, 26.0, 63.5, 26.2, 46.4, 72.0, (103.7), (115.3), (74.9), (84.3), 92.7, null],
                    [280, 280, 27.7, 64.3, 28.1, 47.9, 72.9, (104.9), (116.0), (75.9), (85.1), 93.0, null],
                    [290, 289, 29.2, 65.1, 29.9, 49.2, 73.7, (106.0), (116.6), (76.9), (85.8), (93.3), null],
                    [300, 298, 30.8, 65.8, 31.6, 50.6, 74.6, (107.0), (117.2), (77.9), (86.5), (93.6), null],
                    [310, 307, 32.2, 66.6, 33.6, 51.8, 75.4, (108.0), (117.8), (78.8), (87.1), (93.9), null],
                    [320, 316, 33.6, 67.2, 35.0, 53.0, 76.1, (108.9), (118.4), (79.6), (87.8), (94.1), null]
                ];

const hardnessB3 = [[580, 572, 54.0, 78.1, 59.5, 71.4, 87.2],
                  [590, 576, 54.4, 78.4, 59.6, 71.9, 87.4],
                  [600, 580, 54.8, 78.6, 59.9, 72.3, 87.6],
                  [610, 585, 55.2, 78.8, 60.2, 72.8, 87.8],
                  [620, 591, 55.6, 79.1, 60.5, 73.2, 88.0],
                  [630, 597, 56.1, 79.3, 60.9, 73.6, 88.2],
                  [640, 604, 56.5, 79.6, 61.4, 74.1, 88.4],
                  [650, 611, 56.9, 79.8, 61.8, 74.5, 88.7],
                  [660, 619, 57.4, 80.1, 62.4, 75.0, 88.9],
                  [670, 627, 57.8, 80.3, 63.0, 75.4, 89.1],
                  [680, 636, 58.3, 80.6, 63.6, 75.8, 89.4],
                  [690, 646, 58.7, 80.9, 64.2, 76.2, 89.6],
                  [700, 656, 59.2, 81.1, 64.9, 76.7, 89.8],
                  [710, 666, 59.7, 81.4, 65.6, 77.1, 90.1],
                  [720, 677, 60.1, 81.7, 66.4, 77.5, 90.3]];

const hardnessC = [[210, 212, 205, null, null, null, null, null, 95.6, (110.7), 66.9, 78.0, 90.2],
                   [220, 222, 215, (18.8), 59.4, (16.4), (38.8), (67.0), 97.2, (111.6), 68.6, 79.1, 90.7],
                   [230, 232, 225, 20.6, 60.3, (18.7), (40.5), (68.2), 98.6, (112.5), 70.2, 80.1, 91.2],
                   [240, 242, 235, 22.2, 61.2, 20.9, 42.2, (69.3), 100.0, (113.3), 71.6, 81.0, 91.7],
                   [250, 252, 245, 23.9, 62.1, 23.0, 43.8, 70.3, (101.4), (114.0), (72.9), 81.9, 92.1],
                   [260, 262, 255, 25.4, 62.8, 24.9, 45.3, 71.3, (102.6), (114.7), 74.1, (82.7), 92.5],
                   [270, 272, 265, 26.9, 63.6, 26.8, 46.8, 72.2, (103.7), (115.3), 75.2, (83.5), 92.9],
                   [280, 282, 275, 28.3, 64.4, 28.6, 48.2, 73.1, (104.7), (115.9), (76.3), (84.2), (93.3)],
                   [290, 293, 285, 29.7, 65.1, 30.2, 49.5, 73.9, (105.6), (116.4), (77.3), (84.8), (93.6)],
                   [300, 303, 295, 31.0, 65.8, 31.9, 50.7, 74.7, (106.5), (116.9), (78.2), (85.5), (93.9)],
                   [310, 313, 304, 32.3, 66.4, 33.4, 51.9, 75.4, (107.3), (117.4), (79.1), (86.0), (94.2)],
                   [320, 323, 314, 33.5, 67.1, 34.9, 53.0, 76.1, (108.1), (117.8), (79.9), (86.6), (94.5)],
                   [330, 333, 324, 34.6, 67.7, 36.3, 54.1, 76.8, (108.8), (118.2), (80.6), (87.1), (94.8)],
                   [340, 343, 334, 35.8, 68.3, 37.6, 55.2, 77.4, (109.5), (118.6), (81.4), (87.6), (95.0)],
                   [350, 353, 344, 36.8, 68.8, 39.0, 56.2, 78.0, null, null, null, null, null],
                   [360, 363, 354, 37.9, 69.4, 40.2, 57.2, 78.6, null, null, null, null, null],
                   [370, 373, 363, 38.9, 69.9, 41.4, 58.1, 79.2, null, null, null, null, null],
                   [380, 383, 373, 39.9, 70.4, 42.6, 59.0, 79.7, null, null, null, null, null],
                   [390, 393, 383, 40.8, 71.0, 43.7, 59.9, 80.2, null, null, null, null, null],
                   [400, 404, 392, 41.7, 71.4, 44.8, 60.7, 80.7, null, null, null, null, null],
                   [410, 414, 402, 42.6, 71.9, 45.8, 61.5, 81.2, null, null, null, null, null],
                   [420, 424, 412, 43.5, 72.4, 46.9, 62.3, 81.6, null, null, null, null, null],
                   [430, 434, 422, 44.3, 72.8, 47.8, 63.1, 82.1, null, null, null, null, null],
                   [440, 444, 431, 45.1, 73.3, 48.8, 63.8, 82.5, null, null, null, null, null],
                   [450, 454, 441, 45.9, 73.7, 49.7, 64.5, 82.9, null, null, null, null, null],
                   [460, 464, 450, 46.7, 74.1, 50.5, 65.2, 83.3, null, null, null, null, null],
                   [470, 474, 460, 47.4, 74.5, 51.4, 65.8, 83.7, null, null, null, null, null],
                   [480, 484, 469, 48.2, 74.9, 52.2, 66.5, 84.0, null, null, null, null, null],
                   [490, 494, 479, 48.9, 75.3, 53.1, 67.1, 84.4, null, null, null, null, null],
                   [500, 505, 488, 49.5, 75.6, 53.9, 67.7, 84.7, null, null, null, null, null],
                   [510, 515, 498, 50.2, 76.0, 54.6, 68.3, 85.1, null, null, null, null, null],
                   [520, 525, 507, 50.9, 76.4, 55.4, 68.9, 85.4, null, null, null, null, null],
                   [530, 535, 517, 51.6, 76.7, 56.2, 69.5, 85.7, null, null, null, null, null],
                   [540, 545, 526, 52.1, 77.0, 56.8, 70.0, 86.0, null, null, null, null, null],
                   [550, 555, 535, 52.7, 77.4, 57.6, 70.6, 86.3, null, null, null, null, null],
                   [560, 565, 545, 53.3, 77.7, 58.2, 71.1, 86.6, null, null, null, null, null],
                   [570, 575, 554, 53.9, 78.0, 58.9, 71.6, 86.9, null, null, null, null, null, null, null],
                   [580, 585, 563, 54.5, 78.3, 59.6, 72.1, 87.1, null, null, null, null, null, null, null],
                   [590, 595, 572, 55.0, 78.6, 60.2, 72.6, 87.4, null, null, null, null, null, null, null],
                   [600, 606, 582, 55.6, 78.9, 60.8, 73.0, 87.7, null, null, null, null, null, null, null],
                   [610, 616, 591, 56.1, 79.2, 61.4, 73.5, 87.9, null, null, null, null, null, null, null],
                   [620, 626, 600, 56.6, 79.5, 62.0, 74.0, 88.2, null, null, null, null, null, null, null],
                   [630, 636, null, 57.1, 79.8, 62.6, 74.4, 88.4, null, null, null, null, null, null, null],
                   [640, 646, null, 57.6, 80.0, 63.2, 74.8, 88.6, null, null, null, null, null, null, null],
                   [650, 656, null, 58.1, 80.3, 63.7, 75.3, 88.8, null, null, null, null, null, null, null],
                   [660, 666, null, 58.6, 80.6, 64.3, 75.7, 89.1, null, null, null, null, null, null, null],
                   [670, 676, null, 59.0, 80.8, 64.8, 76.1, 89.3, null, null, null, null, null, null, null],
                   [680, 686, null, 59.5, 81.0, 65.3, 76.5, 89.5, null, null, null, null, null, null, null],
                   [690, 697, null, 59.9, 81.3, 65.8, 76.9, 89.7, null, null, null, null, null, null, null],
                   [700, 707, null, 60.4, 81.5, 66.3, 77.3, 89.9, null, null, null, null, null, null, null],
                   [710, 717, null, 60.8, 81.8, 66.8, 77.7, 90.1, null, null, null, null, null, null, null],
                   [720, 727, null, 61.2, 82.0, 67.3, 78.0, 90.3, null, null, null, null, null, null, null],
                   [730, 737, null, 61.6, 82.2, 67.8, 78.4, 90.5, null, null, null, null, null, null, null],
                   [740, 747, null, 62.0, 82.5, 68.2, 78.8, 90.7, null, null, null, null, null, null, null],
                   [750, 757, null, 62.4, 82.7, 68.7, 79.1, 90.8, null, null, null, null, null, null, null],
                   [760, 767, null, 62.8, 82.9, 69.1, 79.4, 91.0, null, null, null, null, null, null, null],
                   [770, 777, null, 63.2, 83.1, 69.6, 79.8, 91.2, null, null, null, null, null, null, null],
                   [780, 788, null, 63.6, 83.3, 70.0, 80.1, 91.4, null, null, null, null, null, null, null],
                   [790, 798, null, 64.0, 83.5, 70.4, 80.4, 91.5, null, null, null, null, null, null, null],
                   [800, 808, null, 64.4, 83.7, 70.8, 80.8, 91.7, null, null, null, null, null, null, null],
                   [810, 818, null, 64.7, 83.9, 71.3, 81.1, 91.9, null, null, null, null, null, null, null],
                   [820, 828, null, 65.1, 84.1, 71.7, 81.4, 92.0, null, null, null, null, null, null, null],
                   [830, 838, null, 65.4, 84.3, 72.1, 81.7, 92.2, null, null, null, null, null, null, null],
                   [840, 848, null, 65.8, 84.5, 72.4, 82.0, 92.3, null, null, null, null, null, null, null]
               ];

const hardnessD = [[580, 54.2, 77.9, 58.8, 71.7, 87.1],
                    [590, 54.7, 78.2, 59.4, 72.2, 87.4],
                    [600, 55.2, 78.5, 60.0, 72.6, 87.6],
                    [610, 55.7, 78.7, 60.6, 73.1, 87.8],
                    [620, 56.2, 79.0, 61.1, 73.5, 88.1],
                    [630, 56.6, 79.3, 61.7, 74.0, 88.3],
                    [640, 57.1, 79.6, 62.2, 74.4, 88.5],
                    [650, 57.6, 79.8, 62.8, 74.8, 88.7],
                    [660, 58.0, 80.1, 63.3, 75.2, 88.9],
                    [670, 58.5, 80.3, 63.8, 75.6, 89.1],
                    [680, 58.9, 80.6, 64.3, 76.0, 89.3],
                    [690, 59.3, 80.8, 64.8, 76.4, 89.5],
                    [700, 59.7, 81.0, 65.3, 76.7, 89.7],
                    [710, 60.2, 81.3, 65.8, 77.1, 89.9],
                    [720, 60.6, 81.5, 66.3, 77.4, 90.1],
                    [730, 61.0, 81.7, 66.7, 77.8, 90.2],
                    [740, 61.4, 82.0, 67.2, 78.1, 90.4],
                    [750, 61.8, 82.2, 67.6, 78.5, 90.6],
                    [760, 62.1, 82.4, 68.1, 78.8, 90.7],
                    [770, 62.5, 82.6, 68.5, 79.1, 90.9],
                    [780, 62.9, 82.8, 68.9, 79.5, 91.0],
                    [790, 63.3, 83.0, 69.4, 79.8, 91.2],
                    [800, 63.6, 83.2, 69.8, 80.1, 91.3],
                    [810, 64.0, 83.5, 70.2, 80.4, 91.5],
                    [820, 64.3, 83.6, 70.6, 80.7, 91.6],
                    [830, 64.7, 83.8, 71.0, 81.0, 91.8],
                    [840, 65.0, 84.0, 71.4, 81.3, 91.9],
                    [850, 65.4, 84.2, 71.7, 81.6, 92.0],
                    [860, 65.7, 84.4, 72.1, 81.8, 92.2],
                    [870, 66.0, 84.6, 72.5, 82.1, 92.3],
                    [880, 66.3, 84.8, 72.8, 82.4, 92.4],
                    [890, 66.7, 85.0, 73.2, 82.7, 92.5],
                    [900, 67.0, [85.1], 73.6, 82.9, 92.6],
                    [910, 67.3, 85.3, 73.9, 83.2, 92.8],
                    [920, 67.6, 85.5, 74.2, 83.4, 92.9]
    ];
 
const tsA1El = document.getElementById("tsA1");
const hv10A1El = document.getElementById("hv10A1");
const hbA1El = document.getElementById("hbA1");
const hrbA1El = document.getElementById("hrbA1");
const hrfA1El = document.getElementById("hrfA1");
const hrcA1El = document.getElementById("hrcA1");
const hraA1El = document.getElementById("hraA1");
const hrdA1El = document.getElementById("hrdA1");
const hr15NA1El = document.getElementById("hr15NA1");
const hr30NA1El = document.getElementById("hr30NA1");
const hr45NA1El = document.getElementById("hr45NA1");

const hvB1El = document.getElementById("hvB1");
const hbwB1El = document.getElementById("hbwB1");
const hrcB1El = document.getElementById("hrcB1");
const hraB1El = document.getElementById("hraB1");
const hr45NB1El = document.getElementById("hr45NB1");
const hr30NB1El = document.getElementById("hr30NB1");
const hr15NB1El = document.getElementById("hr15NB1");
const hrbB1El = document.getElementById("hrbB1");
const hrfB1El = document.getElementById("hrfB1");
const hr45TB1El = document.getElementById("hr45TB1");
const hr30TB1El = document.getElementById("hr30TB1");
const hr15TB1El = document.getElementById("hr15TB1");
const tsB1El = document.getElementById("tsB1");

const hvB2El = document.getElementById("hvB2");
const hbwB2El = document.getElementById("hbwB2");
const hrcB2El = document.getElementById("hrcB2");
const hraB2El = document.getElementById("hraB2");
const hr45NB2El = document.getElementById("hr45NB2");
const hr30NB2El = document.getElementById("hr30NB2");
const hr15NB2El = document.getElementById("hr15NB2");
const hrbB2El = document.getElementById("hrbB2");
const hrfB2El = document.getElementById("hrfB2");
const hr45TB2El = document.getElementById("hr45TB2");
const hr30TB2El = document.getElementById("hr30TB2");
const hr15TB2El = document.getElementById("hr15TB2");
const tsB2El = document.getElementById("tsB2");

const hvB3El = document.getElementById("hvB3");
const hbwB3El = document.getElementById("hbwB3");
const hrcB3El = document.getElementById("hrcB3");
const hraB3El = document.getElementById("hraB3");
const hr45NB3El = document.getElementById("hr45NB3");
const hr30NB3El = document.getElementById("hr30NB3");
const hr15NB3El = document.getElementById("hr15NB3");

const hvCEl = document.getElementById("hvC");
const hv5CEl = document.getElementById("hv5C");
const hbCEl = document.getElementById("hbC");
const hrcCEl = document.getElementById("hrcC");
const hraCEl = document.getElementById("hraC");
const hr45NCEl = document.getElementById("hr45NC");
const hr30NCEl = document.getElementById("hr30NC");
const hr15NCEl = document.getElementById("hr15NC");
const hrbCEl = document.getElementById("hrbC");
const hrfCEl = document.getElementById("hrfC");
const hr45TCEl = document.getElementById("hr45TC");
const hr30TCEl = document.getElementById("hr30TC");
const hr15TCEl = document.getElementById("hr15TC");

const hvDEl = document.getElementById("hvD");
const hrcDEl = document.getElementById("hrcD");
const hraDEl = document.getElementById("hraD");
const hr45NDEl = document.getElementById("hr45ND");
const hr30NDEl = document.getElementById("hr30ND");
const hr15NDEl = document.getElementById("hr15ND");

function computeValues(r) {
    tsA1El.value = hardnessA1[r][0];
    hv10A1El.value = hardnessA1[r][1];
    hbA1El.value = hardnessA1[r][2];
    hrbA1El.value = hardnessA1[r][3];
    hrfA1El.value = hardnessA1[r][4];
    hrcA1El.value = hardnessA1[r][5];
    hraA1El.value = hardnessA1[r][6];
    hrdA1El.value = hardnessA1[r][7];
    hr15NA1El.value = hardnessA1[r][8];
    hr30NA1El.value = hardnessA1[r][9];
    hr45NA1El.value = hardnessA1[r][10];
}

function computeValues2(r) {    
    hvB1El.value = hardnessB1[r][0];
    hbwB1El.value = hardnessB1[r][1];
    hrcB1El.value = hardnessB1[r][2];
    hraB1El.value = hardnessB1[r][3];
    hr45NB1El.value = hardnessB1[r][4];
    hr30NB1El.value = hardnessB1[r][5];
    hr15NB1El.value = hardnessB1[r][6];
    hrbB1El.value = hardnessB1[r][7];
    hrfB1El.value = hardnessB1[r][8];
    hr45TB1El.value = hardnessB1[r][9];
    hr30TB1El.value = hardnessB1[r][10];
    hr15TB1El.value = hardnessB1[r][11];
    tsB1El.value = hardnessB1[r][12];
}

function computeValues3(r) {    
    hvB2El.value = hardnessB2[r][0];
    hbwB2El.value = hardnessB2[r][1];
    hrcB2El.value = hardnessB2[r][2];
    hraB2El.value = hardnessB2[r][3];
    hr45NB2El.value = hardnessB2[r][4];
    hr30NB2El.value = hardnessB2[r][5];
    hr15NB2El.value = hardnessB2[r][6];
    hrbB2El.value = hardnessB2[r][7];
    hrfB2El.value = hardnessB2[r][8];
    hr45TB2El.value = hardnessB2[r][9];
    hr30TB2El.value = hardnessB2[r][10];
    hr15TB2El.value = hardnessB2[r][11];
    tsB2El.value = hardnessB2[r][12];
}

function computeValues4(r) {    
    hvB3El.value = hardnessB3[r][0];
    hbwB3El.value = hardnessB3[r][1];
    hrcB3El.value = hardnessB3[r][2];
    hraB3El.value = hardnessB3[r][3];
    hr45NB3El.value = hardnessB3[r][4];
    hr30NB3El.value = hardnessB3[r][5];
    hr15NB3El.value = hardnessB3[r][6];
}

function computeValues5(r) {    
    hvCEl.value = hardnessC[r][0];
    hv5CEl.value = hardnessC[r][1];
    hbCEl.value = hardnessC[r][2];
    hrcCEl.value = hardnessC[r][3];
    hraCEl.value = hardnessC[r][4];
    hr45NCEl.value = hardnessC[r][5];
    hr30NCEl.value = hardnessC[r][6];
    hr15NCEl.value = hardnessC[r][7];
    hrbCEl.value = hardnessC[r][8];
    hrfCEl.value = hardnessC[r][9];
    hr45TCEl.value = hardnessC[r][10];
    hr30TCEl.value = hardnessC[r][11];
    hr15TCEl.value = hardnessC[r][12];
}

function computeValues6(r) {    
    hvDEl.value = hardnessD[r][0];
    hrcDEl.value = hardnessD[r][1];
    hraDEl.value = hardnessD[r][2];
    hr45NDEl.value = hardnessD[r][3];
    hr30NDEl.value = hardnessD[r][4];
    hr15NDEl.value = hardnessD[r][5];
    }
    
function computeHard(event) {
    const currentValue = +event.target.value;    
    switch (event.target.name) {
        case "tsA1":
            for (let i=0; currentValue>=hardnessA1[i][0] && !(i>0 && hardnessA1[i-1][0]>0 && hardnessA1[i][0]===null) 
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][0] === null && (hardnessA1[i+2][0] >= hardnessA1[i+1][0])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }
            }
            if (currentValue<hardnessA1[0][0]) {
                    computeValues(0);
                }
            break;
        case "hv10A1":
            for (let i=0; currentValue>=hardnessA1[i][1] && !(i>0 && hardnessA1[i-1][1]>0 && hardnessA1[i][1]===null) 
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][1] === null && (hardnessA1[i+2][1] >= hardnessA1[i+1][1])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][1]) {
                    computeValues(0);
                }
            break;
        case "hbA1":
            for (let i=0; currentValue>=hardnessA1[i][2] && !(i>0 && hardnessA1[i-1][2]>0 && hardnessA1[i][2]===null) 
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[0][2] === null && (hardnessA1[i+2][2] >= hardnessA1[i+1][2])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }
            }
            if (currentValue<hardnessA1[0][2]) {
                    computeValues(0);
                }
            break;
        case "hrbA1":
            for (let i=0; currentValue>=hardnessA1[i][3] && !(i>0 && hardnessA1[i-1][3]>0 && hardnessA1[i][3]===null) 
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][3] === null && (hardnessA1[i+2][3] >= hardnessA1[i+1][3])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][3]) {
                    computeValues(0);
                }
            break;
        case "hrfA1":
            for (let i=0; currentValue>=hardnessA1[i][4] && !(i>0 && hardnessA1[i-1][4]>0 && hardnessA1[i][4]===null)
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][4] === null && (hardnessA1[i+2][4] >= hardnessA1[i+1][4])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][4]) {
                    computeValues(0);
                }
            break;
        case "hrcA1":
            for (let i=0; currentValue>=hardnessA1[i][5] && !(i>0 && hardnessA1[i-1][5]>0 && hardnessA1[i][5]===null) 
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][5] === null && (hardnessA1[i+2][5] >= hardnessA1[i+1][5])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][5]) {
                    computeValues(0);
                }
            break;
        case "hraA1":
            for (let i=0; currentValue>=hardnessA1[i][6] && !(i>0 && hardnessA1[i-1][6]>0 && hardnessA1[i][6]===null)
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][6] === null && (hardnessA1[i+2][6] >= hardnessA1[i+1][6])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][6]) {
                    computeValues(0);
                }
            break;
        case "hrdA1":
            for (let i=0; currentValue>=hardnessA1[i][7] && !(i>0 && hardnessA1[i-1][7]>0 && hardnessA1[i][7]===null)
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][7] === null && (hardnessA1[i+2][7] >= hardnessA1[i+1][7])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][7]) {
                    computeValues(0);
                }
            break;
        case "hr15NA1":
            for (let i=0; currentValue>=hardnessA1[i][8] && !(i>0 && hardnessA1[i-1][8]>0 && hardnessA1[i][8]===null)
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][8] === null && (hardnessA1[i+2][8] >= hardnessA1[i+1][8])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][8]) {
                    computeValues(0);
                }
            break;
        case "hr30NA1":
            for (let i=0; currentValue>=hardnessA1[i][9] && !(i>0 && hardnessA1[i-1][9]>0 && hardnessA1[i][9]===null)
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][9] === null && (hardnessA1[i+2][9] >= hardnessA1[i+1][9])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][9]) {
                    computeValues(0);
                }
            break;
        case "hr45NA1":
            for (let i=0; currentValue>=hardnessA1[i][10] && !(i>0 && hardnessA1[i-1][10]>0 && hardnessA1[i][10]===null)
                    && i<hardnessA1.length; i++) {
                if (hardnessA1[i][10] === null && (hardnessA1[i+2][10] >= hardnessA1[i+1][10])) {
                    computeValues(i+1);
                } else {
                    computeValues(i);
                }  
            }
            if (currentValue<hardnessA1[0][10]) {
                    computeValues(0);
                }      
            break;
            
        case "hvB1":
            for (let i=0; currentValue>=hardnessB1[i][0] && !(i>0 && hardnessB1[i-1][0]>0 && hardnessB1[i][0]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][0] === null && (hardnessB1[i+2][0] >= hardnessB1[i+1][0])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }            
            }
            if (currentValue<hardnessB1[0][0]) {
                    computeValues2(0);
                }
            break;
        case "hbwB1":
            for (let i=0; currentValue>=hardnessB1[i][1] && !(i>0 && hardnessB1[i-1][1]>0 && hardnessB1[i][1]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][1] === null && (hardnessB1[i+2][1] >= hardnessB1[i+1][1])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][1]) {
                    computeValues2(0);
                }
            break;
        case "hrcB1":
            for (let i=0; currentValue>=hardnessB1[i][2] && !(i>0 && hardnessB1[i-1][2]>0 && hardnessB1[i][2]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][2] === null && (hardnessB1[i+2][2] >= hardnessB1[i+1][2])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][2]) {
                    computeValues2(0);
                }
            break;
        case "hraB1":
            for (let i=0; currentValue>=hardnessB1[i][3] && !(i>0 && hardnessB1[i-1][3]>0 && hardnessB1[i][3]===null)
                 && i<hardnessB1.length; i++) {
                if (hardnessB1[i][3] === null && (hardnessB1[i+2][3] >= hardnessB1[i+1][3])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][3]) {
                    computeValues2(0);
                }
            break;
        case "hr45NB1":
            for (let i=0; currentValue>=hardnessB1[i][4] && !(i>0 && hardnessB1[i-1][4]>0 && hardnessB1[i][4]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][4] === null && (hardnessB1[i+2][4] >= hardnessB1[i+1][4])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][4]) {
                    computeValues2(0);
                }
            break;
        case "hr30NB1":
            for (let i=0; currentValue>=hardnessB1[i][5] && !(i>0 && hardnessB1[i-1][5]>0 && hardnessB1[i][5]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][5] === null && (hardnessB1[i+2][5] >= hardnessB1[i+1][5])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][5]) {
                    computeValues2(0);
                }
            break;
        case "hr15NB1":
            for (let i=0; currentValue>=hardnessB1[i][6] && !(i>0 && hardnessB1[i-1][6]>0 && hardnessB1[i][6]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][6] === null && (hardnessB1[i+2][6] >= hardnessB1[i+1][6])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][6]) {
                    computeValues2(0);
                }
            break;
        case "hrbB1":
            for (let i=0; currentValue>=hardnessB1[i][7] && !(i>0 && hardnessB1[i-1][7]>0 && hardnessB1[i][7]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][7] === null && (hardnessB1[i+2][7] >= hardnessB1[i+1][7])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][7]) {
                    computeValues2(0);
                }
            break;
        case "hrfB1":
            for (let i=0; currentValue>=hardnessB1[i][8] && !(i>0 && hardnessB1[i-1][8]>0 && hardnessB1[i][8]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][8] === null && (hardnessB1[i+2][8] >= hardnessB1[i+1][8])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][8]) {
                    computeValues2(0);
                }
            break;
        case "hr45TB1":
            for (let i=0; currentValue>=hardnessB1[i][9] && !(i>0 && hardnessB1[i-1][9]>0 && hardnessB1[i][9]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][9] === null && (hardnessB1[i+2][9] >= hardnessB1[i+1][9])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][9]) {
                    computeValues2(0);
                }
            break;
        case "hr30TB1":
            for (let i=0; currentValue>=hardnessB1[i][10] && !(i>0 && hardnessB1[i-1][10]>0 && hardnessB1[i][10]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][10] === null && (hardnessB1[i+2][10] >= hardnessB1[i+1][10])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][10]) {
                    computeValues2(0);
                }
            break;
        case "hr15TB1":
            for (let i=0; currentValue>=hardnessB1[i][11] && !(i>0 && hardnessB1[i-1][11]>0 && hardnessB1[i][11]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][11] === null && (hardnessB1[i+2][11] >= hardnessB1[i+1][11])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][11]) {
                    computeValues2(0);
                }
            break;
        case "tsB1":
            for (let i=0; currentValue>=hardnessB1[i][12] && !(i>0 && hardnessB1[i-1][12]>0 && hardnessB1[i][12]===null)
                    && i<hardnessB1.length; i++) {
                if (hardnessB1[i][12] === null && (hardnessB1[i+2][12] >= hardnessB1[i+1][12])) {
                    computeValues2(i+1);
                } else {
                    computeValues2(i);
                }  
            }
            if (currentValue<hardnessB1[0][12]) {
                    computeValues2(0);
                }
            break;
            
        case "hvB2":
            for (let i=0; currentValue>=hardnessB2[i][0] && !(i>0 && hardnessB2[i-1][0]>0 && hardnessB2[i][0]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][0] === null && (hardnessB2[i+2][0] >= hardnessB2[i+1][0])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }            
            }
            if (currentValue<hardnessB2[0][0]) {
                    computeValues3(0);
                }
            break;
        case "hbwB2":
            for (let i=0; currentValue>=hardnessB2[i][1] && !(i>0 && hardnessB2[i-1][1]>0 && hardnessB2[i][1]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][1] === null && (hardnessB2[i+2][1] >= hardnessB2[i+1][1])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][1]) {
                    computeValues3(0);
                }
            break;
        case "hrcB2":
            for (let i=0; currentValue>=hardnessB2[i][2] && !(i>0 && hardnessB2[i-1][2]>0 && hardnessB2[i][2]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][2] === null && (hardnessB2[i+2][2] >= hardnessB2[i+1][2])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][2]) {
                    computeValues3(0);
                }
            break;
        case "hraB2":
            for (let i=0; currentValue>=hardnessB2[i][3] && !(i>0 && hardnessB2[i-1][3]>0 && hardnessB2[i][3]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][3] === null && (hardnessB2[i+2][3] >= hardnessB2[i+1][3])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][3]) {
                    computeValues3(0);
                }
            break;
        case "hr45NB2":
            for (let i=0; currentValue>=hardnessB2[i][4] && !(i>0 && hardnessB2[i-1][4]>0 && hardnessB2[i][4]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][4] === null && (hardnessB2[i+2][4] >= hardnessB2[i+1][4])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][4]) {
                    computeValues3(0);
                }
            break;
        case "hr30NB2":
            for (let i=0; currentValue>=hardnessB2[i][5] && !(i>0 && hardnessB2[i-1][5]>0 && hardnessB2[i][5]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][5] === null && (hardnessB2[i+2][5] >= hardnessB2[i+1][5])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][5]) {
                    computeValues3(0);
                }
            break;
        case "hr15NB2":
            for (let i=0; currentValue>=hardnessB2[i][6] && !(i>0 && hardnessB2[i-1][6]>0 && hardnessB2[i][6]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][6] === null && (hardnessB2[i+2][6] >= hardnessB2[i+1][6])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][6]) {
                    computeValues3(0);
                }
            break;
        case "hrbB2":
            for (let i=0; currentValue>=hardnessB2[i][7] && !(i>0 && hardnessB2[i-1][7]>0 && hardnessB2[i][7]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][7] === null && (hardnessB2[i+2][7] >= hardnessB2[i+1][7])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][7]) {
                    computeValues3(0);
                }
            break;
        case "hrfB2":
            for (let i=0; currentValue>=hardnessB2[i][8] && !(i>0 && hardnessB2[i-1][8]>0 && hardnessB2[i][8]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][8] === null && (hardnessB2[i+2][8] >= hardnessB2[i+1][8])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][8]) {
                    computeValues3(0);
                }
            break;
        case "hr45TB2":
            for (let i=0; currentValue>=hardnessB2[i][9] && !(i>0 && hardnessB2[i-1][9]>0 && hardnessB2[i][9]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][9] === null && (hardnessB2[i+2][9] >= hardnessB2[i+1][9])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][9]) {
                    computeValues3(0);
                }
            break;
        case "hr30TB2":
            for (let i=0; currentValue>=hardnessB2[i][10] && !(i>0 && hardnessB2[i-1][10]>0 && hardnessB2[i][10]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][10] === null && (hardnessB2[i+2][10] >= hardnessB2[i+1][10])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][10]) {
                    computeValues3(0);
                }
            break;
        case "hr15TB2":
            for (let i=0; currentValue>=hardnessB2[i][11] && !(i>0 && hardnessB2[i-1][11]>0 && hardnessB2[i][11]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][11] === null && (hardnessB2[i+2][11] >= hardnessB2[i+1][11])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][11]) {
                    computeValues3(0);
                }
            break;
        case "tsB2":
            for (let i=0; currentValue>=hardnessB2[i][12] && !(i>0 && hardnessB2[i-1][12]>0 && hardnessB2[i][12]===null)
                    && i<hardnessB2.length; i++) {
                if (hardnessB2[i][12] === null && (hardnessB2[i+2][12] >= hardnessB2[i+1][12])) {
                    computeValues3(i+1);
                } else {
                    computeValues3(i);
                }  
            }
            if (currentValue<hardnessB2[0][12]) {
                    computeValues3(0);
                }
            break;
            
        case "hvB3":
            for (let i=0; currentValue>=hardnessB3[i][0] && !(i>0 && hardnessB3[i-1][0]>0 && hardnessB3[i][0]===null)
                    && i<hardnessB3.length; i++) {
                if (hardnessB3[i][0] === null && (hardnessB3[i+2][0] >= hardnessB3[i+1][0])) {
                    computeValues4(i+1);
                } else {
                    computeValues4(i);
                }            
            }
            if (currentValue<hardnessB3[0][0]) {
                    computeValues4(0);
                }
            break;
        case "hbwB3":
            for (let i=0; currentValue>=hardnessB3[i][1] && !(i>0 && hardnessB3[i-1][1]>0 && hardnessB3[i][1]===null)
                    && i<hardnessB3.length; i++) {
                if (hardnessB3[i][1] === null && (hardnessB3[i+2][1] >= hardnessB3[i+1][1])) {
                    computeValues4(i+1);
                } else {
                    computeValues4(i);
                }  
            }
            if (currentValue<hardnessB3[0][1]) {
                    computeValues4(0);
                }
            break;
        case "hrcB3":
            for (let i=0; currentValue>=hardnessB3[i][2] && !(i>0 && hardnessB3[i-1][2]>0 && hardnessB3[i][2]===null)
                    && i<hardnessB3.length; i++) {
                if (hardnessB3[i][2] === null && (hardnessB3[i+2][2] >= hardnessB3[i+1][2])) {
                    computeValues4(i+1);
                } else {
                    computeValues4(i);
                }  
            }
            if (currentValue<hardnessB3[0][2]) {
                    computeValues4(0);
                }
            break;
        case "hraB3":
            for (let i=0; currentValue>=hardnessB3[i][3] && !(i>0 && hardnessB3[i-1][3]>0 && hardnessB3[i][3]===null)
                    && i<hardnessB3.length; i++) {
                if (hardnessB3[i][3] === null && (hardnessB3[i+2][3] >= hardnessB3[i+1][3])) {
                    computeValues4(i+1);
                } else {
                    computeValues4(i);
                }  
            }
            if (currentValue<hardnessB3[0][3]) {
                    computeValues4(0);
                }
            break;
        case "hr45NB3":
            for (let i=0; currentValue>=hardnessB3[i][4] && !(i>0 && hardnessB3[i-1][4]>0 && hardnessB3[i][4]===null)
                    && i<hardnessB3.length; i++) {
                if (hardnessB3[i][4] === null && (hardnessB3[i+2][4] >= hardnessB3[i+1][4])) {
                    computeValues4(i+1);
                } else {
                    computeValues4(i);
                }  
            }
            if (currentValue<hardnessB3[0][4]) {
                    computeValues4(0);
                }
            break;
        case "hr30NB3":
            for (let i=0; currentValue>=hardnessB3[i][5] && !(i>0 && hardnessB3[i-1][5]>0 && hardnessB3[i][5]===null)
                    && i<hardnessB3.length; i++) {
                if (hardnessB3[i][5] === null && (hardnessB3[i+2][5] >= hardnessB3[i+1][5])) {
                    computeValues4(i+1);
                } else {
                    computeValues4(i);
                }  
            }
            if (currentValue<hardnessB3[0][5]) {
                    computeValues4(0);
                }
            break;
        case "hr15NB3":
            for (let i=0; currentValue>=hardnessB3[i][6] && !(i>0 && hardnessB3[i-1][6]>0 && hardnessB3[i][6]===null)
                    && i<hardnessB3.length; i++) {
                if (hardnessB3[i][6] === null && (hardnessB3[i+2][6] >= hardnessB3[i+1][6])) {
                    computeValues4(i+1);
                } else {
                    computeValues4(i);
                }  
            }
            if (currentValue<hardnessB3[0][6]) {
                    computeValues4(0);
                }
            break;
            
        case "hvC":
            for (let i=0; currentValue>=hardnessC[i][0] && !(i>0 && hardnessC[i-1][0]>0 && hardnessC[i][0]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][0] === null && (hardnessC[i+2][0] >= hardnessC[i+1][0])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }            
            }
            if (currentValue<hardnessC[0][0]) {
                    computeValues5(0);
                }
            break;
        case "hv5C":
            for (let i=0; currentValue>=hardnessC[i][1] && !(i>0 && hardnessC[i-1][1]>0 && hardnessC[i][1]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][1] === null && (hardnessC[i+2][1] >= hardnessC[i+1][1])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }            
            }
            if (currentValue<hardnessC[0][1]) {
                    computeValues5(0);
                }
            break;    
        case "hbC":
            for (let i=0; currentValue>=hardnessC[i][2] && !(i>0 && hardnessC[i-1][2]>0 && hardnessC[i][2]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][2] === null && (hardnessC[i+2][2] >= hardnessC[i+1][2])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][2]) {
                    computeValues5(0);
                }
            break;
        case "hrcC":
            for (let i=0; currentValue>=hardnessC[i][3] && !(i>0 && hardnessC[i-1][3]>0 && hardnessC[i][3]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][3] === null && (hardnessC[i+2][3] >= hardnessC[i+1][3])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][3]) {
                    computeValues5(0);
                }
            break;
        case "hraC":
            for (let i=0; currentValue>=hardnessC[i][4] && !(i>0 && hardnessC[i-1][4]>0 && hardnessC[i][4]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][4] === null && (hardnessC[i+2][4] >= hardnessC[i+1][4])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][4]) {
                    computeValues5(0);
                }
            break;
        case "hr45NC":
            for (let i=0; currentValue>=hardnessC[i][5] && !(i>0 && hardnessC[i-1][5]>0 && hardnessC[i][5]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][5] === null && (hardnessC[i+2][5] >= hardnessC[i+1][5])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][5]) {
                    computeValues5(0);
                }
            break;
        case "hr30NC":
            for (let i=0; currentValue>=hardnessC[i][6] && !(i>0 && hardnessC[i-1][6]>0 && hardnessC[i][6]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][6] === null && (hardnessC[i+2][6] >= hardnessC[i+1][6])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][6]) {
                    computeValues5(0);
                }
            break;
        case "hr15NC":
            for (let i=0; currentValue>=hardnessC[i][7] && !(i>0 && hardnessC[i-1][7]>0 && hardnessC[i][7]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][7] === null && (hardnessC[i+2][7] >= hardnessC[i+1][7])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][7]) {
                    computeValues5(0);
                }
            break;
        case "hrbC":
            for (let i=0; currentValue>=hardnessC[i][8] && !(i>0 && hardnessC[i-1][8]>0 && hardnessC[i][8]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][8] === null && (hardnessC[i+2][8] >= hardnessC[i+1][8])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][8]) {
                    computeValues5(0);
                }
            break;
        case "hrfC":
            for (let i=0; currentValue>=hardnessC[i][9] && !(i>0 && hardnessC[i-1][9]>0 && hardnessC[i][9]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][9] === null && (hardnessC[i+2][9] >= hardnessC[i+1][9])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][9]) {
                    computeValues5(0);
                }
            break;
        case "hr45TC":
            for (let i=0; currentValue>=hardnessC[i][10] && !(i>0 && hardnessC[i-1][10]>0 && hardnessC[i][10]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][10] === null && (hardnessC[i+2][10] >= hardnessC[i+1][10])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][10]) {
                    computeValues5(0);
                }
            break;
        case "hr30TC":
            for (let i=0; currentValue>=hardnessC[i][11] && !(i>0 && hardnessC[i-1][11]>0 && hardnessC[i][11]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][11] === null && (hardnessC[i+2][11] >= hardnessC[i+1][11])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][11]) {
                    computeValues5(0);
                }
            break;
        case "hr15TC":
            for (let i=0; currentValue>=hardnessC[i][12] && !(i>0 && hardnessC[i-1][12]>0 && hardnessC[i][12]===null)
                    && i<hardnessC.length; i++) {
                if (hardnessC[i][12] === null && (hardnessC[i+2][12] >= hardnessC[i+1][12])) {
                    computeValues5(i+1);
                } else {
                    computeValues5(i);
                }  
            }
            if (currentValue<hardnessC[0][12]) {
                    computeValues5(0);
                }
            break;
        
        case "hvD":
            for (let i=0; currentValue>=hardnessD[i][0] && !(i>0 && hardnessD[i-1][0]>0 && hardnessD[i][0]===null)
                    && i<hardnessD.length; i++) {
                if (hardnessD[i][0] === null && (hardnessD[i+2][0] >= hardnessD[i+1][0])) {
                    computeValues6(i+1);
                } else {
                    computeValues6(i);
                }            
            }
            if (currentValue<hardnessD[0][0]) {
                    computeValues6(0);
                }
            break;
        case "hrcD":
            for (let i=0; currentValue>=hardnessD[i][1] && !(i>0 && hardnessD[i-1][1]>0 && hardnessD[i][1]===null)
                    && i<hardnessD.length; i++) {
                if (hardnessD[i][1] === null && (hardnessD[i+2][1] >= hardnessD[i+1][1])) {
                    computeValues6(i+1);
                } else {
                    computeValues6(i);
                }  
            }
            if (currentValue<hardnessD[0][1]) {
                    computeValues6(0);
                }
            break;
        case "hraD":
            for (let i=0; currentValue>=hardnessD[i][2] && !(i>0 && hardnessD[i-1][2]>0 && hardnessD[i][2]===null)
                    && i<hardnessD.length; i++) {
                if (hardnessD[i][2] === null && (hardnessD[i+2][2] >= hardnessD[i+1][2])) {
                    computeValues6(i+1);
                } else {
                    computeValues6(i);
                }  
            }
            if (currentValue<hardnessD[0][2]) {
                    computeValues6(0);
                }
            break;
        case "hr45ND":
            for (let i=0; currentValue>=hardnessD[i][3] && !(i>0 && hardnessD[i-1][3]>0 && hardnessD[i][3]===null)
                    && i<hardnessD.length; i++) {
                if (hardnessD[i][3] === null && (hardnessD[i+2][3] >= hardnessD[i+1][3])) {
                    computeValues6(i+1);
                } else {
                    computeValues6(i);
                }  
            }
            if (currentValue<hardnessD[0][3]) {
                    computeValues6(0);
                }
            break;
        case "hr30ND":
            for (let i=0; currentValue>=hardnessD[i][4] && !(i>0 && hardnessD[i-1][4]>0 && hardnessD[i][4]===null)
                    && i<hardnessD.length; i++) {
                if (hardnessD[i][4] === null && (hardnessD[i+2][4] >= hardnessD[i+1][4])) {
                    computeValues6(i+1);
                } else {
                    computeValues6(i);
                }  
            }
            if (currentValue<hardnessD[0][4]) {
                    computeValues6(0);
                }
            break;
        case "hr15ND":
            for (let i=0; currentValue>=hardnessD[i][5] && !(i>0 && hardnessD[i-1][5]>0 && hardnessD[i][5]===null)
                    && i<hardnessD.length; i++) {
                if (hardnessD[i][5] === null && (hardnessD[i+2][5] >= hardnessD[i+1][5])) {
                    computeValues6(i+1);
                } else {
                    computeValues6(i);
                }  
            }
            if (currentValue<hardnessD[0][5]) {
                    computeValues6(0);
                }
            break;
        default:
            break;
    }    
}   

// Get the visit count from localStorage
let visitCount = localStorage.getItem('page_view');

// Check if visitCount is null (first visit)
if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = Number(visitCount) + 1;
}

// Update the visit count in localStorage
localStorage.setItem('page_view', visitCount);

// Display the visit count on the page
document.getElementById('visit-count').textContent = visitCount;

