ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [45, 9.2],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Создаем многоугольник, используя класс GeoObject.

    // Добавляем многоугольник на карту.

    // Создаем многоугольник, используя вспомогательный класс Polygon.
    myMap.geoObjects
       .add(new ymaps.Placemark([45.430579, 9.17634], {
            balloonContent: 'цвет <strong>sensor 1</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b7'
        }))
.add(new ymaps.Placemark([45.443972, 9.171479], {
            balloonContent: 'цвет <strong>dirty sensor 2</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#CD5C5C'
        }))
.add(new ymaps.Placemark([45.463171, 9.195995], {
            balloonContent: 'цвет <strong>sensor 3</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#FFFFFF'
        }))
.add(new ymaps.Placemark([45.47078, 9.19718], {
            balloonContent: 'цвет <strong>sensor 4</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#FFFFFF'
        }))
.add(new ymaps.Placemark([45.476089, 9.143509], {
            balloonContent: 'цвет <strong>sensor 5</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#CD5C5C'
        }))
.add(new ymaps.Placemark([45.478452, 9.235016], {
            balloonContent: 'цвет <strong>sensor 6</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#FFFFFF'
        }))
.add(new ymaps.Placemark([45.491645, 9.24671], {
            balloonContent: 'цвет <strong>dirty sensor 7</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#CD5C5C'
        }))
.add(new ymaps.Placemark([45.496067, 9.193023], {
            balloonContent: 'цвет <strong>sensor 8</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    
     var myPolygon3 = new ymaps.Polygon([
            [
                [45.4369493744789, 9.164740432366806],
                [45.4369450016625, 9.167744998619014],
                [45.434829720011386, 9.167738731648283],
                [45.43483409250707, 9.164734277645735],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon3);
 var myPolygon4 = new ymaps.Polygon([
            [
                [45.43902745753945, 9.188783995691704],
                [45.4390224521096, 9.191788668286497],
                [45.43690717402068, 9.19178150252608],
                [45.436912179083386, 9.188776942192607],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon4);
 var myPolygon5 = new ymaps.Polygon([
            [
                [45.439001640027314, 9.203807350580323],
                [45.438996239416284, 9.206812019070087],
                [45.43688096324999, 9.206804292004712],
                [45.436886363464886, 9.203799735775712],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon5);
 var myPolygon6 = new ymaps.Polygon([
            [
                [45.44114273520789, 9.188791049974387],
                [45.44113772941089, 9.191795834842976],
                [45.4390224521096, 9.191788668286497],
                [45.43902745753945, 9.188783995691704],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon6);
 var myPolygon7 = new ymaps.Polygon([
            [
                [45.44331192030055, 9.152739281613352],
                [45.443307862715685, 9.155744187350553],
                [45.44119258217844, 9.1557383674398],
                [45.4411966394657, 9.152733573990037],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon7);
 var myPolygon8 = new ymaps.Polygon([
            [
                [45.44328638906411, 9.170768706088307],
                [45.443281857188694, 9.173773607758884],
                [45.441166578558885, 9.173767114125408],
                [45.44117111010191, 9.170762324741716],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon8);
 var myPolygon9 = new ymaps.Polygon([
            [
                [45.44326293920492, 9.185793207102108],
                [45.44325801208872, 9.188798105040773],
                [45.44114273520789, 9.188791049974387],
                [45.4411476619627, 9.185786264322097],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon9);
 var myPolygon10 = new ymaps.Polygon([
            [
                [45.44749349132659, 9.185807094976226],
                [45.44748856348753, 9.188812217525069],
                [45.44537328818193, 9.188805160890963],
                [45.44537821565955, 9.18580015065345],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon10);
 var myPolygon11 = new ymaps.Polygon([
            [
                [45.447473305613, 9.197827580417554],
                [45.44746806153589, 9.200832699755443],
                [45.44535278773407, 9.200825193877124],
                [45.44535803142654, 9.19782018685012],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon11);
 var myPolygon12 = new ymaps.Polygon([
            [
                [45.449661737493045, 9.149751164979557],
                [45.44965775808119, 9.152756408288301],
                [45.44754247960829, 9.152750698762397],
                [45.44754645872828, 9.149745567778607],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon12);
 var myPolygon13 = new ymaps.Polygon([
            [
                [45.45601903542582, 9.140751215555671],
                [45.456015292388585, 9.143756797743137],
                [45.45390001541921, 9.143751423401325],
                [45.453903758181866, 9.140745953576504],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon13);
 var myPolygon14 = new ymaps.Polygon([
            [
                [45.45596420744058, 9.179823733842523],
                [45.45595943632122, 9.18282930729291],
                [45.45384416344876, 9.182822472244686],
                [45.453848934218165, 9.17981701115576],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon14);
 var myPolygon15 = new ymaps.Polygon([
            [
                [45.45595458611896, 9.185834879983815],
                [45.45594965683386, 9.188840451902756],
                [45.453834384678686, 9.18883339213193],
                [45.453839313602245, 9.185827932574236],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon15);
 var myPolygon16 = new ymaps.Polygon([
            [
                [45.45796902370019, 9.239944015207596],
                [45.4579626704679, 9.242949683467852],
                [45.45584740660068, 9.242940600205332],
                [45.455853759366995, 9.239935044316622],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon16);
 var myPolygon17 = new ymaps.Polygon([
            [
                [45.462269630222295, 9.20389116928903],
                [45.46226422525203, 9.206897073470667],
                [45.460148957751294, 9.206889336956234],
                [45.460154362325106, 9.203883545172637],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon17);
 var myPolygon18 = new ymaps.Polygon([
            [
                [45.46223601390407, 9.221926581233427],
                [45.46223013433558, 9.224932480069468],
                [45.46011486933535, 9.224924069169317],
                [45.46012074847257, 9.221918282730588],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon18);
 var myPolygon19 = new ymaps.Polygon([
            [
                [45.462199550002225, 9.239961959980153],
                [45.46219319583784, 9.24296785302096],
                [45.460077933546955, 9.24295876773968],
                [45.46008428724527, 9.239952987095393],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon19);
 var myPolygon20 = new ymaps.Polygon([
            [
                [45.46423333549893, 9.276042929870039],
                [45.464226031614686, 9.279048922378768],
                [45.46211077615769, 9.279038487191027],
                [45.462118079506205, 9.276032607089547],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon20);
 var myPolygon21 = new ymaps.Polygon([
            [
                [45.46648370902936, 9.212924804516831],
                [45.46647806593192, 9.21593093091471],
                [45.46436280123106, 9.215922855412387],
                [45.464368443914594, 9.212916841437174],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon21);
 var myPolygon22 = new ymaps.Polygon([
            [
                [45.46646654240326, 9.221943181005706],
                [45.46646066197218, 9.224949304673837],
                [45.464345398547856, 9.224940891904264],
                [45.46435127854763, 9.221934880658424],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon22);
 var myPolygon23 = new ymaps.Polygon([
            [
                [45.46644866377681, 9.230961549192896],
                [45.46644254601266, 9.233967670018837],
                [45.464327283917115, 9.233958919983165],
                [45.46433340123254, 9.230952911579122],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon23);
 var myPolygon24 = new ymaps.Polygon([
            [
                [45.4686952289082, 9.152807822578405],
                [45.468691167750244, 9.155814076738396],
                [45.46657589666103, 9.155808249062812],
                [45.4665799575211, 9.152802107340063],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon24);
 var myPolygon25 = new ymaps.Polygon([
            [
                [45.46867413193738, 9.167839086776977],
                [45.46866967518913, 9.170845337573796],
                [45.466554405676355, 9.170838947713325],
                [45.4665588620977, 9.167832809353293],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon25);
 var myPolygon26 = new ymaps.Polygon([
            [
                [45.46861002302757, 9.20692028817269],
                [45.46860453775054, 9.209926528763333],
                [45.46648927301546, 9.209918677234024],
                [45.466494757890146, 9.206912549078776],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon26);
 var myPolygon27 = new ymaps.Polygon([
            [
                [45.47082220913139, 9.14379443486126],
                [45.47081838504766, 9.146800803339213],
                [45.46870311386947, 9.146795312365473],
                [45.46870693767272, 9.14378905633752],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon27);
 var myPolygon28 = new ymaps.Polygon([
            [
                [45.47070286992183, 9.218953434994768],
                [45.47069706775078, 9.221959784467623],
                [45.46858180547099, 9.221951482275397],
                [45.46858760721647, 9.218945245249945],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon28);
 var myPolygon29 = new ymaps.Polygon([
            [
                [45.47278832757103, 9.23399392596069],
                [45.4727821293322, 9.237000383154527],
                [45.47066687005542, 9.236991517742053],
                [45.47067306783961, 9.23398517300747],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon29);
 var myPolygon30 = new ymaps.Polygon([
            [
                [45.47496654927756, 9.200930352102896],
                [45.47496122106275, 9.203936931783034],
                [45.47284595789203, 9.203929302581592],
                [45.47285128571601, 9.200922835374575],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon30);
 var myPolygon31 = new ymaps.Polygon([
            [
                [45.47713958233679, 9.164857502081956],
                [45.477135203421895, 9.167864203448914],
                [45.475019936731904, 9.16785792323416],
                [45.47502431532559, 9.164851334354076],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon31);
 var myPolygon32 = new ymaps.Polygon([
            [
                [45.47920232388764, 9.197938582566369],
                [45.47919707403752, 9.200945388065893],
                [45.4770818120514, 9.200937869666632],
                [45.47708706151646, 9.197931176665346],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon32);
 var myPolygon33 = new ymaps.Polygon([
            [
                [45.479163912864436, 9.21898620307694],
                [45.479158108990774, 9.2219930024644],
                [45.47704284986265, 9.221984696580774],
                [45.47704865331063, 9.218978009690716],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon33);
 var myPolygon34 = new ymaps.Polygon([
            [
                [45.48351382135145, 9.143826718559176],
                [45.48350999558434, 9.146833761999623],
                [45.48139472912969, 9.146828267363187],
                [45.481398554616185, 9.143821336447749],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon34);
 var myPolygon35 = new ymaps.Polygon([
            [
                [45.48344812317938, 9.188932300347275],
                [45.483443110033434, 9.191939333313346],
                [45.481327848484746, 9.191932150812764],
                [45.48133286126299, 9.188925230370264],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon35);
 var myPolygon36 = new ymaps.Polygon([
            [
                [45.483443110033434, 9.191939333313346],
                [45.48343801772929, 9.194946365481076],
                [45.48132275655411, 9.19493907045702],
                [45.481327848484746, 9.191932150812764],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon36);
 var myPolygon37 = new ymaps.Polygon([
            [
                [45.48773263596353, 9.152859288315533],
                [45.48772857212367, 9.155866554973263],
                [45.48561330812035, 9.155860721465704],
                [45.48561737166212, 9.15285356735774],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon37);
 var myPolygon38 = new ymaps.Polygon([
            [
                [45.487624943200906, 9.219018985729702],
                [45.4876191376241, 9.222026235231825],
                [45.48550388164764, 9.22201792565478],
                [45.48550968679862, 9.219010788700084],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon38);
 var myPolygon39 = new ymaps.Polygon([
            [
                [45.48984789947762, 9.15286500990926],
                [45.48984383533967, 9.155872389129273],
                [45.48772857212367, 9.155866554973263],
                [45.48773263596353, 9.152859288315533],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon39);
 var myPolygon40 = new ymaps.Polygon([
            [
                [45.491937587858715, 9.17091567292827],
                [45.49193304833126, 9.173923160643657],
                [45.48981778781325, 9.173916650392297],
                [45.489822327007744, 9.170909275251141],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon40);
 var myPolygon41 = new ymaps.Polygon([
            [
                [45.491893881573716, 9.197983035262343],
                [45.491888629412614, 9.20099051601392],
                [45.489773372152655, 9.200982992599098],
                [45.489778623928544, 9.197975624420806],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon41);
 var myPolygon42 = new ymaps.Polygon([
            [
                [45.49617256819843, 9.167920756803404],
                [45.49616810719837, 9.170928470416184],
                [45.49405284792225, 9.170922071316586],
                [45.49405730859512, 9.167914470303163],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon42);
 var myPolygon43 = new ymaps.Polygon([
            [
                [45.49611380944482, 9.204013270451783],
                [45.49610839812748, 9.207020974701843],
                [45.49399314323096, 9.207013224417976],
                [45.49399855415139, 9.204005632765998],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon43);
 var myPolygon44 = new ymaps.Polygon([
            [
                [45.49609733791462, 9.213036380604676],
                [45.496091689019224, 9.216044082232418],
                [45.4939764353483, 9.216035994155016],
                [45.493982083829344, 9.213028405124998],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon44);
 var myPolygon45 = new ymaps.Polygon([
            [
                [45.49817138288024, 9.234099037314174],
                [45.49816517918325, 9.23710684499442],
                [45.4960499293634, 9.23709796774972],
                [45.496056132605375, 9.23409027267882],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon45);
 var myPolygon46 = new ymaps.Polygon([
            [
                [45.504637981830165, 9.164937744959289],
                [45.504633598737705, 9.167945909793957],
                [45.50251834228399, 9.167939620497688],
                [45.50252272505495, 9.16493156831256],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon46);
 var myPolygon47 = new ymaps.Polygon([
            [
                [45.506679168269656, 9.210068005613453],
                [45.50667359652378, 9.213076271304836],
                [45.50455834637757, 9.213068291390831],
                [45.504563917714755, 9.210060138359896],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon47);
 var myPolygon48 = new ymaps.Polygon([
            [
                [45.50662617058193, 9.237142363843498],
                [45.506619885843314, 9.240150621098898],
                [45.50450463963673, 9.240141627246519],
                [45.50451092391435, 9.237133482650416],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon48);
 var myPolygon49 = new ymaps.Polygon([
            [
                [45.51103352984867, 9.125845683904062],
                [45.51103017583913, 9.128854194716236],
                [45.50891491802054, 9.128849368261264],
                [45.50891827178407, 9.125840970137297],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon49);
 var myPolygon50 = new ymaps.Polygon([
            [
                [45.51287668947282, 9.279289252071454],
                [45.51286929401847, 9.282297832234462],
                [45.51075405724157, 9.28228725764065],
                [45.510761452153474, 9.279278790172446],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon50);
 var myPolygon51 = new ymaps.Polygon([
            [
                [45.51723845010614, 9.219133839872768],
                [45.517232638564394, 9.222142666353204],
                [45.515117393618596, 9.222134343833293],
                [45.51512320473406, 9.219125630075583],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon51);
 var myPolygon52 = new ymaps.Polygon([
            [
                [45.52359556933254, 9.213140142567312],
                [45.52358991504794, 9.216149309105148],
                [45.52147467161889, 9.216141209329336],
                [45.521480325488746, 9.213132155552078],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon52);
 var myPolygon53 = new ymaps.Polygon([
            [
                [45.52579050627692, 9.164999549211796],
                [45.525786119968174, 9.168008841230943],
                [45.52367087138837, 9.168002544937913],
                [45.523675257375395, 9.164993365693618],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon53);
 var myPolygon54 = new ymaps.Polygon([
            [
                [45.54048235638223, 9.23126447134186],
                [45.54047622289173, 9.234274534817253],
                [45.53836098837735, 9.23426575066907],
                [45.53836712141796, 9.231255800053855],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon54);
 var myPolygon55 = new ymaps.Polygon([
            [
                [45.544814305361854, 9.174086152387927],
                [45.544809678175056, 9.177096457804486],
                [45.542694437682435, 9.177089816543397],
                [45.54269906452982, 9.174079624014333],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon55);
 var myPolygon56 = new ymaps.Polygon([
            [
                [45.551064575781034, 9.228297213322113],
                [45.551058519383965, 9.23130784225187],
                [45.54894328835957, 9.231299166140095],
                [45.54894934431238, 9.228288650133429],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon56);
 var myPolygon57 = new ymaps.Polygon([
            [
                [45.559548932805356, 9.216287143207595],
                [45.55954319209844, 9.219298227692377],
                [45.55742796248335, 9.21928999961338],
                [45.55743370276918, 9.216279028102457],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon57);
 var myPolygon58 = new ymaps.Polygon([
            [
                [45.56584008262004, 9.243414271252249],
                [45.565833626192244, 9.246425686039354],
                [45.56371840299332, 9.246416438115489],
                [45.56372485894752, 9.24340513633876],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon58);
 var myPolygon59 = new ymaps.Polygon([
            [
                [45.5679014273873, 9.26751560014407],
                [45.56789433537082, 9.270527119369367],
                [45.56577911695864, 9.270516966238148],
                [45.565786208454895, 9.267505560034627],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon59);
 var myPolygon60 = new ymaps.Polygon([
            [
                [45.398894829842405, 9.149617003603204],
                [45.398890857429706, 9.15261955455359],
                [45.39677556006088, 9.152613860226614],
                [45.396779532182215, 9.149611421302172],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon60);
 var myPolygon61 = new ymaps.Polygon([
            [
                [45.405151726220595, 9.206688488954901],
                [45.40514625300061, 9.209691361911267],
                [45.40303096463104, 9.20968353650336],
                [45.4030364374496, 9.206680775608335],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon61);
 var myPolygon62 = new ymaps.Polygon([
            [
                [45.434846735842655, 9.15572091158616],
                [45.434842600422755, 9.158725367602207],
                [45.43272731703945, 9.15871943803944],
                [45.43273145215603, 9.15571509426086],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon62);
 var myPolygon63 = new ymaps.Polygon([
            [
                [45.43480667215645, 9.1827609909701],
                [45.43480182551051, 9.185765440609009],
                [45.43268654511793, 9.185758500913273],
                [45.43269139140838, 9.182754163510966],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon63);
 var myPolygon64 = new ymaps.Polygon([
            [
                [45.43896217599504, 9.224840011545373],
                [45.43895622213288, 9.227844673764306],
                [45.43684094890174, 9.227836160876958],
                [45.436846902327204, 9.224831610917931],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon64);
 var myPolygon65 = new ymaps.Polygon([
            [
                [45.44116196797339, 9.176771902787763],
                [45.44115727834551, 9.179776690716311],
                [45.43904199961036, 9.179769973255649],
                [45.43904668889428, 9.17676529760131],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon65);
 var myPolygon66 = new ymaps.Polygon([
            [
                [45.4411476619627, 9.185786264322097],
                [45.44114273520789, 9.188791049974387],
                [45.43902745753945, 9.188783995691704],
                [45.43903238393288, 9.185779322313314],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon66);
 var myPolygon67 = new ymaps.Polygon([
            [
                [45.443295215670005, 9.164758900632755],
                [45.44329084189122, 9.167763803708773],
                [45.441175562602425, 9.167757534649162],
                [45.44117993606038, 9.164752743860221],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon67);
 var myPolygon68 = new ymaps.Polygon([
            [
                [45.445387833453175, 9.179790127876588],
                [45.445383064083316, 9.182795139644501],
                [45.44326778727307, 9.182788308392114],
                [45.44327255629312, 9.179783408923258],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon68);
 var myPolygon69 = new ymaps.Polygon([
            [
                [45.44751241208585, 9.173786597190226],
                [45.44750780048568, 9.176791722750368],
                [45.445392523769094, 9.176785115362193],
                [45.445397135031, 9.17378010211379],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon69);
 var myPolygon70 = new ymaps.Polygon([
            [
                [45.44967686447983, 9.137730185650497],
                [45.449673201332324, 9.140735431371917],
                [45.447557921726684, 9.140730171146336],
                [45.44756158460552, 9.137725037750199],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon70);
 var myPolygon71 = new ymaps.Polygon([
            [
                [45.44966563783889, 9.146745921048923],
                [45.449661737493045, 9.149751164979557],
                [45.44754645872828, 9.149745567778607],
                [45.447550358788035, 9.146740436173015],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon71);
 var myPolygon72 = new ymaps.Polygon([
            [
                [45.44961838541073, 9.179803568022797],
                [45.449613615341136, 9.182808804426257],
                [45.447498340106, 9.182801971655843],
                [45.4475031098257, 9.1797968475764],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon72);
 var myPolygon73 = new ymaps.Polygon([
            [
                [45.44959374440834, 9.194829742323616],
                [45.449588579011795, 9.197834974806444],
                [45.447473305613, 9.197827580417554],
                [45.447478470630685, 9.194822460258207],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon73);
 var myPolygon74 = new ymaps.Polygon([
            [
                [45.44957801102307, 9.20384543729491],
                [45.44957260843103, 9.206850667275594],
                [45.447457336203634, 9.206842935916953],
                [45.44746273839942, 9.203837818259403],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon74);
 var myPolygon75 = new ymaps.Polygon([
            [
                [45.45174296383308, 9.173799589508091],
                [45.45173835155634, 9.176804939729145],
                [45.44962307641476, 9.176798330872652],
                [45.44962768835319, 9.173793092988296],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon75);
 var myPolygon76 = new ymaps.Polygon([
            [
                [45.45168239781143, 9.209863740950423],
                [45.45167683668144, 9.212869081536],
                [45.44956156605182, 9.212861124647471],
                [45.44956712677392, 9.209855896397274],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon76);
 var myPolygon77 = new ymaps.Polygon([
            [
                [45.453896193578785, 9.146756892629051],
                [45.453892292660726, 9.149762361247204],
                [45.45177701547054, 9.149756762802395],
                [45.451780916102464, 9.146751406534245],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon77);
 var myPolygon78 = new ymaps.Polygon([
            [
                [45.45382428960066, 9.194844308881805],
                [45.453819123446294, 9.19784976604903],
                [45.45170385162289, 9.197842370016897],
                [45.45170901739833, 9.194837025198117],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon78);
 var myPolygon79 = new ymaps.Polygon([
            [
                [45.45805991946615, 9.19185319596615],
                [45.45805483164233, 9.194858878677227],
                [45.45593956101533, 9.19485159337481],
                [45.45594464846596, 9.19184602303725],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon79);
 var myPolygon80 = new ymaps.Polygon([
            [
                [45.46023413863596, 9.152784965435073],
                [45.46023007866938, 9.155790769921024],
                [45.45811480443085, 9.155784944835126],
                [45.45811886409964, 9.152779252736462],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon80);
 var myPolygon81 = new ymaps.Polygon([
            [
                [45.462368527194265, 9.137761085066352],
                [45.46236486243424, 9.140767005001614],
                [45.46024958755198, 9.140761741268145],
                [45.46025325204321, 9.137755933733072],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon81);
 var myPolygon82 = new ymaps.Polygon([
            [
                [45.46229045910361, 9.191867544215189],
                [45.46228537053336, 9.194873451710762],
                [45.46017010148167, 9.194866164789175],
                [45.46017518967869, 9.191860369692094],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon82);
 var myPolygon83 = new ymaps.Polygon([
            [
                [45.46225317801198, 9.212908879242326],
                [45.46224753574233, 9.215914780807367],
                [45.460132269465724, 9.215906707099526],
                [45.46013791132153, 9.212900917932169],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon83);
 var myPolygon84 = new ymaps.Polygon([
            [
                [45.46453168347061, 9.089669650037493],
                [45.464529284154736, 9.092675690046633],
                [45.46241400645482, 9.09267222433954],
                [45.4624164055947, 9.089666296744127],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon84);
 var myPolygon85 = new ymaps.Polygon([
            [
                [45.46437400749258, 9.20991082657715],
                [45.464368443914594, 9.212916841437174],
                [45.46225317801198, 9.212908879242326],
                [45.4622587411819, 9.209902976792595],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon85);
 var myPolygon86 = new ymaps.Polygon([
            [
                [45.468714347924205, 9.137776542501124],
                [45.468710682357646, 9.140782799711909],
                [45.46659540983706, 9.140777534223416],
                [45.466599075134745, 9.1377713894503],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon86);
 var myPolygon87 = new ymaps.Polygon([
            [
                [45.470829619926434, 9.137781696124623],
                [45.470825954091, 9.140788065785566],
                [45.468710682357646, 9.140782799711909],
                [45.468714347924205, 9.137776542501124],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon87);
 var myPolygon88 = new ymaps.Polygon([
            [
                [45.47081838504766, 9.146800803339213],
                [45.470814481839845, 9.14980717120692],
                [45.46869921094796, 9.149801567783266],
                [45.46870311386947, 9.146795312365473],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon88);
 var myPolygon89 = new ymaps.Polygon([
            [
                [45.472937479802845, 9.143799813982744],
                [45.4729336554386, 9.14680629492319],
                [45.47081838504766, 9.146800803339213],
                [45.47082220913139, 9.14379443486126],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon89);
 var myPolygon90 = new ymaps.Polygon([
            [
                [45.47500632613875, 9.176877685636935],
                [45.47500163100385, 9.179884271650378],
                [45.47288636486911, 9.179877542236996],
                [45.472891059659645, 9.176871068697544],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon90);
 var myPolygon91 = new ymaps.Polygon([
            [
                [45.47705437761837, 9.215971321890118],
                [45.47704865331063, 9.218978009690716],
                [45.4749333929689, 9.218969817215028],
                [45.474939116856795, 9.215963241899457],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon91);
 var myPolygon92 = new ymaps.Polygon([
            [
                [45.47704284986265, 9.221984696580774],
                [45.4770369672745, 9.224991382547794],
                [45.47492170778994, 9.224982965102429],
                [45.47492758994661, 9.221976391620188],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon92);
 var myPolygon93 = new ymaps.Polygon([
            [
                [45.479283287093715, 9.143815954934473],
                [45.479279461887806, 9.14682277333741],
                [45.477164193858655, 9.146817279922207],
                [45.47716801878399, 9.143810574019268],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon93);
 var myPolygon94 = new ymaps.Polygon([
            [
                [45.479207494591314, 9.19493177624371],
                [45.47920232388764, 9.197938582566369],
                [45.47708706151646, 9.197931176665346],
                [45.47709223184084, 9.194924482841033],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon94);
 var myPolygon95 = new ymaps.Polygon([
            [
                [45.48140230094953, 9.140814404934156],
                [45.481398554616185, 9.143821336447749],
                [45.479283287093715, 9.143815954934473],
                [45.479287033152254, 9.140809135933468],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon95);
 var myPolygon96 = new ymaps.Polygon([
            [
                [45.4813377948888, 9.185918309142037],
                [45.48133286126299, 9.188925230370264],
                [45.479217598559025, 9.188918161178991],
                [45.479222531822955, 9.18591135246194],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon96);
 var myPolygon97 = new ymaps.Polygon([
            [
                [45.4833646144073, 9.234037705321144],
                [45.48335841389483, 9.237044724998768],
                [45.48124315855846, 9.237035854658558],
                [45.48124935861613, 9.234028947502695],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon97);
 var myPolygon98 = new ymaps.Polygon([
            [
                [45.485621356039275, 9.149846412613936],
                [45.48561737166212, 9.15285356735774],
                [45.48350210657343, 9.152847847035783],
                [45.483506090658324, 9.149840804829328],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon98);
 var myPolygon99 = new ymaps.Polygon([
            [
                [45.48553211576733, 9.206982231896038],
                [45.485526627270545, 9.209989372419825],
                [45.48341136883782, 9.209981513906733],
                [45.48341685693203, 9.206974485918352],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon99);
 var myPolygon100 = new ymaps.Polygon([
            [
                [45.48772857212367, 9.155866554973263],
                [45.48772442911343, 9.158873820982556],
                [45.48560916541398, 9.158867874925313],
                [45.48561330812035, 9.155860721465704],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon100);
 var myPolygon101 = new ymaps.Polygon([
            [
                [45.48984383533967, 9.155872389129273],
                [45.48983969202551, 9.158879767700752],
                [45.48772442911343, 9.158873820982556],
                [45.48772857212367, 9.155866554973263],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon101);
 var myPolygon102 = new ymaps.Polygon([
            [
                [45.49612956823982, 9.194990152657242],
                [45.496124394501045, 9.197997859416967],
                [45.49400913843122, 9.197990446927692],
                [45.4940143117905, 9.194982852766394],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon102);
 var myPolygon103 = new ymaps.Polygon([
            [
                [45.49610839812748, 9.207020974701843],
                [45.496102907617384, 9.210028678090312],
                [45.4939876531236, 9.21002081520848],
                [45.49399314323096, 9.207013224417976],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon103);
 var myPolygon104 = new ymaps.Polygon([
            [
                [45.50247015798457, 9.198020101829464],
                [45.502464903896815, 9.201028145635195],
                [45.50034965057535, 9.201020618037605],
                [45.500354904277714, 9.19801268686774],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon104);
 var myPolygon105 = new ymaps.Polygon([
            [
                [45.50668466079381, 9.207059739047368],
                [45.506679168269656, 9.210068005613453],
                [45.504563917714755, 9.210060138359896],
                [45.50456940983604, 9.207051984454381],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon105);
 var myPolygon106 = new ymaps.Polygon([
            [
                [45.506619885843314, 9.240150621098898],
                [45.50661352188362, 9.243158877354338],
                [45.504498276143806, 9.243149770842802],
                [45.50450463963673, 9.240141627246519],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon106);
 var myPolygon107 = new ymaps.Polygon([
            [
                [45.506566755981396, 9.264216642091435],
                [45.50655975825561, 9.267224889896292],
                [45.50444451645932, 9.267214882116605],
                [45.50445151367182, 9.264206746969755],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon107);
 var myPolygon108 = new ymaps.Polygon([
            [
                [45.5131454328706, 9.128859021707854],
                [45.51314199937456, 9.131867644684034],
                [45.51102674259492, 9.131862704991756],
                [45.51103017583913, 9.128854194716236],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon108);
 var myPolygon109 = new ymaps.Polygon([
            [
                [45.51303040894063, 9.207083007999874],
                [45.513024915207694, 9.210091612622824],
                [45.510909667016115, 9.210083742744798],
                [45.510915160346094, 9.207075250820001],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon109);
 var myPolygon110 = new ymaps.Polygon([
            [
                [45.515246478645885, 9.140898788647565],
                [45.51524272791315, 9.14390752206442],
                [45.51312747298624, 9.1439021309709],
                [45.51313122344385, 9.140893510266922],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon110);
 var myPolygon111 = new ymaps.Polygon([
            [
                [45.521451263517115, 9.228177415306824],
                [45.52144521333641, 9.231186464455623],
                [45.51932997128027, 9.231177801842094],
                [45.519336021017196, 9.228168865440704],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon111);
 var myPolygon112 = new ymaps.Polygon([
            [
                [45.52568174615307, 9.22819451789149],
                [45.525675695084715, 9.231203792572725],
                [45.52356045460454, 9.231195128032457],
                [45.52356650522906, 9.228185966123707],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon112);
 var myPolygon113 = new ymaps.Polygon([
            [
                [45.52980588015011, 9.276363505817127],
                [45.529798559638785, 9.279372989154364],
                [45.527683328628044, 9.279362517944792],
                [45.527690648602416, 9.27635314740281],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon113);
 var myPolygon114 = new ymaps.Polygon([
            [
                [45.534029019294536, 9.279393935067276],
                [45.5340216184135, 9.282403642867806],
                [45.531906389522746, 9.28239305650881],
                [45.53191378986094, 9.279383461528473],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon114);
 var myPolygon115 = new ymaps.Polygon([
            [
                [45.53840225418088, 9.213196076550338],
                [45.53839659699224, 9.21620603276343],
                [45.53628135907795, 9.21619792667986],
                [45.53628701585164, 9.213188083315156],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon115);
 var myPolygon116 = new ymaps.Polygon([
            [
                [45.53836712141796, 9.231255800053855],
                [45.53836098837735, 9.23426575066907],
                [45.53624575307495, 9.234256967497798],
                [45.53625188566571, 9.231247129730207],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon116);
 var myPolygon117 = new ymaps.Polygon([
            [
                [45.540549771733296, 9.195143637997102],
                [45.54054459001876, 9.198153712217874],
                [45.53842935048964, 9.198146282400144],
                [45.538434531824095, 9.19513632104102],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon117);
 var myPolygon118 = new ymaps.Polygon([
            [
                [45.54047622289173, 9.234274534817253],
                [45.54047001008696, 9.237284597315604],
                [45.5383547760283, 9.23727570030738],
                [45.53836098837735, 9.23426575066907],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon118);
 var myPolygon119 = new ymaps.Polygon([
            [
                [45.555270331081886, 9.240357755969134],
                [45.55526395637646, 9.243368606845717],
                [45.553148728763425, 9.243359477011989],
                [45.55315510300128, 9.240348739083082],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon119);
 var myPolygon120 = new ymaps.Polygon([
            [
                [45.55946134053971, 9.258442238117867],
                [45.55945448870155, 9.261453308643267],
                [45.55733926559293, 9.26144349894418],
                [45.557346116928514, 9.258432541390727],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon120);
 var myPolygon121 = new ymaps.Polygon([
            [
                [45.39462564631624, 9.176626758018257],
                [45.39462096424983, 9.179629078792388],
                [45.39250566818865, 9.179622377724176],
                [45.39251034991164, 9.176620168950283],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon121);
 var myPolygon122 = new ymaps.Polygon([
            [
                [45.396779532182215, 9.149611421302172],
                [45.39677556006088, 9.152613860226614],
                [45.39466026190469, 9.15260816653185],
                [45.39466423373469, 9.149605839620914],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon122);
 var myPolygon123 = new ymaps.Polygon([
            [
                [45.426207454713754, 9.254829466222086],
                [45.4262007134659, 9.257833445058408],
                [45.424085440190446, 9.257823815998828],
                [45.42409218094387, 9.254819949346262],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon123);
 var myPolygon124 = new ymaps.Polygon([
            [
                [45.43278399653485, 9.110649867026158],
                [45.43278104671585, 9.113654219187913],
                [45.43066575860428, 9.11364997366726],
                [45.4306687082069, 9.11064573373165],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon124);
 var myPolygon125 = new ymaps.Polygon([
            [
                [45.43489633404037, 9.11365846518018],
                [45.434893304979106, 9.116662929108868],
                [45.43277801787678, 9.116658570878053],
                [45.43278104671585, 9.113654219187913],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon125);
 var myPolygon126 = new ymaps.Polygon([
            [
                [45.43696607543403, 9.152722160645387],
                [45.43696201874192, 9.15572672955769],
                [45.434846735842655, 9.15572091158616],
                [45.434850792237214, 9.152716454923882],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon126);
 var myPolygon127 = new ymaps.Polygon([
            [
                [45.439089234711844, 9.14671850276181],
                [45.439085335796186, 9.149723185192007],
                [45.43697005309493, 9.149717591099234],
                [45.4369739517246, 9.1467130209317],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon127);
 var myPolygon128 = new ymaps.Polygon([
            [
                [45.44119258217844, 9.1557383674398],
                [45.441188445848425, 9.15874316024307],
                [45.43907316482724, 9.158737228703929],
                [45.43907730085385, 9.155732548175543],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon128);
 var myPolygon129 = new ymaps.Polygon([
            [
                [45.441152509675256, 9.182781477898583],
                [45.4411476619627, 9.185786264322097],
                [45.43903238393288, 9.185779322313314],
                [45.43903723128988, 9.182774648163806],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon129);
 var myPolygon130 = new ymaps.Polygon([
            [
                [45.44748856348753, 9.188812217525069],
                [45.44748355658888, 9.191817339289887],
                [45.44536828165053, 9.191810170344565],
                [45.44537328818193, 9.188805160890963],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon130);
 var myPolygon131 = new ymaps.Polygon([
            [
                [45.44748355658888, 9.191817339289887],
                [45.447478470630685, 9.194822460258207],
                [45.445363196065365, 9.194815179001774],
                [45.44536828165053, 9.191810170344565],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon131);
 var myPolygon132 = new ymaps.Polygon([
            [
                [45.449641049774364, 9.164777375054783],
                [45.449636675033034, 9.167782615066882],
                [45.447521398106524, 9.167776343917536],
                [45.44752577252697, 9.164771216229942],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon132);
 var myPolygon133 = new ymaps.Polygon([
            [
                [45.4495988307396, 9.191824509031708],
                [45.44959374440834, 9.194829742323616],
                [45.447478470630685, 9.194822460258207],
                [45.44748355658888, 9.191817339289887],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon133);
 var myPolygon134 = new ymaps.Polygon([
            [
                [45.44956156605182, 9.212861124647471],
                [45.44955592626479, 9.215866352013704],
                [45.447440655261005, 9.215858283686355],
                [45.44744629463437, 9.212853168642908],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon134);
 var myPolygon135 = new ymaps.Polygon([
            [
                [45.45170901739833, 9.194837025198117],
                [45.45170385162289, 9.197842370016897],
                [45.449588579011795, 9.197834974806444],
                [45.44959374440834, 9.194829742323616],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon135);
 var myPolygon136 = new ymaps.Polygon([
            [
                [45.453907421866816, 9.137740483167077],
                [45.453903758181866, 9.140745953576504],
                [45.45178848015071, 9.140740692181943],
                [45.45179214356693, 9.137735334122764],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon136);
 var myPolygon137 = new ymaps.Polygon([
            [
                [45.456015292388585, 9.143756797743137],
                [45.45601147026784, 9.146762379333431],
                [45.453896193578785, 9.146756892629051],
                [45.45390001541921, 9.143751423401325],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon137);
 var myPolygon138 = new ymaps.Polygon([
            [
                [45.458134311882496, 9.140756478119524],
                [45.458130568570716, 9.143762172682123],
                [45.456015292388585, 9.143756797743137],
                [45.45601903542582, 9.140751215555671],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon138);
 var myPolygon139 = new ymaps.Polygon([
            [
                [45.458130568570716, 9.143762172682123],
                [45.458126746169604, 9.146767866647474],
                [45.45601147026784, 9.146762379333431],
                [45.456015292388585, 9.143756797743137],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon139);
 var myPolygon140 = new ymaps.Polygon([
            [
                [45.460245843965595, 9.143767548218367],
                [45.46024202128411, 9.14677335457126],
                [45.458126746169604, 9.146767866647474],
                [45.458130568570716, 9.143762172682123],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon140);
 var myPolygon141 = new ymaps.Polygon([
            [
                [45.46024202128411, 9.14677335457126],
                [45.46023811950755, 9.149779160314324],
                [45.458122844679224, 9.149773560003084],
                [45.458126746169604, 9.146767866647474],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon141);
 var myPolygon142 = new ymaps.Polygon([
            [
                [45.46020405787782, 9.17382558280653],
                [45.460199444247635, 9.176831382499193],
                [45.45808417225606, 9.176824770704863],
                [45.45808878554785, 9.173819083398836],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon142);
 var myPolygon143 = new ymaps.Polygon([
            [
                [45.460159687804826, 9.200877752541935],
                [45.460154362325106, 9.203883545172637],
                [45.4580390936402, 9.203875921903348],
                [45.458044418729294, 9.200870241658311],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon143);
 var myPolygon144 = new ymaps.Polygon([
            [
                [45.46013791132153, 9.212900917932169],
                [45.460132269465724, 9.215906707099526],
                [45.458017002401284, 9.215898634288738],
                [45.45802264384327, 9.212892957506574],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon144);
 var myPolygon145 = new ymaps.Polygon([
            [
                [45.462361118573256, 9.14377292435195],
                [45.46235729561136, 9.146778843104867],
                [45.46024202128411, 9.14677335457126],
                [45.460245843965595, 9.143767548218367],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon145);
 var myPolygon146 = new ymaps.Polygon([
            [
                [45.46224753574233, 9.215914780807367],
                [45.462241814372994, 9.218920681475232],
                [45.460126548516044, 9.218912495369828],
                [45.460132269465724, 9.215906707099526],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon146);
 var myPolygon147 = new ymaps.Polygon([
            [
                [45.462103393711, 9.282044366133054],
                [45.462095932166186, 9.285050243903132],
                [45.459980677009355, 9.28503958508582],
                [45.45998813800685, 9.282033819710175],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon147);
 var myPolygon148 = new ymaps.Polygon([
            [
                [45.464480136529254, 9.140772269320012],
                [45.46447639239366, 9.143778301082945],
                [45.462361118573256, 9.14377292435195],
                [45.46236486243424, 9.140767005001614],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon148);
 var myPolygon149 = new ymaps.Polygon([
            [
                [45.46444359147061, 9.167826532627137],
                [45.46443913537613, 9.170832558562873],
                [45.462323864288464, 9.170826170122343],
                [45.4623283200561, 9.167820256598416],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon149);
 var myPolygon150 = new ymaps.Polygon([
            [
                [45.46656323940689, 9.164826670295732],
                [45.4665588620977, 9.167832809353293],
                [45.46444359147061, 9.167826532627137],
                [45.464447968458735, 9.164820505993971],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon150);
 var myPolygon151 = new ymaps.Polygon([
            [
                [45.468636262652616, 9.191889072568461],
                [45.468631172962475, 9.194895317334456],
                [45.466515906273756, 9.194888027983293],
                [45.46652099559057, 9.191881895653262],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon151);
 var myPolygon152 = new ymaps.Polygon([
            [
                [45.47069706775078, 9.221959784467623],
                [45.47069118645697, 9.224966133017821],
                [45.468575924608544, 9.224957718378313],
                [45.46858180547099, 9.221951482275397],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon152);
 var myPolygon153 = new ymaps.Polygon([
            [
                [45.47290904752701, 9.16484516731161],
                [45.472904669254476, 9.167851643717317],
                [45.47078940098962, 9.167845364898287],
                [45.47079377894102, 9.16483900095446],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon153);
 var myPolygon154 = new ymaps.Polygon([
            [
                [45.481236879349325, 9.240042760828599],
                [45.48123052098882, 9.243049666000319],
                [45.47911526579133, 9.243040571627814],
                [45.479121623685465, 9.24003377896508],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon154);
 var myPolygon155 = new ymaps.Polygon([
            [
                [45.48346738418029, 9.176904160749636],
                [45.4834626876676, 9.179911196784033],
                [45.48134742468292, 9.179904464378392],
                [45.48135212085111, 9.176897540867992],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon155);
 var myPolygon156 = new ymaps.Polygon([
            [
                [45.48342759564669, 9.200960427371452],
                [45.48342226586834, 9.203967457069089],
                [45.481307005848535, 9.203959824475303],
                [45.48131233523595, 9.200952907300797],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon156);
 var myPolygon157 = new ymaps.Polygon([
            [
                [45.48341685693203, 9.206974485918352],
                [45.48341136883782, 9.209981513906733],
                [45.4812961096173, 9.20997365626703],
                [45.48130159730896, 9.206966740801546],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon157);
 var myPolygon158 = new ymaps.Polygon([
            [
                [45.48562526125173, 9.1468392572468],
                [45.485621356039275, 9.149846412613936],
                [45.483506090658324, 9.149840804829328],
                [45.48350999558434, 9.146833761999623],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon158);
 var myPolygon159 = new ymaps.Polygon([
            [
                [45.48976263107465, 9.206997726434537],
                [45.48975714177264, 9.210005092066657],
                [45.487641884915504, 9.209997231806426],
                [45.487647373814866, 9.206989978734727],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon159);
 var myPolygon160 = new ymaps.Polygon([
            [
                [45.49195073135023, 9.16189320556504],
                [45.491946429368255, 9.164900695376447],
                [45.48983116786876, 9.164894522848078],
                [45.48983546953519, 9.161887145611189],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon160);
 var myPolygon161 = new ymaps.Polygon([
            [
                [45.49188329807024, 9.203997995929168],
                [45.49187788754669, 9.20700547499558],
                [45.48976263107465, 9.206997726434537],
                [45.489768041201344, 9.203990359941177],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon161);
 var myPolygon162 = new ymaps.Polygon([
            [
                [45.49402935674513, 9.185960065464108],
                [45.494024420947504, 9.188967662022087],
                [45.491909162969066, 9.188960588114798],
                [45.49191409840465, 9.185953104143056],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon162);
 var myPolygon163 = new ymaps.Polygon([
            [
                [45.49400388588483, 9.200998040265064],
                [45.49399855415139, 9.204005632765998],
                [45.49188329807024, 9.203997995929168],
                [45.491888629412614, 9.20099051601392],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon163);
 var myPolygon164 = new ymaps.Polygon([
            [
                [45.49379399399118, 9.29724051713704],
                [45.493786128307626, 9.300248076263847],
                [45.4916708878076, 9.300236836755706],
                [45.4916787529142, 9.297229390210028],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon164);
 var myPolygon165 = new ymaps.Polygon([
            [
                [45.496119141569366, 9.20100556535265],
                [45.49611380944482, 9.204013270451783],
                [45.49399855415139, 9.204005632765998],
                [45.49400388588483, 9.200998040265064],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon165);
 var myPolygon166 = new ymaps.Polygon([
            [
                [45.4982695065101, 9.179958344582198],
                [45.49826472838626, 9.18296616788583],
                [45.49614947126461, 9.182959317628322],
                [45.49615424903797, 9.179951606936172],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon166);
 var myPolygon167 = new ymaps.Polygon([
            [
                [45.50038946246416, 9.176957146300495],
                [45.5003847631947, 9.179965082977262],
                [45.4982695065101, 9.179958344582198],
                [45.49827420543485, 9.176950520529534],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon167);
 var myPolygon168 = new ymaps.Polygon([
            [
                [45.50249038223154, 9.185987918488],
                [45.5024854449855, 9.1889959655161],
                [45.50037019015737, 9.188988888462651],
                [45.50037512704125, 9.185980954070859],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon168);
 var myPolygon169 = new ymaps.Polygon([
            [
                [45.50461527420146, 9.179978562014906],
                [45.50461049502607, 9.182986723228098],
                [45.502495240267, 9.182979870685614],
                [45.50250001909185, 9.179971822121463],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon169);
 var myPolygon170 = new ymaps.Polygon([
            [
                [45.50454696605566, 9.21908459477885],
                [45.50454115707107, 9.22209274511089],
                [45.502425907397864, 9.222084428140958],
                [45.50243171595636, 9.219076390456472],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon170);
 var myPolygon171 = new ymaps.Polygon([
            [
                [45.50667359652378, 9.213076271304836],
                [45.50666794555623, 9.21608453610899],
                [45.50455269582453, 9.216076443534657],
                [45.50455834637757, 9.213068291390831],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon171);
 var myPolygon172 = new ymaps.Polygon([
            [
                [45.50883614307703, 9.186008816385547],
                [45.5088312047444, 9.189017201397718],
                [45.50671595227902, 9.189010121983523],
                [45.506720890249426, 9.186001849645237],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon172);
 var myPolygon173 = new ymaps.Polygon([
            [
                [45.519537455031646, 9.077721094374011],
                [45.51953536816905, 9.080730062950414],
                [45.51742011025913, 9.080727038169332],
                [45.51742219696865, 9.077718182332198],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon173);
 var myPolygon174 = new ymaps.Polygon([
            [
                [45.52146893848673, 9.219150262205977],
                [45.52146312609235, 9.222159314169463],
                [45.51934788272231, 9.222150989798546],
                [45.51935369469037, 9.219142050582857],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon174);
 var myPolygon175 = new ymaps.Polygon([
            [
                [45.52356650522906, 9.228185966123707],
                [45.52356045460454, 9.231195128032457],
                [45.52144521333641, 9.231186464455623],
                [45.521451263517115, 9.228177415306824],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon175);
 var myPolygon176 = new ymaps.Polygon([
            [
                [45.53001214852687, 9.171030952823804],
                [45.530007603001735, 9.174040469016957],
                [45.52789235665772, 9.174033945723831],
                [45.527896901849445, 9.171024542330427],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon176);
 var myPolygon177 = new ymaps.Polygon([
            [
                [45.53412430554682, 9.23725790925917],
                [45.534118014812364, 9.240267632225851],
                [45.532002778850966, 9.24025862536334],
                [45.532009069124, 9.23724901521892],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon177);
 var myPolygon178 = new ymaps.Polygon([
            [
                [45.54055487413276, 9.19213356296248],
                [45.540549771733296, 9.195143637997102],
                [45.538434531824095, 9.19513632104102],
                [45.53843963384929, 9.192126358868157],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon178);
 var myPolygon179 = new ymaps.Polygon([
            [
                [45.542694437682435, 9.177089816543397],
                [45.54268973151386, 9.180100008333826],
                [45.540574490579, 9.180093254936526],
                [45.54057919640237, 9.177083176020936],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon179);
 var myPolygon180 = new ymaps.Polygon([
            [
                [45.5425914566181, 9.234283319942481],
                [45.5425852433576, 9.237293495313427],
                [45.54047001008696, 9.237284597315604],
                [45.54047622289173, 9.234274534817253],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon180);
 var myPolygon181 = new ymaps.Polygon([
            [
                [45.548937153069154, 9.234309681181744],
                [45.54893093844122, 9.237320195245818],
                [45.546815707534726, 9.237311294278397],
                [45.54682192170681, 9.234300893124592],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon181);
 var myPolygon182 = new ymaps.Polygon([
            [
                [45.55743936369382, 9.213268055688822],
                [45.55743370276918, 9.216279028102457],
                [45.555318471945206, 9.21627091390003],
                [45.555324132454615, 9.21326005444781],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon182);
 var myPolygon183 = new ymaps.Polygon([
            [
                [45.379836484852895, 9.16457449458165],
                [45.37983212068797, 9.167576034464293],
                [45.377716817775614, 9.16756978625509],
                [45.37772118162045, 9.164568358286072],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon183);
 var myPolygon184 = new ymaps.Polygon([
            [
                [45.39251034991164, 9.176620168950283],
                [45.39250566818865, 9.179622377724176],
                [45.39039037133988, 9.17961567739991],
                [45.39039505271949, 9.176613580613818],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon184);
 var myPolygon185 = new ymaps.Polygon([
            [
                [45.39677556006088, 9.152613860226614],
                [45.3967715090184, 9.155616298518847],
                [45.39465621115935, 9.155610492810661],
                [45.39466026190469, 9.15260816653185],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon185);
 var myPolygon186 = new ymaps.Polygon([
            [
                [45.43277801787678, 9.116658570878053],
                [45.43277491001761, 9.119662922084117],
                [45.430659622356146, 9.119658452111366],
                [45.430662729987354, 9.116654213131321],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon186);
 var myPolygon187 = new ymaps.Polygon([
            [
                [45.43700859129436, 9.116667287823828],
                [45.43700548297925, 9.11967186351932],
                [45.43489019689199, 9.119667392553412],
                [45.434893304979106, 9.116662929108868],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon187);
 var myPolygon188 = new ymaps.Polygon([
            [
                [45.4390224521096, 9.191788668286497],
                [45.439017367643395, 9.194793340085226],
                [45.43690208992741, 9.194786062063596],
                [45.43690717402068, 9.19178150252608],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon188);
 var myPolygon189 = new ymaps.Polygon([
            [
                [45.439017367643395, 9.194793340085226],
                [45.43901220414092, 9.197798011075424],
                [45.436896926803655, 9.197790620792686],
                [45.43690208992741, 9.194786062063596],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon189);
 var myPolygon190 = new ymaps.Polygon([
            [
                [45.44108912034817, 9.218838861335783],
                [45.44108332413232, 9.221843637681374],
                [45.43896805082151, 9.221835348393194],
                [45.438973846612214, 9.218830684320237],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon190);
 var myPolygon191 = new ymaps.Polygon([
            [
                [45.445435078949906, 9.146734951906435],
                [45.445431179176204, 9.149739971199462],
                [45.44331589883684, 9.149734375242039],
                [45.4433197983245, 9.146729468249095],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon191);
 var myPolygon192 = new ymaps.Polygon([
            [
                [45.44750780048568, 9.176791722750368],
                [45.4475031098257, 9.1797968475764],
                [45.445387833453175, 9.179790127876588],
                [45.445392523769094, 9.176785115362193],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon192);
 var myPolygon193 = new ymaps.Polygon([
            [
                [45.447457336203634, 9.206842935916953],
                [45.447451854948596, 9.209848052715614],
                [45.44533658233547, 9.209840209905316],
                [45.44534206318848, 9.206835205417196],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon193);
 var myPolygon194 = new ymaps.Polygon([
            [
                [45.449729280781774, 9.083635676951568],
                [45.449727040830965, 9.08664093105896],
                [45.447611757276356, 9.086637692699039],
                [45.44761399706285, 9.083632550918075],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon194);
 var myPolygon195 = new ymaps.Polygon([
            [
                [45.44962307641476, 9.176798330872652],
                [45.44961838541073, 9.179803568022797],
                [45.4475031098257, 9.1797968475764],
                [45.44750780048568, 9.176791722750368],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon195);
 var myPolygon196 = new ymaps.Polygon([
            [
                [45.449588579011795, 9.197834974806444],
                [45.44958333455003, 9.2008402064677],
                [45.44746806153589, 9.200832699755443],
                [45.447473305613, 9.197827580417554],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon196);
 var myPolygon197 = new ymaps.Polygon([
            [
                [45.44956712677392, 9.209855896397274],
                [45.44956156605182, 9.212861124647471],
                [45.44744629463437, 9.212853168642908],
                [45.447451854948596, 9.209848052715614],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon197);
 var myPolygon198 = new ymaps.Polygon([
            [
                [45.45178848015071, 9.140740692181943],
                [45.45178473766254, 9.143746049656599],
                [45.44966945911865, 9.143740676508884],
                [45.449673201332324, 9.140735431371917],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon198);
 var myPolygon199 = new ymaps.Polygon([
            [
                [45.45170385162289, 9.197842370016897],
                [45.45169860677641, 9.200847714014],
                [45.44958333455003, 9.2008402064677],
                [45.449588579011795, 9.197834974806444],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon199);
 var myPolygon200 = new ymaps.Polygon([
            [
                [45.456003588775985, 9.152773540672566],
                [45.45599952940498, 9.15577912039643],
                [45.45388425359179, 9.155773296604847],
                [45.45388831266504, 9.152767829243297],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon200);
 var myPolygon201 = new ymaps.Polygon([
            [
                [45.45810215088984, 9.16480201719796],
                [45.458097774864775, 9.167807706632896],
                [45.45598250108799, 9.167801432695908],
                [45.455986876792075, 9.164795855635406],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon201);
 var myPolygon202 = new ymaps.Polygon([
            [
                [45.45808417225606, 9.176824770704863],
                [45.45807947987548, 9.179830457276287],
                [45.45596420744058, 9.179823733842523],
                [45.45596889947699, 9.176818159645151],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon202);
 var myPolygon203 = new ymaps.Polygon([
            [
                [45.45807947987548, 9.179830457276287],
                [45.458074708406144, 9.182836143100614],
                [45.45595943632122, 9.18282930729291],
                [45.45596420744058, 9.179823733842523],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon203);
 var myPolygon204 = new ymaps.Polygon([
            [
                [45.458064928201416, 9.188847512458029],
                [45.45805991946615, 9.19185319596615],
                [45.45594464846596, 9.19184602303725],
                [45.45594965683386, 9.188840451902756],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon204);
 var myPolygon205 = new ymaps.Polygon([
            [
                [45.460102873779896, 9.230935639230722],
                [45.460096757361825, 9.233941422828426],
                [45.4579814929021, 9.2339326757091],
                [45.45798760887155, 9.23092700449583],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon205);
 var myPolygon206 = new ymaps.Polygon([
            [
                [45.462323864288464, 9.170826170122343],
                [45.46231932942031, 9.173832082936443],
                [45.46020405787782, 9.17382558280653],
                [45.46020859241332, 9.17081978239165],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon206);
 var myPolygon207 = new ymaps.Polygon([
            [
                [45.464472569151326, 9.146784332248382],
                [45.46446866680233, 9.149790362803829],
                [45.4623533935486, 9.149784761247878],
                [45.46235729561136, 9.146778843104867],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon207);
 var myPolygon208 = new ymaps.Polygon([
            [
                [45.46446866680233, 9.149790362803829],
                [45.4644646853467, 9.15279639273679],
                [45.462349412384995, 9.152790678768488],
                [45.4623533935486, 9.149784761247878],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon208);
 var myPolygon209 = new ymaps.Polygon([
            [
                [45.46445226634046, 9.161814478675858],
                [45.464447968458735, 9.164820505993971],
                [45.46233269672317, 9.164814342377149],
                [45.462336994289636, 9.16180842747103],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon209);
 var myPolygon210 = new ymaps.Polygon([
            [
                [45.468691167750244, 9.155814076738396],
                [45.46868702747414, 9.158820330250744],
                [45.4665717566886, 9.158814390137996],
                [45.46657589666103, 9.155808249062812],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon210);
 var myPolygon211 = new ymaps.Polygon([
            [
                [45.46859332984492, 9.215939007314457],
                [45.46858760721647, 9.218945245249945],
                [45.466472343723204, 9.218937056415168],
                [45.46647806593192, 9.21593093091471],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon211);
 var myPolygon212 = new ymaps.Polygon([
            [
                [45.47079377894102, 9.16483900095446],
                [45.47078940098962, 9.167845364898287],
                [45.46867413193738, 9.167839086776977],
                [45.46867850956765, 9.16483283528253],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon212);
 var myPolygon213 = new ymaps.Polygon([
            [
                [45.47069118645697, 9.224966133017821],
                [45.47068522604045, 9.227972480632856],
                [45.46856996462923, 9.227963953546196],
                [45.468575924608544, 9.224957718378313],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon213);
 var myPolygon214 = new ymaps.Polygon([
            [
                [45.47066687005542, 9.236991517742053],
                [45.47066059314879, 9.239997861491494],
                [45.46854533354434, 9.239988884617537],
                [45.468551609990556, 9.23698265331472],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon214);
 var myPolygon215 = new ymaps.Polygon([
            [
                [45.477107267969544, 9.185904396554967],
                [45.47710233506746, 9.188911092773344],
                [45.474987070788266, 9.188904025153217],
                [45.474992003328545, 9.185897441421014],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon215);
 var myPolygon216 = new ymaps.Polygon([
            [
                [45.48139472912969, 9.146828267363187],
                [45.4813908244901, 9.149835197667967],
                [45.479275557534606, 9.149829591129773],
                [45.479279461887806, 9.14682277333741],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon216);
 var myPolygon217 = new ymaps.Polygon([
            [
                [45.483388624883254, 9.222009617001275],
                [45.48338274100049, 9.225016640497637],
                [45.481267483879755, 9.225008220245266],
                [45.481273367330964, 9.222001309271194],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon217);
 var myPolygon218 = new ymaps.Polygon([
            [
                [45.48555327811682, 9.194953661315985],
                [45.4855481062752, 9.197960805208721],
                [45.483432846267036, 9.197953396837946],
                [45.48343801772929, 9.194946365481076],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon218);
 var myPolygon219 = new ymaps.Polygon([
            [
                [45.485542855269706, 9.200967948277981],
                [45.485537525100405, 9.203975090511255],
                [45.48342226586834, 9.203967457069089],
                [45.48342759564669, 9.200960427371452],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon219);
 var myPolygon220 = new ymaps.Polygon([
            [
                [45.485526627270545, 9.209989372419825],
                [45.485521059610136, 9.212996512070099],
                [45.48340580158579, 9.212988541021721],
                [45.48341136883782, 9.209981513906733],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon220);
 var myPolygon221 = new ymaps.Polygon([
            [
                [45.48983546953519, 9.161887145611189],
                [45.48983116786876, 9.164894522848078],
                [45.487715905581894, 9.164888351005773],
                [45.48772020693281, 9.161881086330897],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon221);
 var myPolygon222 = new ymaps.Polygon([
            [
                [45.48983116786876, 9.164894522848078],
                [45.48982678702626, 9.167901899398897],
                [45.48771152506073, 9.167895614994679],
                [45.487715905581894, 9.164888351005773],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon222);
 var myPolygon223 = new ymaps.Polygon([
            [
                [45.48973439281264, 9.222034545732539],
                [45.489728507634965, 9.2250419068708],
                [45.48761325287808, 9.225033483810275],
                [45.4876191376241, 9.222026235231825],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon223);
 var myPolygon224 = new ymaps.Polygon([
            [
                [45.489728507634965, 9.2250419068708],
                [45.489722543282326, 9.228049267072752],
                [45.487607288962934, 9.228040731452543],
                [45.48761325287808, 9.225033483810275],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon224);
 var myPolygon225 = new ymaps.Polygon([
            [
                [45.491971053530385, 9.146855746653607],
                [45.491967147458475, 9.149863239708099],
                [45.489851884439325, 9.149857630053237],
                [45.489855790224745, 9.146850249573708],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon225);
 var myPolygon226 = new ymaps.Polygon([
            [
                [45.49181942735952, 9.237080216220473],
                [45.49181314584703, 9.24008768512374],
                [45.489697894123715, 9.24007869826725],
                [45.489704175175454, 9.237071341935646],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon226);
 var myPolygon227 = new ymaps.Polygon([
            [
                [45.49407435940975, 9.155884059386953],
                [45.49407021548771, 9.158891663120356],
                [45.49195495415029, 9.158885715079988],
                [45.491959097768365, 9.155878223933804],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon227);
 var myPolygon228 = new ymaps.Polygon([
            [
                [45.49403421335542, 9.182952468132266],
                [45.49402935674513, 9.185960065464108],
                [45.49191409840465, 9.185953104143056],
                [45.491918954658715, 9.182945619397557],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon228);
 var myPolygon229 = new ymaps.Polygon([
            [
                [45.496205405231144, 9.143859023793508],
                [45.49620157777992, 9.146866742646717],
                [45.49408631604877, 9.14686124434458],
                [45.49409014321926, 9.143853638091453],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon229);
 var myPolygon230 = new ymaps.Polygon([
            [
                [45.49832066645581, 9.143864410094288],
                [45.49831683872381, 9.14687224156009],
                [45.49620157777992, 9.146866742646717],
                [45.496205405231144, 9.143859023793508],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon230);
 var myPolygon231 = new ymaps.Polygon([
            [
                [45.498177507379246, 9.231091228659553],
                [45.49817138288024, 9.234099037314174],
                [45.496056132605375, 9.23409027267882],
                [45.49606225665516, 9.231082576633677],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon231);
 var myPolygon232 = new ymaps.Polygon([
            [
                [45.50043592689322, 9.143869796993876],
                [45.50043209888045, 9.14687774108479],
                [45.49831683872381, 9.14687224156009],
                [45.49832066645581, 9.143864410094288],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon232);
 var myPolygon233 = new ymaps.Polygon([
            [
                [45.50243171595636, 9.219076390456472],
                [45.502425907397864, 9.222084428140958],
                [45.50031065693675, 9.222076112095571],
                [45.5003164650692, 9.219068187046123],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon233);
 var myPolygon234 = new ymaps.Polygon([
            [
                [45.50450463963673, 9.240141627246519],
                [45.504498276143806, 9.243149770842802],
                [45.50238302961589, 9.243140665343608],
                [45.50238939264203, 9.240132634393962],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon234);
 var myPolygon235 = new ymaps.Polygon([
            [
                [45.50665640595636, 9.222101063005509],
                [45.50665051732419, 9.22510932507282],
                [45.50453526887081, 9.22510089451825],
                [45.50454115707107, 9.22209274511089],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon235);
 var myPolygon236 = new ymaps.Polygon([
            [
                [45.50665051732419, 9.22510932507282],
                [45.50664454947058, 9.228117586202801],
                [45.50452930145494, 9.228109042988406],
                [45.50453526887081, 9.22510089451825],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon236);
 var myPolygon237 = new ymaps.Polygon([
            [
                [45.50874141646142, 9.237151246024014],
                [45.50873513126179, 9.240159615951237],
                [45.506619885843314, 9.240150621098898],
                [45.50662617058193, 9.237142363843498],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon237);
 var myPolygon238 = new ymaps.Polygon([
            [
                [45.51725540922752, 9.21010735500418],
                [45.517249835437774, 9.213116184185727],
                [45.51513458923058, 9.21310819983436],
                [45.515140162611495, 9.210099483375911],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon238);
 var myPolygon239 = new ymaps.Polygon([
            [
                [45.525786119968174, 9.168008841230943],
                [45.525781654384616, 9.171018132549893],
                [45.52366640613236, 9.171011723482096],
                [45.52367087138837, 9.168002544937913],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon239);
 var myPolygon240 = new ymaps.Polygon([
            [
                [45.55532971360857, 9.210249194105568],
                [45.555324132454615, 9.21326005444781],
                [45.553208900427634, 9.213252054096822],
                [45.55321448117221, 9.210241306703553],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon240);
 var myPolygon241 = new ymaps.Polygon([
            [
                [45.555318471945206, 9.21627091390003],
                [45.55531273208043, 9.21928177244966],
                [45.55319750088968, 9.219273546201093],
                [45.55320324033343, 9.216262800600195],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon241);
 var myPolygon242 = new ymaps.Polygon([
            [
                [45.55950078487892, 9.240375792750703],
                [45.559494409238205, 9.243386869560336],
                [45.55737918320138, 9.243377737695123],
                [45.557385558374435, 9.240366773858296],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon242);
 var myPolygon243 = new ymaps.Polygon([
            [
                [45.42407862044268, 9.260827681581992],
                [45.424071721700614, 9.263831546083297],
                [45.42195644864299, 9.263821693750966],
                [45.421963346879046, 9.260817941420669],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon243);
 var myPolygon244 = new ymaps.Polygon([
            [
                [45.432789659112395, 9.104641161337677],
                [45.43278686733371, 9.107645514405258],
                [45.430671578795206, 9.107641493336956],
                [45.43067437036913, 9.104637252495644],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon244);
 var myPolygon245 = new ymaps.Polygon([
            [
                [45.432666369766025, 9.197775842689783],
                [45.43266112838079, 9.200780176113398],
                [45.430545849064885, 9.200772676069418],
                [45.43055109006567, 9.19776845486939],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon245);
 var myPolygon246 = new ymaps.Polygon([
            [
                [45.43471964286978, 9.230832085701325],
                [45.43471353183298, 9.233836521509524],
                [45.43259825791648, 9.233827786043664],
                [45.43260436850503, 9.230823462470177],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon246);
 var myPolygon247 = new ymaps.Polygon([
            [
                [45.439068949763715, 9.161741908573443],
                [45.439064655663344, 9.164746587771605],
                [45.4369493744789, 9.164740432366806],
                [45.43695366826432, 9.161735865430868],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon247);
 var myPolygon248 = new ymaps.Polygon([
            [
                [45.441166578558885, 9.173767114125408],
                [45.44116196797339, 9.176771902787763],
                [45.43904668889428, 9.17676529760131],
                [45.439051299141596, 9.173760621213267],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon248);
 var myPolygon249 = new ymaps.Polygon([
            [
                [45.441132644571724, 9.194800618915394],
                [45.44112748069049, 9.197805402179169],
                [45.43901220414092, 9.197798011075424],
                [45.439017367643395, 9.194793340085226],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon249);
 var myPolygon250 = new ymaps.Polygon([
            [
                [45.445414789537594, 9.16176004202963],
                [45.44541049449219, 9.164765058089296],
                [45.443295215670005, 9.164758900632755],
                [45.44329951040035, 9.161753996872733],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon250);
 var myPolygon251 = new ymaps.Polygon([
            [
                [45.445363196065365, 9.194815179001774],
                [45.44535803142654, 9.19782018685012],
                [45.44324275645236, 9.197812794104028],
                [45.443247920712395, 9.194807898554208],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon251);
 var myPolygon252 = new ymaps.Polygon([
            [
                [45.44753842142812, 9.155755829111902],
                [45.447534284187824, 9.158760958814648],
                [45.44541900552873, 9.158755025298335],
                [45.44542314246558, 9.155750007907892],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon252);
 var myPolygon253 = new ymaps.Polygon([
            [
                [45.449680448561146, 9.134724939357113],
                [45.44967686447983, 9.137730185650497],
                [45.44756158460552, 9.137725037750199],
                [45.44756516842396, 9.134719903782175],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon253);
 var myPolygon254 = new ymaps.Polygon([
            [
                [45.46030112693186, 9.089662943823347],
                [45.46029872796795, 9.092668759017528],
                [45.458183448694115, 9.092665294080543],
                [45.45818584748207, 9.089659591275113],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon254);
 var myPolygon255 = new ymaps.Polygon([
            [
                [45.46236486243424, 9.140767005001614],
                [45.462361118573256, 9.14377292435195],
                [45.460245843965595, 9.143767548218367],
                [45.46024958755198, 9.140761741268145],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon255);
 var myPolygon256 = new ymaps.Polygon([
            [
                [45.462118079506205, 9.276032607089547],
                [45.46211077615769, 9.279038487191027],
                [45.45999551991206, 9.279028053162747],
                [45.460002822724896, 9.276022285456019],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon256);
 var myPolygon257 = new ymaps.Polygon([
            [
                [45.464494322003716, 9.128748136543118],
                [45.46449089429539, 9.131754170571131],
                [45.462375619411276, 9.131749243491006],
                [45.46237904686821, 9.128743321875906],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon257);
 var myPolygon258 = new ymaps.Polygon([
            [
                [45.46442529245503, 9.17985063206055],
                [45.4644205199356, 9.182856655081627],
                [45.462305250213326, 9.18284981699487],
                [45.46231002238271, 9.179843906385194],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon258);
 var myPolygon259 = new ymaps.Polygon([
            [
                [45.46659166542682, 9.143783678411443],
                [45.46658784190403, 9.14678982200189],
                [45.464472569151326, 9.146784332248382],
                [45.46447639239366, 9.143778301082945],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon259);
 var myPolygon260 = new ymaps.Polygon([
            [
                [45.4665717566886, 9.158814390137996],
                [45.46656753760386, 9.161820530553133],
                [45.46445226634046, 9.161814478675858],
                [45.46445648511571, 9.158808450685298],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon260);
 var myPolygon261 = new ymaps.Polygon([
            [
                [45.46860453775054, 9.209926528763333],
                [45.468598973356315, 9.212932768481421],
                [45.46648370902936, 9.212924804516831],
                [45.46648927301546, 9.209918677234024],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon261);
 var myPolygon262 = new ymaps.Polygon([
            [
                [45.470775792393034, 9.176864452493461],
                [45.470771097946866, 9.179870813571423],
                [45.468655830237104, 9.179864085653561],
                [45.468660524338944, 9.176857837024583],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon262);
 var myPolygon263 = new ymaps.Polygon([
            [
                [45.47076147168386, 9.185883533471737],
                [45.47075653986715, 9.18888989226909],
                [45.4686412732252, 9.188882827004877],
                [45.46864620468018, 9.185876580656199],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon263);
 var myPolygon264 = new ymaps.Polygon([
            [
                [45.47294122503715, 9.140793332444467],
                [45.472937479802845, 9.143799813982744],
                [45.47082220913139, 9.14379443486126],
                [45.470825954091, 9.140788065785566],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon264);
 var myPolygon265 = new ymaps.Polygon([
            [
                [45.472913346669934, 9.16183869022059],
                [45.47290904752701, 9.16484516731161],
                [45.47079377894102, 9.16483900095446],
                [45.47079807776861, 9.161832636325409],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon265);
 var myPolygon266 = new ymaps.Polygon([
            [
                [45.47282949964672, 9.212948699065867],
                [45.47282385530737, 9.215955162806708],
                [45.47070859297007, 9.215947084611749],
                [45.47071423689542, 9.212940733331056],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon266);
 var myPolygon267 = new ymaps.Polygon([
            [
                [45.475056495196064, 9.140798599688702],
                [45.47505274968703, 9.143805193702052],
                [45.472937479802845, 9.143799813982744],
                [45.47294122503715, 9.140793332444467],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon267);
 var myPolygon268 = new ymaps.Polygon([
            [
                [45.47502861478387, 9.161844744788588],
                [45.47502431532559, 9.164851334354076],
                [45.47290904752701, 9.16484516731161],
                [45.472913346669934, 9.16183869022059],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon268);
 var myPolygon269 = new ymaps.Polygon([
            [
                [45.47501547900282, 9.17086451141633],
                [45.475010942138425, 9.173871098888089],
                [45.47289567532074, 9.17386459442278],
                [45.47290021185237, 9.170858119425203],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon269);
 var myPolygon270 = new ymaps.Polygon([
            [
                [45.477164193858655, 9.146817279922207],
                [45.477160289791854, 9.149823985214654],
                [45.47504502126178, 9.149818379922529],
                [45.47504892504226, 9.146811787117494],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon270);
 var myPolygon271 = new ymaps.Polygon([
            [
                [45.47709223184084, 9.194924482841033],
                [45.47708706151646, 9.197931176665346],
                [45.47497179835757, 9.197923771587343],
                [45.47497696830273, 9.194917190248884],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon271);
 var myPolygon272 = new ymaps.Polygon([
            [
                [45.479287033152254, 9.140809135933468],
                [45.479283287093715, 9.143815954934473],
                [45.47716801878399, 9.143810574019268],
                [45.477171764567785, 9.14080386751834],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon272);
 var myPolygon273 = new ymaps.Polygon([
            [
                [45.481342649362134, 9.182911387140576],
                [45.4813377948888, 9.185918309142037],
                [45.479222531822955, 9.18591135246194],
                [45.479227385940206, 9.182904542971766],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon273);
 var myPolygon274 = new ymaps.Polygon([
            [
                [45.48128489677796, 9.215987484565675],
                [45.48127917163038, 9.218994397373828],
                [45.479163912864436, 9.21898620307694],
                [45.47916963759209, 9.215979402778816],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon274);
 var myPolygon275 = new ymaps.Polygon([
            [
                [45.481261521276856, 9.228015130283547],
                [45.48125547952228, 9.231022039373526],
                [45.47914022249414, 9.23101339503778],
                [45.47914626380554, 9.228006598457325],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon275);
 var myPolygon276 = new ymaps.Polygon([
            [
                [45.48560494354306, 9.161875027724061],
                [45.48560064250765, 9.16488217984944],
                [45.48348537864602, 9.164876009378986],
                [45.48348967936595, 9.161868969790596],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon276);
 var myPolygon277 = new ymaps.Polygon([
            [
                [45.48768843490269, 9.182931924211763],
                [45.487683579361, 9.185939183822116],
                [45.485568318657826, 9.185932224822018],
                [45.485573173843385, 9.182925077760473],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon277);
 var myPolygon278 = new ymaps.Polygon([
            [
                [45.49195495415029, 9.158885715079988],
                [45.49195073135023, 9.16189320556504],
                [45.48983546953519, 9.161887145611189],
                [45.48983969202551, 9.158879767700752],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon278);
 var myPolygon279 = new ymaps.Polygon([
            [
                [45.49192373173121, 9.179938133890817],
                [45.491918954658715, 9.182945619397557],
                [45.489803695174466, 9.182938771424089],
                [45.48980847189656, 9.179931398491279],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon279);
 var myPolygon280 = new ymaps.Polygon([
            [
                [45.49191409840465, 9.185953104143056],
                [45.491909162969066, 9.188960588114798],
                [45.489793904203026, 9.188953514993779],
                [45.4897988392766, 9.18594614359576],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon280);
 var myPolygon281 = new ymaps.Polygon([
            [
                [45.49181314584703, 9.24008768512374],
                [45.491806785154154, 9.243095153028005],
                [45.489691533897364, 9.243086053599988],
                [45.489697894123715, 9.24007869826725],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon281);
 var myPolygon282 = new ymaps.Polygon([
            [
                [45.4916787529142, 9.297229390210028],
                [45.4916708878076, 9.300236836755706],
                [45.48955564651864, 9.300225598496834],
                [45.48956351104835, 9.297218264519767],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon282);
 var myPolygon283 = new ymaps.Polygon([
            [
                [45.50030476960025, 9.225084036220595],
                [45.500298803059756, 9.228091959408673],
                [45.49818355268022, 9.22808341904307],
                [45.49818951878307, 9.225075608477256],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon283);
 var myPolygon284 = new ymaps.Polygon([
            [
                [45.504646510364886, 9.158921413242322],
                [45.50464228570591, 9.161929579437905],
                [45.502527028615006, 9.161923515440805],
                [45.502531252964104, 9.158915461894944],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon284);
 var myPolygon285 = new ymaps.Polygon([
            [
                [45.50666794555623, 9.21608453610899],
                [45.50666221536707, 9.219092800013387],
                [45.50454696605566, 9.21908459477885],
                [45.50455269582453, 9.216076443534657],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon285);
 var myPolygon286 = new ymaps.Polygon([
            [
                [45.50655975825561, 9.267224889896292],
                [45.50655268130942, 9.27023313658846],
                [45.50443744003221, 9.270223016150924],
                [45.50444451645932, 9.267214882116605],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon286);
 var myPolygon287 = new ymaps.Polygon([
            [
                [45.51102674259492, 9.131862704991756],
                [45.51102323011607, 9.134871214718098],
                [45.50890797280695, 9.134866162886947],
                [45.50891148502815, 9.131857765848656],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon287);
 var myPolygon288 = new ymaps.Polygon([
            [
                [45.51088690136328, 9.222117701569283],
                [45.51088101186714, 9.22512618899408],
                [45.50876576498961, 9.225117756564721],
                [45.508771654053774, 9.222109381824927],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon288);
 var myPolygon289 = new ymaps.Polygon([
            [
                [45.51088101186714, 9.22512618899408],
                [45.51087504313797, 9.228134675481288],
                [45.50875979669824, 9.228126130367052],
                [45.50876576498961, 9.225117756564721],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon289);
 var myPolygon290 = new ymaps.Polygon([
            [
                [45.515117393618596, 9.222134343833293],
                [45.51511150325838, 9.225143056665688],
                [45.512996257956715, 9.225134622361027],
                [45.51300214788488, 9.222126022238696],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon290);
 var myPolygon291 = new ymaps.Polygon([
            [
                [45.517249835437774, 9.213116184185727],
                [45.51724418239729, 9.216125012479429],
                [45.51512893660475, 9.216116915405095],
                [45.51513458923058, 9.21310819983436],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon291);
 var myPolygon292 = new ymaps.Polygon([
            [
                [45.51944906329644, 9.161972046300304],
                [45.519444757210245, 9.164981000719877],
                [45.51732950594662, 9.164974819264124],
                [45.517333811716966, 9.161965977581882],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon292);
 var myPolygon293 = new ymaps.Polygon([
            [
                [45.51935369469037, 9.219142050582857],
                [45.51934788272231, 9.222150989798546],
                [45.517232638564394, 9.222142666353204],
                [45.51723845010614, 9.219133839872768],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon293);
 var myPolygon294 = new ymaps.Polygon([
            [
                [45.52165271230778, 9.077724006739645],
                [45.521650625292104, 9.080733088067856],
                [45.51953536816905, 9.080730062950414],
                [45.519537455031646, 9.077721094374011],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon294);
 var myPolygon295 = new ymaps.Polygon([
            [
                [45.52358991504794, 9.216149309105148],
                [45.52358418149523, 9.219158474742246],
                [45.52146893848673, 9.219150262205977],
                [45.52147467161889, 9.216141209329336],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon295);
 var myPolygon296 = new ymaps.Polygon([
            [
                [45.534118014812364, 9.240267632225851],
                [45.53411164478125, 9.243277354190797],
                [45.53199640928708, 9.243268234506164],
                [45.532002778850966, 9.24025862536334],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon296);
 var myPolygon297 = new ymaps.Polygon([
            [
                [45.377725466596424, 9.161566929635926],
                [45.37772118162045, 9.164568358286072],
                [45.375605877600535, 9.164562222671618],
                [45.37561016226224, 9.161560905922766],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon297);
 var myPolygon298 = new ymaps.Polygon([
            [
                [45.439085335796186, 9.149723185192007],
                [45.43908135784352, 9.152727867000744],
                [45.43696607543403, 9.152722160645387],
                [45.43697005309493, 9.149717591099234],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon298);
 var myPolygon299 = new ymaps.Polygon([
            [
                [45.43908135784352, 9.152727867000744],
                [45.43907730085385, 9.155732548175543],
                [45.43696201874192, 9.15572672955769],
                [45.43696607543403, 9.152722160645387],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon299);
 var myPolygon300 = new ymaps.Polygon([
            [
                [45.44120061771017, 9.149728779906251],
                [45.4411966394657, 9.152733573990037],
                [45.43908135784352, 9.152727867000744],
                [45.439085335796186, 9.149723185192007],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon300);
 var myPolygon301 = new ymaps.Polygon([
            [
                [45.44326778727307, 9.182788308392114],
                [45.44326293920492, 9.185793207102108],
                [45.4411476619627, 9.185786264322097],
                [45.441152509675256, 9.182781477898583],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon301);
 var myPolygon302 = new ymaps.Polygon([
            [
                [45.443210110889815, 9.215842149720514],
                [45.44320439329621, 9.218847039259758],
                [45.44108912034817, 9.218838861335783],
                [45.4410948375224, 9.215834084081768],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon302);
 var myPolygon303 = new ymaps.Polygon([
            [
                [45.445401667238855, 9.170775088143856],
                [45.445397135031, 9.17378010211379],
                [45.443281857188694, 9.173773607758884],
                [45.44328638906411, 9.170768706088307],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon303);
 var myPolygon304 = new ymaps.Polygon([
            [
                [45.445331022429066, 9.212845213522188],
                [45.44532538346935, 9.215850216255335],
                [45.443210110889815, 9.215842149720514],
                [45.44321574943594, 9.212837259285193],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon304);
 var myPolygon305 = new ymaps.Polygon([
            [
                [45.44968395357623, 9.131719692504237],
                [45.449680448561146, 9.134724939357113],
                [45.44756516842396, 9.134719903782175],
                [45.44756867318196, 9.13171476925474],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon305);
 var myPolygon306 = new ymaps.Polygon([
            [
                [45.44966945911865, 9.143740676508884],
                [45.44966563783889, 9.146745921048923],
                [45.447550358788035, 9.146740436173015],
                [45.447554179787524, 9.1437353039581],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon306);
 var myPolygon307 = new ymaps.Polygon([
            [
                [45.45176062222496, 9.161778181530446],
                [45.45175632623434, 9.164783534563913],
                [45.449641049774364, 9.164777375054783],
                [45.44964534544989, 9.161772134358397],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon307);
 var myPolygon308 = new ymaps.Polygon([
            [
                [45.45390001541921, 9.143751423401325],
                [45.453896193578785, 9.146756892629051],
                [45.451780916102464, 9.146751406534245],
                [45.45178473766254, 9.143746049656599],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon308);
 var myPolygon309 = new ymaps.Polygon([
            [
                [45.453892292660726, 9.149762361247204],
                [45.45388831266504, 9.152767829243297],
                [45.45177303576677, 9.152762118448573],
                [45.45177701547054, 9.149756762802395],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon309);
 var myPolygon310 = new ymaps.Polygon([
            [
                [45.45600756906364, 9.14976796031407],
                [45.456003588775985, 9.152773540672566],
                [45.45388831266504, 9.152767829243297],
                [45.453892292660726, 9.149762361247204],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon310);
 var myPolygon311 = new ymaps.Polygon([
            [
                [45.4579626704679, 9.242949683467852],
                [45.457956238148114, 9.2459553507188],
                [45.45584097475271, 9.245946155084876],
                [45.45584740660068, 9.242940600205332],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon311);
 var myPolygon312 = new ymaps.Polygon([
            [
                [45.4602174242002, 9.164808179445176],
                [45.46021304785414, 9.167813981267038],
                [45.458097774864775, 9.167807706632896],
                [45.45810215088984, 9.16480201719796],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon312);
 var myPolygon313 = new ymaps.Polygon([
            [
                [45.460185128789675, 9.185848777118967],
                [45.46018019878139, 9.188854573797858],
                [45.458064928201416, 9.188847512458029],
                [45.4580698578481, 9.185841828165357],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon313);
 var myPolygon314 = new ymaps.Polygon([
            [
                [45.46445648511571, 9.158808450685298],
                [45.46445226634046, 9.161814478675858],
                [45.462336994289636, 9.16180842747103],
                [45.46234121275548, 9.158802511892556],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon314);
 var myPolygon315 = new ymaps.Polygon([
            [
                [45.46441566831008, 9.185862677342813],
                [45.4644107375785, 9.188868698831616],
                [45.46229546857374, 9.188861635922354],
                [45.462300398943654, 9.18585572684475],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon315);
 var myPolygon316 = new ymaps.Polygon([
            [
                [45.46660616839229, 9.131759098198783],
                [45.46660266131985, 9.134765244104592],
                [45.464487387480155, 9.134760204051613],
                [45.46449089429539, 9.131754170571131],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon316);
 var myPolygon317 = new ymaps.Polygon([
            [
                [45.468665139322965, 9.1738515876605],
                [45.468660524338944, 9.176857837024583],
                [45.46654525549735, 9.17685122229082],
                [45.46654987014289, 9.173845085363329],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon317);
 var myPolygon318 = new ymaps.Polygon([
            [
                [45.470771097946866, 9.179870813571423],
                [45.47076632437712, 9.182877173901682],
                [45.468651057017496, 9.182870333534932],
                [45.468655830237104, 9.179864085653561],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon318);
 var myPolygon319 = new ymaps.Polygon([
            [
                [45.47296522603594, 9.119747945987342],
                [45.472962034712246, 9.122754431360427],
                [45.470846762239745, 9.122749839478614],
                [45.47084995332936, 9.119743466568627],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon319);
 var myPolygon320 = new ymaps.Polygon([
            [
                [45.47291756668318, 9.158832212456753],
                [45.472913346669934, 9.16183869022059],
                [45.47079807776861, 9.161832636325409],
                [45.470802297472325, 9.158826271023631],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon320);
 var myPolygon321 = new ymaps.Polygon([
            [
                [45.47286170397697, 9.194909898467143],
                [45.47285653441102, 9.19791636733226],
                [45.47074126967677, 9.197908963899973],
                [45.470746438863536, 9.194902607495704],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon321);
 var myPolygon322 = new ymaps.Polygon([
            [
                [45.47500163100385, 9.179884271650378],
                [45.47499685673375, 9.1828908569159],
                [45.47288159094922, 9.182884015028636],
                [45.47288636486911, 9.179877542236996],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon322);
 var myPolygon323 = new ymaps.Polygon([
            [
                [45.474950327229, 9.209950088587071],
                [45.47494476161018, 9.21295666568597],
                [45.47282949964672, 9.212948699065867],
                [45.472835064857314, 9.209942234439737],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon323);
 var myPolygon324 = new ymaps.Polygon([
            [
                [45.474939116856795, 9.215963241899457],
                [45.4749333929689, 9.218969817215028],
                [45.47281813183933, 9.21896162564975],
                [45.47282385530737, 9.215955162806708],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon324);
 var myPolygon325 = new ymaps.Polygon([
            [
                [45.479275557534606, 9.149829591129773],
                [45.47927157403414, 9.152836408299056],
                [45.47715630658357, 9.152830689884109],
                [45.477160289791854, 9.149823985214654],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon325);
 var myPolygon326 = new ymaps.Polygon([
            [
                [45.47914626380554, 9.228006598457325],
                [45.47914022249414, 9.23101339503778],
                [45.477024964677966, 9.231004751662708],
                [45.477031005546245, 9.227998067579273],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon326);
 var myPolygon327 = new ymaps.Polygon([
            [
                [45.481398554616185, 9.143821336447749],
                [45.48139472912969, 9.146828267363187],
                [45.479279461887806, 9.14682277333741],
                [45.479283287093715, 9.143815954934473],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon327);
 var myPolygon328 = new ymaps.Polygon([
            [
                [45.48133286126299, 9.188925230370264],
                [45.481327848484746, 9.191932150812764],
                [45.479212586148435, 9.191924969110417],
                [45.479217598559025, 9.188918161178991],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon328);
 var myPolygon329 = new ymaps.Polygon([
            [
                [45.48132275655411, 9.19493907045702],
                [45.481317585471174, 9.197945989290533],
                [45.47920232388764, 9.197938582566369],
                [45.479207494591314, 9.19493177624371],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon329);
 var myPolygon330 = new ymaps.Polygon([
            [
                [45.48348537864602, 9.164876009378986],
                [45.48348099876743, 9.167883048281592],
                [45.481365734439656, 9.167876765972537],
                [45.481370113996974, 9.164869839594317],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon330);
 var myPolygon331 = new ymaps.Polygon([
            [
                [45.483453057167104, 9.185925266595358],
                [45.48344812317938, 9.188932300347275],
                [45.48133286126299, 9.188925230370264],
                [45.4813377948888, 9.185918309142037],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon331);
 var myPolygon332 = new ymaps.Polygon([
            [
                [45.48551541278614, 9.216003650834352],
                [45.48550968679862, 9.219010788700084],
                [45.48339442960845, 9.2190025925815],
                [45.48340015517597, 9.215995567250813],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon332);
 var myPolygon333 = new ymaps.Polygon([
            [
                [45.485492033855564, 9.22803219678103],
                [45.48548599121459, 9.231039330927569],
                [45.483370735762435, 9.231030684670078],
                [45.4833767779602, 9.228023663058073],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon333);
 var myPolygon334 = new ymaps.Polygon([
            [
                [45.48767363076796, 9.191953700709675],
                [45.487668537716715, 9.19496095796186],
                [45.48555327811682, 9.194953661315985],
                [45.48555837079449, 9.191946516612283],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon334);
 var myPolygon335 = new ymaps.Polygon([
            [
                [45.487647373814866, 9.206989978734727],
                [45.487641884915504, 9.209997231806426],
                [45.485526627270545, 9.209989372419825],
                [45.48553211576733, 9.206982231896038],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon335);
 var myPolygon336 = new ymaps.Polygon([
            [
                [45.4876191376241, 9.222026235231825],
                [45.48761325287808, 9.225033483810275],
                [45.48549799733326, 9.22502506168593],
                [45.48550388164764, 9.22201792565478],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon336);
 var myPolygon337 = new ymaps.Polygon([
            [
                [45.489691533897364, 9.243086053599988],
                [45.48968509449647, 9.246093407921345],
                [45.48756984292388, 9.246084196945828],
                [45.48757628185246, 9.243076955183348],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon337);
 var myPolygon338 = new ymaps.Polygon([
            [
                [45.49194204820439, 9.167908184501696],
                [45.491937587858715, 9.17091567292827],
                [45.489822327007744, 9.170909275251141],
                [45.48982678702626, 9.167901899398897],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon338);
 var myPolygon339 = new ymaps.Polygon([
            [
                [45.493940881542464, 9.234081509017713],
                [45.4939346787555, 9.237089091491782],
                [45.49181942735952, 9.237080216220473],
                [45.491825629691505, 9.234072746330712],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon339);
 var myPolygon340 = new ymaps.Polygon([
            [
                [45.49620157777992, 9.146866742646717],
                [45.49619767113492, 9.149874460888675],
                [45.49408240969032, 9.149868849986554],
                [45.49408631604877, 9.14686124434458],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon340);
 var myPolygon341 = new ymaps.Polygon([
            [
                [45.496185476037816, 9.158897611821944],
                [45.49618125261821, 9.161905327493765],
                [45.49406599237789, 9.161899266192538],
                [45.49407021548771, 9.158891663120356],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon341);
 var myPolygon342 = new ymaps.Polygon([
            [
                [45.49821816132339, 9.21003654184625],
                [45.498212591212074, 9.21304435697098],
                [45.49609733791462, 9.213036380604676],
                [45.496102907617384, 9.210028678090312],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon342);
 var myPolygon343 = new ymaps.Polygon([
            [
                [45.50031065693675, 9.222076112095571],
                [45.50030476960025, 9.225084036220595],
                [45.49818951878307, 9.225075608477256],
                [45.49819540568775, 9.222067796974617],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon343);
 var myPolygon344 = new ymaps.Polygon([
            [
                [45.5024200196295, 9.225092464900888],
                [45.502414052651346, 9.22810050072374],
                [45.500298803059756, 9.228091959408673],
                [45.50030476960025, 9.225084036220595],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon344);
 var myPolygon345 = new ymaps.Polygon([
            [
                [45.50233627057386, 9.264196852948087],
                [45.5023292738746, 9.267204875449456],
                [45.50021403050143, 9.267194869894688],
                [45.50022102668749, 9.264186960026278],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon345);
 var myPolygon346 = new ymaps.Polygon([
            [
                [45.50676176697832, 9.158927365251373],
                [45.506757542009446, 9.161935644109203],
                [45.50464228570591, 9.161929579437905],
                [45.504646510364886, 9.158921413242322],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon346);
 var myPolygon347 = new ymaps.Polygon([
            [
                [45.51937065505577, 9.210115227507751],
                [45.519365080857156, 9.213124169424924],
                [45.517249835437774, 9.213116184185727],
                [45.51725540922752, 9.21010735500418],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon347);
 var myPolygon348 = new ymaps.Polygon([
            [
                [45.52147467161889, 9.216141209329336],
                [45.52146893848673, 9.219150262205977],
                [45.51935369469037, 9.219142050582857],
                [45.51935942740201, 9.216133110454136],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon348);
 var myPolygon349 = new ymaps.Polygon([
            [
                [45.523601144348966, 9.210130975141276],
                [45.52359556933254, 9.213140142567312],
                [45.521480325488746, 9.213132155552078],
                [45.52148590009625, 9.210123100886744],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon349);
 var myPolygon350 = new ymaps.Polygon([
            [
                [45.53201528010611, 9.234239404085443],
                [45.532009069124, 9.23724901521892],
                [45.529893831913135, 9.237240122167725],
                [45.52990004243968, 9.234230623844095],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon350);
 var myPolygon351 = new ymaps.Polygon([
            [
                [45.532009069124, 9.23724901521892],
                [45.532002778850966, 9.24025862536334],
                [45.52988754210149, 9.24024961950243],
                [45.529893831913135, 9.237240122167725],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon351);
 var myPolygon352 = new ymaps.Polygon([
            [
                [45.53191378986094, 9.279383461528473],
                [45.531906389522746, 9.28239305650881],
                [45.5297911598434, 9.282382471327065],
                [45.529798559638785, 9.279372989154364],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon352);
 var myPolygon353 = new ymaps.Polygon([
            [
                [45.5405002809676, 9.222234275178954],
                [45.54049438542022, 9.225244341510157],
                [45.53837914957362, 9.225235895942902],
                [45.538385044688546, 9.222225942472264],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon353);
 var myPolygon354 = new ymaps.Polygon([
            [
                [45.398890857429706, 9.15261955455359],
                [45.3988868060901, 9.155622104871682],
                [45.3967715090184, 9.155616298518847],
                [45.39677556006088, 9.152613860226614],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon354);
 var myPolygon355 = new ymaps.Polygon([
            [
                [45.430662729987354, 9.116654213131321],
                [45.430659622356146, 9.119658452111366],
                [45.428544333907546, 9.119653982635095],
                [45.42854744131082, 9.116649855868598],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon355);
 var myPolygon356 = new ymaps.Polygon([
            [
                [45.43907316482724, 9.158737228703929],
                [45.439068949763715, 9.161741908573443],
                [45.43695366826432, 9.161735865430868],
                [45.436957883018685, 9.158731297823676],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon356);
 var myPolygon357 = new ymaps.Polygon([
            [
                [45.4411966394657, 9.152733573990037],
                [45.44119258217844, 9.1557383674398],
                [45.43907730085385, 9.155732548175543],
                [45.43908135784352, 9.152727867000744],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon357);
 var myPolygon358 = new ymaps.Polygon([
            [
                [45.44112223776721, 9.20081018462182],
                [45.44111691580196, 9.203814966230883],
                [45.439001640027314, 9.203807350580323],
                [45.4390069616022, 9.200802681244612],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon358);
 var myPolygon359 = new ymaps.Polygon([
            [
                [45.443247920712395, 9.194807898554208],
                [45.44324275645236, 9.197812794104028],
                [45.44112748069049, 9.197805402179169],
                [45.441132644571724, 9.194800618915394],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon359);
 var myPolygon360 = new ymaps.Polygon([
            [
                [45.44544264133385, 9.140724911505123],
                [45.44543889966914, 9.143729932004165],
                [45.44332361876349, 9.14372456064699],
                [45.44332736015376, 9.1407196524482],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon360);
 var myPolygon361 = new ymaps.Polygon([
            [
                [45.44542720034809, 9.152744989870776],
                [45.44542314246558, 9.155750007907892],
                [45.443307862715685, 9.155744187350553],
                [45.44331192030055, 9.152739281613352],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon361);
 var myPolygon362 = new ymaps.Polygon([
            [
                [45.44540612039261, 9.167770073464867],
                [45.445401667238855, 9.170775088143856],
                [45.44328638906411, 9.170768706088307],
                [45.44329084189122, 9.167763803708773],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon362);
 var myPolygon363 = new ymaps.Polygon([
            [
                [45.447521398106524, 9.167776343917536],
                [45.44751694462614, 9.170781470908457],
                [45.445401667238855, 9.170775088143856],
                [45.44540612039261, 9.167770073464867],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon363);
 var myPolygon364 = new ymaps.Polygon([
            [
                [45.44958333455003, 9.2008402064677],
                [45.44957801102307, 9.20384543729491],
                [45.44746273839942, 9.203837818259403],
                [45.44746806153589, 9.200832699755443],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon364);
 var myPolygon365 = new ymaps.Polygon([
            [
                [45.44949517983727, 9.245918574312473],
                [45.44948867034026, 9.248923791131448],
                [45.447373404269506, 9.24891448726197],
                [45.44737991328907, 9.245909382764335],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon365);
 var myPolygon366 = new ymaps.Polygon([
            [
                [45.45177701547054, 9.149756762802395],
                [45.45177303576677, 9.152762118448573],
                [45.44965775808119, 9.152756408288301],
                [45.449661737493045, 9.149751164979557],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon366);
 var myPolygon367 = new ymaps.Polygon([
            [
                [45.45598250108799, 9.167801432695908],
                [45.45597804630074, 9.170807009059354],
                [45.45386277206328, 9.170800623457565],
                [45.45386722652378, 9.167795159455974],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon367);
 var myPolygon368 = new ymaps.Polygon([
            [
                [45.45595943632122, 9.18282930729291],
                [45.45595458611896, 9.185834879983815],
                [45.453839313602245, 9.185827932574236],
                [45.45384416344876, 9.182822472244686],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon368);
 var myPolygon369 = new ymaps.Polygon([
            [
                [45.45594464846596, 9.19184602303725],
                [45.45593956101533, 9.19485159337481],
                [45.45382428960066, 9.194844308881805],
                [45.453829376678144, 9.19183885090528],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon369);
 var myPolygon370 = new ymaps.Polygon([
            [
                [45.45811480443085, 9.155784944835126],
                [45.45811066567293, 9.15879063628659],
                [45.45599539095063, 9.158784699473182],
                [45.45599952940498, 9.15577912039643],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon370);
 var myPolygon371 = new ymaps.Polygon([
            [
                [45.45808878554785, 9.173819083398836],
                [45.45808417225606, 9.176824770704863],
                [45.45596889947699, 9.176818159645151],
                [45.455973512430404, 9.173812584713264],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon371);
 var myPolygon372 = new ymaps.Polygon([
            [
                [45.458074708406144, 9.182836143100614],
                [45.4580698578481, 9.185841828165357],
                [45.45595458611896, 9.185834879983815],
                [45.45595943632122, 9.18282930729291],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon372);
 var myPolygon373 = new ymaps.Polygon([
            [
                [45.45802820619712, 9.209887279839963],
                [45.45802264384327, 9.212892957506574],
                [45.455907375577155, 9.212884997965428],
                [45.45591293752304, 9.209879432671649],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon373);
 var myPolygon374 = new ymaps.Polygon([
            [
                [45.462336994289636, 9.16180842747103],
                [45.46233269672317, 9.164814342377149],
                [45.4602174242002, 9.164808179445176],
                [45.46022172145146, 9.161802376938562],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon374);
 var myPolygon375 = new ymaps.Polygon([
            [
                [45.4622587411819, 9.209902976792595],
                [45.46225317801198, 9.212908879242326],
                [45.46013791132153, 9.212900917932169],
                [45.4601434740834, 9.209895127880241],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon375);
 var myPolygon376 = new ymaps.Polygon([
            [
                [45.46435127854763, 9.221934880658424],
                [45.464345398547856, 9.224940891904264],
                [45.46223013433558, 9.224932480069468],
                [45.46223601390407, 9.221926581233427],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon376);
 var myPolygon377 = new ymaps.Polygon([
            [
                [45.4665799575211, 9.152802107340063],
                [45.46657589666103, 9.155808249062812],
                [45.46446062478448, 9.155802422034775],
                [45.4644646853467, 9.15279639273679],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon377);
 var myPolygon378 = new ymaps.Polygon([
            [
                [45.46862075622979, 9.200907804423712],
                [45.468615429187345, 9.203914046721987],
                [45.46650016365339, 9.20390642006359],
                [45.46650549030511, 9.200900290200947],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon378);
 var myPolygon379 = new ymaps.Polygon([
            [
                [45.470814481839845, 9.14980717120692],
                [45.47081049950799, 9.152813538451893],
                [45.4686952289082, 9.152807822578405],
                [45.46869921094796, 9.149801567783266],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon379);
 var myPolygon380 = new ymaps.Polygon([
            [
                [45.470784943914474, 9.170851728144394],
                [45.47078040771558, 9.173858090680284],
                [45.468665139322965, 9.1738515876605],
                [45.46866967518913, 9.170845337573796],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon380);
 var myPolygon381 = new ymaps.Polygon([
            [
                [45.47292170756671, 9.155825734032591],
                [45.47291756668318, 9.158832212456753],
                [45.470802297472325, 9.158826271023631],
                [45.47080643805213, 9.155819905061627],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon381);
 var myPolygon382 = new ymaps.Polygon([
            [
                [45.47288636486911, 9.179877542236996],
                [45.47288159094922, 9.182884015028636],
                [45.47076632437712, 9.182877173901682],
                [45.470771097946866, 9.179870813571423],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon382);
 var myPolygon383 = new ymaps.Polygon([
            [
                [45.47288159094922, 9.182884015028636],
                [45.4728767379, 9.185890487059972],
                [45.47076147168386, 9.185883533471737],
                [45.47076632437712, 9.182877173901682],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon383);
 var myPolygon384 = new ymaps.Polygon([
            [
                [45.47492170778994, 9.224982965102429],
                [45.474915746498965, 9.227989537649263],
                [45.47280048666372, 9.227981008667168],
                [45.472806447517435, 9.224974548592485],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon384);
 var myPolygon385 = new ymaps.Polygon([
            [
                [45.47711689635106, 9.179891001811667],
                [45.477112121730755, 9.182897699563576],
                [45.47499685673375, 9.1828908569159],
                [45.47500163100385, 9.179884271650378],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon385);
 var myPolygon386 = new ymaps.Polygon([
            [
                [45.477071075699556, 9.206951253150118],
                [45.47706558881289, 9.209957943607321],
                [45.474950327229, 9.209950088587071],
                [45.474955813713215, 9.20694351061526],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon386);
 var myPolygon387 = new ymaps.Polygon([
            [
                [45.47926336959162, 9.158850040718377],
                [45.479259148649646, 9.161856855943405],
                [45.47714388211043, 9.161850800029493],
                [45.477148102742824, 9.158844097304033],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon387);
 var myPolygon388 = new ymaps.Polygon([
            [
                [45.48343801772929, 9.194946365481076],
                [45.483432846267036, 9.197953396837946],
                [45.481317585471174, 9.197945989290533],
                [45.48132275655411, 9.19493907045702],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon388);
 var myPolygon389 = new ymaps.Polygon([
            [
                [45.48342226586834, 9.203967457069089],
                [45.48341685693203, 9.206974485918352],
                [45.48130159730896, 9.206966740801546],
                [45.481307005848535, 9.203959824475303],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon389);
 var myPolygon390 = new ymaps.Polygon([
            [
                [45.48334577539818, 9.243058761383653],
                [45.48333933741415, 9.246065778065901],
                [45.481224083477, 9.246056570161215],
                [45.48123052098882, 9.243049666000319],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon390);
 var myPolygon391 = new ymaps.Polygon([
            [
                [45.48556338430818, 9.188939371110123],
                [45.48555837079449, 9.191946516612283],
                [45.483443110033434, 9.191939333313346],
                [45.48344812317938, 9.188932300347275],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon391);
 var myPolygon392 = new ymaps.Polygon([
            [
                [45.487683579361, 9.185939183822116],
                [45.4876786446494, 9.18894644265892],
                [45.48556338430818, 9.188939371110123],
                [45.485568318657826, 9.185932224822018],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon392);
 var myPolygon393 = new ymaps.Polygon([
            [
                [45.48980847189656, 9.179931398491279],
                [45.489803695174466, 9.182938771424089],
                [45.48768843490269, 9.182931924211763],
                [45.487693211274426, 9.179924663840373],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon393);
 var myPolygon394 = new ymaps.Polygon([
            [
                [45.489768041201344, 9.203990359941177],
                [45.48976263107465, 9.206997726434537],
                [45.487647373814866, 9.206989978734727],
                [45.48765278354474, 9.203982724801914],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon394);
 var myPolygon395 = new ymaps.Polygon([
            [
                [45.49186682895628, 9.213020430531822],
                [45.49186118088953, 9.216027906976633],
                [45.48974592564291, 9.216019820697142],
                [45.489751573295365, 9.213012456825027],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon395);
 var myPolygon396 = new ymaps.Polygon([
            [
                [45.49409389120175, 9.140846031239684],
                [45.49409014321926, 9.143853638091453],
                [45.49197488042017, 9.14384825298804],
                [45.49197862812775, 9.140840758723913],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon396);
 var myPolygon397 = new ymaps.Polygon([
            [
                [45.49618125261821, 9.161905327493765],
                [45.49617695000507, 9.164913042491758],
                [45.49406169008035, 9.164906868590975],
                [45.49406599237789, 9.161899266192538],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon397);
 var myPolygon398 = new ymaps.Polygon([
            [
                [45.49607426717795, 9.225067181670733],
                [45.49606830151271, 9.228074879626806],
                [45.49395304955722, 9.228066341159757],
                [45.49395901478489, 9.2250587558009],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon398);
 var myPolygon399 = new ymaps.Polygon([
            [
                [45.49603728530326, 9.24311335491873],
                [45.496030844485205, 9.246121046991805],
                [45.49391559527714, 9.246111832944193],
                [45.49392203562278, 9.24310425346754],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon399);
 var myPolygon400 = new ymaps.Polygon([
            [
                [45.49827420543485, 9.176950520529534],
                [45.4982695065101, 9.179958344582198],
                [45.49615424903797, 9.179951606936172],
                [45.49615894761808, 9.176943895495086],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon400);
 var myPolygon401 = new ymaps.Polygon([
            [
                [45.49820694190231, 9.216052171208961],
                [45.49820121339418, 9.219059984547679],
                [45.49608596093128, 9.219051782961015],
                [45.496091689019224, 9.216044082232418],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon401);
 var myPolygon402 = new ymaps.Polygon([
            [
                [45.498146092905095, 9.246130262063721],
                [45.49813957241686, 9.24913806572128],
                [45.49602432447525, 9.249128738040564],
                [45.496030844485205, 9.246121046991805],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon402);
 var myPolygon403 = new ymaps.Polygon([
            [
                [45.50465065580701, 9.155913246385063],
                [45.504646510364886, 9.158921413242322],
                [45.502531252964104, 9.158915461894944],
                [45.502535398102175, 9.155907407687499],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon403);
 var myPolygon404 = new ymaps.Polygon([
            [
                [45.50462913642853, 9.170954073929373],
                [45.50462459490275, 9.17396223735302],
                [45.50250933910945, 9.173955722757967],
                [45.50251388030213, 9.170947671983663],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon404);
 var myPolygon405 = new ymaps.Polygon([
            [
                [45.50454115707107, 9.22209274511089],
                [45.50453526887081, 9.22510089451825],
                [45.5024200196295, 9.225092464900888],
                [45.502425907397864, 9.222084428140958],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon405);
 var myPolygon406 = new ymaps.Polygon([
            [
                [45.50452930145494, 9.228109042988406],
                [45.50452325482353, 9.231117190508837],
                [45.50240800646344, 9.231108535596997],
                [45.502414052651346, 9.22810050072374],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon406);
 var myPolygon407 = new ymaps.Polygon([
            [
                [45.5067305285236, 9.179985302657693],
                [45.506725748997624, 9.18299357653245],
                [45.50461049502607, 9.182986723228098],
                [45.50461527420146, 9.179978562014906],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon407);
 var myPolygon408 = new ymaps.Polygon([
            [
                [45.506710935086495, 9.19201839353479],
                [45.50670583867189, 9.195026664286507],
                [45.504590586160745, 9.195019360336945],
                [45.504595682201526, 9.19201120224637],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon408);
 var myPolygon409 = new ymaps.Polygon([
            [
                [45.51520540524926, 9.17098609433642],
                [45.515200862057526, 9.173994821194686],
                [45.51308561020146, 9.173988302977168],
                [45.513090153059956, 9.170979688830887],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon409);
 var myPolygon410 = new ymaps.Polygon([
            [
                [45.515151071638314, 9.204082047846],
                [45.51514565674743, 9.207090766042283],
                [45.51303040894063, 9.207083007999874],
                [45.51303582343434, 9.204074402514394],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon410);
 var myPolygon411 = new ymaps.Polygon([
            [
                [45.51742011025913, 9.080727038169332],
                [45.51741794429703, 9.083735893670152],
                [45.5153026857591, 9.083732756498689],
                [45.51530485156235, 9.080724013724561],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon411);
 var myPolygon412 = new ymaps.Polygon([
            [
                [45.51953536816905, 9.080730062950414],
                [45.519533202048045, 9.083739031190461],
                [45.51741794429703, 9.083735893670152],
                [45.51742011025913, 9.080727038169332],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon412);
 var myPolygon413 = new ymaps.Polygon([
            [
                [45.519435907265645, 9.170998907484355],
                [45.51943136340734, 9.174007859804183],
                [45.51731611312614, 9.174001340136991],
                [45.51732065665115, 9.170992500554211],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon413);
 var myPolygon414 = new ymaps.Polygon([
            [
                [45.52777859391421, 9.237231230105444],
                [45.52777230456393, 9.240240614642985],
                [45.52565706623828, 9.240231610784864],
                [45.525663355127236, 9.237222339031952],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon414);
 var myPolygon415 = new ymaps.Polygon([
            [
                [45.527683328628044, 9.279362517944792],
                [45.52767592937544, 9.282371887322396],
                [45.525560698118866, 9.282361304494646],
                [45.52556809682875, 9.279352047899595],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon415);
 var myPolygon416 = new ymaps.Polygon([
            [
                [45.529912225637204, 9.22821162428026],
                [45.529906173681056, 9.231221124544096],
                [45.52779093477688, 9.23121245807656],
                [45.52779698628911, 9.2282030706103],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon416);
 var myPolygon417 = new ymaps.Polygon([
            [
                [45.53202746419733, 9.22822017890151],
                [45.532021411797245, 9.231229791975457],
                [45.529906173681056, 9.231221124544096],
                [45.529912225637204, 9.22821162428026],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon417);
 var myPolygon418 = new ymaps.Polygon([
            [
                [45.532021411797245, 9.231229791975457],
                [45.53201528010611, 9.234239404085443],
                [45.52990004243968, 9.234230623844095],
                [45.529906173681056, 9.231221124544096],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon418);
 var myPolygon419 = new ymaps.Polygon([
            [
                [45.54260364517882, 9.228262966281607],
                [45.54259759055853, 9.231273143594356],
                [45.54048235638223, 9.23126447134186],
                [45.540488410558424, 9.228254406901977],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon419);
 var myPolygon420 = new ymaps.Polygon([
            [
                [45.38407137487445, 9.161585004787996],
                [45.384067088955476, 9.164586769216553],
                [45.38195178729793, 9.164580631558447],
                [45.38195607290254, 9.161578979068453],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon420);
 var myPolygon421 = new ymaps.Polygon([
            [
                [45.403133131976155, 9.143622618138084],
                [45.40312931685778, 9.146625394405293],
                [45.401014020486635, 9.146619922915374],
                [45.40101783532518, 9.143617258699155],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon421);
 var myPolygon422 = new ymaps.Polygon([
            [
                [45.40312931685778, 9.146625394405293],
                [45.40312542280085, 9.149628170064917],
                [45.401010126715285, 9.149622586524089],
                [45.401014020486635, 9.146619922915374],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon422);
 var myPolygon423 = new ymaps.Polygon([
            [
                [45.434899284075726, 9.110654000779812],
                [45.43489633404037, 9.11365846518018],
                [45.43278104671585, 9.113654219187913],
                [45.43278399653485, 9.110649867026158],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon423);
 var myPolygon424 = new ymaps.Polygon([
            [
                [45.44112748069049, 9.197805402179169],
                [45.44112223776721, 9.20081018462182],
                [45.4390069616022, 9.200802681244612],
                [45.43901220414092, 9.197798011075424],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon424);
 var myPolygon425 = new ymaps.Polygon([
            [
                [45.44110603474578, 9.209824526898343],
                [45.44110047565496, 9.212829305931796],
                [45.43898520108613, 9.212821353461884],
                [45.43899075976921, 9.209816686701432],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon425);
 var myPolygon426 = new ymaps.Polygon([
            [
                [45.44110047565496, 9.212829305931796],
                [45.4410948375224, 9.215834084081768],
                [45.43897956336711, 9.215826019338976],
                [45.43898520108613, 9.212821353461884],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon426);
 var myPolygon427 = new ymaps.Polygon([
            [
                [45.44327724626501, 9.176778508708026],
                [45.44327255629312, 9.179783408923258],
                [45.44115727834551, 9.179776690716311],
                [45.44116196797339, 9.176771902787763],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon427);
 var myPolygon428 = new ymaps.Polygon([
            [
                [45.447451854948596, 9.209848052715614],
                [45.44744629463437, 9.212853168642908],
                [45.445331022429066, 9.212845213522188],
                [45.44533658233547, 9.209840209905316],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon428);
 var myPolygon429 = new ymaps.Polygon([
            [
                [45.45592914886606, 9.200862731609194],
                [45.455923824167535, 9.203868299481048],
                [45.45380855390714, 9.203860677905617],
                [45.4538138782151, 9.20085522239446],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon429);
 var myPolygon430 = new ymaps.Polygon([
            [
                [45.45584097475271, 9.245946155084876],
                [45.455834463823116, 9.248951708942755],
                [45.45371920011707, 9.248942401971702],
                [45.4537257105691, 9.245936960472603],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon430);
 var myPolygon431 = new ymaps.Polygon([
            [
                [45.4580698578481, 9.185841828165357],
                [45.458064928201416, 9.188847512458029],
                [45.45594965683386, 9.188840451902756],
                [45.45595458611896, 9.185834879983815],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon431);
 var myPolygon432 = new ymaps.Polygon([
            [
                [45.46022172145146, 9.161802376938562],
                [45.4602174242002, 9.164808179445176],
                [45.45810215088984, 9.16480201719796],
                [45.458106447825905, 9.161796327078363],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon432);
 var myPolygon433 = new ymaps.Polygon([
            [
                [45.46020859241332, 9.17081978239165],
                [45.46020405787782, 9.17382558280653],
                [45.45808878554785, 9.173819083398836],
                [45.45809331975076, 9.170813395370685],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon433);
 var myPolygon434 = new ymaps.Polygon([
            [
                [45.464434600175345, 9.17383858378868],
                [45.464429985868286, 9.176844608292068],
                [45.46231471545171, 9.176837995028226],
                [45.46231932942031, 9.173832082936443],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon434);
 var myPolygon435 = new ymaps.Polygon([
            [
                [45.466530936888894, 9.185869628613263],
                [45.46652600579564, 9.188875762525754],
                [45.4644107375785, 9.188868698831616],
                [45.46441566831008, 9.185862677342813],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon435);
 var myPolygon436 = new ymaps.Polygon([
            [
                [45.46651073784526, 9.19789415950335],
                [45.46650549030511, 9.200900290200947],
                [45.46439022359274, 9.200892776813141],
                [45.464395470747974, 9.197886758538793],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon436);
 var myPolygon437 = new ymaps.Polygon([
            [
                [45.47079807776861, 9.161832636325409],
                [45.47079377894102, 9.16483900095446],
                [45.46867850956765, 9.16483283528253],
                [45.468682808079926, 9.161826583102954],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon437);
 var myPolygon438 = new ymaps.Polygon([
            [
                [45.47072528737721, 9.206928028126661],
                [45.47071980169782, 9.209934381165198],
                [45.46860453775054, 9.209926528763333],
                [45.46861002302757, 9.20692028817269],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon438);
 var myPolygon439 = new ymaps.Polygon([
            [
                [45.4729336554386, 9.14680629492319],
                [45.47292975194446, 9.149812775253316],
                [45.470814481839845, 9.14980717120692],
                [45.47081838504766, 9.146800803339213],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon439);
 var myPolygon440 = new ymaps.Polygon([
            [
                [45.472904669254476, 9.167851643717317],
                [45.47290021185237, 9.170858119425203],
                [45.470784943914474, 9.170851728144394],
                [45.47078940098962, 9.167845364898287],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon440);
 var myPolygon441 = new ymaps.Polygon([
            [
                [45.47506016156933, 9.137792005089944],
                [45.475056495196064, 9.140798599688702],
                [45.47294122503715, 9.140793332444467],
                [45.47294489114149, 9.13778685032087],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon441);
 var myPolygon442 = new ymaps.Polygon([
            [
                [45.47505274968703, 9.143805193702052],
                [45.47504892504226, 9.146811787117494],
                [45.4729336554386, 9.14680629492319],
                [45.472937479802845, 9.143799813982744],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon442);
 var myPolygon443 = new ymaps.Polygon([
            [
                [45.47502431532559, 9.164851334354076],
                [45.475019936731904, 9.16785792323416],
                [45.472904669254476, 9.167851643717317],
                [45.47290904752701, 9.16484516731161],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon443);
 var myPolygon444 = new ymaps.Polygon([
            [
                [45.47717543120997, 9.137797160431925],
                [45.477171764567785, 9.14080386751834],
                [45.475056495196064, 9.140798599688702],
                [45.47506016156933, 9.137792005089944],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon444);
 var myPolygon445 = new ymaps.Polygon([
            [
                [45.479290700063416, 9.13780231634689],
                [45.479287033152254, 9.140809135933468],
                [45.477171764567785, 9.14080386751834],
                [45.47717543120997, 9.137797160431925],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon445);
 var myPolygon446 = new ymaps.Polygon([
            [
                [45.47911526579133, 9.243040571627814],
                [45.47910882875168, 9.246047363279859],
                [45.47699357323818, 9.246038157421696],
                [45.477000009805685, 9.243031478265998],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon446);
 var myPolygon447 = new ymaps.Polygon([
            [
                [45.48561330812035, 9.155860721465704],
                [45.48560916541398, 9.158867874925313],
                [45.4834939009272, 9.158861929528928],
                [45.4834980433297, 9.15585488860649],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon447);
 var myPolygon448 = new ymaps.Polygon([
            [
                [45.4855918029435, 9.170896482030058],
                [45.48558726441489, 9.173903632060275],
                [45.48347200153452, 9.173897123979426],
                [45.483476539730255, 9.170890086485908],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon448);
 var myPolygon449 = new ymaps.Polygon([
            [
                [45.4855481062752, 9.197960805208721],
                [45.485542855269706, 9.200967948277981],
                [45.48342759564669, 9.200960427371452],
                [45.483432846267036, 9.197953396837946],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon449);
 var myPolygon450 = new ymaps.Polygon([
            [
                [45.48548599121459, 9.231039330927569],
                [45.48547986941042, 9.234046464113037],
                [45.4833646144073, 9.234037705321144],
                [45.483370735762435, 9.231030684670078],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon450);
 var myPolygon451 = new ymaps.Polygon([
            [
                [45.487641884915504, 9.209997231806426],
                [45.487636316846675, 9.213004484004497],
                [45.485521059610136, 9.212996512070099],
                [45.485526627270545, 9.209989372419825],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon451);
 var myPolygon452 = new ymaps.Polygon([
            [
                [45.48974592564291, 9.216019820697142],
                [45.4897401988153, 9.219027183670482],
                [45.487624943200906, 9.219018985729702],
                [45.48763066960845, 9.216011735316425],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon452);
 var myPolygon453 = new ymaps.Polygon([
            [
                [45.489722543282326, 9.228049267072752],
                [45.48971649975483, 9.231056626325886],
                [45.487601245878714, 9.231047978146128],
                [45.487607288962934, 9.228040731452543],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon453);
 var myPolygon454 = new ymaps.Polygon([
            [
                [45.491967147458475, 9.149863239708099],
                [45.491963162204456, 9.152870732139004],
                [45.48984789947762, 9.15286500990926],
                [45.489851884439325, 9.149857630053237],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon454);
 var myPolygon455 = new ymaps.Polygon([
            [
                [45.49187239784202, 9.210012953200632],
                [45.49186682895628, 9.213020430531822],
                [45.489751573295365, 9.213012456825027],
                [45.48975714177264, 9.210005092066657],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon455);
 var myPolygon456 = new ymaps.Polygon([
            [
                [45.49183779681378, 9.228057803641779],
                [45.49183175284295, 9.231065275466976],
                [45.48971649975483, 9.231056626325886],
                [45.489722543282326, 9.228049267072752],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon456);
 var myPolygon457 = new ymaps.Polygon([
            [
                [45.50034965057535, 9.201020618037605],
                [45.50034431766851, 9.204028548370683],
                [45.49822906395053, 9.20402090898664],
                [45.49823439646621, 9.201013091276794],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon457);
 var myPolygon458 = new ymaps.Polygon([
            [
                [45.502531252964104, 9.158915461894944],
                [45.502527028615006, 9.161923515440805],
                [45.500411770736754, 9.161917452117807],
                [45.50041599477599, 9.158909511209147],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon458);
 var myPolygon459 = new ymaps.Polygon([
            [
                [45.504633598737705, 9.167945909793957],
                [45.50462913642853, 9.170954073929373],
                [45.50251388030213, 9.170947671983663],
                [45.50251834228399, 9.167939620497688],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon459);
 var myPolygon460 = new ymaps.Polygon([
            [
                [45.50456940983604, 9.207051984454381],
                [45.504563917714755, 9.210060138359896],
                [45.50244866637209, 9.210052271980924],
                [45.50245415809052, 9.207044230723447],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon460);
 var myPolygon461 = new ymaps.Polygon([
            [
                [45.506735228827274, 9.176977028033491],
                [45.5067305285236, 9.179985302657693],
                [45.50461527420146, 9.179978562014906],
                [45.50461997416036, 9.176970400052374],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon461);
 var myPolygon462 = new ymaps.Polygon([
            [
                [45.50670066303527, 9.198034934226149],
                [45.50669540817667, 9.20104320334119],
                [45.5045801564306, 9.201035674069686],
                [45.504585410903736, 9.19802751761556],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon462);
 var myPolygon463 = new ymaps.Polygon([
            [
                [45.51314878712618, 9.125850398194952],
                [45.5131454328706, 9.128859021707854],
                [45.51103017583913, 9.128854194716236],
                [45.51103352984867, 9.125845683904062],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon463);
 var myPolygon464 = new ymaps.Polygon([
            [
                [45.515140162611495, 9.210099483375911],
                [45.51513458923058, 9.21310819983436],
                [45.51301934223557, 9.213100216370712],
                [45.513024915207694, 9.210091612622824],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon464);
 var myPolygon465 = new ymaps.Polygon([
            [
                [45.51726090376647, 9.20709852494734],
                [45.51725540922752, 9.21010735500418],
                [45.515140162611495, 9.210099483375911],
                [45.51514565674743, 9.207090766042283],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon465);
 var myPolygon466 = new ymaps.Polygon([
            [
                [45.52366186160739, 9.174020901313636],
                [45.52365723781354, 9.17703007841999],
                [45.52154198944639, 9.177023444540698],
                [45.521546612901076, 9.174014380196368],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon466);
 var myPolygon467 = new ymaps.Polygon([
            [
                [45.53415456976682, 9.222209279838873],
                [45.53414867551668, 9.225219007626023],
                [45.53203343730631, 9.225210564876148],
                [45.5320393311241, 9.222200949911917],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon467);
 var myPolygon468 = new ymaps.Polygon([
            [
                [45.53839086049478, 9.219215988074923],
                [45.538385044688546, 9.222225942472264],
                [45.53626980762163, 9.22221761069228],
                [45.53627562300126, 9.219207769143084],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon468);
 var myPolygon469 = new ymaps.Polygon([
            [
                [45.53834848437089, 9.240285648956226],
                [45.53834211340519, 9.24329559660306],
                [45.53622687948729, 9.243286474889716],
                [45.53623324998568, 9.240276640090102],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon469);
 var myPolygon470 = new ymaps.Polygon([
            [
                [45.54259759055853, 9.231273143594356],
                [45.5425914566181, 9.234283319942481],
                [45.54047622289173, 9.234274534817253],
                [45.54048235638223, 9.23126447134186],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon470);
 var myPolygon471 = new ymaps.Polygon([
            [
                [45.544804971661264, 9.180106762482314],
                [45.544800185820506, 9.18311706640885],
                [45.54268494602414, 9.183110199373068],
                [45.54268973151386, 9.180100008333826],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon471);
 var myPolygon472 = new ymaps.Polygon([
            [
                [45.55109366761287, 9.213244054635735],
                [45.55108800793384, 9.216254688202817],
                [45.54897277474644, 9.216246576707782],
                [45.54897843401032, 9.213236056064428],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon472);
 var myPolygon473 = new ymaps.Polygon([
            [
                [45.55531273208043, 9.21928177244966],
                [45.555306912860345, 9.22229263008414],
                [45.55319168209643, 9.222284290886972],
                [45.55319750088968, 9.219273546201093],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon473);
 var myPolygon474 = new ymaps.Polygon([
            [
                [45.55739185418683, 9.237355809018228],
                [45.557385558374435, 9.240366773858296],
                [45.555270331081886, 9.240357755969134],
                [45.55527662643247, 9.237346904089444],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon474);
 var myPolygon475 = new ymaps.Polygon([
            [
                [45.567967981138075, 9.237400348525034],
                [45.56796168301615, 9.240411878355532],
                [45.56584645966394, 9.240402855448773],
                [45.565852757323896, 9.2373914386415],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon475);
 var myPolygon476 = new ymaps.Polygon([
            [
                [45.37772118162045, 9.164568358286072],
                [45.377716817775614, 9.16756978625509],
                [45.375601514075775, 9.167563538739437],
                [45.375605877600535, 9.164562222671618],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon476);
 var myPolygon477 = new ymaps.Polygon([
            [
                [45.40312542280085, 9.149628170064917],
                [45.403121449805354, 9.152630945104516],
                [45.40100615401121, 9.152625249512862],
                [45.401010126715285, 9.149622586524089],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon477);
 var myPolygon478 = new ymaps.Polygon([
            [
                [45.434796899839704, 9.188769889477005],
                [45.43479189514411, 9.191774337561617],
                [45.43267661547989, 9.191767173393004],
                [45.43268161980843, 9.188762837544774],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon478);
 var myPolygon479 = new ymaps.Polygon([
            [
                [45.43695366826432, 9.161735865430868],
                [45.4369493744789, 9.164740432366806],
                [45.43483409250707, 9.164734277645735],
                [45.434838385977535, 9.161729822959556],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon479);
 var myPolygon480 = new ymaps.Polygon([
            [
                [45.436912179083386, 9.188776942192607],
                [45.43690717402068, 9.19178150252608],
                [45.43479189514411, 9.191774337561617],
                [45.434796899839704, 9.188769889477005],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon480);
 var myPolygon481 = new ymaps.Polygon([
            [
                [45.43905583035224, 9.170755944103986],
                [45.439051299141596, 9.173760621213267],
                [45.43693601893683, 9.173754129022363],
                [45.43694054981511, 9.170749564175024],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon481);
 var myPolygon482 = new ymaps.Polygon([
            [
                [45.44117111010191, 9.170762324741716],
                [45.441166578558885, 9.173767114125408],
                [45.439051299141596, 9.173760621213267],
                [45.43905583035224, 9.170755944103986],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon482);
 var myPolygon483 = new ymaps.Polygon([
            [
                [45.4410948375224, 9.215834084081768],
                [45.44108912034817, 9.218838861335783],
                [45.438973846612214, 9.218830684320237],
                [45.43897956336711, 9.215826019338976],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon483);
 var myPolygon484 = new ymaps.Polygon([
            [
                [45.44962768835319, 9.173793092988296],
                [45.44962307641476, 9.176798330872652],
                [45.44750780048568, 9.176791722750368],
                [45.44751241208585, 9.173786597190226],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon484);
 var myPolygon485 = new ymaps.Polygon([
            [
                [45.44960876620606, 9.185814040070547],
                [45.44960383800552, 9.18881927494319],
                [45.44748856348753, 9.188812217525069],
                [45.44749349132659, 9.185807094976226],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon485);
 var myPolygon486 = new ymaps.Polygon([
            [
                [45.45178473766254, 9.143746049656599],
                [45.451780916102464, 9.146751406534245],
                [45.44966563783889, 9.146745921048923],
                [45.44966945911865, 9.143740676508884],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon486);
 var myPolygon487 = new ymaps.Polygon([
            [
                [45.453903758181866, 9.140745953576504],
                [45.45390001541921, 9.143751423401325],
                [45.45178473766254, 9.143746049656599],
                [45.45178848015071, 9.140740692181943],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon487);
 var myPolygon488 = new ymaps.Polygon([
            [
                [45.453834384678686, 9.18883339213193],
                [45.453829376678144, 9.19183885090528],
                [45.451714104102685, 9.191831679570138],
                [45.451719111735905, 9.188826333145443],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon488);
 var myPolygon489 = new ymaps.Polygon([
            [
                [45.458126746169604, 9.146767866647474],
                [45.458122844679224, 9.149773560003084],
                [45.45600756906364, 9.14976796031407],
                [45.45601147026784, 9.146762379333431],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon489);
 var myPolygon490 = new ymaps.Polygon([
            [
                [45.458106447825905, 9.161796327078363],
                [45.45810215088984, 9.16480201719796],
                [45.455986876792075, 9.164795855635406],
                [45.45599117341298, 9.161790277890336],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon490);
 var myPolygon491 = new ymaps.Polygon([
            [
                [45.460189979703514, 9.182842979667898],
                [45.460185128789675, 9.185848777118967],
                [45.4580698578481, 9.185841828165357],
                [45.458074708406144, 9.182836143100614],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon491);
 var myPolygon492 = new ymaps.Polygon([
            [
                [45.4624164055947, 9.089666296744127],
                [45.46241400645482, 9.09267222433954],
                [45.46029872796795, 9.092668759017528],
                [45.46030112693186, 9.089662943823347],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon492);
 var myPolygon493 = new ymaps.Polygon([
            [
                [45.4623453521206, 9.155796595654213],
                [45.46234121275548, 9.158802511892556],
                [45.46022593960787, 9.158796573759682],
                [45.46023007866938, 9.155790769921024],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon493);
 var myPolygon494 = new ymaps.Polygon([
            [
                [45.46231932942031, 9.173832082936443],
                [45.46231471545171, 9.176837995028226],
                [45.460199444247635, 9.176831382499193],
                [45.46020405787782, 9.17382558280653],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon494);
 var myPolygon495 = new ymaps.Polygon([
            [
                [45.46229546857374, 9.188861635922354],
                [45.46229045910361, 9.191867544215189],
                [45.46017518967869, 9.191860369692094],
                [45.46018019878139, 9.188854573797858],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon495);
 var myPolygon496 = new ymaps.Polygon([
            [
                [45.462280202863006, 9.197879358396586],
                [45.46227495609264, 9.200885264260172],
                [45.460159687804826, 9.200877752541935],
                [45.46016493419036, 9.197871959076616],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon496);
 var myPolygon497 = new ymaps.Polygon([
            [
                [45.46211077615769, 9.279038487191027],
                [45.462103393711, 9.282044366133054],
                [45.45998813800685, 9.282033819710175],
                [45.45999551991206, 9.279028053162747],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon497);
 var myPolygon498 = new ymaps.Polygon([
            [
                [45.46449089429539, 9.131754170571131],
                [45.464487387480155, 9.134760204051613],
                [45.462372112853295, 9.134755164558653],
                [45.462375619411276, 9.131749243491006],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon498);
 var myPolygon499 = new ymaps.Polygon([
            [
                [45.46658393926879, 9.149795964982262],
                [45.4665799575211, 9.152802107340063],
                [45.4644646853467, 9.15279639273679],
                [45.46446866680233, 9.149790362803829],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon499);
 var myPolygon500 = new ymaps.Polygon([
            [
                [45.4665588620977, 9.167832809353293],
                [45.466554405676355, 9.170838947713325],
                [45.46443913537613, 9.170832558562873],
                [45.46444359147061, 9.167826532627137],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon500);
 var myPolygon501 = new ymaps.Polygon([
            [
                [45.46654987014289, 9.173845085363329],
                [45.46654525549735, 9.17685122229082],
                [45.464429985868286, 9.176844608292068],
                [45.464434600175345, 9.17383858378868],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon501);
 var myPolygon502 = new ymaps.Polygon([
            [
                [45.466494757890146, 9.206912549078776],
                [45.46648927301546, 9.209918677234024],
                [45.46437400749258, 9.20991082657715],
                [45.464379491964976, 9.20690481084481],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon502);
 var myPolygon503 = new ymaps.Polygon([
            [
                [45.46870693767272, 9.14378905633752],
                [45.46870311386947, 9.146795312365473],
                [45.46658784190403, 9.14678982200189],
                [45.46659166542682, 9.143783678411443],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon503);
 var myPolygon504 = new ymaps.Polygon([
            [
                [45.46868702747414, 9.158820330250744],
                [45.468682808079926, 9.161826583102954],
                [45.46656753760386, 9.161820530553133],
                [45.4665717566886, 9.158814390137996],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon504);
 var myPolygon505 = new ymaps.Polygon([
            [
                [45.468631172962475, 9.194895317334456],
                [45.46862600415486, 9.197901561290372],
                [45.46651073784526, 9.19789415950335],
                [45.466515906273756, 9.194888027983293],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon505);
 var myPolygon506 = new ymaps.Polygon([
            [
                [45.470802297472325, 9.158826271023631],
                [45.47079807776861, 9.161832636325409],
                [45.468682808079926, 9.161826583102954],
                [45.46868702747414, 9.158820330250744],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon506);
 var myPolygon507 = new ymaps.Polygon([
            [
                [45.47075653986715, 9.18888989226909],
                [45.47075152892702, 9.191896250281244],
                [45.468636262652616, 9.191889072568461],
                [45.4686412732252, 9.188882827004877],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon507);
 var myPolygon508 = new ymaps.Polygon([
            [
                [45.47294847811582, 9.134780367624444],
                [45.47294489114149, 9.13778685032087],
                [45.470829619926434, 9.137781696124623],
                [45.47083320663766, 9.134775325890931],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon508);
 var myPolygon509 = new ymaps.Polygon([
            [
                [45.472840550939104, 9.206935768940813],
                [45.472835064857314, 9.209942234439737],
                [45.47071980169782, 9.209934381165198],
                [45.47072528737721, 9.206928028126661],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon509);
 var myPolygon510 = new ymaps.Polygon([
            [
                [45.477060022785814, 9.212964633191485],
                [45.47705437761837, 9.215971321890118],
                [45.474939116856795, 9.215963241899457],
                [45.47494476161018, 9.21295666568597],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon510);
 var myPolygon511 = new ymaps.Polygon([
            [
                [45.47919707403752, 9.200945388065893],
                [45.47919174504101, 9.203952192729773],
                [45.47707648344576, 9.20394456183239],
                [45.4770818120514, 9.200937869666632],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon511);
 var myPolygon512 = new ymaps.Polygon([
            [
                [45.481378635653066, 9.158855984793313],
                [45.481374414401465, 9.161862912530406],
                [45.479259148649646, 9.161856855943405],
                [45.47926336959162, 9.158850040718377],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon512);
 var myPolygon513 = new ymaps.Polygon([
            [
                [45.481374414401465, 9.161862912530406],
                [45.481370113996974, 9.164869839594317],
                [45.47925484856058, 9.164863670495338],
                [45.479259148649646, 9.161856855943405],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon513);
 var myPolygon514 = new ymaps.Polygon([
            [
                [45.481273367330964, 9.222001309271194],
                [45.481267483879755, 9.225008220245266],
                [45.479152225971106, 9.224999800928694],
                [45.479158108990774, 9.2219930024644],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon514);
 var myPolygon515 = new ymaps.Polygon([
            [
                [45.48124935861613, 9.234028947502695],
                [45.48124315855846, 9.237035854658558],
                [45.47912790243402, 9.23702698530416],
                [45.47913410203694, 9.234020190657557],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon515);
 var myPolygon516 = new ymaps.Polygon([
            [
                [45.4834626876676, 9.179911196784033],
                [45.483457911996524, 9.18291823207011],
                [45.481342649362134, 9.182911387140576],
                [45.48134742468292, 9.179904464378392],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon516);
 var myPolygon517 = new ymaps.Polygon([
            [
                [45.485473668443106, 9.23705359632493],
                [45.485467388312756, 9.240060727550736],
                [45.4833521342251, 9.240051743690437],
                [45.48335841389483, 9.237044724998768],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon517);
 var myPolygon518 = new ymaps.Polygon([
            [
                [45.487668537716715, 9.19496095796186],
                [45.48766336549572, 9.197968214402971],
                [45.4855481062752, 9.197960805208721],
                [45.48555327811682, 9.194953661315985],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon518);
 var myPolygon519 = new ymaps.Polygon([
            [
                [45.48971037705251, 9.23406398461769],
                [45.489704175175454, 9.237071341935646],
                [45.48758892220332, 9.237062468637179],
                [45.48759512362549, 9.234055223878508],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon519);
 var myPolygon520 = new ymaps.Polygon([
            [
                [45.49197488042017, 9.14384825298804],
                [45.491971053530385, 9.146855746653607],
                [45.489855790224745, 9.146850249573708],
                [45.48985961683382, 9.143842868483187],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon520);
 var myPolygon521 = new ymaps.Polygon([
            [
                [45.491909162969066, 9.188960588114798],
                [45.491904148352006, 9.191968071300268],
                [45.489788889953786, 9.191960885605637],
                [45.489793904203026, 9.188953514993779],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon521);
 var myPolygon522 = new ymaps.Polygon([
            [
                [45.4939707076805, 9.219043582286014],
                [45.49396490082601, 9.222051169505482],
                [45.491849647213286, 9.222042857157048],
                [45.491855453641854, 9.219035382522543],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon522);
 var myPolygon523 = new ymaps.Polygon([
            [
                [45.496134662785614, 9.191982445086],
                [45.49612956823982, 9.194990152657242],
                [45.4940143117905, 9.194982852766394],
                [45.49401940596262, 9.191975257793684],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon523);
 var myPolygon524 = new ymaps.Polygon([
            [
                [45.496056132605375, 9.23409027267882],
                [45.4960499293634, 9.23709796774972],
                [45.4939346787555, 9.237089091491782],
                [45.493940881542464, 9.234081509017713],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon524);
 var myPolygon525 = new ymaps.Polygon([
            [
                [45.498212591212074, 9.21304435697098],
                [45.49820694190231, 9.216052171208961],
                [45.496091689019224, 9.216044082232418],
                [45.49609733791462, 9.213036380604676],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon525);
 var myPolygon526 = new ymaps.Polygon([
            [
                [45.504590586160745, 9.195019360336945],
                [45.504585410903736, 9.19802751761556],
                [45.50247015798457, 9.198020101829464],
                [45.502475332861955, 9.195012057199351],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon526);
 var myPolygon527 = new ymaps.Polygon([
            [
                [45.50671595227902, 9.189010121983523],
                [45.506710935086495, 9.19201839353479],
                [45.504595682201526, 9.19201120224637],
                [45.50460069902605, 9.189003043356356],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon527);
 var myPolygon528 = new ymaps.Polygon([
            [
                [45.50661352188362, 9.243158877354338],
                [45.506607078702906, 9.246167132597298],
                [45.50449183343571, 9.246157913426737],
                [45.504498276143806, 9.243149770842802],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon528);
 var myPolygon529 = new ymaps.Polygon([
            [
                [45.510925909305755, 9.201058264395687],
                [45.51092057444265, 9.204066758032788],
                [45.50880532466326, 9.204059114401062],
                [45.508810659135044, 9.20105073344982],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon529);
 var myPolygon530 = new ymaps.Polygon([
            [
                [45.510804157755686, 9.261227961376534],
                [45.51079723823538, 9.264236435635436],
                [45.50868199750258, 9.26422653831328],
                [45.50868891651536, 9.261218176737582],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon530);
 var myPolygon531 = new ymaps.Polygon([
            [
                [45.51300214788488, 9.222126022238696],
                [45.512996257956715, 9.225134622361027],
                [45.51088101186714, 9.22512618899408],
                [45.51088690136328, 9.222117701569283],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon531);
 var myPolygon532 = new ymaps.Polygon([
            [
                [45.51499192600359, 9.279299715133725],
                [45.514984530006764, 9.28230840800407],
                [45.51286929401847, 9.282297832234462],
                [45.51287668947282, 9.279289252071454],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon532);
 var myPolygon533 = new ymaps.Polygon([
            [
                [45.517232638564394, 9.222142666353204],
                [45.5172267477721, 9.225151491908195],
                [45.51511150325838, 9.225143056665688],
                [45.515117393618596, 9.222134343833293],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon533);
 var myPolygon534 = new ymaps.Polygon([
            [
                [45.52146312609235, 9.222159314169463],
                [45.52145723443578, 9.225168365207256],
                [45.519341991497896, 9.225159928088676],
                [45.51934788272231, 9.222150989798546],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon534);
 var myPolygon535 = new ymaps.Polygon([
            [
                [45.52144521333641, 9.231186464455623],
                [45.521439083893725, 9.234195512641119],
                [45.51932384228718, 9.234186737280313],
                [45.51932997128027, 9.231177801842094],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon535);
 var myPolygon536 = new ymaps.Polygon([
            [
                [45.52570515768918, 9.2161574097817],
                [45.525699423715885, 9.219166688191793],
                [45.52358418149523, 9.219158474742246],
                [45.52358991504794, 9.216149309105148],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon536);
 var myPolygon537 = new ymaps.Polygon([
            [
                [45.53837914957362, 9.225235895942902],
                [45.53837317515008, 9.228245848474284],
                [45.53625793895379, 9.228237290998392],
                [45.53626391293911, 9.2252274513149],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon537);
 var myPolygon538 = new ymaps.Polygon([
            [
                [45.544800185820506, 9.18311706640885],
                [45.54479532065282, 9.186127369571537],
                [45.542680081213334, 9.18612038964856],
                [45.54268494602414, 9.183110199373068],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon538);
 var myPolygon539 = new ymaps.Polygon([
            [
                [45.39463024946768, 9.173624436512515],
                [45.39462564631624, 9.176626758018257],
                [45.39251034991164, 9.176620168950283],
                [45.392514952725456, 9.173617959444881],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon539);
 var myPolygon540 = new ymaps.Polygon([
            [
                [45.40735203903162, 9.152642338185318],
                [45.40734798650318, 9.155645336731256],
                [45.40523269258096, 9.155639527798954],
                [45.40523674481216, 9.152636641328641],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon540);
 var myPolygon541 = new ymaps.Polygon([
            [
                [45.43490215508518, 9.107649535920238],
                [45.434899284075726, 9.110654000779812],
                [45.43278399653485, 9.110649867026158],
                [45.43278686733371, 9.107645514405258],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon541);
 var myPolygon542 = new ymaps.Polygon([
            [
                [45.436886363464886, 9.203799735775712],
                [45.43688096324999, 9.206804292004712],
                [45.4347656862959, 9.206796565797644],
                [45.43477108611472, 9.203792121816939],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon542);
 var myPolygon543 = new ymaps.Polygon([
            [
                [45.43903238393288, 9.185779322313314],
                [45.43902745753945, 9.188783995691704],
                [45.436912179083386, 9.188776942192607],
                [45.4369171051155, 9.185772381075653],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon543);
 var myPolygon544 = new ymaps.Polygon([
            [
                [45.441175562602425, 9.167757534649162],
                [45.44117111010191, 9.170762324741716],
                [45.43905583035224, 9.170755944103986],
                [45.43906028252618, 9.167751266285944],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon544);
 var myPolygon545 = new ymaps.Polygon([
            [
                [45.44329951040035, 9.161753996872733],
                [45.443295215670005, 9.164758900632755],
                [45.44117993606038, 9.164752743860221],
                [45.441184230475734, 9.161747952387367],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon545);
 var myPolygon546 = new ymaps.Polygon([
            [
                [45.44327255629312, 9.179783408923258],
                [45.44326778727307, 9.182788308392114],
                [45.441152509675256, 9.182781477898583],
                [45.44115727834551, 9.179776690716311],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon546);
 var myPolygon547 = new ymaps.Polygon([
            [
                [45.445392523769094, 9.176785115362193],
                [45.445387833453175, 9.179790127876588],
                [45.44327255629312, 9.179783408923258],
                [45.44327724626501, 9.176778508708026],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon547);
 var myPolygon548 = new ymaps.Polygon([
            [
                [45.44537328818193, 9.188805160890963],
                [45.44536828165053, 9.191810170344565],
                [45.44325300592453, 9.19180300219563],
                [45.44325801208872, 9.188798105040773],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon548);
 var myPolygon549 = new ymaps.Polygon([
            [
                [45.44754247960829, 9.152750698762397],
                [45.44753842142812, 9.155755829111902],
                [45.44542314246558, 9.155750007907892],
                [45.44542720034809, 9.152744989870776],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon549);
 var myPolygon550 = new ymaps.Polygon([
            [
                [45.44746273839942, 9.203837818259403],
                [45.447457336203634, 9.206842935916953],
                [45.44534206318848, 9.206835205417196],
                [45.44534746498803, 9.203830200070307],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon550);
 var myPolygon551 = new ymaps.Polygon([
            [
                [45.449653699603346, 9.155761650962674],
                [45.44964956205956, 9.158766892990196],
                [45.447534284187824, 9.158760958814648],
                [45.44753842142812, 9.155755829111902],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon551);
 var myPolygon552 = new ymaps.Polygon([
            [
                [45.453829376678144, 9.19183885090528],
                [45.45382428960066, 9.194844308881805],
                [45.45170901739833, 9.194837025198117],
                [45.451714104102685, 9.191831679570138],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon552);
 var myPolygon553 = new ymaps.Polygon([
            [
                [45.46233269672317, 9.164814342377149],
                [45.4623283200561, 9.167820256598416],
                [45.46021304785414, 9.167813981267038],
                [45.4602174242002, 9.164808179445176],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon553);
 var myPolygon554 = new ymaps.Polygon([
            [
                [45.46453400367914, 9.08666360965571],
                [45.46453168347061, 9.089669650037493],
                [45.4624164055947, 9.089666296744127],
                [45.46241872563306, 9.08666036877612],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon554);
 var myPolygon555 = new ymaps.Polygon([
            [
                [45.46443913537613, 9.170832558562873],
                [45.464434600175345, 9.17383858378868],
                [45.46231932942031, 9.173832082936443],
                [45.462323864288464, 9.170826170122343],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon555);
 var myPolygon556 = new ymaps.Polygon([
            [
                [45.46660266131985, 9.134765244104592],
                [45.466599075134745, 9.1377713894503],
                [45.46448380155811, 9.13776623697207],
                [45.464487387480155, 9.134760204051613],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon556);
 var myPolygon557 = new ymaps.Polygon([
            [
                [45.46654056173982, 9.179857358483305],
                [45.46653578887032, 9.182863493928284],
                [45.4644205199356, 9.182856655081627],
                [45.46442529245503, 9.17985063206055],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon557);
 var myPolygon558 = new ymaps.Polygon([
            [
                [45.46869921094796, 9.149801567783266],
                [45.4686952289082, 9.152807822578405],
                [45.4665799575211, 9.152802107340063],
                [45.46658393926879, 9.149795964982262],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon558);
 var myPolygon559 = new ymaps.Polygon([
            [
                [45.47292975194446, 9.149812775253316],
                [45.47292576932049, 9.152819254960614],
                [45.47081049950799, 9.152813538451893],
                [45.470814481839845, 9.14980717120692],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon559);
 var myPolygon560 = new ymaps.Polygon([
            [
                [45.475010942138425, 9.173871098888089],
                [45.47500632613875, 9.176877685636935],
                [45.472891059659645, 9.176871068697544],
                [45.47289567532074, 9.17386459442278],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon560);
 var myPolygon561 = new ymaps.Polygon([
            [
                [45.474982059112975, 9.191910608100006],
                [45.47497696830273, 9.194917190248884],
                [45.47286170397697, 9.194909898467143],
                [45.472866794413825, 9.191903428791724],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon561);
 var myPolygon562 = new ymaps.Polygon([
            [
                [45.47710233506746, 9.188911092773344],
                [45.47709732302453, 9.191917788206199],
                [45.474982059112975, 9.191910608100006],
                [45.474987070788266, 9.188904025153217],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon562);
 var myPolygon563 = new ymaps.Polygon([
            [
                [45.479227385940206, 9.182904542971766],
                [45.479222531822955, 9.18591135246194],
                [45.477107267969544, 9.185904396554967],
                [45.477112121730755, 9.182897699563576],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon563);
 var myPolygon564 = new ymaps.Polygon([
            [
                [45.479222531822955, 9.18591135246194],
                [45.479217598559025, 9.188918161178991],
                [45.47710233506746, 9.188911092773344],
                [45.477107267969544, 9.185904396554967],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon564);
 var myPolygon565 = new ymaps.Polygon([
            [
                [45.47914022249414, 9.23101339503778],
                [45.47913410203694, 9.234020190657557],
                [45.47701884466968, 9.234011434785602],
                [45.477024964677966, 9.231004751662708],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon565);
 var myPolygon566 = new ymaps.Polygon([
            [
                [45.481405968129685, 9.13780747283492],
                [45.48140230094953, 9.140814404934156],
                [45.479287033152254, 9.140809135933468],
                [45.479290700063416, 9.13780231634689],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon566);
 var myPolygon567 = new ymaps.Polygon([
            [
                [45.481327848484746, 9.191932150812764],
                [45.48132275655411, 9.19493907045702],
                [45.479207494591314, 9.19493177624371],
                [45.479212586148435, 9.191924969110417],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon567);
 var myPolygon568 = new ymaps.Polygon([
            [
                [45.4834939009272, 9.158861929528928],
                [45.48348967936595, 9.161868969790596],
                [45.481374414401465, 9.161862912530406],
                [45.481378635653066, 9.158855984793313],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon568);
 var myPolygon569 = new ymaps.Polygon([
            [
                [45.48348099876743, 9.167883048281592],
                [45.483476539730255, 9.170890086485908],
                [45.48136127572954, 9.170883691652561],
                [45.481365734439656, 9.167876765972537],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon569);
 var myPolygon570 = new ymaps.Polygon([
            [
                [45.48555837079449, 9.191946516612283],
                [45.48555327811682, 9.194953661315985],
                [45.48343801772929, 9.194946365481076],
                [45.483443110033434, 9.191939333313346],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon570);
 var myPolygon571 = new ymaps.Polygon([
            [
                [45.485521059610136, 9.212996512070099],
                [45.48551541278614, 9.216003650834352],
                [45.48340015517597, 9.215995567250813],
                [45.48340580158579, 9.212988541021721],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon571);
 var myPolygon572 = new ymaps.Polygon([
            [
                [45.49187788754669, 9.20700547499558],
                [45.49187239784202, 9.210012953200632],
                [45.48975714177264, 9.210005092066657],
                [45.48976263107465, 9.206997726434537],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon572);
 var myPolygon573 = new ymaps.Polygon([
            [
                [45.491849647213286, 9.222042857157048],
                [45.491843761603896, 9.225050330867633],
                [45.489728507634965, 9.2250419068708],
                [45.48973439281264, 9.222034545732539],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon573);
 var myPolygon574 = new ymaps.Polygon([
            [
                [45.49408240969032, 9.149868849986554],
                [45.49407842414397, 9.152876455004849],
                [45.491963162204456, 9.152870732139004],
                [45.491967147458475, 9.149863239708099],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon574);
 var myPolygon575 = new ymaps.Polygon([
            [
                [45.4940143117905, 9.194982852766394],
                [45.49400913843122, 9.197990446927692],
                [45.491893881573716, 9.197983035262343],
                [45.491899054553535, 9.194975553686952],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon575);
 var myPolygon576 = new ymaps.Polygon([
            [
                [45.49619767113492, 9.149874460888675],
                [45.49619368529621, 9.152882178506884],
                [45.49407842414397, 9.152876455004849],
                [45.49408240969032, 9.149868849986554],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon576);
 var myPolygon577 = new ymaps.Polygon([
            [
                [45.49614947126461, 9.182959317628322],
                [45.49614461429807, 9.185967027559023],
                [45.49402935674513, 9.185960065464108],
                [45.49403421335542, 9.182952468132266],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon577);
 var myPolygon578 = new ymaps.Polygon([
            [
                [45.49822365223624, 9.2070287258473],
                [45.49821816132339, 9.21003654184625],
                [45.496102907617384, 9.210028678090312],
                [45.49610839812748, 9.207020974701843],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon578);
 var myPolygon579 = new ymaps.Polygon([
            [
                [45.49818951878307, 9.225075608477256],
                [45.49818355268022, 9.22808341904307],
                [45.49606830151271, 9.228074879626806],
                [45.49607426717795, 9.225067181670733],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon579);
 var myPolygon580 = new ymaps.Polygon([
            [
                [45.50461049502607, 9.182986723228098],
                [45.50460563663425, 9.18599488367942],
                [45.50249038223154, 9.185987918488],
                [45.502495240267, 9.182979870685614],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon580);
 var myPolygon581 = new ymaps.Polygon([
            [
                [45.50673984990859, 9.173968752672367],
                [45.506735228827274, 9.176977028033491],
                [45.50461997416036, 9.176970400052374],
                [45.50462459490275, 9.17396223735302],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon581);
 var myPolygon582 = new ymaps.Polygon([
            [
                [45.508868493018454, 9.164950100313012],
                [45.50886410928293, 9.167958490484326],
                [45.50674885440401, 9.167952199789466],
                [45.506753237818, 9.164943922292744],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon582);
 var myPolygon583 = new ymaps.Polygon([
            [
                [45.50884100218165, 9.183000430598774],
                [45.50883614307703, 9.186008816385547],
                [45.506720890249426, 9.186001849645237],
                [45.506725748997624, 9.18299357653245],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon583);
 var myPolygon584 = new ymaps.Polygon([
            [
                [45.50875979669824, 9.228126130367052],
                [45.50875374917972, 9.231134503219398],
                [45.50663850239563, 9.231125846382925],
                [45.50664454947058, 9.228117586202801],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon584);
 var myPolygon585 = new ymaps.Polygon([
            [
                [45.51097490008323, 9.170973284037512],
                [45.51097035755794, 9.173981785484344],
                [45.50885510412698, 9.17397526871611],
                [45.508859646319074, 9.170966879956199],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon585);
 var myPolygon586 = new ymaps.Polygon([
            [
                [45.51097035755794, 9.173981785484344],
                [45.510965735798635, 9.176990286206584],
                [45.50885048270667, 9.176983656751528],
                [45.50885510412698, 9.17397526871611],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon586);
 var myPolygon587 = new ymaps.Polygon([
            [
                [45.513024915207694, 9.210091612622824],
                [45.51301934223557, 9.213100216370712],
                [45.51090409445278, 9.213092233794656],
                [45.510909667016115, 9.210083742744798],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon587);
 var myPolygon588 = new ymaps.Polygon([
            [
                [45.51724418239729, 9.216125012479429],
                [45.51723845010614, 9.219133839872768],
                [45.51512320473406, 9.219125630075583],
                [45.51512893660475, 9.216116915405095],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon588);
 var myPolygon589 = new ymaps.Polygon([
            [
                [45.51934788272231, 9.222150989798546],
                [45.519341991497896, 9.225159928088676],
                [45.5172267477721, 9.225151491908195],
                [45.517232638564394, 9.222142666353204],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon589);
 var myPolygon590 = new ymaps.Polygon([
            [
                [45.5320508808859, 9.216181717217024],
                [45.532045145650656, 9.21919133402136],
                [45.529929905793594, 9.219183117831227],
                [45.52993564060815, 9.216173613837515],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon590);
 var myPolygon591 = new ymaps.Polygon([
            [
                [45.53839659699224, 9.21620603276343],
                [45.53839086049478, 9.219215988074923],
                [45.53627562300126, 9.219207769143084],
                [45.53628135907795, 9.21619792667986],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon591);
 var myPolygon592 = new ymaps.Polygon([
            [
                [45.5405118341187, 9.216214139748606],
                [45.540506097200435, 9.219224207920918],
                [45.53839086049478, 9.219215988074923],
                [45.53839659699224, 9.21620603276343],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon592);
 var myPolygon593 = new ymaps.Polygon([
            [
                [45.54261551645876, 9.222242608812476],
                [45.54260962047893, 9.225252788016798],
                [45.54049438542022, 9.225244341510157],
                [45.5405002809676, 9.222234275178954],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon593);
 var myPolygon594 = new ymaps.Polygon([
            [
                [45.54682192170681, 9.234300893124592],
                [45.546815707534726, 9.237311294278397],
                [45.54470047584019, 9.23730239430098],
                [45.54470668955646, 9.234292106044881],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon594);
 var myPolygon595 = new ymaps.Polygon([
            [
                [45.567908440014655, 9.264504079801664],
                [45.5679014273873, 9.26751560014407],
                [45.565786208454895, 9.267505560034627],
                [45.56579322056788, 9.264494152714152],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon595);
 var myPolygon596 = new ymaps.Polygon([
            [
                [45.434838385977535, 9.161729822959556],
                [45.43483409250707, 9.164734277645735],
                [45.432718809747804, 9.164728123608304],
                [45.43272310290336, 9.161723781159411],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon596);
 var myPolygon597 = new ymaps.Polygon([
            [
                [45.43693140902765, 9.176758693148566],
                [45.43692672008768, 9.179763256541161],
                [45.43481143977747, 9.179756540572752],
                [45.43481612837353, 9.176752089429428],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon597);
 var myPolygon598 = new ymaps.Polygon([
            [
                [45.447609438428906, 9.089642834120248],
                [45.44760704052057, 9.092647975169225],
                [45.44549175652497, 9.09264451254131],
                [45.44549415425744, 9.089639483806183],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon598);
 var myPolygon599 = new ymaps.Polygon([
            [
                [45.447534284187824, 9.158760958814648],
                [45.44753006788742, 9.161766087858153],
                [45.445414789537594, 9.16176004202963],
                [45.44541900552873, 9.158755025298335],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon599);
 var myPolygon600 = new ymaps.Polygon([
            [
                [45.44752577252697, 9.164771216229942],
                [45.447521398106524, 9.167776343917536],
                [45.44540612039261, 9.167770073464867],
                [45.44541049449219, 9.164765058089296],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon600);
 var myPolygon601 = new ymaps.Polygon([
            [
                [45.453853625910426, 9.17681154931994],
                [45.453848934218165, 9.17981701115576],
                [45.451733660208205, 9.179810289215883],
                [45.45173835155634, 9.176804939729145],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon601);
 var myPolygon602 = new ymaps.Polygon([
            [
                [45.45594965683386, 9.188840451902756],
                [45.45594464846596, 9.19184602303725],
                [45.453829376678144, 9.19183885090528],
                [45.453834384678686, 9.18883339213193],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon602);
 var myPolygon603 = new ymaps.Polygon([
            [
                [45.46021304785414, 9.167813981267038],
                [45.46020859241332, 9.17081978239165],
                [45.45809331975076, 9.170813395370685],
                [45.458097774864775, 9.167807706632896],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon603);
 var myPolygon604 = new ymaps.Polygon([
            [
                [45.460199444247635, 9.176831382499193],
                [45.460194751522856, 9.179837181457144],
                [45.45807947987548, 9.179830457276287],
                [45.45808417225606, 9.176824770704863],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon604);
 var myPolygon605 = new ymaps.Polygon([
            [
                [45.464429985868286, 9.176844608292068],
                [45.46442529245503, 9.17985063206055],
                [45.46231002238271, 9.179843906385194],
                [45.46231471545171, 9.176837995028226],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon605);
 var myPolygon606 = new ymaps.Polygon([
            [
                [45.46656753760386, 9.161820530553133],
                [45.46656323940689, 9.164826670295732],
                [45.464447968458735, 9.164820505993971],
                [45.46445226634046, 9.161814478675858],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon606);
 var myPolygon607 = new ymaps.Polygon([
            [
                [45.46650549030511, 9.200900290200947],
                [45.46650016365339, 9.20390642006359],
                [45.46438489733171, 9.203898794252641],
                [45.46439022359274, 9.200892776813141],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon607);
 var myPolygon608 = new ymaps.Polygon([
            [
                [45.468660524338944, 9.176857837024583],
                [45.468655830237104, 9.179864085653561],
                [45.46654056173982, 9.179857358483305],
                [45.46654525549735, 9.17685122229082],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon608);
 var myPolygon609 = new ymaps.Polygon([
            [
                [45.472891059659645, 9.176871068697544],
                [45.47288636486911, 9.179877542236996],
                [45.470771097946866, 9.179870813571423],
                [45.470775792393034, 9.176864452493461],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon609);
 var myPolygon610 = new ymaps.Polygon([
            [
                [45.475019936731904, 9.16785792323416],
                [45.47501547900282, 9.17086451141633],
                [45.47290021185237, 9.170858119425203],
                [45.472904669254476, 9.167851643717317],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon610);
 var myPolygon611 = new ymaps.Polygon([
            [
                [45.477112121730755, 9.182897699563576],
                [45.477107267969544, 9.185904396554967],
                [45.474992003328545, 9.185897441421014],
                [45.47499685673375, 9.1828908569159],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon611);
 var myPolygon612 = new ymaps.Polygon([
            [
                [45.47925046932449, 9.167870484361673],
                [45.4792460109414, 9.170877297529909],
                [45.47713074536584, 9.170870904117864],
                [45.477135203421895, 9.167864203448914],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon612);
 var myPolygon613 = new ymaps.Polygon([
            [
                [45.479217598559025, 9.188918161178991],
                [45.479212586148435, 9.191924969110417],
                [45.47709732302453, 9.191917788206199],
                [45.47710233506746, 9.188911092773344],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon613);
 var myPolygon614 = new ymaps.Polygon([
            [
                [45.47917528317362, 9.212972601582534],
                [45.47916963759209, 9.215979402778816],
                [45.47705437761837, 9.215971321890118],
                [45.477060022785814, 9.212964633191485],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon614);
 var myPolygon615 = new ymaps.Polygon([
            [
                [45.48124315855846, 9.237035854658558],
                [45.481236879349325, 9.240042760828599],
                [45.479121623685465, 9.24003377896508],
                [45.47912790243402, 9.23702698530416],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon615);
 var myPolygon616 = new ymaps.Polygon([
            [
                [45.48350999558434, 9.146833761999623],
                [45.483506090658324, 9.149840804829328],
                [45.4813908244901, 9.149835197667967],
                [45.48139472912969, 9.146828267363187],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon616);
 var myPolygon617 = new ymaps.Polygon([
            [
                [45.48773662063294, 9.149852021021877],
                [45.48773263596353, 9.152859288315533],
                [45.48561737166212, 9.15285356735774],
                [45.485621356039275, 9.149846412613936],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon617);
 var myPolygon618 = new ymaps.Polygon([
            [
                [45.48763066960845, 9.216011735316425],
                [45.487624943200906, 9.219018985729702],
                [45.48550968679862, 9.219010788700084],
                [45.48551541278614, 9.216003650834352],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon618);
 var myPolygon619 = new ymaps.Polygon([
            [
                [45.49193304833126, 9.173923160643657],
                [45.49192842962207, 9.176930647635345],
                [45.48981316944285, 9.176924024809843],
                [45.48981778781325, 9.173916650392297],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon619);
 var myPolygon620 = new ymaps.Polygon([
            [
                [45.49401940596262, 9.191975257793684],
                [45.4940143117905, 9.194982852766394],
                [45.491899054553535, 9.194975553686952],
                [45.491904148352006, 9.191968071300268],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon620);
 var myPolygon621 = new ymaps.Polygon([
            [
                [45.49829651207117, 9.161911389468829],
                [45.498292209142406, 9.164919217078888],
                [45.49617695000507, 9.164913042491758],
                [45.49618125261821, 9.161905327493765],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon621);
 var myPolygon622 = new ymaps.Polygon([
            [
                [45.50040746749236, 9.164925392352457],
                [45.500403085042855, 9.167933331900567],
                [45.49828782701435, 9.167927044002507],
                [45.498292209142406, 9.164919217078888],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon622);
 var myPolygon623 = new ymaps.Polygon([
            [
                [45.50039862338829, 9.170941270749628],
                [45.500394082528715, 9.173949208887107],
                [45.49827882516053, 9.17394269574035],
                [45.49828336568704, 9.170934870227168],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon623);
 var myPolygon624 = new ymaps.Polygon([
            [
                [45.500360078775536, 9.195004754873613],
                [45.500354904277714, 9.19801268686774],
                [45.49823964978322, 9.198005272730278],
                [45.49824482390151, 9.194997453359614],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon624);
 var myPolygon625 = new ymaps.Polygon([
            [
                [45.502464903896815, 9.201028145635195],
                [45.502459570598795, 9.204036188604032],
                [45.50034431766851, 9.204028548370683],
                [45.50034965057535, 9.201020618037605],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon625);
 var myPolygon626 = new ymaps.Polygon([
            [
                [45.50455834637757, 9.213068291390831],
                [45.50455269582453, 9.216076443534657],
                [45.502437445304956, 9.216068351859956],
                [45.50244309544353, 9.213060312363933],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon626);
 var myPolygon627 = new ymaps.Polygon([
            [
                [45.504498276143806, 9.243149770842802],
                [45.50449183343571, 9.246157913426737],
                [45.50237658738034, 9.246148695281047],
                [45.50238302961589, 9.243140665343608],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon627);
 var myPolygon628 = new ymaps.Polygon([
            [
                [45.50670583867189, 9.195026664286507],
                [45.50670066303527, 9.198034934226149],
                [45.504585410903736, 9.19802751761556],
                [45.504590586160745, 9.195019360336945],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon628);
 var myPolygon629 = new ymaps.Polygon([
            [
                [45.50659395467874, 9.252183639995652],
                [45.50658727383542, 9.255191892126],
                [45.504472030020885, 9.25518233497923],
                [45.50447871037417, 9.252174195507473],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon629);
 var myPolygon630 = new ymaps.Polygon([
            [
                [45.50881591437911, 9.198042351661336],
                [45.508810659135044, 9.20105073344982],
                [45.50669540817667, 9.20104320334119],
                [45.50670066303527, 9.198034934226149],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon630);
 var myPolygon631 = new ymaps.Polygon([
            [
                [45.51313489466113, 9.1378848889761],
                [45.51313122344385, 9.140893510266922],
                [45.51101596745463, 9.14088823247313],
                [45.51101963840264, 9.137879723882733],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon631);
 var myPolygon632 = new ymaps.Polygon([
            [
                [45.513007958574114, 9.21911742119118],
                [45.51300214788488, 9.222126022238696],
                [45.51088690136328, 9.222117701569283],
                [45.5108927116263, 9.219109213219427],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon632);
 var myPolygon633 = new ymaps.Polygon([
            [
                [45.51514565674743, 9.207090766042283],
                [45.515140162611495, 9.210099483375911],
                [45.513024915207694, 9.210091612622824],
                [45.51303040894063, 9.207083007999874],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon633);
 var myPolygon634 = new ymaps.Polygon([
            [
                [45.51710716174578, 9.279310179359415],
                [45.517099765206396, 9.282318984949633],
                [45.514984530006764, 9.28230840800407],
                [45.51499192600359, 9.279299715133725],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon634);
 var myPolygon635 = new ymaps.Polygon([
            [
                [45.51946549506616, 9.149936221998935],
                [45.519461506010074, 9.152945179042664],
                [45.517346253517935, 9.152939448536802],
                [45.51735024228142, 9.149930604230768],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon635);
 var myPolygon636 = new ymaps.Polygon([
            [
                [45.519365080857156, 9.213124169424924],
                [45.51935942740201, 9.216133110454136],
                [45.51724418239729, 9.216125012479429],
                [45.517249835437774, 9.213116184185727],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon636);
 var myPolygon637 = new ymaps.Polygon([
            [
                [45.52164845901221, 9.083742169059663],
                [45.52164621346811, 9.086751249702527],
                [45.519530956668675, 9.086747999081613],
                [45.519533202048045, 9.083739031190461],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon637);
 var myPolygon638 = new ymaps.Polygon([
            [
                [45.521584657148885, 9.146932769973056],
                [45.521580747063645, 9.149941840391802],
                [45.51946549506616, 9.149936221998935],
                [45.519469404864594, 9.14692726433051],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon638);
 var myPolygon639 = new ymaps.Polygon([
            [
                [45.52560390129019, 9.26430574771189],
                [45.52559689894322, 9.267315010002628],
                [45.523481664242716, 9.267304992203284],
                [45.52348866607607, 9.26429584268334],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon639);
 var myPolygon640 = new ymaps.Polygon([
            [
                [45.52982736597897, 9.267335048943632],
                [45.529820283320284, 9.270344535699218],
                [45.527705050716136, 9.270334402875887],
                [45.527712132855314, 9.267325028916025],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon640);
 var myPolygon641 = new ymaps.Polygon([
            [
                [45.5297911598434, 9.282382471327065],
                [45.529783680764034, 9.285391952322682],
                [45.52766845084466, 9.285381255523076],
                [45.52767592937544, 9.282371887322396],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon641);
 var myPolygon642 = new ymaps.Polygon([
            [
                [45.53837317515008, 9.228245848474284],
                [45.53836712141796, 9.231255800053855],
                [45.53625188566571, 9.231247129730207],
                [45.53625793895379, 9.228237290998392],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon642);
 var myPolygon643 = new ymaps.Polygon([
            [
                [45.54046371796804, 9.240294658824359],
                [45.54045734653498, 9.243304719330967],
                [45.53834211340519, 9.24329559660306],
                [45.53834848437089, 9.240285648956226],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon643);
 var myPolygon644 = new ymaps.Polygon([
            [
                [45.553208900427634, 9.213252054096822],
                [45.55320324033343, 9.216262800600195],
                [45.55108800793384, 9.216254688202817],
                [45.55109366761287, 9.213244054635735],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon644);
 var myPolygon645 = new ymaps.Polygon([
            [
                [45.43278686733371, 9.107645514405258],
                [45.43278399653485, 9.110649867026158],
                [45.4306687082069, 9.11064573373165],
                [45.430671578795206, 9.107641493336956],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon645);
 var myPolygon646 = new ymaps.Polygon([
            [
                [45.43277491001761, 9.119662922084117],
                [45.43277172313846, 9.122667272793633],
                [45.430656435710716, 9.122662690594936],
                [45.430659622356146, 9.119658452111366],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon646);
 var myPolygon647 = new ymaps.Polygon([
            [
                [45.43269139140838, 9.182754163510966],
                [45.43268654511793, 9.185758500913273],
                [45.43057126393777, 9.185751561988344],
                [45.43057610987276, 9.182747336810168],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon647);
 var myPolygon648 = new ymaps.Polygon([
            [
                [45.43907730085385, 9.155732548175543],
                [45.43907316482724, 9.158737228703929],
                [45.436957883018685, 9.158731297823676],
                [45.43696201874192, 9.15572672955769],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon648);
 var myPolygon649 = new ymaps.Polygon([
            [
                [45.439051299141596, 9.173760621213267],
                [45.43904668889428, 9.17676529760131],
                [45.43693140902765, 9.176758693148566],
                [45.43693601893683, 9.173754129022363],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon649);
 var myPolygon650 = new ymaps.Polygon([
            [
                [45.44113772941089, 9.191795834842976],
                [45.441132644571724, 9.194800618915394],
                [45.439017367643395, 9.194793340085226],
                [45.4390224521096, 9.191788668286497],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon650);
 var myPolygon651 = new ymaps.Polygon([
            [
                [45.44111151479482, 9.20681974699388],
                [45.44110603474578, 9.209824526898343],
                [45.43899075976921, 9.209816686701432],
                [45.438996239416284, 9.206812019070087],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon651);
 var myPolygon652 = new ymaps.Polygon([
            [
                [45.445397135031, 9.17378010211379],
                [45.445392523769094, 9.176785115362193],
                [45.44327724626501, 9.176778508708026],
                [45.443281857188694, 9.173773607758884],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon652);
 var myPolygon653 = new ymaps.Polygon([
            [
                [45.447611757276356, 9.086637692699039],
                [45.447609438428906, 9.089642834120248],
                [45.44549415425744, 9.089639483806183],
                [45.44549647293479, 9.086634454698878],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon653);
 var myPolygon654 = new ymaps.Polygon([
            [
                [45.45173835155634, 9.176804939729145],
                [45.451733660208205, 9.179810289215883],
                [45.44961838541073, 9.179803568022797],
                [45.44962307641476, 9.176798330872652],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon654);
 var myPolygon655 = new ymaps.Polygon([
            [
                [45.45388011544096, 9.158778763319377],
                [45.45387589821265, 9.161784229374394],
                [45.45176062222496, 9.161778181530446],
                [45.451764839143934, 9.158772827825077],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon655);
 var myPolygon656 = new ymaps.Polygon([
            [
                [45.455986876792075, 9.164795855635406],
                [45.45598250108799, 9.167801432695908],
                [45.45386722652378, 9.167795159455974],
                [45.45387160190692, 9.16478969475742],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon656);
 var myPolygon657 = new ymaps.Polygon([
            [
                [45.45811066567293, 9.15879063628659],
                [45.458106447825905, 9.161796327078363],
                [45.45599117341298, 9.161790277890336],
                [45.45599539095063, 9.158784699473182],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon657);
 var myPolygon658 = new ymaps.Polygon([
            [
                [45.460002822724896, 9.276022285456019],
                [45.45999551991206, 9.279028053162747],
                [45.45788026287784, 9.279017620293764],
                [45.457887565155026, 9.276011964969305],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon658);
 var myPolygon659 = new ymaps.Polygon([
            [
                [45.46231471545171, 9.176837995028226],
                [45.46231002238271, 9.179843906385194],
                [45.460194751522856, 9.179837181457144],
                [45.460199444247635, 9.176831382499193],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon659);
 var myPolygon660 = new ymaps.Polygon([
            [
                [45.46650016365339, 9.20390642006359],
                [45.466494757890146, 9.206912549078776],
                [45.464379491964976, 9.20690481084481],
                [45.46438489733171, 9.203898794252641],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon660);
 var myPolygon661 = new ymaps.Polygon([
            [
                [45.46858760721647, 9.218945245249945],
                [45.46858180547099, 9.221951482275397],
                [45.46646654240326, 9.221943181005706],
                [45.466472343723204, 9.218937056415168],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon661);
 var myPolygon662 = new ymaps.Polygon([
            [
                [45.468575924608544, 9.224957718378313],
                [45.46856996462923, 9.227963953546196],
                [45.466454702430006, 9.227955427407064],
                [45.46646066197218, 9.224949304673837],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon662);
 var myPolygon663 = new ymaps.Polygon([
            [
                [45.47080643805213, 9.155819905061627],
                [45.470802297472325, 9.158826271023631],
                [45.46868702747414, 9.158820330250744],
                [45.468691167750244, 9.155814076738396],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon663);
 var myPolygon664 = new ymaps.Polygon([
            [
                [45.47292576932049, 9.152819254960614],
                [45.47292170756671, 9.155825734032591],
                [45.47080643805213, 9.155819905061627],
                [45.47081049950799, 9.152813538451893],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon664);
 var myPolygon665 = new ymaps.Polygon([
            [
                [45.474992003328545, 9.185897441421014],
                [45.474987070788266, 9.188904025153217],
                [45.472871805721525, 9.1888969583185],
                [45.4728767379, 9.185890487059972],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon665);
 var myPolygon666 = new ymaps.Polygon([
            [
                [45.47494476161018, 9.21295666568597],
                [45.474939116856795, 9.215963241899457],
                [45.47282385530737, 9.215955162806708],
                [45.47282949964672, 9.212948699065867],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon666);
 var myPolygon667 = new ymaps.Polygon([
            [
                [45.477135203421895, 9.167864203448914],
                [45.47713074536584, 9.170870904117864],
                [45.47501547900282, 9.17086451141633],
                [45.475019936731904, 9.16785792323416],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon667);
 var myPolygon668 = new ymaps.Polygon([
            [
                [45.48136127572954, 9.170883691652561],
                [45.481356737866676, 9.173890616621877],
                [45.47924147341139, 9.173884109987538],
                [45.4792460109414, 9.170877297529909],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon668);
 var myPolygon669 = new ymaps.Polygon([
            [
                [45.48135212085111, 9.176897540867992],
                [45.48134742468292, 9.179904464378392],
                [45.47923216091074, 9.179897732720972],
                [45.479236856734474, 9.17689092172206],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon669);
 var myPolygon670 = new ymaps.Polygon([
            [
                [45.48347200153452, 9.173897123979426],
                [45.48346738418029, 9.176904160749636],
                [45.48135212085111, 9.176897540867992],
                [45.481356737866676, 9.173890616621877],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon670);
 var myPolygon671 = new ymaps.Polygon([
            [
                [45.4833767779602, 9.228023663058073],
                [45.483370735762435, 9.231030684670078],
                [45.48125547952228, 9.231022039373526],
                [45.481261521276856, 9.228015130283547],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon671);
 var myPolygon672 = new ymaps.Polygon([
            [
                [45.485632834182454, 9.140824944692561],
                [45.48562908729947, 9.143832101268837],
                [45.48351382135145, 9.143826718559176],
                [45.4835175679596, 9.140819674520497],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon672);
 var myPolygon673 = new ymaps.Polygon([
            [
                [45.48560064250765, 9.16488217984944],
                [45.48559626230779, 9.167889331288944],
                [45.48348099876743, 9.167883048281592],
                [45.48348537864602, 9.164876009378986],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon673);
 var myPolygon674 = new ymaps.Polygon([
            [
                [45.48558264672195, 9.176910781367091],
                [45.48557794986477, 9.179917929937993],
                [45.4834626876676, 9.179911196784033],
                [45.48346738418029, 9.176904160749636],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon674);
 var myPolygon675 = new ymaps.Polygon([
            [
                [45.48547986941042, 9.234046464113037],
                [45.485473668443106, 9.23705359632493],
                [45.48335841389483, 9.237044724998768],
                [45.4833646144073, 9.234037705321144],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon675);
 var myPolygon676 = new ymaps.Polygon([
            [
                [45.487715905581894, 9.164888351005773],
                [45.48771152506073, 9.167895614994679],
                [45.48559626230779, 9.167889331288944],
                [45.48560064250765, 9.16488217984944],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon676);
 var myPolygon677 = new ymaps.Polygon([
            [
                [45.4897988392766, 9.18594614359576],
                [45.489793904203026, 9.188953514993779],
                [45.4876786446494, 9.18894644265892],
                [45.487683579361, 9.185939183822116],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon677);
 var myPolygon678 = new ymaps.Polygon([
            [
                [45.489778623928544, 9.197975624420806],
                [45.489773372152655, 9.200982992599098],
                [45.487658114105045, 9.20097547002049],
                [45.48766336549572, 9.197968214402971],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon678);
 var myPolygon679 = new ymaps.Polygon([
            [
                [45.48975714177264, 9.210005092066657],
                [45.489751573295365, 9.213012456825027],
                [45.487636316846675, 9.213004484004497],
                [45.487641884915504, 9.209997231806426],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon679);
 var myPolygon680 = new ymaps.Polygon([
            [
                [45.491888629412614, 9.20099051601392],
                [45.49188329807024, 9.203997995929168],
                [45.489768041201344, 9.203990359941177],
                [45.489773372152655, 9.200982992599098],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon680);
 var myPolygon681 = new ymaps.Polygon([
            [
                [45.491843761603896, 9.225050330867633],
                [45.49183779681378, 9.228057803641779],
                [45.489722543282326, 9.228049267072752],
                [45.489728507634965, 9.2250419068708],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon681);
 var myPolygon682 = new ymaps.Polygon([
            [
                [45.4916708878076, 9.300236836755706],
                [45.49166294352211, 9.303244282052118],
                [45.489547702815855, 9.303232931224807],
                [45.48955564651864, 9.300225598496834],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon682);
 var myPolygon683 = new ymaps.Polygon([
            [
                [45.49409014321926, 9.143853638091453],
                [45.49408631604877, 9.14686124434458],
                [45.491971053530385, 9.146855746653607],
                [45.49197488042017, 9.14384825298804],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon683);
 var myPolygon684 = new ymaps.Polygon([
            [
                [45.496030844485205, 9.246121046991805],
                [45.49602432447525, 9.249128738040564],
                [45.493909075745414, 9.249119411396677],
                [45.49391559527714, 9.246111832944193],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon684);
 var myPolygon685 = new ymaps.Polygon([
            [
                [45.49831683872381, 9.14687224156009],
                [45.49831293179224, 9.149880072414565],
                [45.49619767113492, 9.149874460888675],
                [45.49620157777992, 9.146866742646717],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon685);
 var myPolygon686 = new ymaps.Polygon([
            [
                [45.50451712897665, 9.234125337067011],
                [45.50451092391435, 9.237133482650416],
                [45.50239567645873, 9.23712460244463],
                [45.502401881065886, 9.234116569508137],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon686);
 var myPolygon687 = new ymaps.Polygon([
            [
                [45.50664454947058, 9.228117586202801],
                [45.50663850239563, 9.231125846382925],
                [45.50452325482353, 9.231117190508837],
                [45.50452930145494, 9.228109042988406],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon687);
 var myPolygon688 = new ymaps.Polygon([
            [
                [45.51103017583913, 9.128854194716236],
                [45.51102674259492, 9.131862704991756],
                [45.50891148502815, 9.131857765848656],
                [45.50891491802054, 9.128849368261264],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon688);
 var myPolygon689 = new ymaps.Polygon([
            [
                [45.523495588642405, 9.261286692062033],
                [45.52348866607607, 9.26429584268334],
                [45.521373430073574, 9.264285938756156],
                [45.521380352132155, 9.261276900893252],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon689);
 var myPolygon690 = new ymaps.Polygon([
            [
                [45.525699423715885, 9.219166688191793],
                [45.52569361046872, 9.222175965688486],
                [45.52357836867446, 9.222167639466065],
                [45.52358418149523, 9.219158474742246],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon690);
 var myPolygon691 = new ymaps.Polygon([
            [
                [45.52779698628911, 9.2282030706103],
                [45.52779093477688, 9.23121245807656],
                [45.525675695084715, 9.231203792572725],
                [45.52568174615307, 9.22819451789149],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon691);
 var myPolygon692 = new ymaps.Polygon([
            [
                [45.52990004243968, 9.234230623844095],
                [45.529893831913135, 9.237240122167725],
                [45.52777859391421, 9.237231230105444],
                [45.52778480398521, 9.234221844579123],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon692);
 var myPolygon693 = new ymaps.Polygon([
            [
                [45.53416612037584, 9.216189821497764],
                [45.53416038471989, 9.21919955112527],
                [45.532045145650656, 9.21919133402136],
                [45.5320508808859, 9.216181717217024],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon693);
 var myPolygon694 = new ymaps.Polygon([
            [
                [45.53413664912547, 9.231238460370788],
                [45.53413051698455, 9.2342481853033],
                [45.53201528010611, 9.234239404085443],
                [45.532021411797245, 9.231229791975457],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon694);
 var myPolygon695 = new ymaps.Polygon([
            [
                [45.53622687948729, 9.243286474889716],
                [45.53622042968647, 9.246296308674907],
                [45.53410519545353, 9.246287075141458],
                [45.53411164478125, 9.243277354190797],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon695);
 var myPolygon696 = new ymaps.Polygon([
            [
                [45.55107055283461, 9.225286583439766],
                [45.551064575781034, 9.228297213322113],
                [45.54894934431238, 9.228288650133429],
                [45.54895532092755, 9.225278133174307],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon696);
 var myPolygon697 = new ymaps.Polygon([
            [
                [45.551052383643494, 9.234318470216481],
                [45.55104616855969, 9.237329097203377],
                [45.54893093844122, 9.237320195245818],
                [45.548937153069154, 9.234309681181744],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon697);
 var myPolygon698 = new ymaps.Polygon([
            [
                [45.55320324033343, 9.216262800600195],
                [45.55319750088968, 9.219273546201093],
                [45.551082268911074, 9.219265320867557],
                [45.55108800793384, 9.216254688202817],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon698);
 var myPolygon699 = new ymaps.Polygon([
            [
                [45.55955459414525, 9.21327605781998],
                [45.559548932805356, 9.216287143207595],
                [45.55743370276918, 9.216279028102457],
                [45.55743936369382, 9.213268055688822],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon699);
 var myPolygon700 = new ymaps.Polygon([
            [
                [45.56584645966394, 9.240402855448773],
                [45.56584008262004, 9.243414271252249],
                [45.56372485894752, 9.24340513633876],
                [45.56373123552367, 9.240393833545802],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon700);
 var myPolygon701 = new ymaps.Polygon([
            [
                [45.42409218094387, 9.254819949346262],
                [45.424085440190446, 9.257823815998828],
                [45.421970166126634, 9.257814188008654],
                [45.42197690638564, 9.254810433527382],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon701);
 var myPolygon702 = new ymaps.Polygon([
            [
                [45.43692672008768, 9.179763256541161],
                [45.43692195211694, 9.18276781918768],
                [45.43480667215645, 9.1827609909701],
                [45.43481143977747, 9.179756540572752],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon702);
 var myPolygon703 = new ymaps.Polygon([
            [
                [45.43683491644646, 9.230840709890396],
                [45.43682880496142, 9.233845257945775],
                [45.43471353183298, 9.233836521509524],
                [45.43471964286978, 9.230832085701325],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon703);
 var myPolygon704 = new ymaps.Polygon([
            [
                [45.43901220414092, 9.197798011075424],
                [45.4390069616022, 9.200802681244612],
                [45.43689168464946, 9.200795178700881],
                [45.436896926803655, 9.197790620792686],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon704);
 var myPolygon705 = new ymaps.Polygon([
            [
                [45.44321574943594, 9.212837259285193],
                [45.443210110889815, 9.215842149720514],
                [45.4410948375224, 9.215834084081768],
                [45.44110047565496, 9.212829305931796],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon705);
 var myPolygon706 = new ymaps.Polygon([
            [
                [45.44753006788742, 9.161766087858153],
                [45.44752577252697, 9.164771216229942],
                [45.44541049449219, 9.164765058089296],
                [45.445414789537594, 9.16176004202963],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon706);
 var myPolygon707 = new ymaps.Polygon([
            [
                [45.447498340106, 9.182801971655843],
                [45.44749349132659, 9.185807094976226],
                [45.44537821565955, 9.18580015065345],
                [45.445383064083316, 9.182795139644501],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon707);
 var myPolygon708 = new ymaps.Polygon([
            [
                [45.45179214356693, 9.137735334122764],
                [45.45178848015071, 9.140740692181943],
                [45.449673201332324, 9.140735431371917],
                [45.44967686447983, 9.137730185650497],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon708);
 var myPolygon709 = new ymaps.Polygon([
            [
                [45.451780916102464, 9.146751406534245],
                [45.45177701547054, 9.149756762802395],
                [45.449661737493045, 9.149751164979557],
                [45.44966563783889, 9.146745921048923],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon709);
 var myPolygon710 = new ymaps.Polygon([
            [
                [45.451714104102685, 9.191831679570138],
                [45.45170901739833, 9.194837025198117],
                [45.44959374440834, 9.194829742323616],
                [45.4495988307396, 9.191824509031708],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon710);
 var myPolygon711 = new ymaps.Polygon([
            [
                [45.46030344680005, 9.086657128256627],
                [45.46030112693186, 9.089662943823347],
                [45.45818584748207, 9.089659591275113],
                [45.4581881671801, 9.086653888097187],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon711);
 var myPolygon712 = new ymaps.Polygon([
            [
                [45.462372112853295, 9.134755164558653],
                [45.462368527194265, 9.137761085066352],
                [45.46025325204321, 9.137755933733072],
                [45.46025683743924, 9.134750125625642],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon712);
 var myPolygon713 = new ymaps.Polygon([
            [
                [45.462300398943654, 9.18585572684475],
                [45.46229546857374, 9.188861635922354],
                [45.46018019878139, 9.188854573797858],
                [45.460185128789675, 9.185848777118967],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon713);
 var myPolygon714 = new ymaps.Polygon([
            [
                [45.464379491964976, 9.20690481084481],
                [45.46437400749258, 9.20991082657715],
                [45.4622587411819, 9.209902976792595],
                [45.46226422525203, 9.206897073470667],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon714);
 var myPolygon715 = new ymaps.Polygon([
            [
                [45.464226031614686, 9.279048922378768],
                [45.46421864862648, 9.282054913727878],
                [45.462103393711, 9.282044366133054],
                [45.46211077615769, 9.279038487191027],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon715);
 var myPolygon716 = new ymaps.Polygon([
            [
                [45.466599075134745, 9.1377713894503],
                [45.46659540983706, 9.140777534223416],
                [45.464480136529254, 9.140772269320012],
                [45.46448380155811, 9.13776623697207],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon716);
 var myPolygon717 = new ymaps.Polygon([
            [
                [45.46652099559057, 9.191881895653262],
                [45.466515906273756, 9.194888027983293],
                [45.464400638797386, 9.194880739442098],
                [45.46440572774091, 9.191874719535539],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon717);
 var myPolygon718 = new ymaps.Polygon([
            [
                [45.47067306783961, 9.23398517300747],
                [45.47066687005542, 9.236991517742053],
                [45.468551609990556, 9.23698265331472],
                [45.468557807320174, 9.233976421026897],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon718);
 var myPolygon719 = new ymaps.Polygon([
            [
                [45.47504892504226, 9.146811787117494],
                [45.47504502126178, 9.149818379922529],
                [45.47292975194446, 9.149812775253316],
                [45.4729336554386, 9.14680629492319],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon719);
 var myPolygon720 = new ymaps.Polygon([
            [
                [45.47706558881289, 9.209957943607321],
                [45.477060022785814, 9.212964633191485],
                [45.47494476161018, 9.21295666568597],
                [45.474950327229, 9.209950088587071],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon720);
 var myPolygon721 = new ymaps.Polygon([
            [
                [45.47919174504101, 9.203952192729773],
                [45.479186336898145, 9.20695899654551],
                [45.477071075699556, 9.206951253150118],
                [45.47707648344576, 9.20394456183239],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon721);
 var myPolygon722 = new ymaps.Polygon([
            [
                [45.48130159730896, 9.206966740801546],
                [45.4812961096173, 9.20997365626703],
                [45.479180849609, 9.2099657995006],
                [45.479186336898145, 9.20695899654551],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon722);
 var myPolygon723 = new ymaps.Polygon([
            [
                [45.4812961096173, 9.20997365626703],
                [45.48129054277361, 9.21298057085924],
                [45.47917528317362, 9.212972601582534],
                [45.479180849609, 9.2099657995006],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon723);
 var myPolygon724 = new ymaps.Polygon([
            [
                [45.4854610290194, 9.24306785777795],
                [45.48545459056311, 9.246074986994056],
                [45.48333933741415, 9.246065778065901],
                [45.48334577539818, 9.243058761383653],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon724);
 var myPolygon725 = new ymaps.Polygon([
            [
                [45.48772442911343, 9.158873820982556],
                [45.48772020693281, 9.161881086330897],
                [45.48560494354306, 9.161875027724061],
                [45.48560916541398, 9.158867874925313],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon725);
 var myPolygon726 = new ymaps.Polygon([
            [
                [45.487601245878714, 9.231047978146128],
                [45.48759512362549, 9.234055223878508],
                [45.48547986941042, 9.234046464113037],
                [45.48548599121459, 9.231039330927569],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon726);
 var myPolygon727 = new ymaps.Polygon([
            [
                [45.491899054553535, 9.194975553686952],
                [45.491893881573716, 9.197983035262343],
                [45.489778623928544, 9.197975624420806],
                [45.48978379652894, 9.194968255418813],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon727);
 var myPolygon728 = new ymaps.Polygon([
            [
                [45.49617695000507, 9.164913042491758],
                [45.49617256819843, 9.167920756803404],
                [45.49405730859512, 9.167914470303163],
                [45.49406169008035, 9.164906868590975],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon728);
 var myPolygon729 = new ymaps.Polygon([
            [
                [45.49830073580057, 9.158903561184843],
                [45.49829651207117, 9.161911389468829],
                [45.49618125261821, 9.161905327493765],
                [45.496185476037816, 9.158897611821944],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon729);
 var myPolygon730 = new ymaps.Polygon([
            [
                [45.498292209142406, 9.164919217078888],
                [45.49828782701435, 9.167927044002507],
                [45.49617256819843, 9.167920756803404],
                [45.49617695000507, 9.164913042491758],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon730);
 var myPolygon731 = new ymaps.Polygon([
            [
                [45.49825987106344, 9.185973990427906],
                [45.49825493454168, 9.188981812195907],
                [45.49613967813838, 9.188974736715751],
                [45.49614461429807, 9.185967027559023],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon731);
 var myPolygon732 = new ymaps.Polygon([
            [
                [45.50042013961002, 9.155901569638994],
                [45.50041599477599, 9.158909511209147],
                [45.49830073580057, 9.158903561184843],
                [45.49830488033058, 9.155895732239461],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon732);
 var myPolygon733 = new ymaps.Polygon([
            [
                [45.500411770736754, 9.161917452117807],
                [45.50040746749236, 9.164925392352457],
                [45.498292209142406, 9.164919217078888],
                [45.49829651207117, 9.161911389468829],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon733);
 var myPolygon734 = new ymaps.Polygon([
            [
                [45.500403085042855, 9.167933331900567],
                [45.50039862338829, 9.170941270749628],
                [45.49828336568704, 9.170934870227168],
                [45.49828782701435, 9.167927044002507],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon734);
 var myPolygon735 = new ymaps.Polygon([
            [
                [45.50037512704125, 9.185980954070859],
                [45.50037019015737, 9.188988888462651],
                [45.49825493454168, 9.188981812195907],
                [45.49825987106344, 9.185973990427906],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon735);
 var myPolygon736 = new ymaps.Polygon([
            [
                [45.5003164650692, 9.219068187046123],
                [45.50031065693675, 9.222076112095571],
                [45.49819540568775, 9.222067796974617],
                [45.49820121339418, 9.219059984547679],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon736);
 var myPolygon737 = new ymaps.Polygon([
            [
                [45.500298803059756, 9.228091959408673],
                [45.50029275731534, 9.23109988164728],
                [45.498177507379246, 9.231091228659553],
                [45.49818355268022, 9.22808341904307],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon737);
 var myPolygon738 = new ymaps.Polygon([
            [
                [45.50250471870601, 9.176963772808074],
                [45.50250001909185, 9.179971822121463],
                [45.5003847631947, 9.179965082977262],
                [45.50038946246416, 9.176957146300495],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon738);
 var myPolygon739 = new ymaps.Polygon([
            [
                [45.506690074096156, 9.204051471619106],
                [45.50668466079381, 9.207059739047368],
                [45.50456940983604, 9.207051984454381],
                [45.504574822741326, 9.2040438296868],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon739);
 var myPolygon740 = new ymaps.Polygon([
            [
                [45.51512320473406, 9.219125630075583],
                [45.515117393618596, 9.222134343833293],
                [45.51300214788488, 9.222126022238696],
                [45.513007958574114, 9.21911742119118],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon740);
 var myPolygon741 = new ymaps.Polygon([
            [
                [45.51732065665115, 9.170992500554211],
                [45.51731611312614, 9.174001340136991],
                [45.515200862057526, 9.173994821194686],
                [45.51520540524926, 9.17098609433642],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon741);
 var myPolygon742 = new ymaps.Polygon([
            [
                [45.51943136340734, 9.174007859804183],
                [45.519426740291756, 9.177016811399026],
                [45.517311490349684, 9.177010178994884],
                [45.51731611312614, 9.174001340136991],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon742);
 var myPolygon743 = new ymaps.Polygon([
            [
                [45.5215511570927, 9.171005315126953],
                [45.521546612901076, 9.174014380196368],
                [45.51943136340734, 9.174007859804183],
                [45.519435907265645, 9.170998907484355],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon743);
 var myPolygon744 = new ymaps.Polygon([
            [
                [45.52346018314144, 9.276332434029529],
                [45.52345286424086, 9.279341579018622],
                [45.52133763086441, 9.279331111301703],
                [45.521344949228144, 9.27632207907025],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon744);
 var myPolygon745 = new ymaps.Polygon([
            [
                [45.529906173681056, 9.231221124544096],
                [45.52990004243968, 9.234230623844095],
                [45.52778480398521, 9.234221844579123],
                [45.52779093477688, 9.23121245807656],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon745);
 var myPolygon746 = new ymaps.Polygon([
            [
                [45.531906389522746, 9.28239305650881],
                [45.531898909894764, 9.285402650311912],
                [45.529783680764034, 9.285391952322682],
                [45.5297911598434, 9.282382471327065],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon746);
 var myPolygon747 = new ymaps.Polygon([
            [
                [45.53411164478125, 9.243277354190797],
                [45.53410519545353, 9.246287075141458],
                [45.531989960432426, 9.246277842634838],
                [45.53199640928708, 9.243268234506164],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon747);
 var myPolygon748 = new ymaps.Polygon([
            [
                [45.536151570061996, 9.27639458797266],
                [45.53614424793956, 9.279404409770935],
                [45.534029019294536, 9.279393935067276],
                [45.53403634087989, 9.276384226101891],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon748);
 var myPolygon749 = new ymaps.Polygon([
            [
                [45.538434531824095, 9.19513632104102],
                [45.53842935048964, 9.198146282400144],
                [45.53631411017288, 9.198138853408713],
                [45.53631929112727, 9.195129004898682],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon749);
 var myPolygon750 = new ymaps.Polygon([
            [
                [45.54049438542022, 9.225244341510157],
                [45.540488410558424, 9.228254406901977],
                [45.53837317515008, 9.228245848474284],
                [45.53837914957362, 9.225235895942902],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon750);
 var myPolygon751 = new ymaps.Polygon([
            [
                [45.54489019035306, 9.113879908259918],
                [45.544887149716025, 9.116890225814233],
                [45.542771903540824, 9.116885842320011],
                [45.54277494395481, 9.113875637654855],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon751);
 var myPolygon752 = new ymaps.Polygon([
            [
                [45.56368493255383, 9.261472931315677],
                [45.56367800033274, 9.264484226731025],
                [45.561562779309256, 9.264474301852127],
                [45.561569711021846, 9.26146311943372],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon752);
 var myPolygon753 = new ymaps.Polygon([
            [
                [45.56579322056788, 9.264494152714152],
                [45.565786208454895, 9.267505560034627],
                [45.56367098873413, 9.267495521042141],
                [45.56367800033274, 9.264484226731025],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon753);
 var myPolygon754 = new ymaps.Polygon([
            [
                [45.360819351497476, 9.149516616941053],
                [45.36081538432599, 9.152517153325986],
                [45.35870007278478, 9.152511470365633],
                [45.35870403966528, 9.14951104578303],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon754);
 var myPolygon755 = new ymaps.Polygon([
            [
                [45.43696201874192, 9.15572672955769],
                [45.436957883018685, 9.158731297823676],
                [45.434842600422755, 9.158725367602207],
                [45.434846735842655, 9.15572091158616],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon755);
 var myPolygon756 = new ymaps.Polygon([
            [
                [45.43693601893683, 9.173754129022363],
                [45.43693140902765, 9.176758693148566],
                [45.43481612837353, 9.176752089429428],
                [45.43482073794456, 9.173747637552594],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon756);
 var myPolygon757 = new ymaps.Polygon([
            [
                [45.436896926803655, 9.197790620792686],
                [45.43689168464946, 9.200795178700881],
                [45.434776406909, 9.200787676990517],
                [45.43478164867869, 9.197783231330844],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon757);
 var myPolygon758 = new ymaps.Polygon([
            [
                [45.44111691580196, 9.203814966230883],
                [45.44111151479482, 9.20681974699388],
                [45.438996239416284, 9.206812019070087],
                [45.439001640027314, 9.203807350580323],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon758);
 var myPolygon759 = new ymaps.Polygon([
            [
                [45.443307862715685, 9.155744187350553],
                [45.443303726082256, 9.158749092441171],
                [45.441188445848425, 9.15874316024307],
                [45.44119258217844, 9.1557383674398],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon759);
 var myPolygon760 = new ymaps.Polygon([
            [
                [45.44329084189122, 9.167763803708773],
                [45.44328638906411, 9.170768706088307],
                [45.44117111010191, 9.170762324741716],
                [45.441175562602425, 9.167757534649162],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon760);
 var myPolygon761 = new ymaps.Polygon([
            [
                [45.447550358788035, 9.146740436173015],
                [45.44754645872828, 9.149745567778607],
                [45.445431179176204, 9.149739971199462],
                [45.445435078949906, 9.146734951906435],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon761);
 var myPolygon762 = new ymaps.Polygon([
            [
                [45.4475031098257, 9.1797968475764],
                [45.447498340106, 9.182801971655843],
                [45.445383064083316, 9.182795139644501],
                [45.445387833453175, 9.179790127876588],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon762);
 var myPolygon763 = new ymaps.Polygon([
            [
                [45.44746806153589, 9.200832699755443],
                [45.44746273839942, 9.203837818259403],
                [45.44534746498803, 9.203830200070307],
                [45.44535278773407, 9.200825193877124],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon763);
 var myPolygon764 = new ymaps.Polygon([
            [
                [45.44965775808119, 9.152756408288301],
                [45.449653699603346, 9.155761650962674],
                [45.44753842142812, 9.155755829111902],
                [45.44754247960829, 9.152750698762397],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon764);
 var myPolygon765 = new ymaps.Polygon([
            [
                [45.45167683668144, 9.212869081536],
                [45.451671196480724, 9.215874421237487],
                [45.44955592626479, 9.215866352013704],
                [45.44956156605182, 9.212861124647471],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon765);
 var myPolygon766 = new ymaps.Polygon([
            [
                [45.45387160190692, 9.16478969475742],
                [45.45386722652378, 9.167795159455974],
                [45.45175195117211, 9.167788886912996],
                [45.45175632623434, 9.164783534563913],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon766);
 var myPolygon767 = new ymaps.Polygon([
            [
                [45.46024958755198, 9.140761741268145],
                [45.460245843965595, 9.143767548218367],
                [45.458130568570716, 9.143762172682123],
                [45.458134311882496, 9.140756478119524],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon767);
 var myPolygon768 = new ymaps.Polygon([
            [
                [45.4623533935486, 9.149784761247878],
                [45.462349412384995, 9.152790678768488],
                [45.46023413863596, 9.152784965435073],
                [45.46023811950755, 9.149779160314324],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon768);
 var myPolygon769 = new ymaps.Polygon([
            [
                [45.462305250213326, 9.18284981699487],
                [45.462300398943654, 9.18585572684475],
                [45.460185128789675, 9.185848777118967],
                [45.460189979703514, 9.182842979667898],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon769);
 var myPolygon770 = new ymaps.Polygon([
            [
                [45.46223013433558, 9.224932480069468],
                [45.46222417566762, 9.227938377970855],
                [45.460108911104435, 9.227929854673524],
                [45.46011486933535, 9.224924069169317],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon770);
 var myPolygon771 = new ymaps.Polygon([
            [
                [45.468682808079926, 9.161826583102954],
                [45.46867850956765, 9.16483283528253],
                [45.46656323940689, 9.164826670295732],
                [45.46656753760386, 9.161820530553133],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon771);
 var myPolygon772 = new ymaps.Polygon([
            [
                [45.46858180547099, 9.221951482275397],
                [45.468575924608544, 9.224957718378313],
                [45.46646066197218, 9.224949304673837],
                [45.46646654240326, 9.221943181005706],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon772);
 var myPolygon773 = new ymaps.Polygon([
            [
                [45.468563925533076, 9.230970187766557],
                [45.468557807320174, 9.233976421026897],
                [45.46644254601266, 9.233967670018837],
                [45.46644866377681, 9.230961549192896],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon773);
 var myPolygon774 = new ymaps.Polygon([
            [
                [45.470825954091, 9.140788065785566],
                [45.47082220913139, 9.14379443486126],
                [45.46870693767272, 9.14378905633752],
                [45.468710682357646, 9.140782799711909],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon774);
 var myPolygon775 = new ymaps.Polygon([
            [
                [45.47081049950799, 9.152813538451893],
                [45.47080643805213, 9.155819905061627],
                [45.468691167750244, 9.155814076738396],
                [45.4686952289082, 9.152807822578405],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon775);
 var myPolygon776 = new ymaps.Polygon([
            [
                [45.47289567532074, 9.17386459442278],
                [45.472891059659645, 9.176871068697544],
                [45.470775792393034, 9.176864452493461],
                [45.47078040771558, 9.173858090680284],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon776);
 var myPolygon777 = new ymaps.Polygon([
            [
                [45.472871805721525, 9.1888969583185],
                [45.472866794413825, 9.191903428791724],
                [45.47075152892702, 9.191896250281244],
                [45.47075653986715, 9.18888989226909],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon777);
 var myPolygon778 = new ymaps.Polygon([
            [
                [45.47281813183933, 9.21896162564975],
                [45.47281232924266, 9.221968087582509],
                [45.47069706775078, 9.221959784467623],
                [45.47070286992183, 9.218953434994768],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon778);
 var myPolygon779 = new ymaps.Polygon([
            [
                [45.47499685673375, 9.1828908569159],
                [45.474992003328545, 9.185897441421014],
                [45.4728767379, 9.185890487059972],
                [45.47288159094922, 9.182884015028636],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon779);
 var myPolygon780 = new ymaps.Polygon([
            [
                [45.47497696830273, 9.194917190248884],
                [45.47497179835757, 9.197923771587343],
                [45.47285653441102, 9.19791636733226],
                [45.47286170397697, 9.194909898467143],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon780);
 var myPolygon781 = new ymaps.Polygon([
            [
                [45.47712159183036, 9.176884303311743],
                [45.47711689635106, 9.179891001811667],
                [45.47500163100385, 9.179884271650378],
                [45.47500632613875, 9.176877685636935],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon781);
 var myPolygon782 = new ymaps.Polygon([
            [
                [45.47925484856058, 9.164863670495338],
                [45.47925046932449, 9.167870484361673],
                [45.477135203421895, 9.167864203448914],
                [45.47713958233679, 9.164857502081956],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon782);
 var myPolygon783 = new ymaps.Polygon([
            [
                [45.479180849609, 9.2099657995006],
                [45.47917528317362, 9.212972601582534],
                [45.477060022785814, 9.212964633191485],
                [45.47706558881289, 9.209957943607321],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon783);
 var myPolygon784 = new ymaps.Polygon([
            [
                [45.481365734439656, 9.167876765972537],
                [45.48136127572954, 9.170883691652561],
                [45.4792460109414, 9.170877297529909],
                [45.47925046932449, 9.167870484361673],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon784);
 var myPolygon785 = new ymaps.Polygon([
            [
                [45.48127917163038, 9.218994397373828],
                [45.481273367330964, 9.222001309271194],
                [45.479158108990774, 9.2219930024644],
                [45.479163912864436, 9.21898620307694],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon785);
 var myPolygon786 = new ymaps.Polygon([
            [
                [45.48123052098882, 9.243049666000319],
                [45.481224083477, 9.246056570161215],
                [45.47910882875168, 9.246047363279859],
                [45.47911526579133, 9.243040571627814],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon786);
 var myPolygon787 = new ymaps.Polygon([
            [
                [45.485568318657826, 9.185932224822018],
                [45.48556338430818, 9.188939371110123],
                [45.48344812317938, 9.188932300347275],
                [45.483453057167104, 9.185925266595358],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon787);
 var myPolygon788 = new ymaps.Polygon([
            [
                [45.48757628185246, 9.243076955183348],
                [45.48756984292388, 9.246084196945828],
                [45.48545459056311, 9.246074986994056],
                [45.4854610290194, 9.24306785777795],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon788);
 var myPolygon789 = new ymaps.Polygon([
            [
                [45.489803695174466, 9.182938771424089],
                [45.4897988392766, 9.18594614359576],
                [45.487683579361, 9.185939183822116],
                [45.48768843490269, 9.182931924211763],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon789);
 var myPolygon790 = new ymaps.Polygon([
            [
                [45.491963162204456, 9.152870732139004],
                [45.491959097768365, 9.155878223933804],
                [45.48984383533967, 9.155872389129273],
                [45.48984789947762, 9.15286500990926],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon790);
 var myPolygon791 = new ymaps.Polygon([
            [
                [45.491946429368255, 9.164900695376447],
                [45.49194204820439, 9.167908184501696],
                [45.48982678702626, 9.167901899398897],
                [45.48983116786876, 9.164894522848078],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon791);
 var myPolygon792 = new ymaps.Polygon([
            [
                [45.491806785154154, 9.243095153028005],
                [45.49180034528089, 9.246102619920752],
                [45.48968509449647, 9.246093407921345],
                [45.489691533897364, 9.243086053599988],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon792);
 var myPolygon793 = new ymaps.Polygon([
            [
                [45.494024420947504, 9.188967662022087],
                [45.49401940596262, 9.191975257793684],
                [45.491904148352006, 9.191968071300268],
                [45.491909162969066, 9.188960588114798],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon793);
 var myPolygon794 = new ymaps.Polygon([
            [
                [45.49396490082601, 9.222051169505482],
                [45.49395901478489, 9.2250587558009],
                [45.491843761603896, 9.225050330867633],
                [45.491849647213286, 9.222042857157048],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon794);
 var myPolygon795 = new ymaps.Polygon([
            [
                [45.49606225665516, 9.231082576633677],
                [45.496056132605375, 9.23409027267882],
                [45.493940881542464, 9.234081509017713],
                [45.49394700514305, 9.231073925569527],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon795);
 var myPolygon796 = new ymaps.Polygon([
            [
                [45.49822906395053, 9.20402090898664],
                [45.49822365223624, 9.2070287258473],
                [45.49610839812748, 9.207020974701843],
                [45.49611380944482, 9.204013270451783],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon796);
 var myPolygon797 = new ymaps.Polygon([
            [
                [45.50037019015737, 9.188988888462651],
                [45.50036517406878, 9.19199682206774],
                [45.49824991882101, 9.191989633177316],
                [45.49825493454168, 9.188981812195907],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon797);
 var myPolygon798 = new ymaps.Polygon([
            [
                [45.50240800646344, 9.231108535596997],
                [45.502401881065886, 9.234116569508137],
                [45.500286632367064, 9.2341078029239],
                [45.50029275731534, 9.23109988164728],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon798);
 var myPolygon799 = new ymaps.Polygon([
            [
                [45.50460563663425, 9.18599488367942],
                [45.50460069902605, 9.189003043356356],
                [45.5024854449855, 9.1889959655161],
                [45.50249038223154, 9.185987918488],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon799);
 var myPolygon800 = new ymaps.Polygon([
            [
                [45.50674885440401, 9.167952199789466],
                [45.50674439176753, 9.170960476586849],
                [45.50462913642853, 9.170954073929373],
                [45.504633598737705, 9.167945909793957],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon800);
 var myPolygon801 = new ymaps.Polygon([
            [
                [45.513013690024366, 9.216108819231009],
                [45.513007958574114, 9.21911742119118],
                [45.5108927116263, 9.219109213219427],
                [45.510898442656156, 9.21610072395704],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon801);
 var myPolygon802 = new ymaps.Polygon([
            [
                [45.51513458923058, 9.21310819983436],
                [45.51512893660475, 9.216116915405095],
                [45.513013690024366, 9.216108819231009],
                [45.51301934223557, 9.213100216370712],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon802);
 var myPolygon803 = new ymaps.Polygon([
            [
                [45.514999242757064, 9.276291021099954],
                [45.51499192600359, 9.279299715133725],
                [45.51287668947282, 9.279289252071454],
                [45.51288400568962, 9.27628067074518],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon803);
 var myPolygon804 = new ymaps.Polygon([
            [
                [45.51736173306071, 9.140904067615132],
                [45.51735798205284, 9.1439129137574],
                [45.51524272791315, 9.14390752206442],
                [45.515246478645885, 9.140898788647565],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon804);
 var myPolygon805 = new ymaps.Polygon([
            [
                [45.52148590009625, 9.210123100886744],
                [45.521480325488746, 9.213132155552078],
                [45.519365080857156, 9.213124169424924],
                [45.51937065505577, 9.210115227507751],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon805);
 var myPolygon806 = new ymaps.Polygon([
            [
                [45.527901367760585, 9.168015138224176],
                [45.527896901849445, 9.171024542330427],
                [45.525781654384616, 9.171018132549893],
                [45.525786119968174, 9.168008841230943],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon806);
 var myPolygon807 = new ymaps.Polygon([
            [
                [45.527896901849445, 9.171024542330427],
                [45.52789235665772, 9.174033945723831],
                [45.52577710952629, 9.174027423156092],
                [45.525781654384616, 9.171018132549893],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon807);
 var myPolygon808 = new ymaps.Polygon([
            [
                [45.527719135715934, 9.264315653841956],
                [45.527712132855314, 9.267325028916025],
                [45.52559689894322, 9.267315010002628],
                [45.52560390129019, 9.26430574771189],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon808);
 var myPolygon809 = new ymaps.Polygon([
            [
                [45.53403634087989, 9.276384226101891],
                [45.534029019294536, 9.279393935067276],
                [45.53191378986094, 9.279383461528473],
                [45.53192111090926, 9.276373865383434],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon809);
 var myPolygon810 = new ymaps.Polygon([
            [
                [45.53625793895379, 9.228237290998392],
                [45.53625188566571, 9.231247129730207],
                [45.53413664912547, 9.231238460370788],
                [45.534142701969536, 9.228228734474179],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon810);
 var myPolygon811 = new ymaps.Polygon([
            [
                [45.53836098837735, 9.23426575066907],
                [45.5383547760283, 9.23727570030738],
                [45.536239541181594, 9.237266804288614],
                [45.53624575307495, 9.234256967497798],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon811);
 var myPolygon812 = new ymaps.Polygon([
            [
                [45.54489315166219, 9.110869590230564],
                [45.54489019035306, 9.113879908259918],
                [45.54277494395481, 9.113875637654855],
                [45.54277790504674, 9.110865432514727],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon812);
 var myPolygon813 = new ymaps.Polygon([
            [
                [45.551141034246136, 9.186148313999308],
                [45.5511360886634, 9.189158955122187],
                [45.54902085194925, 9.18915185994492],
                [45.549025797169215, 9.186141331746802],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon813);
 var myPolygon814 = new ymaps.Polygon([
            [
                [45.55319750088968, 9.219273546201093],
                [45.55319168209643, 9.222284290886972],
                [45.55107645054464, 9.222275952617396],
                [45.551082268911074, 9.219265320867557],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon814);
 var myPolygon815 = new ymaps.Polygon([
            [
                [45.557346116928514, 9.258432541390727],
                [45.55733926559293, 9.26144349894418],
                [45.55522404169599, 9.261433690336302],
                [45.55523089252902, 9.258422845742233],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon815);
 var myPolygon816 = new ymaps.Polygon([
            [
                [45.379840770143176, 9.161572954017792],
                [45.379836484852895, 9.16457449458165],
                [45.37772118162045, 9.164568358286072],
                [45.377725466596424, 9.161566929635926],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon816);
 var myPolygon817 = new ymaps.Polygon([
            [
                [45.38195607290254, 9.161578979068453],
                [45.38195178729793, 9.164580631558447],
                [45.379836484852895, 9.16457449458165],
                [45.379840770143176, 9.161572954017792],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon817);
 var myPolygon818 = new ymaps.Polygon([
            [
                [45.38195178729793, 9.164580631558447],
                [45.381947422812864, 9.167582283367134],
                [45.37983212068797, 9.167576034464293],
                [45.379836484852895, 9.16457449458165],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon818);
 var myPolygon819 = new ymaps.Polygon([
            [
                [45.39889872332815, 9.146614452032956],
                [45.398894829842405, 9.149617003603204],
                [45.396779532182215, 9.149611421302172],
                [45.39678342538239, 9.146608981757957],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon819);
 var myPolygon820 = new ymaps.Polygon([
            [
                [45.424085440190446, 9.257823815998828],
                [45.42407862044268, 9.260827681581992],
                [45.421963346879046, 9.260817941420669],
                [45.421970166126634, 9.257814188008654],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon820);
 var myPolygon821 = new ymaps.Polygon([
            [
                [45.43694054981511, 9.170749564175024],
                [45.43693601893683, 9.173754129022363],
                [45.43482073794456, 9.173747637552594],
                [45.434825268490535, 9.170743184954727],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon821);
 var myPolygon822 = new ymaps.Polygon([
            [
                [45.43685277672275, 9.221827060025788],
                [45.436846902327204, 9.224831610917931],
                [45.43473162787137, 9.22482321122361],
                [45.43473750183608, 9.221818772579033],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon822);
 var myPolygon823 = new ymaps.Polygon([
            [
                [45.43906028252618, 9.167751266285944],
                [45.43905583035224, 9.170755944103986],
                [45.43694054981511, 9.170749564175024],
                [45.4369450016625, 9.167744998619014],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon823);
 var myPolygon824 = new ymaps.Polygon([
            [
                [45.43904668889428, 9.17676529760131],
                [45.43904199961036, 9.179769973255649],
                [45.43692672008768, 9.179763256541161],
                [45.43693140902765, 9.176758693148566],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon824);
 var myPolygon825 = new ymaps.Polygon([
            [
                [45.43903723128988, 9.182774648163806],
                [45.43903238393288, 9.185779322313314],
                [45.4369171051155, 9.185772381075653],
                [45.43692195211694, 9.18276781918768],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon825);
 var myPolygon826 = new ymaps.Polygon([
            [
                [45.43897956336711, 9.215826019338976],
                [45.438973846612214, 9.218830684320237],
                [45.43685857208837, 9.218822508212995],
                [45.436864288423955, 9.21581795549202],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon826);
 var myPolygon827 = new ymaps.Polygon([
            [
                [45.438973846612214, 9.218830684320237],
                [45.43896805082151, 9.221835348393194],
                [45.43685277672275, 9.221827060025788],
                [45.43685857208837, 9.218822508212995],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon827);
 var myPolygon828 = new ymaps.Polygon([
            [
                [45.44325801208872, 9.188798105040773],
                [45.44325300592453, 9.19180300219563],
                [45.44113772941089, 9.191795834842976],
                [45.44114273520789, 9.188791049974387],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon828);
 var myPolygon829 = new ymaps.Polygon([
            [
                [45.44536828165053, 9.191810170344565],
                [45.445363196065365, 9.194815179001774],
                [45.443247920712395, 9.194807898554208],
                [45.44325300592453, 9.19180300219563],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon829);
 var myPolygon830 = new ymaps.Polygon([
            [
                [45.45175632623434, 9.164783534563913],
                [45.45175195117211, 9.167788886912996],
                [45.449636675033034, 9.167782615066882],
                [45.449641049774364, 9.164777375054783],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon830);
 var myPolygon831 = new ymaps.Polygon([
            [
                [45.451728889788725, 9.182815637955835],
                [45.45172404029794, 9.185820985936516],
                [45.44960876620606, 9.185814040070547],
                [45.449613615341136, 9.182808804426257],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon831);
 var myPolygon832 = new ymaps.Polygon([
            [
                [45.45599539095063, 9.158784699473182],
                [45.45599117341298, 9.161790277890336],
                [45.45387589821265, 9.161784229374394],
                [45.45388011544096, 9.158778763319377],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon832);
 var myPolygon833 = new ymaps.Polygon([
            [
                [45.45599117341298, 9.161790277890336],
                [45.455986876792075, 9.164795855635406],
                [45.45387160190692, 9.16478969475742],
                [45.45387589821265, 9.161784229374394],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon833);
 var myPolygon834 = new ymaps.Polygon([
            [
                [45.45590173454896, 9.215890562374883],
                [45.455896014438494, 9.21889612588753],
                [45.45378074621786, 9.218887942510383],
                [45.453786465908784, 9.215882491357842],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon834);
 var myPolygon835 = new ymaps.Polygon([
            [
                [45.46023007866938, 9.155790769921024],
                [45.46022593960787, 9.158796573759682],
                [45.45811066567293, 9.15879063628659],
                [45.45811480443085, 9.155784944835126],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon835);
 var myPolygon836 = new ymaps.Polygon([
            [
                [45.460148957751294, 9.206889336956234],
                [45.4601434740834, 9.209895127880241],
                [45.45802820619712, 9.209887279839963],
                [45.45803368946279, 9.206881601301392],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon836);
 var myPolygon837 = new ymaps.Polygon([
            [
                [45.46008428724527, 9.239952987095393],
                [45.460077933546955, 9.24295876773968],
                [45.4579626704679, 9.242949683467852],
                [45.45796902370019, 9.239944015207596],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon837);
 var myPolygon838 = new ymaps.Polygon([
            [
                [45.46235729561136, 9.146778843104867],
                [45.4623533935486, 9.149784761247878],
                [45.46023811950755, 9.149779160314324],
                [45.46024202128411, 9.14677335457126],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon838);
 var myPolygon839 = new ymaps.Polygon([
            [
                [45.46226422525203, 9.206897073470667],
                [45.4622587411819, 9.209902976792595],
                [45.4601434740834, 9.209895127880241],
                [45.460148957751294, 9.206889336956234],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon839);
 var myPolygon840 = new ymaps.Polygon([
            [
                [45.46222417566762, 9.227938377970855],
                [45.462218137900216, 9.23094427492511],
                [45.460102873779896, 9.230935639230722],
                [45.460108911104435, 9.227929854673524],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon840);
 var myPolygon841 = new ymaps.Polygon([
            [
                [45.46446062478448, 9.155802422034775],
                [45.46445648511571, 9.158808450685298],
                [45.46234121275548, 9.158802511892556],
                [45.4623453521206, 9.155796595654213],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon841);
 var myPolygon842 = new ymaps.Polygon([
            [
                [45.46440572774091, 9.191874719535539],
                [45.464400638797386, 9.194880739442098],
                [45.46228537053336, 9.194873451710762],
                [45.46229045910361, 9.191867544215189],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon842);
 var myPolygon843 = new ymaps.Polygon([
            [
                [45.464368443914594, 9.212916841437174],
                [45.46436280123106, 9.215922855412387],
                [45.46224753574233, 9.215914780807367],
                [45.46225317801198, 9.212908879242326],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon843);
 var myPolygon844 = new ymaps.Polygon([
            [
                [45.466454702430006, 9.227955427407064],
                [45.46644866377681, 9.230961549192896],
                [45.46433340123254, 9.230952911579122],
                [45.46433943944282, 9.227946902215328],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon844);
 var myPolygon845 = new ymaps.Polygon([
            [
                [45.46854533354434, 9.239988884617537],
                [45.468538977981545, 9.24299511492285],
                [45.46642371805513, 9.242986026612405],
                [45.46643007315175, 9.239979908741088],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon845);
 var myPolygon846 = new ymaps.Polygon([
            [
                [45.470746438863536, 9.194902607495704],
                [45.47074126967677, 9.197908963899973],
                [45.46862600415486, 9.197901561290372],
                [45.468631172962475, 9.194895317334456],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon846);
 var myPolygon847 = new ymaps.Polygon([
            [
                [45.47074126967677, 9.197908963899973],
                [45.47073602136675, 9.200915319481553],
                [45.46862075622979, 9.200907804423712],
                [45.46862600415486, 9.197901561290372],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon847);
 var myPolygon848 = new ymaps.Polygon([
            [
                [45.472866794413825, 9.191903428791724],
                [45.47286170397697, 9.194909898467143],
                [45.470746438863536, 9.194902607495704],
                [45.47075152892702, 9.191896250281244],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon848);
 var myPolygon849 = new ymaps.Polygon([
            [
                [45.47497179835757, 9.197923771587343],
                [45.47496654927756, 9.200930352102896],
                [45.47285128571601, 9.200922835374575],
                [45.47285653441102, 9.19791636733226],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon849);
 var myPolygon850 = new ymaps.Polygon([
            [
                [45.47712620816864, 9.17387760407631],
                [45.47712159183036, 9.176884303311743],
                [45.47500632613875, 9.176877685636935],
                [45.475010942138425, 9.173871098888089],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon850);
 var myPolygon851 = new ymaps.Polygon([
            [
                [45.4770369672745, 9.224991382547794],
                [45.477031005546245, 9.227998067579273],
                [45.474915746498965, 9.227989537649263],
                [45.47492170778994, 9.224982965102429],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon851);
 var myPolygon852 = new ymaps.Polygon([
            [
                [45.47923216091074, 9.179897732720972],
                [45.479227385940206, 9.182904542971766],
                [45.477112121730755, 9.182897699563576],
                [45.47711689635106, 9.179891001811667],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon852);
 var myPolygon853 = new ymaps.Polygon([
            [
                [45.479212586148435, 9.191924969110417],
                [45.479207494591314, 9.19493177624371],
                [45.47709223184084, 9.194924482841033],
                [45.47709732302453, 9.191917788206199],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon853);
 var myPolygon854 = new ymaps.Polygon([
            [
                [45.48129054277361, 9.21298057085924],
                [45.48128489677796, 9.215987484565675],
                [45.47916963759209, 9.215979402778816],
                [45.47917528317362, 9.212972601582534],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon854);
 var myPolygon855 = new ymaps.Polygon([
            [
                [45.48350210657343, 9.152847847035783],
                [45.4834980433297, 9.15585488860649],
                [45.48138277775174, 9.155849056395537],
                [45.48138684069743, 9.152842127349588],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon855);
 var myPolygon856 = new ymaps.Polygon([
            [
                [45.485537525100405, 9.203975090511255],
                [45.48553211576733, 9.206982231896038],
                [45.48341685693203, 9.206974485918352],
                [45.48342226586834, 9.203967457069089],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon856);
 var myPolygon857 = new ymaps.Polygon([
            [
                [45.48550388164764, 9.22201792565478],
                [45.48549799733326, 9.22502506168593],
                [45.48338274100049, 9.225016640497637],
                [45.483388624883254, 9.222009617001275],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon857);
 var myPolygon858 = new ymaps.Polygon([
            [
                [45.48766336549572, 9.197968214402971],
                [45.487658114105045, 9.20097547002049],
                [45.485542855269706, 9.200967948277981],
                [45.4855481062752, 9.197960805208721],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon858);
 var myPolygon859 = new ymaps.Polygon([
            [
                [45.489793904203026, 9.188953514993779],
                [45.489788889953786, 9.191960885605637],
                [45.48767363076796, 9.191953700709675],
                [45.4876786446494, 9.18894644265892],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon859);
 var myPolygon860 = new ymaps.Polygon([
            [
                [45.491959097768365, 9.155878223933804],
                [45.49195495415029, 9.158885715079988],
                [45.48983969202551, 9.158879767700752],
                [45.48984383533967, 9.155872389129273],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon860);
 var myPolygon861 = new ymaps.Polygon([
            [
                [45.491825629691505, 9.234072746330712],
                [45.49181942735952, 9.237080216220473],
                [45.489704175175454, 9.237071341935646],
                [45.48971037705251, 9.23406398461769],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon861);
 var myPolygon862 = new ymaps.Polygon([
            [
                [45.49406169008035, 9.164906868590975],
                [45.49405730859512, 9.167914470303163],
                [45.49194204820439, 9.167908184501696],
                [45.491946429368255, 9.164900695376447],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon862);
 var myPolygon863 = new ymaps.Polygon([
            [
                [45.49613967813838, 9.188974736715751],
                [45.496134662785614, 9.191982445086],
                [45.49401940596262, 9.191975257793684],
                [45.494024420947504, 9.188967662022087],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon863);
 var myPolygon864 = new ymaps.Polygon([
            [
                [45.49826472838626, 9.18296616788583],
                [45.49825987106344, 9.185973990427906],
                [45.49614461429807, 9.185967027559023],
                [45.49614947126461, 9.182959317628322],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon864);
 var myPolygon865 = new ymaps.Polygon([
            [
                [45.49819540568775, 9.222067796974617],
                [45.49818951878307, 9.225075608477256],
                [45.49607426717795, 9.225067181670733],
                [45.49608015365083, 9.222059482777961],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon865);
 var myPolygon866 = new ymaps.Polygon([
            [
                [45.50250001909185, 9.179971822121463],
                [45.502495240267, 9.182979870685614],
                [45.50037998472038, 9.18297301890489],
                [45.5003847631947, 9.179965082977262],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon866);
 var myPolygon867 = new ymaps.Polygon([
            [
                [45.502475332861955, 9.195012057199351],
                [45.50247015798457, 9.198020101829464],
                [45.500354904277714, 9.19801268686774],
                [45.500360078775536, 9.195004754873613],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon867);
 var myPolygon868 = new ymaps.Polygon([
            [
                [45.506757542009446, 9.161935644109203],
                [45.506753237818, 9.164943922292744],
                [45.504637981830165, 9.164937744959289],
                [45.50464228570591, 9.161929579437905],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon868);
 var myPolygon869 = new ymaps.Polygon([
            [
                [45.519533202048045, 9.083739031190461],
                [45.519530956668675, 9.086747999081613],
                [45.51741569908235, 9.086744748822126],
                [45.51741794429703, 9.083735893670152],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon869);
 var myPolygon870 = new ymaps.Polygon([
            [
                [45.519444757210245, 9.164981000719877],
                [45.519440371866615, 9.167989954452075],
                [45.517325120924674, 9.167983660259077],
                [45.51732950594662, 9.164974819264124],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon870);
 var myPolygon871 = new ymaps.Polygon([
            [
                [45.519426740291756, 9.177016811399026],
                [45.51942203791896, 9.180025762256346],
                [45.51730678832181, 9.18001901711535],
                [45.517311490349684, 9.177010178994884],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon871);
 var myPolygon872 = new ymaps.Polygon([
            [
                [45.523481664242716, 9.267304992203284],
                [45.52347458314245, 9.27031414060932],
                [45.52135934817294, 9.27030401116578],
                [45.52136642875382, 9.267294975517842],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon872);
 var myPolygon873 = new ymaps.Polygon([
            [
                [45.53626391293911, 9.2252274513149],
                [45.53625793895379, 9.228237290998392],
                [45.534142701969536, 9.228228734474179],
                [45.53414867551668, 9.225219007626023],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon873);
 var myPolygon874 = new ymaps.Polygon([
            [
                [45.54047001008696, 9.237284597315604],
                [45.54046371796804, 9.240294658824359],
                [45.53834848437089, 9.240285648956226],
                [45.5383547760283, 9.23727570030738],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon874);
 var myPolygon875 = new ymaps.Polygon([
            [
                [45.54277790504674, 9.110865432514727],
                [45.54277494395481, 9.113875637654855],
                [45.54065969676956, 9.113871367524773],
                [45.54066265764428, 9.110861275261307],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon875);
 var myPolygon876 = new ymaps.Polygon([
            [
                [45.551058519383965, 9.23130784225187],
                [45.551052383643494, 9.234318470216481],
                [45.548937153069154, 9.234309681181744],
                [45.54894328835957, 9.231299166140095],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon876);
 var myPolygon877 = new ymaps.Polygon([
            [
                [45.565800153297474, 9.261482744289301],
                [45.56579322056788, 9.264494152714152],
                [45.56367800033274, 9.264484226731025],
                [45.56368493255383, 9.261472931315677],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon877);
 var myPolygon878 = new ymaps.Polygon([
            [
                [45.37561016226224, 9.161560905922766],
                [45.375605877600535, 9.164562222671618],
                [45.37349057279319, 9.164556087738196],
                [45.37349485714062, 9.161554882878212],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon878);
 var myPolygon879 = new ymaps.Polygon([
            [
                [45.430659622356146, 9.119658452111366],
                [45.430656435710716, 9.122662690594936],
                [45.428541147495864, 9.122658108905183],
                [45.428544333907546, 9.119653982635095],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon879);
 var myPolygon880 = new ymaps.Polygon([
            [
                [45.43480182551051, 9.185765440609009],
                [45.434796899839704, 9.188769889477005],
                [45.43268161980843, 9.188762837544774],
                [45.43268654511793, 9.185758500913273],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon880);
 var myPolygon881 = new ymaps.Polygon([
            [
                [45.43701162057779, 9.113662711644123],
                [45.43700859129436, 9.116667287823828],
                [45.434893304979106, 9.116662929108868],
                [45.43489633404037, 9.11365846518018],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon881);
 var myPolygon882 = new ymaps.Polygon([
            [
                [45.43697005309493, 9.149717591099234],
                [45.43696607543403, 9.152722160645387],
                [45.434850792237214, 9.152716454923882],
                [45.43485476960636, 9.149711997627838],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon882);
 var myPolygon883 = new ymaps.Polygon([
            [
                [45.436957883018685, 9.158731297823676],
                [45.43695366826432, 9.161735865430868],
                [45.434838385977535, 9.161729822959556],
                [45.434842600422755, 9.158725367602207],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon883);
 var myPolygon884 = new ymaps.Polygon([
            [
                [45.43692195211694, 9.18276781918768],
                [45.4369171051155, 9.185772381075653],
                [45.43480182551051, 9.185765440609009],
                [45.43480667215645, 9.1827609909701],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon884);
 var myPolygon885 = new ymaps.Polygon([
            [
                [45.441188445848425, 9.15874316024307],
                [45.441184230475734, 9.161747952387367],
                [45.439068949763715, 9.161741908573443],
                [45.43907316482724, 9.158737228703929],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon885);
 var myPolygon886 = new ymaps.Polygon([
            [
                [45.44324275645236, 9.197812794104028],
                [45.44323751314451, 9.20081768883262],
                [45.44112223776721, 9.20081018462182],
                [45.44112748069049, 9.197805402179169],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon886);
 var myPolygon887 = new ymaps.Polygon([
            [
                [45.44541049449219, 9.164765058089296],
                [45.44540612039261, 9.167770073464867],
                [45.44329084189122, 9.167763803708773],
                [45.443295215670005, 9.164758900632755],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon887);
 var myPolygon888 = new ymaps.Polygon([
            [
                [45.445383064083316, 9.182795139644501],
                [45.44537821565955, 9.18580015065345],
                [45.44326293920492, 9.185793207102108],
                [45.44326778727307, 9.182788308392114],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon888);
 var myPolygon889 = new ymaps.Polygon([
            [
                [45.44532538346935, 9.215850216255335],
                [45.445319665456346, 9.218855218092283],
                [45.44320439329621, 9.218847039259758],
                [45.443210110889815, 9.215842149720514],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon889);
 var myPolygon890 = new ymaps.Polygon([
            [
                [45.449673201332324, 9.140735431371917],
                [45.44966945911865, 9.143740676508884],
                [45.447554179787524, 9.1437353039581],
                [45.447557921726684, 9.140730171146336],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon890);
 var myPolygon891 = new ymaps.Polygon([
            [
                [45.45161687650178, 9.242922436707676],
                [45.451610445597275, 9.245927766881847],
                [45.44949517983727, 9.245918574312473],
                [45.44950161027008, 9.242913356472258],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon891);
 var myPolygon892 = new ymaps.Polygon([
            [
                [45.45597804630074, 9.170807009059354],
                [45.455973512430404, 9.173812584713264],
                [45.45385823852548, 9.173806086749718],
                [45.45386277206328, 9.170800623457565],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon892);
 var myPolygon893 = new ymaps.Polygon([
            [
                [45.45596889947699, 9.176818159645151],
                [45.45596420744058, 9.179823733842523],
                [45.453848934218165, 9.17981701115576],
                [45.453853625910426, 9.17681154931994],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon893);
 var myPolygon894 = new ymaps.Polygon([
            [
                [45.458122844679224, 9.149773560003084],
                [45.45811886409964, 9.152779252736462],
                [45.456003588775985, 9.152773540672566],
                [45.45600756906364, 9.14976796031407],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon894);
 var myPolygon895 = new ymaps.Polygon([
            [
                [45.46023811950755, 9.149779160314324],
                [45.46023413863596, 9.152784965435073],
                [45.45811886409964, 9.152779252736462],
                [45.458122844679224, 9.149773560003084],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon895);
 var myPolygon896 = new ymaps.Polygon([
            [
                [45.460154362325106, 9.203883545172637],
                [45.460148957751294, 9.206889336956234],
                [45.45803368946279, 9.206881601301392],
                [45.4580390936402, 9.203875921903348],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon896);
 var myPolygon897 = new ymaps.Polygon([
            [
                [45.462349412384995, 9.152790678768488],
                [45.4623453521206, 9.155796595654213],
                [45.46023007866938, 9.155790769921024],
                [45.46023413863596, 9.152784965435073],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon897);
 var myPolygon898 = new ymaps.Polygon([
            [
                [45.46234121275548, 9.158802511892556],
                [45.462336994289636, 9.16180842747103],
                [45.46022172145146, 9.161802376938562],
                [45.46022593960787, 9.158796573759682],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon898);
 var myPolygon899 = new ymaps.Polygon([
            [
                [45.462241814372994, 9.218920681475232],
                [45.46223601390407, 9.221926581233427],
                [45.46012074847257, 9.221918282730588],
                [45.460126548516044, 9.218912495369828],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon899);
 var myPolygon900 = new ymaps.Polygon([
            [
                [45.464345398547856, 9.224940891904264],
                [45.46433943944282, 9.227946902215328],
                [45.46222417566762, 9.227938377970855],
                [45.46223013433558, 9.224932480069468],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon900);
 var myPolygon901 = new ymaps.Polygon([
            [
                [45.466554405676355, 9.170838947713325],
                [45.46654987014289, 9.173845085363329],
                [45.464434600175345, 9.17383858378868],
                [45.46443913537613, 9.170832558562873],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon901);
 var myPolygon902 = new ymaps.Polygon([
            [
                [45.46654525549735, 9.17685122229082],
                [45.46654056173982, 9.179857358483305],
                [45.46442529245503, 9.17985063206055],
                [45.464429985868286, 9.176844608292068],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon902);
 var myPolygon903 = new ymaps.Polygon([
            [
                [45.46866967518913, 9.170845337573796],
                [45.468665139322965, 9.1738515876605],
                [45.46654987014289, 9.173845085363329],
                [45.466554405676355, 9.170838947713325],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon903);
 var myPolygon904 = new ymaps.Polygon([
            [
                [45.468598973356315, 9.212932768481421],
                [45.46859332984492, 9.215939007314457],
                [45.46647806593192, 9.21593093091471],
                [45.46648370902936, 9.212924804516831],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon904);
 var myPolygon905 = new ymaps.Polygon([
            [
                [45.472835064857314, 9.209942234439737],
                [45.47282949964672, 9.212948699065867],
                [45.47071423689542, 9.212940733331056],
                [45.47071980169782, 9.209934381165198],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon905);
 var myPolygon906 = new ymaps.Polygon([
            [
                [45.47496122106275, 9.203936931783034],
                [45.474955813713215, 9.20694351061526],
                [45.472840550939104, 9.206935768940813],
                [45.47284595789203, 9.203929302581592],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon906);
 var myPolygon907 = new ymaps.Polygon([
            [
                [45.4749333929689, 9.218969817215028],
                [45.47492758994661, 9.221976391620188],
                [45.47281232924266, 9.221968087582509],
                [45.47281813183933, 9.21896162564975],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon907);
 var myPolygon908 = new ymaps.Polygon([
            [
                [45.47716801878399, 9.143810574019268],
                [45.477164193858655, 9.146817279922207],
                [45.47504892504226, 9.146811787117494],
                [45.47505274968703, 9.143805193702052],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon908);
 var myPolygon909 = new ymaps.Polygon([
            [
                [45.47707648344576, 9.20394456183239],
                [45.477071075699556, 9.206951253150118],
                [45.474955813713215, 9.20694351061526],
                [45.47496122106275, 9.203936931783034],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon909);
 var myPolygon910 = new ymaps.Polygon([
            [
                [45.479279461887806, 9.14682277333741],
                [45.479275557534606, 9.149829591129773],
                [45.477160289791854, 9.149823985214654],
                [45.477164193858655, 9.146817279922207],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon910);
 var myPolygon911 = new ymaps.Polygon([
            [
                [45.479259148649646, 9.161856855943405],
                [45.47925484856058, 9.164863670495338],
                [45.47713958233679, 9.164857502081956],
                [45.47714388211043, 9.161850800029493],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon911);
 var myPolygon912 = new ymaps.Polygon([
            [
                [45.479186336898145, 9.20695899654551],
                [45.479180849609, 9.2099657995006],
                [45.47706558881289, 9.209957943607321],
                [45.477071075699556, 9.206951253150118],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon912);
 var myPolygon913 = new ymaps.Polygon([
            [
                [45.48340015517597, 9.215995567250813],
                [45.48339442960845, 9.2190025925815],
                [45.48127917163038, 9.218994397373828],
                [45.48128489677796, 9.215987484565675],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon913);
 var myPolygon914 = new ymaps.Polygon([
            [
                [45.48339442960845, 9.2190025925815],
                [45.483388624883254, 9.222009617001275],
                [45.481273367330964, 9.222001309271194],
                [45.48127917163038, 9.218994397373828],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon914);
 var myPolygon915 = new ymaps.Polygon([
            [
                [45.483370735762435, 9.231030684670078],
                [45.4833646144073, 9.234037705321144],
                [45.48124935861613, 9.234028947502695],
                [45.48125547952228, 9.231022039373526],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon915);
 var myPolygon916 = new ymaps.Polygon([
            [
                [45.4833521342251, 9.240051743690437],
                [45.48334577539818, 9.243058761383653],
                [45.48123052098882, 9.243049666000319],
                [45.481236879349325, 9.240042760828599],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon916);
 var myPolygon917 = new ymaps.Polygon([
            [
                [45.48774435246027, 9.143837484576814],
                [45.48774052613186, 9.146844753104796],
                [45.48562526125173, 9.1468392572468],
                [45.48562908729947, 9.143832101268837],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon917);
 var myPolygon918 = new ymaps.Polygon([
            [
                [45.48774052613186, 9.146844753104796],
                [45.48773662063294, 9.149852021021877],
                [45.485621356039275, 9.149846412613936],
                [45.48562526125173, 9.1468392572468],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon918);
 var myPolygon919 = new ymaps.Polygon([
            [
                [45.48981316944285, 9.176924024809843],
                [45.48980847189656, 9.179931398491279],
                [45.487693211274426, 9.179924663840373],
                [45.48769790847614, 9.176917402720461],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon919);
 var myPolygon920 = new ymaps.Polygon([
            [
                [45.489773372152655, 9.200982992599098],
                [45.489768041201344, 9.203990359941177],
                [45.48765278354474, 9.203982724801914],
                [45.487658114105045, 9.20097547002049],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon920);
 var myPolygon921 = new ymaps.Polygon([
            [
                [45.4897401988153, 9.219027183670482],
                [45.48973439281264, 9.222034545732539],
                [45.4876191376241, 9.222026235231825],
                [45.487624943200906, 9.219018985729702],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon921);
 var myPolygon922 = new ymaps.Polygon([
            [
                [45.48971649975483, 9.231056626325886],
                [45.48971037705251, 9.23406398461769],
                [45.48759512362549, 9.234055223878508],
                [45.487601245878714, 9.231047978146128],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon922);
 var myPolygon923 = new ymaps.Polygon([
            [
                [45.49407842414397, 9.152876455004849],
                [45.49407435940975, 9.155884059386953],
                [45.491959097768365, 9.155878223933804],
                [45.491963162204456, 9.152870732139004],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon923);
 var myPolygon924 = new ymaps.Polygon([
            [
                [45.49395304955722, 9.228066341159757],
                [45.49394700514305, 9.231073925569527],
                [45.49183175284295, 9.231065275466976],
                [45.49183779681378, 9.228057803641779],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon924);
 var myPolygon925 = new ymaps.Polygon([
            [
                [45.4939346787555, 9.237089091491782],
                [45.493928396782245, 9.24009667297923],
                [45.49181314584703, 9.24008768512374],
                [45.49181942735952, 9.237080216220473],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon925);
 var myPolygon926 = new ymaps.Polygon([
            [
                [45.49618962026383, 9.15588989548881],
                [45.496185476037816, 9.158897611821944],
                [45.49407021548771, 9.158891663120356],
                [45.49407435940975, 9.155884059386953],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon926);
 var myPolygon927 = new ymaps.Polygon([
            [
                [45.496091689019224, 9.216044082232418],
                [45.49608596093128, 9.219051782961015],
                [45.4939707076805, 9.219043582286014],
                [45.4939764353483, 9.216035994155016],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon927);
 var myPolygon928 = new ymaps.Polygon([
            [
                [45.49608015365083, 9.222059482777961],
                [45.49607426717795, 9.225067181670733],
                [45.49395901478489, 9.2250587558009],
                [45.49396490082601, 9.222051169505482],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon928);
 var myPolygon929 = new ymaps.Polygon([
            [
                [45.49828782701435, 9.167927044002507],
                [45.49828336568704, 9.170934870227168],
                [45.49616810719837, 9.170928470416184],
                [45.49617256819843, 9.167920756803404],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon929);
 var myPolygon930 = new ymaps.Polygon([
            [
                [45.49820121339418, 9.219059984547679],
                [45.49819540568775, 9.222067796974617],
                [45.49608015365083, 9.222059482777961],
                [45.49608596093128, 9.219051782961015],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon930);
 var myPolygon931 = new ymaps.Polygon([
            [
                [45.500354904277714, 9.19801268686774],
                [45.50034965057535, 9.201020618037605],
                [45.49823439646621, 9.201013091276794],
                [45.49823964978322, 9.198005272730278],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon931);
 var myPolygon932 = new ymaps.Polygon([
            [
                [45.50252272505495, 9.16493156831256],
                [45.50251834228399, 9.167939620497688],
                [45.500403085042855, 9.167933331900567],
                [45.50040746749236, 9.164925392352457],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon932);
 var myPolygon933 = new ymaps.Polygon([
            [
                [45.50251388030213, 9.170947671983663],
                [45.50250933910945, 9.173955722757967],
                [45.500394082528715, 9.173949208887107],
                [45.50039862338829, 9.170941270749628],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon933);
 var myPolygon934 = new ymaps.Polygon([
            [
                [45.50462459490275, 9.17396223735302],
                [45.50461997416036, 9.176970400052374],
                [45.50250471870601, 9.176963772808074],
                [45.50250933910945, 9.173955722757967],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon934);
 var myPolygon935 = new ymaps.Polygon([
            [
                [45.50455269582453, 9.216076443534657],
                [45.50454696605566, 9.21908459477885],
                [45.50243171595636, 9.219076390456472],
                [45.502437445304956, 9.216068351859956],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon935);
 var myPolygon936 = new ymaps.Polygon([
            [
                [45.506725748997624, 9.18299357653245],
                [45.506720890249426, 9.186001849645237],
                [45.50460563663425, 9.18599488367942],
                [45.50461049502607, 9.182986723228098],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon936);
 var myPolygon937 = new ymaps.Polygon([
            [
                [45.508810659135044, 9.20105073344982],
                [45.50880532466326, 9.204059114401062],
                [45.506690074096156, 9.204051471619106],
                [45.50669540817667, 9.20104320334119],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon937);
 var myPolygon938 = new ymaps.Polygon([
            [
                [45.515253742372856, 9.134881320065602],
                [45.515250150132466, 9.137890054643783],
                [45.51313489466113, 9.1378848889761],
                [45.51313848663804, 9.134876267110958],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon938);
 var myPolygon939 = new ymaps.Polygon([
            [
                [45.515250150132466, 9.137890054643783],
                [45.515246478645885, 9.140898788647565],
                [45.51313122344385, 9.140893510266922],
                [45.51313489466113, 9.1378848889761],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon939);
 var myPolygon940 = new ymaps.Polygon([
            [
                [45.51511150325838, 9.225143056665688],
                [45.5151055336535, 9.228151768560243],
                [45.51299028878971, 9.228143221545643],
                [45.512996257956715, 9.225134622361027],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon940);
 var myPolygon941 = new ymaps.Polygon([
            [
                [45.519476986688346, 9.14090934716971],
                [45.51947323540534, 9.143918306049924],
                [45.51735798205284, 9.1439129137574],
                [45.51736173306071, 9.140904067615132],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon941);
 var myPolygon942 = new ymaps.Polygon([
            [
                [45.52358418149523, 9.219158474742246],
                [45.52357836867446, 9.222167639466065],
                [45.52146312609235, 9.222159314169463],
                [45.52146893848673, 9.219150262205977],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon942);
 var myPolygon943 = new ymaps.Polygon([
            [
                [45.525560698118866, 9.282361304494646],
                [45.52555322013664, 9.285370559912932],
                [45.523437988639955, 9.28535986549209],
                [45.52344546607365, 9.282350722843656],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon943);
 var myPolygon944 = new ymaps.Polygon([
            [
                [45.527726059297905, 9.261306277666224],
                [45.527719135715934, 9.264315653841956],
                [45.52560390129019, 9.26430574771189],
                [45.52561082436435, 9.26129648431964],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon944);
 var myPolygon945 = new ymaps.Polygon([
            [
                [45.527697889298466, 9.273343775708994],
                [45.527690648602416, 9.27635314740281],
                [45.5255754162662, 9.276342790140331],
                [45.52558265643116, 9.273333531229387],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon945);
 var myPolygon946 = new ymaps.Polygon([
            [
                [45.527690648602416, 9.27635314740281],
                [45.527683328628044, 9.279362517944792],
                [45.52556809682875, 9.279352047899595],
                [45.5255754162662, 9.276342790140331],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon946);
 var myPolygon947 = new ymaps.Polygon([
            [
                [45.532045145650656, 9.21919133402136],
                [45.5320393311241, 9.222200949911917],
                [45.52992409169354, 9.222192620911283],
                [45.529929905793594, 9.219183117831227],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon947);
 var myPolygon948 = new ymaps.Polygon([
            [
                [45.53199640928708, 9.243268234506164],
                [45.531989960432426, 9.246277842634838],
                [45.529874724623184, 9.246268611154912],
                [45.52988117300482, 9.243259115835675],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon948);
 var myPolygon949 = new ymaps.Polygon([
            [
                [45.53416038471989, 9.21919955112527],
                [45.53415456976682, 9.222209279838873],
                [45.5320393311241, 9.222200949911917],
                [45.532045145650656, 9.21919133402136],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon949);
 var myPolygon950 = new ymaps.Polygon([
            [
                [45.53413051698455, 9.2342481853033],
                [45.53412430554682, 9.23725790925917],
                [45.532009069124, 9.23724901521892],
                [45.53201528010611, 9.234239404085443],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon950);
 var myPolygon951 = new ymaps.Polygon([
            [
                [45.53627562300126, 9.219207769143084],
                [45.53626980762163, 9.22221761069228],
                [45.53415456976682, 9.222209279838873],
                [45.53416038471989, 9.21919955112527],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon951);
 var myPolygon952 = new ymaps.Polygon([
            [
                [45.53626980762163, 9.22221761069228],
                [45.53626391293911, 9.2252274513149],
                [45.53414867551668, 9.225219007626023],
                [45.53415456976682, 9.222209279838873],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon952);
 var myPolygon953 = new ymaps.Polygon([
            [
                [45.53625188566571, 9.231247129730207],
                [45.53624575307495, 9.234256967497798],
                [45.53413051698455, 9.2342481853033],
                [45.53413664912547, 9.231238460370788],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon953);
 var myPolygon954 = new ymaps.Polygon([
            [
                [45.53624575307495, 9.234256967497798],
                [45.536239541181594, 9.237266804288614],
                [45.53412430554682, 9.23725790925917],
                [45.53413051698455, 9.2342481853033],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon954);
 var myPolygon955 = new ymaps.Polygon([
            [
                [45.54266501085489, 9.195150955767037],
                [45.54265982876025, 9.198161142862006],
                [45.54054459001876, 9.198153712217874],
                [45.540549771733296, 9.195143637997102],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon955);
 var myPolygon956 = new ymaps.Polygon([
            [
                [45.54260962047893, 9.225252788016798],
                [45.54260364517882, 9.228262966281607],
                [45.540488410558424, 9.228254406901977],
                [45.54049438542022, 9.225244341510157],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon956);
 var myPolygon957 = new ymaps.Polygon([
            [
                [45.544809678175056, 9.177096457804486],
                [45.544804971661264, 9.180106762482314],
                [45.54268973151386, 9.180100008333826],
                [45.542694437682435, 9.177089816543397],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon957);
 var myPolygon958 = new ymaps.Polygon([
            [
                [45.55321448117221, 9.210241306703553],
                [45.553208900427634, 9.213252054096822],
                [45.55109366761287, 9.213244054635735],
                [45.5510992479481, 9.210233420178874],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon958);
 var myPolygon959 = new ymaps.Polygon([
            [
                [45.555324132454615, 9.21326005444781],
                [45.555318471945206, 9.21627091390003],
                [45.55320324033343, 9.216262800600195],
                [45.553208900427634, 9.213252054096822],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon959);
 var myPolygon960 = new ymaps.Polygon([
            [
                [45.43278104671585, 9.113654219187913],
                [45.43277801787678, 9.116658570878053],
                [45.430662729987354, 9.116654213131321],
                [45.43066575860428, 9.11364997366726],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon960);
 var myPolygon961 = new ymaps.Polygon([
            [
                [45.43268654511793, 9.185758500913273],
                [45.43268161980843, 9.188762837544774],
                [45.43056633898952, 9.188755786395816],
                [45.43057126393777, 9.185751561988344],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon961);
 var myPolygon962 = new ymaps.Polygon([
            [
                [45.441184230475734, 9.161747952387367],
                [45.44117993606038, 9.164752743860221],
                [45.439064655663344, 9.164746587771605],
                [45.439068949763715, 9.161741908573443],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon962);
 var myPolygon963 = new ymaps.Polygon([
            [
                [45.44108332413232, 9.221843637681374],
                [45.44107744887492, 9.22484841310606],
                [45.43896217599504, 9.224840011545373],
                [45.43896805082151, 9.221835348393194],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon963);
 var myPolygon964 = new ymaps.Polygon([
            [
                [45.443281857188694, 9.173773607758884],
                [45.44327724626501, 9.176778508708026],
                [45.44116196797339, 9.176771902787763],
                [45.441166578558885, 9.173767114125408],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon964);
 var myPolygon965 = new ymaps.Polygon([
            [
                [45.44323751314451, 9.20081768883262],
                [45.443232190788876, 9.203822582727506],
                [45.44111691580196, 9.203814966230883],
                [45.44112223776721, 9.20081018462182],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon965);
 var myPolygon966 = new ymaps.Polygon([
            [
                [45.44760704052057, 9.092647975169225],
                [45.44760456355134, 9.095653115833482],
                [45.44548927973742, 9.095649540891774],
                [45.44549175652497, 9.09264451254131],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon966);
 var myPolygon967 = new ymaps.Polygon([
            [
                [45.44751694462614, 9.170781470908457],
                [45.44751241208585, 9.173786597190226],
                [45.445397135031, 9.17378010211379],
                [45.445401667238855, 9.170775088143856],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon967);
 var myPolygon968 = new ymaps.Polygon([
            [
                [45.449636675033034, 9.167782615066882],
                [45.44963222122597, 9.170787854382214],
                [45.44751694462614, 9.170781470908457],
                [45.447521398106524, 9.167776343917536],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon968);
 var myPolygon969 = new ymaps.Polygon([
            [
                [45.449613615341136, 9.182808804426257],
                [45.44960876620606, 9.185814040070547],
                [45.44749349132659, 9.185807094976226],
                [45.447498340106, 9.182801971655843],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon969);
 var myPolygon970 = new ymaps.Polygon([
            [
                [45.44960383800552, 9.18881927494319],
                [45.4495988307396, 9.191824509031708],
                [45.44748355658888, 9.191817339289887],
                [45.44748856348753, 9.188812217525069],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon970);
 var myPolygon971 = new ymaps.Polygon([
            [
                [45.45179572791114, 9.134729975491537],
                [45.45179214356693, 9.137735334122764],
                [45.44967686447983, 9.137730185650497],
                [45.449680448561146, 9.134724939357113],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon971);
 var myPolygon972 = new ymaps.Polygon([
            [
                [45.451719111735905, 9.188826333145443],
                [45.451714104102685, 9.191831679570138],
                [45.4495988307396, 9.191824509031708],
                [45.44960383800552, 9.18881927494319],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon972);
 var myPolygon973 = new ymaps.Polygon([
            [
                [45.45386722652378, 9.167795159455974],
                [45.45386277206328, 9.170800623457565],
                [45.451747497038355, 9.170794238565218],
                [45.45175195117211, 9.167788886912996],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon973);
 var myPolygon974 = new ymaps.Polygon([
            [
                [45.45385823852548, 9.173806086749718],
                [45.453853625910426, 9.17681154931994],
                [45.45173835155634, 9.176804939729145],
                [45.45174296383308, 9.173799589508091],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon974);
 var myPolygon975 = new ymaps.Polygon([
            [
                [45.458137976104936, 9.137750782972152],
                [45.458134311882496, 9.140756478119524],
                [45.45601903542582, 9.140751215555671],
                [45.456022699379474, 9.137745632783512],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon975);
 var myPolygon976 = new ymaps.Polygon([
            [
                [45.458049664730034, 9.197864560578775],
                [45.458044418729294, 9.200870241658311],
                [45.45592914886606, 9.200862731609194],
                [45.455934394482, 9.197857162902954],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon976);
 var myPolygon977 = new ymaps.Polygon([
            [
                [45.46017010148167, 9.194866164789175],
                [45.46016493419036, 9.197871959076616],
                [45.458049664730034, 9.197864560578775],
                [45.45805483164233, 9.194858878677227],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon977);
 var myPolygon978 = new ymaps.Polygon([
            [
                [45.460132269465724, 9.215906707099526],
                [45.460126548516044, 9.218912495369828],
                [45.45801128187122, 9.21890431017397],
                [45.458017002401284, 9.215898634288738],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon978);
 var myPolygon979 = new ymaps.Polygon([
            [
                [45.460126548516044, 9.218912495369828],
                [45.46012074847257, 9.221918282730588],
                [45.45800548225315, 9.221909985149779],
                [45.45801128187122, 9.21890431017397],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon979);
 var myPolygon980 = new ymaps.Polygon([
            [
                [45.4623283200561, 9.167820256598416],
                [45.462323864288464, 9.170826170122343],
                [45.46020859241332, 9.17081978239165],
                [45.46021304785414, 9.167813981267038],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon980);
 var myPolygon981 = new ymaps.Polygon([
            [
                [45.46231002238271, 9.179843906385194],
                [45.462305250213326, 9.18284981699487],
                [45.460189979703514, 9.182842979667898],
                [45.460194751522856, 9.179837181457144],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon981);
 var myPolygon982 = new ymaps.Polygon([
            [
                [45.46228537053336, 9.194873451710762],
                [45.462280202863006, 9.197879358396586],
                [45.46016493419036, 9.197871959076616],
                [45.46017010148167, 9.194866164789175],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon982);
 var myPolygon983 = new ymaps.Polygon([
            [
                [45.46447639239366, 9.143778301082945],
                [45.464472569151326, 9.146784332248382],
                [45.46235729561136, 9.146778843104867],
                [45.462361118573256, 9.14377292435195],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon983);
 var myPolygon984 = new ymaps.Polygon([
            [
                [45.4644646853467, 9.15279639273679],
                [45.46446062478448, 9.155802422034775],
                [45.4623453521206, 9.155796595654213],
                [45.462349412384995, 9.152790678768488],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon984);
 var myPolygon985 = new ymaps.Polygon([
            [
                [45.464395470747974, 9.197886758538793],
                [45.46439022359274, 9.200892776813141],
                [45.46227495609264, 9.200885264260172],
                [45.462280202863006, 9.197879358396586],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon985);
 var myPolygon986 = new ymaps.Polygon([
            [
                [45.46421864862648, 9.282054913727878],
                [45.464211186534364, 9.28506090390488],
                [45.462095932166186, 9.285050243903132],
                [45.462103393711, 9.282044366133054],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon986);
 var myPolygon987 = new ymaps.Polygon([
            [
                [45.46657589666103, 9.155808249062812],
                [45.4665717566886, 9.158814390137996],
                [45.46445648511571, 9.158808450685298],
                [45.46446062478448, 9.155802422034775],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon987);
 var myPolygon988 = new ymaps.Polygon([
            [
                [45.46652600579564, 9.188875762525754],
                [45.46652099559057, 9.191881895653262],
                [45.46440572774091, 9.191874719535539],
                [45.4644107375785, 9.188868698831616],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon988);
 var myPolygon989 = new ymaps.Polygon([
            [
                [45.466515906273756, 9.194888027983293],
                [45.46651073784526, 9.19789415950335],
                [45.464395470747974, 9.197886758538793],
                [45.464400638797386, 9.194880739442098],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon989);
 var myPolygon990 = new ymaps.Polygon([
            [
                [45.466472343723204, 9.218937056415168],
                [45.46646654240326, 9.221943181005706],
                [45.46435127854763, 9.221934880658424],
                [45.464357079442046, 9.218928868490305],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon990);
 var myPolygon991 = new ymaps.Polygon([
            [
                [45.468710682357646, 9.140782799711909],
                [45.46870693767272, 9.14378905633752],
                [45.46659166542682, 9.143783678411443],
                [45.46659540983706, 9.140777534223416],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon991);
 var myPolygon992 = new ymaps.Polygon([
            [
                [45.46864620468018, 9.185876580656199],
                [45.4686412732252, 9.188882827004877],
                [45.46652600579564, 9.188875762525754],
                [45.466530936888894, 9.185869628613263],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon992);
 var myPolygon993 = new ymaps.Polygon([
            [
                [45.46856996462923, 9.227963953546196],
                [45.468563925533076, 9.230970187766557],
                [45.46644866377681, 9.230961549192896],
                [45.466454702430006, 9.227955427407064],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon993);
 var myPolygon994 = new ymaps.Polygon([
            [
                [45.47078040771558, 9.173858090680284],
                [45.470775792393034, 9.176864452493461],
                [45.468660524338944, 9.176857837024583],
                [45.468665139322965, 9.1738515876605],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon994);
 var myPolygon995 = new ymaps.Polygon([
            [
                [45.4728767379, 9.185890487059972],
                [45.472871805721525, 9.1888969583185],
                [45.47075653986715, 9.18888989226909],
                [45.47076147168386, 9.185883533471737],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon995);
 var myPolygon996 = new ymaps.Polygon([
            [
                [45.47285128571601, 9.200922835374575],
                [45.47284595789203, 9.203929302581592],
                [45.47073069393353, 9.203921674227947],
                [45.47073602136675, 9.200915319481553],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon996);
 var myPolygon997 = new ymaps.Polygon([
            [
                [45.47282385530737, 9.215955162806708],
                [45.47281813183933, 9.21896162564975],
                [45.47070286992183, 9.218953434994768],
                [45.47070859297007, 9.215947084611749],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon997);
 var myPolygon998 = new ymaps.Polygon([
            [
                [45.47504502126178, 9.149818379922529],
                [45.47504103834567, 9.152824972104657],
                [45.47292576932049, 9.152819254960614],
                [45.47292975194446, 9.149812775253316],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon998);
 var myPolygon999 = new ymaps.Polygon([
            [
                [45.47503697629396, 9.155831563651377],
                [45.47503283510667, 9.158838154550187],
                [45.47291756668318, 9.158832212456753],
                [45.47292170756671, 9.155825734032591],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon999);
 var myPolygon1000 = new ymaps.Polygon([
            [
                [45.47714388211043, 9.161850800029493],
                [45.47713958233679, 9.164857502081956],
                [45.47502431532559, 9.164851334354076],
                [45.47502861478387, 9.161844744788588],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1000);
 var myPolygon1001 = new ymaps.Polygon([
            [
                [45.477031005546245, 9.227998067579273],
                [45.477024964677966, 9.231004751662708],
                [45.47490970607375, 9.23099610924818],
                [45.474915746498965, 9.227989537649263],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1001);
 var myPolygon1002 = new ymaps.Polygon([
            [
                [45.477024964677966, 9.231004751662708],
                [45.47701884466968, 9.234011434785602],
                [45.47490358651439, 9.23400267988669],
                [45.47490970607375, 9.23099610924818],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1002);
 var myPolygon1003 = new ymaps.Polygon([
            [
                [45.47924147341139, 9.173884109987538],
                [45.479236856734474, 9.17689092172206],
                [45.47712159183036, 9.176884303311743],
                [45.47712620816864, 9.17387760407631],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1003);
 var myPolygon1004 = new ymaps.Polygon([
            [
                [45.479152225971106, 9.224999800928694],
                [45.47914626380554, 9.228006598457325],
                [45.477031005546245, 9.227998067579273],
                [45.4770369672745, 9.224991382547794],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1004);
 var myPolygon1005 = new ymaps.Polygon([
            [
                [45.48138684069743, 9.152842127349588],
                [45.48138277775174, 9.155849056395537],
                [45.47926751138647, 9.15584322483276],
                [45.47927157403414, 9.152836408299056],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1005);
 var myPolygon1006 = new ymaps.Polygon([
            [
                [45.481370113996974, 9.164869839594317],
                [45.481365734439656, 9.167876765972537],
                [45.47925046932449, 9.167870484361673],
                [45.47925484856058, 9.164863670495338],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1006);
 var myPolygon1007 = new ymaps.Polygon([
            [
                [45.481356737866676, 9.173890616621877],
                [45.48135212085111, 9.176897540867992],
                [45.479236856734474, 9.17689092172206],
                [45.47924147341139, 9.173884109987538],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1007);
 var myPolygon1008 = new ymaps.Polygon([
            [
                [45.48131233523595, 9.200952907300797],
                [45.481307005848535, 9.203959824475303],
                [45.47919174504101, 9.203952192729773],
                [45.47919707403752, 9.200945388065893],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1008);
 var myPolygon1009 = new ymaps.Polygon([
            [
                [45.4834980433297, 9.15585488860649],
                [45.4834939009272, 9.158861929528928],
                [45.481378635653066, 9.158855984793313],
                [45.48138277775174, 9.155849056395537],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1009);
 var myPolygon1010 = new ymaps.Polygon([
            [
                [45.48559626230779, 9.167889331288944],
                [45.4855918029435, 9.170896482030058],
                [45.483476539730255, 9.170890086485908],
                [45.48348099876743, 9.167883048281592],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1010);
 var myPolygon1011 = new ymaps.Polygon([
            [
                [45.48557794986477, 9.179917929937993],
                [45.485573173843385, 9.182925077760473],
                [45.483457911996524, 9.18291823207011],
                [45.4834626876676, 9.179911196784033],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1011);
 var myPolygon1012 = new ymaps.Polygon([
            [
                [45.48550968679862, 9.219010788700084],
                [45.48550388164764, 9.22201792565478],
                [45.483388624883254, 9.222009617001275],
                [45.48339442960845, 9.2190025925815],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1012);
 var myPolygon1013 = new ymaps.Polygon([
            [
                [45.487636316846675, 9.213004484004497],
                [45.48763066960845, 9.216011735316425],
                [45.48551541278614, 9.216003650834352],
                [45.485521059610136, 9.212996512070099],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1013);
 var myPolygon1014 = new ymaps.Polygon([
            [
                [45.489851884439325, 9.149857630053237],
                [45.48984789947762, 9.15286500990926],
                [45.48773263596353, 9.152859288315533],
                [45.48773662063294, 9.149852021021877],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1014);
 var myPolygon1015 = new ymaps.Polygon([
            [
                [45.48983969202551, 9.158879767700752],
                [45.48983546953519, 9.161887145611189],
                [45.48772020693281, 9.161881086330897],
                [45.48772442911343, 9.158873820982556],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1015);
 var myPolygon1016 = new ymaps.Polygon([
            [
                [45.48978379652894, 9.194968255418813],
                [45.489778623928544, 9.197975624420806],
                [45.48766336549572, 9.197968214402971],
                [45.487668537716715, 9.19496095796186],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1016);
 var myPolygon1017 = new ymaps.Polygon([
            [
                [45.489697894123715, 9.24007869826725],
                [45.489691533897364, 9.243086053599988],
                [45.48757628185246, 9.243076955183348],
                [45.48758264161229, 9.240069712409628],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1017);
 var myPolygon1018 = new ymaps.Polygon([
            [
                [45.491918954658715, 9.182945619397557],
                [45.49191409840465, 9.185953104143056],
                [45.4897988392766, 9.18594614359576],
                [45.489803695174466, 9.182938771424089],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1018);
 var myPolygon1019 = new ymaps.Polygon([
            [
                [45.49405730859512, 9.167914470303163],
                [45.49405284792225, 9.170922071316586],
                [45.491937587858715, 9.17091567292827],
                [45.49194204820439, 9.167908184501696],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1019);
 var myPolygon1020 = new ymaps.Polygon([
            [
                [45.49399855415139, 9.204005632765998],
                [45.49399314323096, 9.207013224417976],
                [45.49187788754669, 9.20700547499558],
                [45.49188329807024, 9.203997995929168],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1020);
 var myPolygon1021 = new ymaps.Polygon([
            [
                [45.496124394501045, 9.197997859416967],
                [45.496119141569366, 9.20100556535265],
                [45.49400388588483, 9.200998040265064],
                [45.49400913843122, 9.197990446927692],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1021);
 var myPolygon1022 = new ymaps.Polygon([
            [
                [45.49831293179224, 9.149880072414565],
                [45.49830894566115, 9.152887902645194],
                [45.49619368529621, 9.152882178506884],
                [45.49619767113492, 9.149874460888675],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1022);
 var myPolygon1023 = new ymaps.Polygon([
            [
                [45.49825493454168, 9.188981812195907],
                [45.49824991882101, 9.191989633177316],
                [45.496134662785614, 9.191982445086],
                [45.49613967813838, 9.188974736715751],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1023);
 var myPolygon1024 = new ymaps.Polygon([
            [
                [45.50043209888045, 9.14687774108479],
                [45.500428191662294, 9.149885684564293],
                [45.49831293179224, 9.149880072414565],
                [45.49831683872381, 9.14687224156009],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1024);
 var myPolygon1025 = new ymaps.Polygon([
            [
                [45.502527028615006, 9.161923515440805],
                [45.50252272505495, 9.16493156831256],
                [45.50040746749236, 9.164925392352457],
                [45.500411770736754, 9.161917452117807],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1025);
 var myPolygon1026 = new ymaps.Polygon([
            [
                [45.50238939264203, 9.240132634393962],
                [45.50238302961589, 9.243140665343608],
                [45.500267782299794, 9.243131560856627],
                [45.500274144859226, 9.240123642541091],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1026);
 var myPolygon1027 = new ymaps.Polygon([
            [
                [45.504585410903736, 9.19802751761556],
                [45.5045801564306, 9.201035674069686],
                [45.502464903896815, 9.201028145635195],
                [45.50247015798457, 9.198020101829464],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1027);
 var myPolygon1028 = new ymaps.Polygon([
            [
                [45.50453526887081, 9.22510089451825],
                [45.50452930145494, 9.228109042988406],
                [45.502414052651346, 9.22810050072374],
                [45.5024200196295, 9.225092464900888],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1028);
 var myPolygon1029 = new ymaps.Polygon([
            [
                [45.50879441803678, 9.210075873741717],
                [45.50878884588218, 9.213084252106071],
                [45.50667359652378, 9.213076271304836],
                [45.506679168269656, 9.210068005613453],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1029);
 var myPolygon1030 = new ymaps.Polygon([
            [
                [45.514984530006764, 9.28230840800407],
                [45.514977054766646, 9.285317099698462],
                [45.51286181932666, 9.285306411221676],
                [45.51286929401847, 9.282297832234462],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1030);
 var myPolygon1031 = new ymaps.Polygon([
            [
                [45.52559689894322, 9.267315010002628],
                [45.52558981732352, 9.270324271179303],
                [45.52347458314245, 9.27031414060932],
                [45.523481664242716, 9.267304992203284],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1031);
 var myPolygon1032 = new ymaps.Polygon([
            [
                [45.54683411205582, 9.228280087897206],
                [45.546828056547206, 9.231290490993342],
                [45.544712823946846, 9.231281816811473],
                [45.544718879011285, 9.228271526613307],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1032);
 var myPolygon1033 = new ymaps.Polygon([
            [
                [45.546828056547206, 9.231290490993342],
                [45.54682192170681, 9.234300893124592],
                [45.54470668955646, 9.234292106044881],
                [45.544712823946846, 9.231281816811473],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1033);
 var myPolygon1034 = new ymaps.Polygon([
            [
                [45.557385558374435, 9.240366773858296],
                [45.55737918320138, 9.243377737695123],
                [45.55526395637646, 9.243368606845717],
                [45.555270331081886, 9.240357755969134],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1034);
 var myPolygon1035 = new ymaps.Polygon([
            [
                [45.4369450016625, 9.167744998619014],
                [45.43694054981511, 9.170749564175024],
                [45.434825268490535, 9.170743184954727],
                [45.434829720011386, 9.167738731648283],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1035);
 var myPolygon1036 = new ymaps.Polygon([
            [
                [45.4390069616022, 9.200802681244612],
                [45.439001640027314, 9.203807350580323],
                [45.436886363464886, 9.203799735775712],
                [45.43689168464946, 9.200795178700881],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1036);
 var myPolygon1037 = new ymaps.Polygon([
            [
                [45.43898520108613, 9.212821353461884],
                [45.43897956336711, 9.215826019338976],
                [45.436864288423955, 9.21581795549202],
                [45.43686992572947, 9.212813401875335],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1037);
 var myPolygon1038 = new ymaps.Polygon([
            [
                [45.43896805082151, 9.221835348393194],
                [45.43896217599504, 9.224840011545373],
                [45.436846902327204, 9.224831610917931],
                [45.43685277672275, 9.221827060025788],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1038);
 var myPolygon1039 = new ymaps.Polygon([
            [
                [45.443303726082256, 9.158749092441171],
                [45.44329951040035, 9.161753996872733],
                [45.441184230475734, 9.161747952387367],
                [45.441188445848425, 9.15874316024307],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1039);
 var myPolygon1040 = new ymaps.Polygon([
            [
                [45.44754645872828, 9.149745567778607],
                [45.44754247960829, 9.152750698762397],
                [45.44542720034809, 9.152744989870776],
                [45.445431179176204, 9.149739971199462],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1040);
 var myPolygon1041 = new ymaps.Polygon([
            [
                [45.447478470630685, 9.194822460258207],
                [45.447473305613, 9.197827580417554],
                [45.44535803142654, 9.19782018685012],
                [45.445363196065365, 9.194815179001774],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1041);
 var myPolygon1042 = new ymaps.Polygon([
            [
                [45.44957260843103, 9.206850667275594],
                [45.44956712677392, 9.209855896397274],
                [45.447451854948596, 9.209848052715614],
                [45.447457336203634, 9.206842935916953],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1042);
 var myPolygon1043 = new ymaps.Polygon([
            [
                [45.45172404029794, 9.185820985936516],
                [45.451719111735905, 9.188826333145443],
                [45.44960383800552, 9.18881927494319],
                [45.44960876620606, 9.185814040070547],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1043);
 var myPolygon1044 = new ymaps.Polygon([
            [
                [45.453839313602245, 9.185827932574236],
                [45.453834384678686, 9.18883339213193],
                [45.451719111735905, 9.188826333145443],
                [45.45172404029794, 9.185820985936516],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1044);
 var myPolygon1045 = new ymaps.Polygon([
            [
                [45.458141561238, 9.134745087252501],
                [45.458137976104936, 9.137750782972152],
                [45.456022699379474, 9.137745632783512],
                [45.456026284249575, 9.134740049439152],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1045);
 var myPolygon1046 = new ymaps.Polygon([
            [
                [45.45803368946279, 9.206881601301392],
                [45.45802820619712, 9.209887279839963],
                [45.45591293752304, 9.209879432671649],
                [45.455918420386524, 9.206873866506026],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1046);
 var myPolygon1047 = new ymaps.Polygon([
            [
                [45.46017518967869, 9.191860369692094],
                [45.46017010148167, 9.194866164789175],
                [45.45805483164233, 9.194858878677227],
                [45.45805991946615, 9.19185319596615],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1047);
 var myPolygon1048 = new ymaps.Polygon([
            [
                [45.46448380155811, 9.13776623697207],
                [45.464480136529254, 9.140772269320012],
                [45.46236486243424, 9.140767005001614],
                [45.462368527194265, 9.137761085066352],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1048);
 var myPolygon1049 = new ymaps.Polygon([
            [
                [45.46438489733171, 9.203898794252641],
                [45.464379491964976, 9.20690481084481],
                [45.46226422525203, 9.206897073470667],
                [45.462269630222295, 9.20389116928903],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1049);
 var myPolygon1050 = new ymaps.Polygon([
            [
                [45.46436280123106, 9.215922855412387],
                [45.464357079442046, 9.218928868490305],
                [45.462241814372994, 9.218920681475232],
                [45.46224753574233, 9.215914780807367],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1050);
 var myPolygon1051 = new ymaps.Polygon([
            [
                [45.46658784190403, 9.14678982200189],
                [45.46658393926879, 9.149795964982262],
                [45.46446866680233, 9.149790362803829],
                [45.464472569151326, 9.146784332248382],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1051);
 var myPolygon1052 = new ymaps.Polygon([
            [
                [45.46867850956765, 9.16483283528253],
                [45.46867413193738, 9.167839086776977],
                [45.4665588620977, 9.167832809353293],
                [45.46656323940689, 9.164826670295732],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1052);
 var myPolygon1053 = new ymaps.Polygon([
            [
                [45.47078940098962, 9.167845364898287],
                [45.470784943914474, 9.170851728144394],
                [45.46866967518913, 9.170845337573796],
                [45.46867413193738, 9.167839086776977],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1053);
 var myPolygon1054 = new ymaps.Polygon([
            [
                [45.47281232924266, 9.221968087582509],
                [45.472806447517435, 9.224974548592485],
                [45.47069118645697, 9.224966133017821],
                [45.47069706775078, 9.221959784467623],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1054);
 var myPolygon1055 = new ymaps.Polygon([
            [
                [45.4792460109414, 9.170877297529909],
                [45.47924147341139, 9.173884109987538],
                [45.47712620816864, 9.17387760407631],
                [45.47713074536584, 9.170870904117864],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1055);
 var myPolygon1056 = new ymaps.Polygon([
            [
                [45.479236856734474, 9.17689092172206],
                [45.47923216091074, 9.179897732720972],
                [45.47711689635106, 9.179891001811667],
                [45.47712159183036, 9.176884303311743],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1056);
 var myPolygon1057 = new ymaps.Polygon([
            [
                [45.4813908244901, 9.149835197667967],
                [45.48138684069743, 9.152842127349588],
                [45.47927157403414, 9.152836408299056],
                [45.479275557534606, 9.149829591129773],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1057);
 var myPolygon1058 = new ymaps.Polygon([
            [
                [45.481267483879755, 9.225008220245266],
                [45.481261521276856, 9.228015130283547],
                [45.47914626380554, 9.228006598457325],
                [45.479152225971106, 9.224999800928694],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1058);
 var myPolygon1059 = new ymaps.Polygon([
            [
                [45.483476539730255, 9.170890086485908],
                [45.48347200153452, 9.173897123979426],
                [45.481356737866676, 9.173890616621877],
                [45.48136127572954, 9.170883691652561],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1059);
 var myPolygon1060 = new ymaps.Polygon([
            [
                [45.4876786446494, 9.18894644265892],
                [45.48767363076796, 9.191953700709675],
                [45.48555837079449, 9.191946516612283],
                [45.48556338430818, 9.188939371110123],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1060);
 var myPolygon1061 = new ymaps.Polygon([
            [
                [45.49183175284295, 9.231065275466976],
                [45.491825629691505, 9.234072746330712],
                [45.48971037705251, 9.23406398461769],
                [45.48971649975483, 9.231056626325886],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1061);
 var myPolygon1062 = new ymaps.Polygon([
            [
                [45.49614461429807, 9.185967027559023],
                [45.49613967813838, 9.188974736715751],
                [45.494024420947504, 9.188967662022087],
                [45.49402935674513, 9.185960065464108],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1062);
 var myPolygon1063 = new ymaps.Polygon([
            [
                [45.49823964978322, 9.198005272730278],
                [45.49823439646621, 9.201013091276794],
                [45.496119141569366, 9.20100556535265],
                [45.496124394501045, 9.197997859416967],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1063);
 var myPolygon1064 = new ymaps.Polygon([
            [
                [45.49818355268022, 9.22808341904307],
                [45.498177507379246, 9.231091228659553],
                [45.49606225665516, 9.231082576633677],
                [45.49606830151271, 9.228074879626806],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1064);
 var myPolygon1065 = new ymaps.Polygon([
            [
                [45.50251834228399, 9.167939620497688],
                [45.50251388030213, 9.170947671983663],
                [45.50039862338829, 9.170941270749628],
                [45.500403085042855, 9.167933331900567],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1065);
 var myPolygon1066 = new ymaps.Polygon([
            [
                [45.502425907397864, 9.222084428140958],
                [45.5024200196295, 9.225092464900888],
                [45.50030476960025, 9.225084036220595],
                [45.50031065693675, 9.222076112095571],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1066);
 var myPolygon1067 = new ymaps.Polygon([
            [
                [45.50239567645873, 9.23712460244463],
                [45.50238939264203, 9.240132634393962],
                [45.500274144859226, 9.240123642541091],
                [45.50028042821501, 9.23711572322601],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1067);
 var myPolygon1068 = new ymaps.Polygon([
            [
                [45.50464228570591, 9.161929579437905],
                [45.504637981830165, 9.164937744959289],
                [45.50252272505495, 9.16493156831256],
                [45.502527028615006, 9.161923515440805],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1068);
 var myPolygon1069 = new ymaps.Polygon([
            [
                [45.50460069902605, 9.189003043356356],
                [45.504595682201526, 9.19201120224637],
                [45.50248042852897, 9.192004011757392],
                [45.5024854449855, 9.1889959655161],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1069);
 var myPolygon1070 = new ymaps.Polygon([
            [
                [45.50885510412698, 9.17397526871611],
                [45.50885048270667, 9.176983656751528],
                [45.506735228827274, 9.176977028033491],
                [45.50673984990859, 9.173968752672367],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1070);
 var myPolygon1071 = new ymaps.Polygon([
            [
                [45.51093116493532, 9.198049769921235],
                [45.510925909305755, 9.201058264395687],
                [45.508810659135044, 9.20105073344982],
                [45.50881591437911, 9.198042351661336],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1071);
 var myPolygon1072 = new ymaps.Polygon([
            [
                [45.51741794429703, 9.083735893670152],
                [45.51741569908235, 9.086744748822126],
                [45.51530044070911, 9.086741498924019],
                [45.5153026857591, 9.083732756498689],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1072);
 var myPolygon1073 = new ymaps.Polygon([
            [
                [45.519440371866615, 9.167989954452075],
                [45.519435907265645, 9.170998907484355],
                [45.51732065665115, 9.170992500554211],
                [45.517325120924674, 9.167983660259077],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1073);
 var myPolygon1074 = new ymaps.Polygon([
            [
                [45.521650625292104, 9.080733088067856],
                [45.52164845901221, 9.083742169059663],
                [45.519533202048045, 9.083739031190461],
                [45.51953536816905, 9.080730062950414],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1074);
 var myPolygon1075 = new ymaps.Polygon([
            [
                [45.521480325488746, 9.213132155552078],
                [45.52147467161889, 9.216141209329336],
                [45.51935942740201, 9.216133110454136],
                [45.519365080857156, 9.213124169424924],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1075);
 var myPolygon1076 = new ymaps.Polygon([
            [
                [45.52556809682875, 9.279352047899595],
                [45.525560698118866, 9.282361304494646],
                [45.52344546607365, 9.282350722843656],
                [45.52345286424086, 9.279341579018622],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1076);
 var myPolygon1077 = new ymaps.Polygon([
            [
                [45.52767592937544, 9.282371887322396],
                [45.52766845084466, 9.285381255523076],
                [45.52555322013664, 9.285370559912932],
                [45.525560698118866, 9.282361304494646],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1077);
 var myPolygon1078 = new ymaps.Polygon([
            [
                [45.52992409169354, 9.222192620911283],
                [45.529918198308046, 9.225202123065145],
                [45.527802958521875, 9.22519368219288],
                [45.527808851475065, 9.222184292836847],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1078);
 var myPolygon1079 = new ymaps.Polygon([
            [
                [45.529918198308046, 9.225202123065145],
                [45.529912225637204, 9.22821162428026],
                [45.52779698628911, 9.2282030706103],
                [45.527802958521875, 9.22519368219288],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1079);
 var myPolygon1080 = new ymaps.Polygon([
            [
                [45.53404358316949, 9.273374515984203],
                [45.53403634087989, 9.276384226101891],
                [45.53192111090926, 9.276373865383434],
                [45.531928352667634, 9.27336426808625],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1080);
 var myPolygon1081 = new ymaps.Polygon([
            [
                [45.53628135907795, 9.21619792667986],
                [45.53627562300126, 9.219207769143084],
                [45.53416038471989, 9.21919955112527],
                [45.53416612037584, 9.216189821497764],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1081);
 var myPolygon1082 = new ymaps.Polygon([
            [
                [45.54470668955646, 9.234292106044881],
                [45.54470047584019, 9.23730239430098],
                [45.5425852433576, 9.237293495313427],
                [45.5425914566181, 9.234283319942481],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1082);
 var myPolygon1083 = new ymaps.Polygon([
            [
                [45.54894934431238, 9.228288650133429],
                [45.54894328835957, 9.231299166140095],
                [45.546828056547206, 9.231290490993342],
                [45.54683411205582, 9.228280087897206],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1083);
 var myPolygon1084 = new ymaps.Polygon([
            [
                [45.55743370276918, 9.216279028102457],
                [45.55742796248335, 9.21928999961338],
                [45.55531273208043, 9.21928177244966],
                [45.555318471945206, 9.21627091390003],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1084);
 var myPolygon1085 = new ymaps.Polygon([
            [
                [45.55733926559293, 9.26144349894418],
                [45.55733233489718, 9.26445445540642],
                [45.55521711150862, 9.264444533839306],
                [45.55522404169599, 9.261433690336302],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1085);
 var myPolygon1086 = new ymaps.Polygon([
            [
                [45.56795530550446, 9.243423407182103],
                [45.56794884860304, 9.246434934992164],
                [45.565833626192244, 9.246425686039354],
                [45.56584008262004, 9.243414271252249],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1086);
 var myPolygon1087 = new ymaps.Polygon([
            [
                [45.56791537325282, 9.261492558354727],
                [45.567908440014655, 9.264504079801664],
                [45.56579322056788, 9.264494152714152],
                [45.565800153297474, 9.261482744289301],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1087);
 var myPolygon1088 = new ymaps.Polygon([
            [
                [45.384075581907155, 9.158583239690458],
                [45.38407137487445, 9.161585004787996],
                [45.38195607290254, 9.161578979068453],
                [45.38196027962668, 9.158577325909569],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1088);
 var myPolygon1089 = new ymaps.Polygon([
            [
                [45.392514952725456, 9.173617959444881],
                [45.39251034991164, 9.176620168950283],
                [45.39039505271949, 9.176613580613818],
                [45.39039965519572, 9.173611483096316],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1089);
 var myPolygon1090 = new ymaps.Polygon([
            [
                [45.3967455454224, 9.173630914299329],
                [45.39674094193332, 9.176633347817845],
                [45.39462564631624, 9.176626758018257],
                [45.39463024946768, 9.173624436512515],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1090);
 var myPolygon1091 = new ymaps.Polygon([
            [
                [45.405244612441656, 9.146630866502797],
                [45.40524071809907, 9.149633754225773],
                [45.40312542280085, 9.149628170064917],
                [45.40312931685778, 9.146625394405293],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1091);
 var myPolygon1092 = new ymaps.Polygon([
            [
                [45.40524071809907, 9.149633754225773],
                [45.40523674481216, 9.152636641328641],
                [45.403121449805354, 9.152630945104516],
                [45.40312542280085, 9.149628170064917],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1092);
 var myPolygon1093 = new ymaps.Polygon([
            [
                [45.4262007134659, 9.257833445058408],
                [45.42619389321788, 9.260837422825182],
                [45.42407862044268, 9.260827681581992],
                [45.424085440190446, 9.257823815998828],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1093);
 var myPolygon1094 = new ymaps.Polygon([
            [
                [45.43483409250707, 9.164734277645735],
                [45.434829720011386, 9.167738731648283],
                [45.432714437572834, 9.167732465373657],
                [45.432718809747804, 9.164728123608304],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1094);
 var myPolygon1095 = new ymaps.Polygon([
            [
                [45.43481612837353, 9.176752089429428],
                [45.43481143977747, 9.179756540572752],
                [45.43269615867971, 9.179749825350317],
                [45.432700846931866, 9.176745486443798],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1095);
 var myPolygon1096 = new ymaps.Polygon([
            [
                [45.439064655663344, 9.164746587771605],
                [45.43906028252618, 9.167751266285944],
                [45.4369450016625, 9.167744998619014],
                [45.4369493744789, 9.164740432366806],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1096);
 var myPolygon1097 = new ymaps.Polygon([
            [
                [45.44325300592453, 9.19180300219563],
                [45.443247920712395, 9.194807898554208],
                [45.441132644571724, 9.194800618915394],
                [45.44113772941089, 9.191795834842976],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1097);
 var myPolygon1098 = new ymaps.Polygon([
            [
                [45.44542314246558, 9.155750007907892],
                [45.44541900552873, 9.158755025298335],
                [45.443303726082256, 9.158749092441171],
                [45.443307862715685, 9.155744187350553],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1098);
 var myPolygon1099 = new ymaps.Polygon([
            [
                [45.449727040830965, 9.08664093105896],
                [45.44972472181345, 9.089646184806547],
                [45.447609438428906, 9.089642834120248],
                [45.447611757276356, 9.086637692699039],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1099);
 var myPolygon1100 = new ymaps.Polygon([
            [
                [45.44963222122597, 9.170787854382214],
                [45.44962768835319, 9.173793092988296],
                [45.44751241208585, 9.173786597190226],
                [45.44751694462614, 9.170781470908457],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1100);
 var myPolygon1101 = new ymaps.Polygon([
            [
                [45.45176897699122, 9.155767473460292],
                [45.451764839143934, 9.158772827825077],
                [45.44964956205956, 9.158766892990196],
                [45.449653699603346, 9.155761650962674],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1101);
 var myPolygon1102 = new ymaps.Polygon([
            [
                [45.451747497038355, 9.170794238565218],
                [45.45174296383308, 9.173799589508091],
                [45.44962768835319, 9.173793092988296],
                [45.44963222122597, 9.170787854382214],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1102);
 var myPolygon1103 = new ymaps.Polygon([
            [
                [45.451733660208205, 9.179810289215883],
                [45.451728889788725, 9.182815637955835],
                [45.449613615341136, 9.182808804426257],
                [45.44961838541073, 9.179803568022797],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1103);
 var myPolygon1104 = new ymaps.Polygon([
            [
                [45.455973512430404, 9.173812584713264],
                [45.45596889947699, 9.176818159645151],
                [45.453853625910426, 9.17681154931994],
                [45.45385823852548, 9.173806086749718],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1104);
 var myPolygon1105 = new ymaps.Polygon([
            [
                [45.45811886409964, 9.152779252736462],
                [45.45811480443085, 9.155784944835126],
                [45.45599952940498, 9.15577912039643],
                [45.456003588775985, 9.152773540672566],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1105);
 var myPolygon1106 = new ymaps.Polygon([
            [
                [45.458097774864775, 9.167807706632896],
                [45.45809331975076, 9.170813395370685],
                [45.45597804630074, 9.170807009059354],
                [45.45598250108799, 9.167801432695908],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1106);
 var myPolygon1107 = new ymaps.Polygon([
            [
                [45.45809331975076, 9.170813395370685],
                [45.45808878554785, 9.173819083398836],
                [45.455973512430404, 9.173812584713264],
                [45.45597804630074, 9.170807009059354],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1107);
 var myPolygon1108 = new ymaps.Polygon([
            [
                [45.4580390936402, 9.203875921903348],
                [45.45803368946279, 9.206881601301392],
                [45.455918420386524, 9.206873866506026],
                [45.455923824167535, 9.203868299481048],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1108);
 var myPolygon1109 = new ymaps.Polygon([
            [
                [45.46018019878139, 9.188854573797858],
                [45.46017518967869, 9.191860369692094],
                [45.45805991946615, 9.19185319596615],
                [45.458064928201416, 9.188847512458029],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1109);
 var myPolygon1110 = new ymaps.Polygon([
            [
                [45.46241872563306, 9.08666036877612],
                [45.4624164055947, 9.089666296744127],
                [45.46030112693186, 9.089662943823347],
                [45.46030344680005, 9.086657128256627],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1110);
 var myPolygon1111 = new ymaps.Polygon([
            [
                [45.46227495609264, 9.200885264260172],
                [45.462269630222295, 9.20389116928903],
                [45.460154362325106, 9.203883545172637],
                [45.460159687804826, 9.200877752541935],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1111);
 var myPolygon1112 = new ymaps.Polygon([
            [
                [45.4644107375785, 9.188868698831616],
                [45.46440572774091, 9.191874719535539],
                [45.46229045910361, 9.191867544215189],
                [45.46229546857374, 9.188861635922354],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1112);
 var myPolygon1113 = new ymaps.Polygon([
            [
                [45.464357079442046, 9.218928868490305],
                [45.46435127854763, 9.221934880658424],
                [45.46223601390407, 9.221926581233427],
                [45.462241814372994, 9.218920681475232],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1113);
 var myPolygon1114 = new ymaps.Polygon([
            [
                [45.46433943944282, 9.227946902215328],
                [45.46433340123254, 9.230952911579122],
                [45.462218137900216, 9.23094427492511],
                [45.46222417566762, 9.227938377970855],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1114);
 var myPolygon1115 = new ymaps.Polygon([
            [
                [45.46648927301546, 9.209918677234024],
                [45.46648370902936, 9.212924804516831],
                [45.464368443914594, 9.212916841437174],
                [45.46437400749258, 9.20991082657715],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1115);
 var myPolygon1116 = new ymaps.Polygon([
            [
                [45.468651057017496, 9.182870333534932],
                [45.46864620468018, 9.185876580656199],
                [45.466530936888894, 9.185869628613263],
                [45.46653578887032, 9.182863493928284],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1116);
 var myPolygon1117 = new ymaps.Polygon([
            [
                [45.472806447517435, 9.224974548592485],
                [45.47280048666372, 9.227981008667168],
                [45.47068522604045, 9.227972480632856],
                [45.47069118645697, 9.224966133017821],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1117);
 var myPolygon1118 = new ymaps.Polygon([
            [
                [45.474987070788266, 9.188904025153217],
                [45.474982059112975, 9.191910608100006],
                [45.472866794413825, 9.191903428791724],
                [45.472871805721525, 9.1888969583185],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1118);
 var myPolygon1119 = new ymaps.Polygon([
            [
                [45.47492758994661, 9.221976391620188],
                [45.47492170778994, 9.224982965102429],
                [45.472806447517435, 9.224974548592485],
                [45.47281232924266, 9.221968087582509],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1119);
 var myPolygon1120 = new ymaps.Polygon([
            [
                [45.47708706151646, 9.197931176665346],
                [45.4770818120514, 9.200937869666632],
                [45.47496654927756, 9.200930352102896],
                [45.47497179835757, 9.197923771587343],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1120);
 var myPolygon1121 = new ymaps.Polygon([
            [
                [45.47916963759209, 9.215979402778816],
                [45.479163912864436, 9.21898620307694],
                [45.47704865331063, 9.218978009690716],
                [45.47705437761837, 9.215971321890118],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1121);
 var myPolygon1122 = new ymaps.Polygon([
            [
                [45.483506090658324, 9.149840804829328],
                [45.48350210657343, 9.152847847035783],
                [45.48138684069743, 9.152842127349588],
                [45.4813908244901, 9.149835197667967],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1122);
 var myPolygon1123 = new ymaps.Polygon([
            [
                [45.483457911996524, 9.18291823207011],
                [45.483453057167104, 9.185925266595358],
                [45.4813377948888, 9.185918309142037],
                [45.481342649362134, 9.182911387140576],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1123);
 var myPolygon1124 = new ymaps.Polygon([
            [
                [45.48340580158579, 9.212988541021721],
                [45.48340015517597, 9.215995567250813],
                [45.48128489677796, 9.215987484565675],
                [45.48129054277361, 9.21298057085924],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1124);
 var myPolygon1125 = new ymaps.Polygon([
            [
                [45.48560916541398, 9.158867874925313],
                [45.48560494354306, 9.161875027724061],
                [45.48348967936595, 9.161868969790596],
                [45.4834939009272, 9.158861929528928],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1125);
 var myPolygon1126 = new ymaps.Polygon([
            [
                [45.485467388312756, 9.240060727550736],
                [45.4854610290194, 9.24306785777795],
                [45.48334577539818, 9.243058761383653],
                [45.4833521342251, 9.240051743690437],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1126);
 var myPolygon1127 = new ymaps.Polygon([
            [
                [45.4877480996181, 9.14083021545043],
                [45.48774435246027, 9.143837484576814],
                [45.48562908729947, 9.143832101268837],
                [45.485632834182454, 9.140824944692561],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1127);
 var myPolygon1128 = new ymaps.Polygon([
            [
                [45.48758892220332, 9.237062468637179],
                [45.48758264161229, 9.240069712409628],
                [45.485467388312756, 9.240060727550736],
                [45.485473668443106, 9.23705359632493],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1128);
 var myPolygon1129 = new ymaps.Polygon([
            [
                [45.48985961683382, 9.143842868483187],
                [45.489855790224745, 9.146850249573708],
                [45.48774052613186, 9.146844753104796],
                [45.48774435246027, 9.143837484576814],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1129);
 var myPolygon1130 = new ymaps.Polygon([
            [
                [45.48982678702626, 9.167901899398897],
                [45.489822327007744, 9.170909275251141],
                [45.48770706536935, 9.170902878285103],
                [45.48771152506073, 9.167895614994679],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1130);
 var myPolygon1131 = new ymaps.Polygon([
            [
                [45.489788889953786, 9.191960885605637],
                [45.48978379652894, 9.194968255418813],
                [45.487668537716715, 9.19496095796186],
                [45.48767363076796, 9.191953700709675],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1131);
 var myPolygon1132 = new ymaps.Polygon([
            [
                [45.491904148352006, 9.191968071300268],
                [45.491899054553535, 9.194975553686952],
                [45.48978379652894, 9.194968255418813],
                [45.489788889953786, 9.191960885605637],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1132);
 var myPolygon1133 = new ymaps.Polygon([
            [
                [45.494043689013814, 9.176937271197056],
                [45.49403899077833, 9.179944870039078],
                [45.49192373173121, 9.179938133890817],
                [45.49192842962207, 9.176930647635345],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1133);
 var myPolygon1134 = new ymaps.Polygon([
            [
                [45.49615894761808, 9.176943895495086],
                [45.49615424903797, 9.179951606936172],
                [45.49403899077833, 9.179944870039078],
                [45.494043689013814, 9.176937271197056],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1134);
 var myPolygon1135 = new ymaps.Polygon([
            [
                [45.500428191662294, 9.149885684564293],
                [45.50042420523882, 9.15289362741987],
                [45.49830894566115, 9.152887902645194],
                [45.49831293179224, 9.149880072414565],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1135);
 var myPolygon1136 = new ymaps.Polygon([
            [
                [45.50041599477599, 9.158909511209147],
                [45.500411770736754, 9.161917452117807],
                [45.49829651207117, 9.161911389468829],
                [45.49830073580057, 9.158903561184843],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1136);
 var myPolygon1137 = new ymaps.Polygon([
            [
                [45.5003847631947, 9.179965082977262],
                [45.50037998472038, 9.18297301890489],
                [45.49826472838626, 9.18296616788583],
                [45.4982695065101, 9.179958344582198],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1137);
 var myPolygon1138 = new ymaps.Polygon([
            [
                [45.50254345074511, 9.149891297337954],
                [45.502539464029205, 9.152899352830996],
                [45.50042420523882, 9.15289362741987],
                [45.500428191662294, 9.149885684564293],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1138);
 var myPolygon1139 = new ymaps.Polygon([
            [
                [45.502495240267, 9.182979870685614],
                [45.50249038223154, 9.185987918488],
                [45.50037512704125, 9.185980954070859],
                [45.50037998472038, 9.18297301890489],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1139);
 var myPolygon1140 = new ymaps.Polygon([
            [
                [45.502414052651346, 9.22810050072374],
                [45.50240800646344, 9.231108535596997],
                [45.50029275731534, 9.23109988164728],
                [45.500298803059756, 9.228091959408673],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1140);
 var myPolygon1141 = new ymaps.Polygon([
            [
                [45.50669540817667, 9.20104320334119],
                [45.506690074096156, 9.204051471619106],
                [45.504574822741326, 9.2040438296868],
                [45.5045801564306, 9.201035674069686],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1141);
 var myPolygon1142 = new ymaps.Polygon([
            [
                [45.50879991096382, 9.207067494502537],
                [45.50879441803678, 9.210075873741717],
                [45.506679168269656, 9.210068005613453],
                [45.50668466079381, 9.207059739047368],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1142);
 var myPolygon1143 = new ymaps.Polygon([
            [
                [45.51742219696865, 9.077718182332198],
                [45.51742011025913, 9.080727038169332],
                [45.51530485156235, 9.080724013724561],
                [45.51530693811881, 9.077715270614164],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1143);
 var myPolygon1144 = new ymaps.Polygon([
            [
                [45.517365404816616, 9.137895220885856],
                [45.51736173306071, 9.140904067615132],
                [45.515246478645885, 9.140898788647565],
                [45.515250150132466, 9.137890054643783],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1144);
 var myPolygon1145 = new ymaps.Polygon([
            [
                [45.529798559638785, 9.279372989154364],
                [45.5297911598434, 9.282382471327065],
                [45.52767592937544, 9.282371887322396],
                [45.527683328628044, 9.279362517944792],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1145);
 var myPolygon1146 = new ymaps.Polygon([
            [
                [45.5320393311241, 9.222200949911917],
                [45.53203343730631, 9.225210564876148],
                [45.529918198308046, 9.225202123065145],
                [45.52992409169354, 9.222192620911283],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1146);
 var myPolygon1147 = new ymaps.Polygon([
            [
                [45.53203343730631, 9.225210564876148],
                [45.53202746419733, 9.22822017890151],
                [45.529912225637204, 9.22821162428026],
                [45.529918198308046, 9.225202123065145],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1147);
 var myPolygon1148 = new ymaps.Polygon([
            [
                [45.532002778850966, 9.24025862536334],
                [45.53199640928708, 9.243268234506164],
                [45.52988117300482, 9.243259115835675],
                [45.52988754210149, 9.24024961950243],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1148);
 var myPolygon1149 = new ymaps.Polygon([
            [
                [45.536239541181594, 9.237266804288614],
                [45.53623324998568, 9.240276640090102],
                [45.534118014812364, 9.240267632225851],
                [45.53412430554682, 9.23725790925917],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1149);
 var myPolygon1150 = new ymaps.Polygon([
            [
                [45.53623324998568, 9.240276640090102],
                [45.53622687948729, 9.243286474889716],
                [45.53411164478125, 9.243277354190797],
                [45.534118014812364, 9.240267632225851],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1150);
 var myPolygon1151 = new ymaps.Polygon([
            [
                [45.544718879011285, 9.228271526613307],
                [45.544712823946846, 9.231281816811473],
                [45.54259759055853, 9.231273143594356],
                [45.54260364517882, 9.228262966281607],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1151);
 var myPolygon1152 = new ymaps.Polygon([
            [
                [45.37983212068797, 9.167576034464293],
                [45.37982767764842, 9.170577573653294],
                [45.37771237506194, 9.170571213530565],
                [45.377716817775614, 9.16756978625509],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1152);
 var myPolygon1153 = new ymaps.Polygon([
            [
                [45.3988868060901, 9.155622104871682],
                [45.3988826758236, 9.158624654545038],
                [45.39676737905484, 9.158618736166432],
                [45.3967715090184, 9.155616298518847],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1153);
 var myPolygon1154 = new ymaps.Polygon([
            [
                [45.401010126715285, 9.149622586524089],
                [45.40100615401121, 9.152625249512862],
                [45.398890857429706, 9.15261955455359],
                [45.398894829842405, 9.149617003603204],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1154);
 var myPolygon1155 = new ymaps.Polygon([
            [
                [45.434842600422755, 9.158725367602207],
                [45.434838385977535, 9.161729822959556],
                [45.43272310290336, 9.161723781159411],
                [45.43272731703945, 9.15871943803944],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1155);
 var myPolygon1156 = new ymaps.Polygon([
            [
                [45.43482073794456, 9.173747637552594],
                [45.43481612837353, 9.176752089429428],
                [45.432700846931866, 9.176745486443798],
                [45.43270545616482, 9.173741146803868],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1156);
 var myPolygon1157 = new ymaps.Polygon([
            [
                [45.4369171051155, 9.185772381075653],
                [45.436912179083386, 9.188776942192607],
                [45.434796899839704, 9.188769889477005],
                [45.43480182551051, 9.185765440609009],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1157);
 var myPolygon1158 = new ymaps.Polygon([
            [
                [45.43689168464946, 9.200795178700881],
                [45.436886363464886, 9.203799735775712],
                [45.43477108611472, 9.203792121816939],
                [45.434776406909, 9.200787676990517],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1158);
 var myPolygon1159 = new ymaps.Polygon([
            [
                [45.43904199961036, 9.179769973255649],
                [45.43903723128988, 9.182774648163806],
                [45.43692195211694, 9.18276781918768],
                [45.43692672008768, 9.179763256541161],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1159);
 var myPolygon1160 = new ymaps.Polygon([
            [
                [45.44541900552873, 9.158755025298335],
                [45.445414789537594, 9.16176004202963],
                [45.44329951040035, 9.161753996872733],
                [45.443303726082256, 9.158749092441171],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1160);
 var myPolygon1161 = new ymaps.Polygon([
            [
                [45.44744629463437, 9.212853168642908],
                [45.447440655261005, 9.215858283686355],
                [45.44532538346935, 9.215850216255335],
                [45.445331022429066, 9.212845213522188],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1161);
 var myPolygon1162 = new ymaps.Polygon([
            [
                [45.44964956205956, 9.158766892990196],
                [45.44964534544989, 9.161772134358397],
                [45.44753006788742, 9.161766087858153],
                [45.447534284187824, 9.158760958814648],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1162);
 var myPolygon1163 = new ymaps.Polygon([
            [
                [45.44964534544989, 9.161772134358397],
                [45.449641049774364, 9.164777375054783],
                [45.44752577252697, 9.164771216229942],
                [45.44753006788742, 9.161766087858153],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1163);
 var myPolygon1164 = new ymaps.Polygon([
            [
                [45.451764839143934, 9.158772827825077],
                [45.45176062222496, 9.161778181530446],
                [45.44964534544989, 9.161772134358397],
                [45.44964956205956, 9.158766892990196],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1164);
 var myPolygon1165 = new ymaps.Polygon([
            [
                [45.45391100647396, 9.134735012185523],
                [45.453907421866816, 9.137740483167077],
                [45.45179214356693, 9.137735334122764],
                [45.45179572791114, 9.134729975491537],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1165);
 var myPolygon1166 = new ymaps.Polygon([
            [
                [45.45388831266504, 9.152767829243297],
                [45.45388425359179, 9.155773296604847],
                [45.45176897699122, 9.155767473460292],
                [45.45177303576677, 9.152762118448573],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1166);
 var myPolygon1167 = new ymaps.Polygon([
            [
                [45.45387589821265, 9.161784229374394],
                [45.45387160190692, 9.16478969475742],
                [45.45175632623434, 9.164783534563913],
                [45.45176062222496, 9.161778181530446],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1167);
 var myPolygon1168 = new ymaps.Polygon([
            [
                [45.45386277206328, 9.170800623457565],
                [45.45385823852548, 9.173806086749718],
                [45.45174296383308, 9.173799589508091],
                [45.451747497038355, 9.170794238565218],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1168);
 var myPolygon1169 = new ymaps.Polygon([
            [
                [45.453848934218165, 9.17981701115576],
                [45.45384416344876, 9.182822472244686],
                [45.451728889788725, 9.182815637955835],
                [45.451733660208205, 9.179810289215883],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1169);
 var myPolygon1170 = new ymaps.Polygon([
            [
                [45.45384416344876, 9.182822472244686],
                [45.453839313602245, 9.185827932574236],
                [45.45172404029794, 9.185820985936516],
                [45.451728889788725, 9.182815637955835],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1170);
 var myPolygon1171 = new ymaps.Polygon([
            [
                [45.46025325204321, 9.137755933733072],
                [45.46024958755198, 9.140761741268145],
                [45.458134311882496, 9.140756478119524],
                [45.458137976104936, 9.137750782972152],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1171);
 var myPolygon1172 = new ymaps.Polygon([
            [
                [45.46016493419036, 9.197871959076616],
                [45.460159687804826, 9.200877752541935],
                [45.458044418729294, 9.200870241658311],
                [45.458049664730034, 9.197864560578775],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1172);
 var myPolygon1173 = new ymaps.Polygon([
            [
                [45.45999551991206, 9.279028053162747],
                [45.45998813800685, 9.282033819710175],
                [45.45787288151407, 9.282023274459087],
                [45.45788026287784, 9.279017620293764],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1173);
 var myPolygon1174 = new ymaps.Polygon([
            [
                [45.46647806593192, 9.21593093091471],
                [45.466472343723204, 9.218937056415168],
                [45.464357079442046, 9.218928868490305],
                [45.46436280123106, 9.215922855412387],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1174);
 var myPolygon1175 = new ymaps.Polygon([
            [
                [45.46862600415486, 9.197901561290372],
                [45.46862075622979, 9.200907804423712],
                [45.46650549030511, 9.200900290200947],
                [45.46651073784526, 9.19789415950335],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1175);
 var myPolygon1176 = new ymaps.Polygon([
            [
                [45.47070859297007, 9.215947084611749],
                [45.47070286992183, 9.218953434994768],
                [45.46858760721647, 9.218945245249945],
                [45.46859332984492, 9.215939007314457],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1176);
 var myPolygon1177 = new ymaps.Polygon([
            [
                [45.47068522604045, 9.227972480632856],
                [45.470679186501314, 9.23097882730024],
                [45.468563925533076, 9.230970187766557],
                [45.46856996462923, 9.227963953546196],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1177);
 var myPolygon1178 = new ymaps.Polygon([
            [
                [45.47290021185237, 9.170858119425203],
                [45.47289567532074, 9.17386459442278],
                [45.47078040771558, 9.173858090680284],
                [45.470784943914474, 9.170851728144394],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1178);
 var myPolygon1179 = new ymaps.Polygon([
            [
                [45.481317585471174, 9.197945989290533],
                [45.48131233523595, 9.200952907300797],
                [45.47919707403752, 9.200945388065893],
                [45.47920232388764, 9.197938582566369],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1179);
 var myPolygon1180 = new ymaps.Polygon([
            [
                [45.48125547952228, 9.231022039373526],
                [45.48124935861613, 9.234028947502695],
                [45.47913410203694, 9.234020190657557],
                [45.47914022249414, 9.23101339503778],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1180);
 var myPolygon1181 = new ymaps.Polygon([
            [
                [45.483432846267036, 9.197953396837946],
                [45.48342759564669, 9.200960427371452],
                [45.48131233523595, 9.200952907300797],
                [45.481317585471174, 9.197945989290533],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1181);
 var myPolygon1182 = new ymaps.Polygon([
            [
                [45.48549799733326, 9.22502506168593],
                [45.485492033855564, 9.22803219678103],
                [45.4833767779602, 9.228023663058073],
                [45.48338274100049, 9.225016640497637],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1182);
 var myPolygon1183 = new ymaps.Polygon([
            [
                [45.487702526507796, 9.173910140864534],
                [45.48769790847614, 9.176917402720461],
                [45.48558264672195, 9.176910781367091],
                [45.48558726441489, 9.173903632060275],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1183);
 var myPolygon1184 = new ymaps.Polygon([
            [
                [45.489855790224745, 9.146850249573708],
                [45.489851884439325, 9.149857630053237],
                [45.48773662063294, 9.149852021021877],
                [45.48774052613186, 9.146844753104796],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1184);
 var myPolygon1185 = new ymaps.Polygon([
            [
                [45.489704175175454, 9.237071341935646],
                [45.489697894123715, 9.24007869826725],
                [45.48758264161229, 9.240069712409628],
                [45.48758892220332, 9.237062468637179],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1185);
 var myPolygon1186 = new ymaps.Polygon([
            [
                [45.493982083829344, 9.213028405124998],
                [45.4939764353483, 9.216035994155016],
                [45.49186118088953, 9.216027906976633],
                [45.49186682895628, 9.213020430531822],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1186);
 var myPolygon1187 = new ymaps.Polygon([
            [
                [45.4939764353483, 9.216035994155016],
                [45.4939707076805, 9.219043582286014],
                [45.491855453641854, 9.219035382522543],
                [45.49186118088953, 9.216027906976633],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1187);
 var myPolygon1188 = new ymaps.Polygon([
            [
                [45.49619368529621, 9.152882178506884],
                [45.49618962026383, 9.15588989548881],
                [45.49407435940975, 9.155884059386953],
                [45.49407842414397, 9.152876455004849],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1188);
 var myPolygon1189 = new ymaps.Polygon([
            [
                [45.49608596093128, 9.219051782961015],
                [45.49608015365083, 9.222059482777961],
                [45.49396490082601, 9.222051169505482],
                [45.4939707076805, 9.219043582286014],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1189);
 var myPolygon1190 = new ymaps.Polygon([
            [
                [45.50029275731534, 9.23109988164728],
                [45.500286632367064, 9.2341078029239],
                [45.49817138288024, 9.234099037314174],
                [45.498177507379246, 9.231091228659553],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1190);
 var myPolygon1191 = new ymaps.Polygon([
            [
                [45.50244309544353, 9.213060312363933],
                [45.502437445304956, 9.216068351859956],
                [45.50032219399753, 9.216060261084763],
                [45.500327843721706, 9.213052334224024],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1191);
 var myPolygon1192 = new ymaps.Polygon([
            [
                [45.50461997416036, 9.176970400052374],
                [45.50461527420146, 9.179978562014906],
                [45.50250001909185, 9.179971822121463],
                [45.50250471870601, 9.176963772808074],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1192);
 var myPolygon1193 = new ymaps.Polygon([
            [
                [45.504563917714755, 9.210060138359896],
                [45.50455834637757, 9.213068291390831],
                [45.50244309544353, 9.213060312363933],
                [45.50244866637209, 9.210052271980924],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1193);
 var myPolygon1194 = new ymaps.Polygon([
            [
                [45.506753237818, 9.164943922292744],
                [45.50674885440401, 9.167952199789466],
                [45.504633598737705, 9.167945909793957],
                [45.504637981830165, 9.164937744959289],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1194);
 var myPolygon1195 = new ymaps.Polygon([
            [
                [45.5108927116263, 9.219109213219427],
                [45.51088690136328, 9.222117701569283],
                [45.508771654053774, 9.222109381824927],
                [45.50877746389062, 9.219101006160203],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1195);
 var myPolygon1196 = new ymaps.Polygon([
            [
                [45.51512893660475, 9.216116915405095],
                [45.51512320473406, 9.219125630075583],
                [45.513007958574114, 9.21911742119118],
                [45.513013690024366, 9.216108819231009],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1196);
 var myPolygon1197 = new ymaps.Polygon([
            [
                [45.514977054766646, 9.285317099698462],
                [45.51496950028335, 9.288325790204368],
                [45.51285426539747, 9.288314989020568],
                [45.51286181932666, 9.285306411221676],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1197);
 var myPolygon1198 = new ymaps.Polygon([
            [
                [45.519469404864594, 9.14692726433051],
                [45.51946549506616, 9.149936221998935],
                [45.51735024228142, 9.149930604230768],
                [45.51735415179306, 9.146921759300124],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1198);
 var myPolygon1199 = new ymaps.Polygon([
            [
                [45.521546612901076, 9.174014380196368],
                [45.52154198944639, 9.177023444540698],
                [45.519426740291756, 9.177016811399026],
                [45.51943136340734, 9.174007859804183],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1199);
 var myPolygon1200 = new ymaps.Polygon([
            [
                [45.52365723781354, 9.17703007841999],
                [45.523652534750845, 9.18003925478862],
                [45.52153728672865, 9.1800325081474],
                [45.52154198944639, 9.177023444540698],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1200);
 var myPolygon1201 = new ymaps.Polygon([
            [
                [45.52348866607607, 9.26429584268334],
                [45.523481664242716, 9.267304992203284],
                [45.52136642875382, 9.267294975517842],
                [45.521373430073574, 9.264285938756156],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1201);
 var myPolygon1202 = new ymaps.Polygon([
            [
                [45.52558265643116, 9.273333531229387],
                [45.5255754162662, 9.276342790140331],
                [45.52346018314144, 9.276332434029529],
                [45.523467422775326, 9.273323287888916],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1202);
 var myPolygon1203 = new ymaps.Polygon([
            [
                [45.527808851475065, 9.222184292836847],
                [45.527802958521875, 9.22519368219288],
                [45.52568771794776, 9.225185242259231],
                [45.52569361046872, 9.222175965688486],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1203);
 var myPolygon1204 = new ymaps.Polygon([
            [
                [45.53414867551668, 9.225219007626023],
                [45.534142701969536, 9.228228734474179],
                [45.53202746419733, 9.22822017890151],
                [45.53203343730631, 9.225210564876148],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1204);
 var myPolygon1205 = new ymaps.Polygon([
            [
                [45.534142701969536, 9.228228734474179],
                [45.53413664912547, 9.231238460370788],
                [45.532021411797245, 9.231229791975457],
                [45.53202746419733, 9.22822017890151],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1205);
 var myPolygon1206 = new ymaps.Polygon([
            [
                [45.5383547760283, 9.23727570030738],
                [45.53834848437089, 9.240285648956226],
                [45.53623324998568, 9.240276640090102],
                [45.536239541181594, 9.237266804288614],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1206);
 var myPolygon1207 = new ymaps.Polygon([
            [
                [45.540488410558424, 9.228254406901977],
                [45.54048235638223, 9.23126447134186],
                [45.53836712141796, 9.231255800053855],
                [45.53837317515008, 9.228245848474284],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1207);
 var myPolygon1208 = new ymaps.Polygon([
            [
                [45.54478024918888, 9.195158274350934],
                [45.5447750667141, 9.19816857433266],
                [45.54265982876025, 9.198161142862006],
                [45.54266501085489, 9.195150955767037],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1208);
 var myPolygon1209 = new ymaps.Polygon([
            [
                [45.56796168301615, 9.240411878355532],
                [45.56795530550446, 9.243423407182103],
                [45.56584008262004, 9.243414271252249],
                [45.56584645966394, 9.240402855448773],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1209);
 var myPolygon1210 = new ymaps.Polygon([
            [
                [45.407356012609995, 9.149639339006738],
                [45.40735203903162, 9.152642338185318],
                [45.40523674481216, 9.152636641328641],
                [45.40524071809907, 9.149633754225773],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1210);
 var myPolygon1211 = new ymaps.Polygon([
            [
                [45.42435927815466, 9.062570829353872],
                [45.42435759315548, 9.065574738532987],
                [45.422242299130104, 9.065572289725427],
                [45.42224398400571, 9.062568492723408],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1211);
 var myPolygon1212 = new ymaps.Polygon([
            [
                [45.43067437036913, 9.104637252495644],
                [45.430671578795206, 9.107641493336956],
                [45.42855628946963, 9.107637472715274],
                [45.428559080838795, 9.104633344087764],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1212);
 var myPolygon1213 = new ymaps.Polygon([
            [
                [45.44117993606038, 9.164752743860221],
                [45.441175562602425, 9.167757534649162],
                [45.43906028252618, 9.167751266285944],
                [45.439064655663344, 9.164746587771605],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1213);
 var myPolygon1214 = new ymaps.Polygon([
            [
                [45.44115727834551, 9.179776690716311],
                [45.441152509675256, 9.182781477898583],
                [45.43903723128988, 9.182774648163806],
                [45.43904199961036, 9.179769973255649],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1214);
 var myPolygon1215 = new ymaps.Polygon([
            [
                [45.44549175652497, 9.09264451254131],
                [45.44548927973742, 9.095649540891774],
                [45.443373995136525, 9.095645966347199],
                [45.443376471742404, 9.092641050298056],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1215);
 var myPolygon1216 = new ymaps.Polygon([
            [
                [45.44537821565955, 9.18580015065345],
                [45.44537328818193, 9.188805160890963],
                [45.44325801208872, 9.188798105040773],
                [45.44326293920492, 9.185793207102108],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1216);
 var myPolygon1217 = new ymaps.Polygon([
            [
                [45.44535278773407, 9.200825193877124],
                [45.44534746498803, 9.203830200070307],
                [45.443232190788876, 9.203822582727506],
                [45.44323751314451, 9.20081768883262],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1217);
 var myPolygon1218 = new ymaps.Polygon([
            [
                [45.447554179787524, 9.1437353039581],
                [45.447550358788035, 9.146740436173015],
                [45.445435078949906, 9.146734951906435],
                [45.44543889966914, 9.143729932004165],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1218);
 var myPolygon1219 = new ymaps.Polygon([
            [
                [45.45177303576677, 9.152762118448573],
                [45.45176897699122, 9.155767473460292],
                [45.449653699603346, 9.155761650962674],
                [45.44965775808119, 9.152756408288301],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1219);
 var myPolygon1220 = new ymaps.Polygon([
            [
                [45.45169860677641, 9.200847714014],
                [45.451693282858976, 9.20385305717694],
                [45.44957801102307, 9.20384543729491],
                [45.44958333455003, 9.2008402064677],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1220);
 var myPolygon1221 = new ymaps.Polygon([
            [
                [45.45388425359179, 9.155773296604847],
                [45.45388011544096, 9.158778763319377],
                [45.451764839143934, 9.158772827825077],
                [45.45176897699122, 9.155767473460292],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1221);
 var myPolygon1222 = new ymaps.Polygon([
            [
                [45.456026284249575, 9.134740049439152],
                [45.456022699379474, 9.137745632783512],
                [45.453907421866816, 9.137740483167077],
                [45.45391100647396, 9.134735012185523],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1222);
 var myPolygon1223 = new ymaps.Polygon([
            [
                [45.45601147026784, 9.146762379333431],
                [45.45600756906364, 9.14976796031407],
                [45.453892292660726, 9.149762361247204],
                [45.453896193578785, 9.146756892629051],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1223);
 var myPolygon1224 = new ymaps.Polygon([
            [
                [45.458044418729294, 9.200870241658311],
                [45.4580390936402, 9.203875921903348],
                [45.455923824167535, 9.203868299481048],
                [45.45592914886606, 9.200862731609194],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1224);
 var myPolygon1225 = new ymaps.Polygon([
            [
                [45.46022593960787, 9.158796573759682],
                [45.46022172145146, 9.161802376938562],
                [45.458106447825905, 9.161796327078363],
                [45.45811066567293, 9.15879063628659],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1225);
 var myPolygon1226 = new ymaps.Polygon([
            [
                [45.460194751522856, 9.179837181457144],
                [45.460189979703514, 9.182842979667898],
                [45.458074708406144, 9.182836143100614],
                [45.45807947987548, 9.179830457276287],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1226);
 var myPolygon1227 = new ymaps.Polygon([
            [
                [45.4644205199356, 9.182856655081627],
                [45.46441566831008, 9.185862677342813],
                [45.462300398943654, 9.18585572684475],
                [45.462305250213326, 9.18284981699487],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1227);
 var myPolygon1228 = new ymaps.Polygon([
            [
                [45.464400638797386, 9.194880739442098],
                [45.464395470747974, 9.197886758538793],
                [45.462280202863006, 9.197879358396586],
                [45.46228537053336, 9.194873451710762],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1228);
 var myPolygon1229 = new ymaps.Polygon([
            [
                [45.46439022359274, 9.200892776813141],
                [45.46438489733171, 9.203898794252641],
                [45.462269630222295, 9.20389116928903],
                [45.46227495609264, 9.200885264260172],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1229);
 var myPolygon1230 = new ymaps.Polygon([
            [
                [45.46653578887032, 9.182863493928284],
                [45.466530936888894, 9.185869628613263],
                [45.46441566831008, 9.185862677342813],
                [45.4644205199356, 9.182856655081627],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1230);
 var myPolygon1231 = new ymaps.Polygon([
            [
                [45.468655830237104, 9.179864085653561],
                [45.468651057017496, 9.182870333534932],
                [45.46653578887032, 9.182863493928284],
                [45.46654056173982, 9.179857358483305],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1231);
 var myPolygon1232 = new ymaps.Polygon([
            [
                [45.468615429187345, 9.203914046721987],
                [45.46861002302757, 9.20692028817269],
                [45.466494757890146, 9.206912549078776],
                [45.46650016365339, 9.20390642006359],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1232);
 var myPolygon1233 = new ymaps.Polygon([
            [
                [45.47076632437712, 9.182877173901682],
                [45.47076147168386, 9.185883533471737],
                [45.46864620468018, 9.185876580656199],
                [45.468651057017496, 9.182870333534932],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1233);
 var myPolygon1234 = new ymaps.Polygon([
            [
                [45.47073602136675, 9.200915319481553],
                [45.47073069393353, 9.203921674227947],
                [45.468615429187345, 9.203914046721987],
                [45.46862075622979, 9.200907804423712],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1234);
 var myPolygon1235 = new ymaps.Polygon([
            [
                [45.47071980169782, 9.209934381165198],
                [45.47071423689542, 9.212940733331056],
                [45.468598973356315, 9.212932768481421],
                [45.46860453775054, 9.209926528763333],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1235);
 var myPolygon1236 = new ymaps.Polygon([
            [
                [45.47071423689542, 9.212940733331056],
                [45.47070859297007, 9.215947084611749],
                [45.46859332984492, 9.215939007314457],
                [45.468598973356315, 9.212932768481421],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1236);
 var myPolygon1237 = new ymaps.Polygon([
            [
                [45.47503283510667, 9.158838154550187],
                [45.47502861478387, 9.161844744788588],
                [45.472913346669934, 9.16183869022059],
                [45.47291756668318, 9.158832212456753],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1237);
 var myPolygon1238 = new ymaps.Polygon([
            [
                [45.474955813713215, 9.20694351061526],
                [45.474950327229, 9.209950088587071],
                [45.472835064857314, 9.209942234439737],
                [45.472840550939104, 9.206935768940813],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1238);
 var myPolygon1239 = new ymaps.Polygon([
            [
                [45.477171764567785, 9.14080386751834],
                [45.47716801878399, 9.143810574019268],
                [45.47505274968703, 9.143805193702052],
                [45.475056495196064, 9.140798599688702],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1239);
 var myPolygon1240 = new ymaps.Polygon([
            [
                [45.479158108990774, 9.2219930024644],
                [45.479152225971106, 9.224999800928694],
                [45.4770369672745, 9.224991382547794],
                [45.47704284986265, 9.221984696580774],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1240);
 var myPolygon1241 = new ymaps.Polygon([
            [
                [45.47913410203694, 9.234020190657557],
                [45.47912790243402, 9.23702698530416],
                [45.4770126455215, 9.237018116935447],
                [45.47701884466968, 9.234011434785602],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1241);
 var myPolygon1242 = new ymaps.Polygon([
            [
                [45.48348967936595, 9.161868969790596],
                [45.48348537864602, 9.164876009378986],
                [45.481370113996974, 9.164869839594317],
                [45.481374414401465, 9.161862912530406],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1242);
 var myPolygon1243 = new ymaps.Polygon([
            [
                [45.48341136883782, 9.209981513906733],
                [45.48340580158579, 9.212988541021721],
                [45.48129054277361, 9.21298057085924],
                [45.4812961096173, 9.20997365626703],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1243);
 var myPolygon1244 = new ymaps.Polygon([
            [
                [45.48335841389483, 9.237044724998768],
                [45.4833521342251, 9.240051743690437],
                [45.481236879349325, 9.240042760828599],
                [45.48124315855846, 9.237035854658558],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1244);
 var myPolygon1245 = new ymaps.Polygon([
            [
                [45.48561737166212, 9.15285356735774],
                [45.48561330812035, 9.155860721465704],
                [45.4834980433297, 9.15585488860649],
                [45.48350210657343, 9.152847847035783],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1245);
 var myPolygon1246 = new ymaps.Polygon([
            [
                [45.48772020693281, 9.161881086330897],
                [45.487715905581894, 9.164888351005773],
                [45.48560064250765, 9.16488217984944],
                [45.48560494354306, 9.161875027724061],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1246);
 var myPolygon1247 = new ymaps.Polygon([
            [
                [45.48769790847614, 9.176917402720461],
                [45.487693211274426, 9.179924663840373],
                [45.48557794986477, 9.179917929937993],
                [45.48558264672195, 9.176910781367091],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1247);
 var myPolygon1248 = new ymaps.Polygon([
            [
                [45.487693211274426, 9.179924663840373],
                [45.48768843490269, 9.182931924211763],
                [45.485573173843385, 9.182925077760473],
                [45.48557794986477, 9.179917929937993],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1248);
 var myPolygon1249 = new ymaps.Polygon([
            [
                [45.48765278354474, 9.203982724801914],
                [45.487647373814866, 9.206989978734727],
                [45.48553211576733, 9.206982231896038],
                [45.485537525100405, 9.203975090511255],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1249);
 var myPolygon1250 = new ymaps.Polygon([
            [
                [45.48759512362549, 9.234055223878508],
                [45.48758892220332, 9.237062468637179],
                [45.485473668443106, 9.23705359632493],
                [45.48547986941042, 9.234046464113037],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1250);
 var myPolygon1251 = new ymaps.Polygon([
            [
                [45.48986336426652, 9.140835486794188],
                [45.48985961683382, 9.143842868483187],
                [45.48774435246027, 9.143837484576814],
                [45.4877480996181, 9.14083021545043],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1251);
 var myPolygon1252 = new ymaps.Polygon([
            [
                [45.49395901478489, 9.2250587558009],
                [45.49395304955722, 9.228066341159757],
                [45.49183779681378, 9.228057803641779],
                [45.491843761603896, 9.225050330867633],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1252);
 var myPolygon1253 = new ymaps.Polygon([
            [
                [45.49394700514305, 9.231073925569527],
                [45.493940881542464, 9.234081509017713],
                [45.491825629691505, 9.234072746330712],
                [45.49183175284295, 9.231065275466976],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1253);
 var myPolygon1254 = new ymaps.Polygon([
            [
                [45.49615424903797, 9.179951606936172],
                [45.49614947126461, 9.182959317628322],
                [45.49403421335542, 9.182952468132266],
                [45.49403899077833, 9.179944870039078],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1254);
 var myPolygon1255 = new ymaps.Polygon([
            [
                [45.49824482390151, 9.194997453359614],
                [45.49823964978322, 9.198005272730278],
                [45.496124394501045, 9.197997859416967],
                [45.49612956823982, 9.194990152657242],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1255);
 var myPolygon1256 = new ymaps.Polygon([
            [
                [45.49823439646621, 9.201013091276794],
                [45.49822906395053, 9.20402090898664],
                [45.49611380944482, 9.204013270451783],
                [45.496119141569366, 9.20100556535265],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1256);
 var myPolygon1257 = new ymaps.Polygon([
            [
                [45.49816517918325, 9.23710684499442],
                [45.498158896288345, 9.240114651687774],
                [45.49604364692935, 9.240105661833864],
                [45.4960499293634, 9.23709796774972],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1257);
 var myPolygon1258 = new ymaps.Polygon([
            [
                [45.502401881065886, 9.234116569508137],
                [45.50239567645873, 9.23712460244463],
                [45.50028042821501, 9.23711572322601],
                [45.500286632367064, 9.2341078029239],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1258);
 var myPolygon1259 = new ymaps.Polygon([
            [
                [45.504595682201526, 9.19201120224637],
                [45.504590586160745, 9.195019360336945],
                [45.502475332861955, 9.195012057199351],
                [45.50248042852897, 9.192004011757392],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1259);
 var myPolygon1260 = new ymaps.Polygon([
            [
                [45.50451092391435, 9.237133482650416],
                [45.50450463963673, 9.240141627246519],
                [45.50238939264203, 9.240132634393962],
                [45.50239567645873, 9.23712460244463],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1260);
 var myPolygon1261 = new ymaps.Polygon([
            [
                [45.513071506187146, 9.183014141017749],
                [45.51306664636963, 9.186022752190084],
                [45.510951395117104, 9.18601578390046],
                [45.510956254578154, 9.183007285427172],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1261);
 var myPolygon1262 = new ymaps.Polygon([
            [
                [45.512996257956715, 9.225134622361027],
                [45.51299028878971, 9.228143221545643],
                [45.51087504313797, 9.228134675481288],
                [45.51088101186714, 9.22512618899408],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1262);
 var myPolygon1263 = new ymaps.Polygon([
            [
                [45.517099765206396, 9.282318984949633],
                [45.51709228941796, 9.285327789363732],
                [45.514977054766646, 9.285317099698462],
                [45.514984530006764, 9.28230840800407],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1263);
 var myPolygon1264 = new ymaps.Polygon([
            [
                [45.51935942740201, 9.216133110454136],
                [45.51935369469037, 9.219142050582857],
                [45.51723845010614, 9.219133839872768],
                [45.51724418239729, 9.216125012479429],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1264);
 var myPolygon1265 = new ymaps.Polygon([
            [
                [45.5216547200592, 9.074714925087566],
                [45.52165271230778, 9.077724006739645],
                [45.519537455031646, 9.077721094374011],
                [45.51953946263581, 9.074712125473786],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1265);
 var myPolygon1266 = new ymaps.Polygon([
            [
                [45.52801734513747, 9.041619688189037],
                [45.528016209044026, 9.04462911090801],
                [45.52590095282799, 9.044627438256908],
                [45.52590208883812, 9.041618128327775],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1266);
 var myPolygon1267 = new ymaps.Polygon([
            [
                [45.52993564060815, 9.216173613837515],
                [45.529929905793594, 9.219183117831227],
                [45.52781466514866, 9.219174902554746],
                [45.52782039954258, 9.216165511359117],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1267);
 var myPolygon1268 = new ymaps.Polygon([
            [
                [45.53192111090926, 9.276373865383434],
                [45.53191378986094, 9.279383461528473],
                [45.529798559638785, 9.279372989154364],
                [45.52980588015011, 9.276363505817127],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1268);
 var myPolygon1269 = new ymaps.Polygon([
            [
                [45.538385044688546, 9.222225942472264],
                [45.53837914957362, 9.225235895942902],
                [45.53626391293911, 9.2252274513149],
                [45.53626980762163, 9.22221761069228],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1269);
 var myPolygon1270 = new ymaps.Polygon([
            [
                [45.54472485474972, 9.225261235462948],
                [45.544718879011285, 9.228271526613307],
                [45.54260364517882, 9.228262966281607],
                [45.54260962047893, 9.225252788016798],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1270);
 var myPolygon1271 = new ymaps.Polygon([
            [
                [45.546920211021174, 9.180113517382097],
                [45.54691542482934, 9.18312393420848],
                [45.544800185820506, 9.18311706640885],
                [45.544804971661264, 9.180106762482314],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1271);
 var myPolygon1272 = new ymaps.Polygon([
            [
                [45.546910559304784, 9.186134350270912],
                [45.54690561444754, 9.189144765556836],
                [45.544790376158296, 9.189137671957814],
                [45.54479532065282, 9.186127369571537],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1272);
 var myPolygon1273 = new ymaps.Polygon([
            [
                [45.549025797169215, 9.186141331746802],
                [45.54902085194925, 9.18915185994492],
                [45.54690561444754, 9.189144765556836],
                [45.546910559304784, 9.186134350270912],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1273);
 var myPolygon1274 = new ymaps.Polygon([
            [
                [45.39674094193332, 9.176633347817845],
                [45.39673625952346, 9.179635780604645],
                [45.39462096424983, 9.179629078792388],
                [45.39462564631624, 9.176626758018257],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1274);
 var myPolygon1275 = new ymaps.Polygon([
            [
                [45.401014020486635, 9.146619922915374],
                [45.401010126715285, 9.149622586524089],
                [45.398894829842405, 9.149617003603204],
                [45.39889872332815, 9.146614452032956],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1275);
 var myPolygon1276 = new ymaps.Polygon([
            [
                [45.40524842783987, 9.143627978172152],
                [45.405244612441656, 9.146630866502797],
                [45.40312931685778, 9.146625394405293],
                [45.403133131976155, 9.143622618138084],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1276);
 var myPolygon1277 = new ymaps.Polygon([
            [
                [45.40523674481216, 9.152636641328641],
                [45.40523269258096, 9.155639527798954],
                [45.40311739787136, 9.155633719511648],
                [45.403121449805354, 9.152630945104516],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1277);
 var myPolygon1278 = new ymaps.Polygon([
            [
                [45.434893304979106, 9.116662929108868],
                [45.43489019689199, 9.119667392553412],
                [45.43277491001761, 9.119662922084117],
                [45.43277801787678, 9.116658570878053],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1278);
 var myPolygon1279 = new ymaps.Polygon([
            [
                [45.434829720011386, 9.167738731648283],
                [45.434825268490535, 9.170743184954727],
                [45.43270998637848, 9.170736806443],
                [45.432714437572834, 9.167732465373657],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1279);
 var myPolygon1280 = new ymaps.Polygon([
            [
                [45.43682880496142, 9.233845257945775],
                [45.436822614446676, 9.236849805030634],
                [45.434707341772295, 9.23684095634733],
                [45.43471353183298, 9.233836521509524],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1280);
 var myPolygon1281 = new ymaps.Polygon([
            [
                [45.43894407730178, 9.233853995352558],
                [45.438937886332944, 9.236858654696926],
                [45.436822614446676, 9.236849805030634],
                [45.43682880496142, 9.233845257945775],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1281);
 var myPolygon1282 = new ymaps.Polygon([
            [
                [45.44543889966914, 9.143729932004165],
                [45.445435078949906, 9.146734951906435],
                [45.4433197983245, 9.146729468249095],
                [45.44332361876349, 9.14372456064699],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1282);
 var myPolygon1283 = new ymaps.Polygon([
            [
                [45.445431179176204, 9.149739971199462],
                [45.44542720034809, 9.152744989870776],
                [45.44331192030055, 9.152739281613352],
                [45.44331589883684, 9.149734375242039],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1283);
 var myPolygon1284 = new ymaps.Polygon([
            [
                [45.44535803142654, 9.19782018685012],
                [45.44535278773407, 9.200825193877124],
                [45.44323751314451, 9.20081768883262],
                [45.44324275645236, 9.197812794104028],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1284);
 var myPolygon1285 = new ymaps.Polygon([
            [
                [45.447557921726684, 9.140730171146336],
                [45.447554179787524, 9.1437353039581],
                [45.44543889966914, 9.143729932004165],
                [45.44544264133385, 9.140724911505123],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1285);
 var myPolygon1286 = new ymaps.Polygon([
            [
                [45.45175195117211, 9.167788886912996],
                [45.451747497038355, 9.170794238565218],
                [45.44963222122597, 9.170787854382214],
                [45.449636675033034, 9.167782615066882],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1286);
 var myPolygon1287 = new ymaps.Polygon([
            [
                [45.451610445597275, 9.245927766881847],
                [45.451603935622785, 9.248933096034644],
                [45.44948867034026, 9.248923791131448],
                [45.44949517983727, 9.245918574312473],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1287);
 var myPolygon1288 = new ymaps.Polygon([
            [
                [45.456022699379474, 9.137745632783512],
                [45.45601903542582, 9.140751215555671],
                [45.453903758181866, 9.140745953576504],
                [45.453907421866816, 9.137740483167077],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1288);
 var myPolygon1289 = new ymaps.Polygon([
            [
                [45.45599952940498, 9.15577912039643],
                [45.45599539095063, 9.158784699473182],
                [45.45388011544096, 9.158778763319377],
                [45.45388425359179, 9.155773296604847],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1289);
 var myPolygon1290 = new ymaps.Polygon([
            [
                [45.45593956101533, 9.19485159337481],
                [45.455934394482, 9.197857162902954],
                [45.453819123446294, 9.19784976604903],
                [45.45382428960066, 9.194844308881805],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1290);
 var myPolygon1291 = new ymaps.Polygon([
            [
                [45.45805483164233, 9.194858878677227],
                [45.458049664730034, 9.197864560578775],
                [45.455934394482, 9.197857162902954],
                [45.45593956101533, 9.19485159337481],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1291);
 var myPolygon1292 = new ymaps.Polygon([
            [
                [45.4601434740834, 9.209895127880241],
                [45.46013791132153, 9.212900917932169],
                [45.45802264384327, 9.212892957506574],
                [45.45802820619712, 9.209887279839963],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1292);
 var myPolygon1293 = new ymaps.Polygon([
            [
                [45.46659540983706, 9.140777534223416],
                [45.46659166542682, 9.143783678411443],
                [45.46447639239366, 9.143778301082945],
                [45.464480136529254, 9.140772269320012],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1293);
 var myPolygon1294 = new ymaps.Polygon([
            [
                [45.46646066197218, 9.224949304673837],
                [45.466454702430006, 9.227955427407064],
                [45.46433943944282, 9.227946902215328],
                [45.464345398547856, 9.224940891904264],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1294);
 var myPolygon1295 = new ymaps.Polygon([
            [
                [45.4686412732252, 9.188882827004877],
                [45.468636262652616, 9.191889072568461],
                [45.46652099559057, 9.191881895653262],
                [45.46652600579564, 9.188875762525754],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1295);
 var myPolygon1296 = new ymaps.Polygon([
            [
                [45.47075152892702, 9.191896250281244],
                [45.470746438863536, 9.194902607495704],
                [45.468631172962475, 9.194895317334456],
                [45.468636262652616, 9.191889072568461],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1296);
 var myPolygon1297 = new ymaps.Polygon([
            [
                [45.47065423711981, 9.243004204243293],
                [45.470647801968525, 9.24601054598496],
                [45.46853254330229, 9.246001344218163],
                [45.468538977981545, 9.24299511492285],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1297);
 var myPolygon1298 = new ymaps.Polygon([
            [
                [45.47285653441102, 9.19791636733226],
                [45.47285128571601, 9.200922835374575],
                [45.47073602136675, 9.200915319481553],
                [45.47074126967677, 9.197908963899973],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1298);
 var myPolygon1299 = new ymaps.Polygon([
            [
                [45.47504103834567, 9.152824972104657],
                [45.47503697629396, 9.155831563651377],
                [45.47292170756671, 9.155825734032591],
                [45.47292576932049, 9.152819254960614],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1299);
 var myPolygon1300 = new ymaps.Polygon([
            [
                [45.477160289791854, 9.149823985214654],
                [45.47715630658357, 9.152830689884109],
                [45.47504103834567, 9.152824972104657],
                [45.47504502126178, 9.149818379922529],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1300);
 var myPolygon1301 = new ymaps.Polygon([
            [
                [45.47713074536584, 9.170870904117864],
                [45.47712620816864, 9.17387760407631],
                [45.475010942138425, 9.173871098888089],
                [45.47501547900282, 9.17086451141633],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1301);
 var myPolygon1302 = new ymaps.Polygon([
            [
                [45.47709732302453, 9.191917788206199],
                [45.47709223184084, 9.194924482841033],
                [45.47497696830273, 9.194917190248884],
                [45.474982059112975, 9.191910608100006],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1302);
 var myPolygon1303 = new ymaps.Polygon([
            [
                [45.4770818120514, 9.200937869666632],
                [45.47707648344576, 9.20394456183239],
                [45.47496122106275, 9.203936931783034],
                [45.47496654927756, 9.200930352102896],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1303);
 var myPolygon1304 = new ymaps.Polygon([
            [
                [45.47704865331063, 9.218978009690716],
                [45.47704284986265, 9.221984696580774],
                [45.47492758994661, 9.221976391620188],
                [45.4749333929689, 9.218969817215028],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1304);
 var myPolygon1305 = new ymaps.Polygon([
            [
                [45.48134742468292, 9.179904464378392],
                [45.481342649362134, 9.182911387140576],
                [45.479227385940206, 9.182904542971766],
                [45.47923216091074, 9.179897732720972],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1305);
 var myPolygon1306 = new ymaps.Polygon([
            [
                [45.481307005848535, 9.203959824475303],
                [45.48130159730896, 9.206966740801546],
                [45.479186336898145, 9.20695899654551],
                [45.47919174504101, 9.203952192729773],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1306);
 var myPolygon1307 = new ymaps.Polygon([
            [
                [45.48338274100049, 9.225016640497637],
                [45.4833767779602, 9.228023663058073],
                [45.481261521276856, 9.228015130283547],
                [45.481267483879755, 9.225008220245266],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1307);
 var myPolygon1308 = new ymaps.Polygon([
            [
                [45.48558726441489, 9.173903632060275],
                [45.48558264672195, 9.176910781367091],
                [45.48346738418029, 9.176904160749636],
                [45.48347200153452, 9.173897123979426],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1308);
 var myPolygon1309 = new ymaps.Polygon([
            [
                [45.485573173843385, 9.182925077760473],
                [45.485568318657826, 9.185932224822018],
                [45.483453057167104, 9.185925266595358],
                [45.483457911996524, 9.18291823207011],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1309);
 var myPolygon1310 = new ymaps.Polygon([
            [
                [45.48771152506073, 9.167895614994679],
                [45.48770706536935, 9.170902878285103],
                [45.4855918029435, 9.170896482030058],
                [45.48559626230779, 9.167889331288944],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1310);
 var myPolygon1311 = new ymaps.Polygon([
            [
                [45.487658114105045, 9.20097547002049],
                [45.48765278354474, 9.203982724801914],
                [45.485537525100405, 9.203975090511255],
                [45.485542855269706, 9.200967948277981],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1311);
 var myPolygon1312 = new ymaps.Polygon([
            [
                [45.48758264161229, 9.240069712409628],
                [45.48757628185246, 9.243076955183348],
                [45.4854610290194, 9.24306785777795],
                [45.485467388312756, 9.240060727550736],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1312);
 var myPolygon1313 = new ymaps.Polygon([
            [
                [45.489751573295365, 9.213012456825027],
                [45.48974592564291, 9.216019820697142],
                [45.48763066960845, 9.216011735316425],
                [45.487636316846675, 9.213004484004497],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1313);
 var myPolygon1314 = new ymaps.Polygon([
            [
                [45.48968509449647, 9.246093407921345],
                [45.489678575921104, 9.249100761218816],
                [45.48756332482665, 9.249091437684557],
                [45.48756984292388, 9.246084196945828],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1314);
 var myPolygon1315 = new ymaps.Polygon([
            [
                [45.49186118088953, 9.216027906976633],
                [45.491855453641854, 9.219035382522543],
                [45.4897401988153, 9.219027183670482],
                [45.48974592564291, 9.216019820697142],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1315);
 var myPolygon1316 = new ymaps.Polygon([
            [
                [45.491855453641854, 9.219035382522543],
                [45.491849647213286, 9.222042857157048],
                [45.48973439281264, 9.222034545732539],
                [45.4897401988153, 9.219027183670482],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1316);
 var myPolygon1317 = new ymaps.Polygon([
            [
                [45.49408631604877, 9.14686124434458],
                [45.49408240969032, 9.149868849986554],
                [45.491967147458475, 9.149863239708099],
                [45.491971053530385, 9.146855746653607],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1317);
 var myPolygon1318 = new ymaps.Polygon([
            [
                [45.49407021548771, 9.158891663120356],
                [45.49406599237789, 9.161899266192538],
                [45.49195073135023, 9.16189320556504],
                [45.49195495415029, 9.158885715079988],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1318);
 var myPolygon1319 = new ymaps.Polygon([
            [
                [45.49406599237789, 9.161899266192538],
                [45.49406169008035, 9.164906868590975],
                [45.491946429368255, 9.164900695376447],
                [45.49195073135023, 9.16189320556504],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1319);
 var myPolygon1320 = new ymaps.Polygon([
            [
                [45.49403899077833, 9.179944870039078],
                [45.49403421335542, 9.182952468132266],
                [45.491918954658715, 9.182945619397557],
                [45.49192373173121, 9.179938133890817],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1320);
 var myPolygon1321 = new ymaps.Polygon([
            [
                [45.49400913843122, 9.197990446927692],
                [45.49400388588483, 9.200998040265064],
                [45.491888629412614, 9.20099051601392],
                [45.491893881573716, 9.197983035262343],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1321);
 var myPolygon1322 = new ymaps.Polygon([
            [
                [45.496102907617384, 9.210028678090312],
                [45.49609733791462, 9.213036380604676],
                [45.493982083829344, 9.213028405124998],
                [45.4939876531236, 9.21002081520848],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1322);
 var myPolygon1323 = new ymaps.Polygon([
            [
                [45.49606830151271, 9.228074879626806],
                [45.49606225665516, 9.231082576633677],
                [45.49394700514305, 9.231073925569527],
                [45.49395304955722, 9.228066341159757],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1323);
 var myPolygon1324 = new ymaps.Polygon([
            [
                [45.4960499293634, 9.23709796774972],
                [45.49604364692935, 9.240105661833864],
                [45.493928396782245, 9.24009667297923],
                [45.4939346787555, 9.237089091491782],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1324);
 var myPolygon1325 = new ymaps.Polygon([
            [
                [45.49604364692935, 9.240105661833864],
                [45.49603728530326, 9.24311335491873],
                [45.49392203562278, 9.24310425346754],
                [45.493928396782245, 9.24009667297923],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1325);
 var myPolygon1326 = new ymaps.Polygon([
            [
                [45.50037998472038, 9.18297301890489],
                [45.50037512704125, 9.185980954070859],
                [45.49825987106344, 9.185973990427906],
                [45.49826472838626, 9.18296616788583],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1326);
 var myPolygon1327 = new ymaps.Polygon([
            [
                [45.50036517406878, 9.19199682206774],
                [45.500360078775536, 9.195004754873613],
                [45.49824482390151, 9.194997453359614],
                [45.49824991882101, 9.191989633177316],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1327);
 var myPolygon1328 = new ymaps.Polygon([
            [
                [45.500286632367064, 9.2341078029239],
                [45.50028042821501, 9.23711572322601],
                [45.49816517918325, 9.23710684499442],
                [45.49817138288024, 9.234099037314174],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1328);
 var myPolygon1329 = new ymaps.Polygon([
            [
                [45.502539464029205, 9.152899352830996],
                [45.502535398102175, 9.155907407687499],
                [45.50042013961002, 9.155901569638994],
                [45.50042420523882, 9.15289362741987],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1329);
 var myPolygon1330 = new ymaps.Polygon([
            [
                [45.502535398102175, 9.155907407687499],
                [45.502531252964104, 9.158915461894944],
                [45.50041599477599, 9.158909511209147],
                [45.50042013961002, 9.155901569638994],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1330);
 var myPolygon1331 = new ymaps.Polygon([
            [
                [45.502437445304956, 9.216068351859956],
                [45.50243171595636, 9.219076390456472],
                [45.5003164650692, 9.219068187046123],
                [45.50032219399753, 9.216060261084763],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1331);
 var myPolygon1332 = new ymaps.Polygon([
            [
                [45.50679622667426, 9.131852827254663],
                [45.50679271471068, 9.134861111617427],
                [45.50467745582723, 9.134856060909463],
                [45.504680967533204, 9.131847889209695],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1332);
 var myPolygon1333 = new ymaps.Polygon([
            [
                [45.506720890249426, 9.186001849645237],
                [45.50671595227902, 9.189010121983523],
                [45.50460069902605, 9.189003043356356],
                [45.50460563663425, 9.18599488367942],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1333);
 var myPolygon1334 = new ymaps.Polygon([
            [
                [45.50880532466326, 9.204059114401062],
                [45.50879991096382, 9.207067494502537],
                [45.50668466079381, 9.207059739047368],
                [45.506690074096156, 9.204051471619106],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1334);
 var myPolygon1335 = new ymaps.Polygon([
            [
                [45.51097936337445, 9.167964781878617],
                [45.51097490008323, 9.170973284037512],
                [45.508859646319074, 9.170966879956199],
                [45.50886410928293, 9.167958490484326],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1335);
 var myPolygon1336 = new ymaps.Polygon([
            [
                [45.51947323540534, 9.143918306049924],
                [45.519469404864594, 9.14692726433051],
                [45.51735415179306, 9.146921759300124],
                [45.51735798205284, 9.1439129137574],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1336);
 var myPolygon1337 = new ymaps.Polygon([
            [
                [45.52356045460454, 9.231195128032457],
                [45.52355432471224, 9.23420428897777],
                [45.521439083893725, 9.234195512641119],
                [45.52144521333641, 9.231186464455623],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1337);
 var myPolygon1338 = new ymaps.Polygon([
            [
                [45.527802958521875, 9.22519368219288],
                [45.52779698628911, 9.2282030706103],
                [45.52568174615307, 9.22819451789149],
                [45.52568771794776, 9.225185242259231],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1338);
 var myPolygon1339 = new ymaps.Polygon([
            [
                [45.529893831913135, 9.237240122167725],
                [45.52988754210149, 9.24024961950243],
                [45.52777230456393, 9.240240614642985],
                [45.52777859391421, 9.237231230105444],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1339);
 var myPolygon1340 = new ymaps.Polygon([
            [
                [45.540506097200435, 9.219224207920918],
                [45.5405002809676, 9.222234275178954],
                [45.538385044688546, 9.222225942472264],
                [45.53839086049478, 9.219215988074923],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1340);
 var myPolygon1341 = new ymaps.Polygon([
            [
                [45.542621333118255, 9.219232428681194],
                [45.54261551645876, 9.222242608812476],
                [45.5405002809676, 9.222234275178954],
                [45.540506097200435, 9.219224207920918],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1341);
 var myPolygon1342 = new ymaps.Polygon([
            [
                [45.544712823946846, 9.231281816811473],
                [45.54470668955646, 9.234292106044881],
                [45.5425914566181, 9.234283319942481],
                [45.54259759055853, 9.231273143594356],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1342);
 var myPolygon1343 = new ymaps.Polygon([
            [
                [45.54894328835957, 9.231299166140095],
                [45.548937153069154, 9.234309681181744],
                [45.54682192170681, 9.234300893124592],
                [45.546828056547206, 9.231290490993342],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1343);
 var myPolygon1344 = new ymaps.Polygon([
            [
                [45.5574449452572, 9.21025708238504],
                [45.55743936369382, 9.213268055688822],
                [45.555324132454615, 9.21326005444781],
                [45.55532971360857, 9.210249194105568],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1344);
 var myPolygon1345 = new ymaps.Polygon([
            [
                [45.436846902327204, 9.224831610917931],
                [45.43684094890174, 9.227836160876958],
                [45.43472567488259, 9.227827648935195],
                [45.43473162787137, 9.22482321122361],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1345);
 var myPolygon1346 = new ymaps.Polygon([
            [
                [45.438937886332944, 9.236858654696926],
                [45.43893161632871, 9.239863313058168],
                [45.43681634490232, 9.239854351132491],
                [45.436822614446676, 9.236849805030634],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1346);
 var myPolygon1347 = new ymaps.Polygon([
            [
                [45.44107744887492, 9.22484841310606],
                [45.441071494576036, 9.227853187597377],
                [45.43895622213288, 9.227844673764306],
                [45.43896217599504, 9.224840011545373],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1347);
 var myPolygon1348 = new ymaps.Polygon([
            [
                [45.464447968458735, 9.164820505993971],
                [45.46444359147061, 9.167826532627137],
                [45.4623283200561, 9.167820256598416],
                [45.46233269672317, 9.164814342377149],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1348);
 var myPolygon1349 = new ymaps.Polygon([
            [
                [45.46870311386947, 9.146795312365473],
                [45.46869921094796, 9.149801567783266],
                [45.46658393926879, 9.149795964982262],
                [45.46658784190403, 9.14678982200189],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1349);
 var myPolygon1350 = new ymaps.Polygon([
            [
                [45.477148102742824, 9.158844097304033],
                [45.47714388211043, 9.161850800029493],
                [45.47502861478387, 9.161844744788588],
                [45.47503283510667, 9.158838154550187],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1350);
 var myPolygon1351 = new ymaps.Polygon([
            [
                [45.48562908729947, 9.143832101268837],
                [45.48562526125173, 9.1468392572468],
                [45.48350999558434, 9.146833761999623],
                [45.48351382135145, 9.143826718559176],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1351);
 var myPolygon1352 = new ymaps.Polygon([
            [
                [45.50250933910945, 9.173955722757967],
                [45.50250471870601, 9.176963772808074],
                [45.50038946246416, 9.176957146300495],
                [45.500394082528715, 9.173949208887107],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1352);
 var myPolygon1353 = new ymaps.Polygon([
            [
                [45.5024854449855, 9.1889959655161],
                [45.50248042852897, 9.192004011757392],
                [45.50036517406878, 9.19199682206774],
                [45.50037019015737, 9.188988888462651],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1353);
 var myPolygon1354 = new ymaps.Polygon([
            [
                [45.50248042852897, 9.192004011757392],
                [45.502475332861955, 9.195012057199351],
                [45.500360078775536, 9.195004754873613],
                [45.50036517406878, 9.19199682206774],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1354);
 var myPolygon1355 = new ymaps.Polygon([
            [
                [45.52154198944639, 9.177023444540698],
                [45.52153728672865, 9.1800325081474],
                [45.51942203791896, 9.180025762256346],
                [45.519426740291756, 9.177016811399026],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1355);
 var myPolygon1356 = new ymaps.Polygon([
            [
                [45.52568771794776, 9.225185242259231],
                [45.52568174615307, 9.22819451789149],
                [45.52356650522906, 9.228185966123707],
                [45.52357247658572, 9.225176803264064],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1356);
 var myPolygon1357 = new ymaps.Polygon([
            [
                [45.5255754162662, 9.276342790140331],
                [45.52556809682875, 9.279352047899595],
                [45.52345286424086, 9.279341579018622],
                [45.52346018314144, 9.276332434029529],
                
            ],

        ], {
        hintContent: "Многоугольник"
    }, {
        fillColor: '#00FF0088',
        strokeWidth: 1
    });
myMap.geoObjects.add(myPolygon1357);
}
