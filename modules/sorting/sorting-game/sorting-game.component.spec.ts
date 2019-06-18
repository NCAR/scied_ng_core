import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SciedModalModule } from '../../scied-modal/scied-modal.module';
import { DataService } from '../../../services/data/data.service';
import { MockDataService } from '../../../services/data/data.service.mock';
import { WebappService } from '../../../services/webapp/webapp.service';
import { MockWebappService } from '../../../services/webapp/webapp.service.mock';
import { SortingGameService } from '../sorting-game.service';
import { MockSortingGameService } from '../sorting-game.service.mock';
import { SortingGameComponent } from './sorting-game.component';

describe('SortingGameComponent', () => {
  let component: SortingGameComponent;
  let fixture: ComponentFixture<SortingGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DragDropModule,
        SciedModalModule
      ],
      providers: [
        SortingGameService,
        {
          provide: DataService,
          useClass: MockDataService
        },
        {
          provide: WebappService,
          useClass: MockWebappService
        },
        {
          provide: SortingGameService,
          useClass: MockSortingGameService
        }
      ],
      declarations: [ SortingGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingGameComponent);
    component = fixture.componentInstance;
    component.baseUrl = "/hao/apps/sort-sun";
    component.level = "level2";
    component.data = {

      "draggables": {
        "visible_2006": {
          "title": "Visible 2006",
          "id": "visible_2006",
          "image": "assets/apps/sort-sun/images/draggables/solar_min_visible_soho_mdi_15may2006_150x150.jpg",
          "level1": {
            "correctDiv": "lower",
            "response": {
              "upper": {
                "title": "Sorry, try again.",
                "body": "This photo shows the Sun in visible light. You cannot look directly at the Sun without harming your eyes! If you could, this is about what you might see. The number of sunspots increases and then decreases in a repeating cycle that lasts about 11 years. This photo shows the Sun at the \"solar min\" phase of the sunspot cycle, when there are very few sunspots."
              },
              "lower": {
                "title": "Correct!",
                "body": "This photo shows the Sun in visible light. You cannot look directly at the Sun without harming your eyes! If you could, this is about what you might see. The number of sunspots increases and then decreases in a repeating cycle that lasts about 11 years. This photo shows the Sun at the \"solar min\" phase of the sunspot cycle, when there are very few sunspots."
              }
            }
          }
        },
        "visible_2001": {
          "title": "Visible 2001",
          "id": "visible_2001",
          "image": "assets/apps/sort-sun/images/draggables/solar_max_visible_soho_mdi_29march2001_150x150.jpg",
          "level1": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "That's right!",
                "body": "This photo shows the Sun in visible light. You cannot look directly at the Sun without harming your eyes! If you could, this is about what you might see. The number of sunspots increases and then decreases in a repeating cycle that lasts about 11 years. This photo shows the Sun at the \"solar max\" phase of the Sunspot Cycle, when there are lots of sunspots."
              },
              "lower": {
                "title": "Sorry, try again.",
                "body": "This photo shows the Sun in visible light. You cannot look directly at the Sun without harming your eyes! If you could, this is about what you might see. The number of sunspots increases and then decreases in a repeating cycle that lasts about 11 years. This photo shows the Sun at the \"solar max\" phase of the Sunspot Cycle, when there are lots of sunspots."
              }
            }
          }
        },
        "uv_2009": {
          "title": "UV 2009",
          "id": "uv_2009",
          "image": "assets/apps/sort-sun/images/draggables/uv_min_soho_eit_171_17july2009_150x150.jpg",
          "level1": {
            "correctDiv": "lower",
            "response": {
              "upper": {
                "title": "Sorry, try again.",
                "body": "This picture shows the Sun in ultraviolet (UV) \"light\". Powerful magnetic fields around sunspots produce disturbances in the Sun's atmosphere. These disturbances give off high-energy radiation in the form of UV light and X-rays. During solar min, when there are few sunspots, UV pictures of the Sun look mostly plain and feature-less."
              },
              "lower": {
                "title": "Correct",
                "body": "This picture shows the Sun in ultraviolet (UV) \"light\". Powerful magnetic fields around sunspots produce disturbances in the Sun's atmosphere. These disturbances give off high-energy radiation in the form of UV light and X-rays. During solar min, when there are few sunspots, UV pictures of the Sun look mostly plain and feature-less."
              }
            }
          }
        },
        "xray_2001": {
          "title": "X-ray 2001",
          "id": "xray_2001",
          "image": "assets/apps/sort-sun/images/draggables/xray_max_yohkoh_28march2001_150x150.jpg",
          "level1": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "Correct!",
                "body": "This picture shows how the Sun would look if you had X-ray vision! Powerful magnetic fields around sunspots produce disturbances in the Sun's atmosphere. These disturbances give off high-energy radiation in the form of X-rays and ultraviolet \"light\". Around solar max, when there are lots of sunspots, X-ray pictures of the Sun show many bright areas. The bright regions appear in the Sun's atmosphere above sunspots."
              },
              "lower": {
                "title": "Sorry, try again.",
                "body": "This picture shows how the Sun would look if you had X-ray vision! Powerful magnetic fields around sunspots produce disturbances in the Sun's atmosphere. These disturbances give off high-energy radiation in the form of X-rays and ultraviolet \"light\". Around solar max, when there are lots of sunspots, X-ray pictures of the Sun show many bright areas. The bright regions appear in the Sun's atmosphere above sunspots."
              }
            }
          }
        },
        "xray_1996": {
          "title": "X-ray 1996",
          "id": "xray_1996",
          "image": "assets/apps/sort-sun/images/draggables/xray_max_yohkoh_8march1996_150x150.jpg",
          "level1": {
            "correctDiv": "lower",
            "response": {
              "upper": {
                "title": "Sorry, try again.",
                "body": "This picture shows how the Sun would look if you had X-ray vision! Powerful magnetic fields around sunspots produce disturbances in the Sun's atmosphere. These disturbances give off high-energy radiation in the form of X-rays and ultraviolet \"light\". During solar min, when there are few sunspots, X-ray pictures of the Sun look relatively plain. They show just a scattering of small, bright dots where X-rays are being emitted."
              },
              "lower": {
                "title": "That's right!",
                "body": "This picture shows how the Sun would look if you had X-ray vision! Powerful magnetic fields around sunspots produce disturbances in the Sun's atmosphere. These disturbances give off high-energy radiation in the form of X-rays and ultraviolet \"light\". During solar min, when there are few sunspots, X-ray pictures of the Sun look relatively plain. They show just a scattering of small, bright dots where X-rays are being emitted."
              }
            }
          }
        },
        "uv_2002": {
          "title": "UV 2002",
          "id": "uv_2002",
          "image": "assets/apps/sort-sun/images/draggables/uv_max_soho_eit_171_3feb2002_150x150.jpg",
          "level1": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "That's right!",
                "body": "This picture shows the Sun in ultraviolet (UV) \"light\". Powerful magnetic fields around sunspots produce disturbances in the Sun's atmosphere. These disturbances give off high-energy radiation in the form of UV light and X-rays. During solar max, when there are lots of sunspots, UV pictures of the Sun show many bright areas. The bright regions appear in the Sun's atmosphere above sunspots."
              },
              "lower": {
                "title": "Sorry, try again.",
                "body": "This picture shows the Sun in ultraviolet (UV) \"light\". Powerful magnetic fields around sunspots produce disturbances in the Sun's atmosphere. These disturbances give off high-energy radiation in the form of UV light and X-rays. During solar max, when there are lots of sunspots, UV pictures of the Sun show many bright areas. The bright regions appear in the Sun's atmosphere above sunspots."
              }
            }
          }
        },
        "corona_1994": {
          "title": "Corona 1994",
          "id": "corona_1994",
          "image": "assets/apps/sort-sun/images/draggables/corona_eclipse_chile_1994_150x150.jpg",
          "level1": {
            "correctDiv": "lower",
            "response": {
              "upper": {
                "title": "Sorry, try again.",
                "body": "This photo shows the corona, the outer, uppermost part of the Sun's atmosphere. The picture was taken during a solar eclipse, when the Moon blocks out the Sun. At solar min, when there are few sunspots, the corona is brightest around the Sun's equator. Around solar min, the corona looks like a pair of wings on either side of the Sun."
              },
              "lower": {
                "title": "Correct!",
                "body": "This photo shows the corona, the outer, uppermost part of the Sun's atmosphere. The picture was taken during a solar eclipse, when the Moon blocks out the Sun. At solar min, when there are few sunspots, the corona is brightest around the Sun's equator. Around solar min, the corona looks like a pair of wings on either side of the Sun."
              }
            }
          }
        },
        "corona_1980": {
          "title": "Corona 1980",
          "id": "corona_1980",
          "image": "assets/apps/sort-sun/images/draggables/corona_eclipse_india_1980_150x150.jpg",
          "level1": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "That's right!",
                "body": "This photo shows the corona, the outer, uppermost part of the Sun's atmosphere. The picture was taken during a solar eclipse, when the Moon blocks out the Sun. At solar max, when there are lots of sunspots, the corona streams outward from the Sun in all directions."
              },
              "lower": {
                "title": "Sorry, try again.",
                "body": "This photo shows the corona, the outer, uppermost part of the Sun's atmosphere. The picture was taken during a solar eclipse, when the Moon blocks out the Sun. At solar max, when there are lots of sunspots, the corona streams outward from the Sun in all directions."
              }
            }
          }
        },
        "magnet_2002": {
          "title": "Magnet 2002",
          "id": "magnet_2002",
          "image": "assets/apps/sort-sun/images/draggables/magnetogram_max_soho_4feb2002_150x150.jpg",
          "level1": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "Correct!",
                "body": "This a special type of picture of the Sun called a \"magnetogram\". It is a map of magnetic fields on the Sun. Black and white areas on a magnetogram show areas of different \"polarity\" of magnetic fields - like the North and South poles of a bar magnet. Sunspots have very, very strong magnetic fields. When there are lots of sunspots at solar max, a magnetogram has alternating patches of black and white - showing us the strong magnetic fields around sunspots."
              },
              "lower": {
                "title": "Sorry, try again.",
                "body": "This a special type of picture of the Sun called a \"magnetogram\". It is a map of magnetic fields on the Sun. Black and white areas on a magnetogram show areas of different \"polarity\" of magnetic fields - like the North and South poles of a bar magnet. Sunspots have very, very strong magnetic fields. When there are lots of sunspots at solar max, a magnetogram has alternating patches of black and white - showing us the strong magnetic fields around sunspots."
              }
            }
          }
        },
        "halpha_2009": {
          "title": "H-alpha 2009",
          "id": "halpha_2009",
          "image": "assets/apps/sort-sun/images/draggables/min_kanzelhoehe_halpha_18aug2009.jpg",
          "level1": {
            "correctDiv": "lower",
            "response": {
              "upper": {
                "title": "Sorry, try again.",
                "body": "This picture shows the Sun as viewed in a specific wavelength of red light given off by hydrogen atoms. Scientists call this a Hydrogen-alpha (or H-alpha) image. It shows the lower part of the Sun's atmosphere, called the chromosphere. During solar min, when there are few sunspots, H-alpha pictures of the Sun look mostly plain and feature-less."
              },
              "lower": {
                "title": "Correct!",
                "body": "This picture shows the Sun as viewed in a specific wavelength of red light given off by hydrogen atoms. Scientists call this a Hydrogen-alpha (or H-alpha) image. It shows the lower part of the Sun's atmosphere, called the chromosphere. During solar min, when there are few sunspots, H-alpha pictures of the Sun look mostly plain and feature-less."
              }
            }
          }
        },
        "halpha_2000": {
          "title": "H-alpha 2000",
          "id": "halpha_2000",
          "image": "assets/apps/sort-sun/images/draggables/max_bbso_halpha_18july2000.jpg",
          "level1": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "Correct!",
                "body": "This picture shows the Sun as viewed in a specific wavelength of red light given off by hydrogen atoms. Scientists call this a Hydrogen-alpha (or H-alpha) image. It shows the lower part of the Sun's atmosphere, called the chromosphere. During solar max, when there are lots of sunspots, powerful magnetic fields around sunspots \"stir up\" the solar atmosphere above sunspots. Around solar max, H-alpha pictures have a mixture of brighter and dimmer regions. They also show squiggly lines called \"filaments\"."
              },
              "lower": {
                "title": "Sorry, try again.",
                "body": "This picture shows the Sun as viewed in a specific wavelength of red light given off by hydrogen atoms. Scientists call this a Hydrogen-alpha (or H-alpha) image. It shows the lower part of the Sun's atmosphere, called the chromosphere. During solar max, when there are lots of sunspots, powerful magnetic fields around sunspots \"stir up\" the solar atmosphere above sunspots. Around solar max, H-alpha pictures have a mixture of brighter and dimmer regions. They also show squiggly lines called \"filaments\"."
              }
            }
          }
        },
        "chromosphere": {
          "title": "Chromosphere",
          "id": "chromosphere",
          "image": "assets/apps/sort-sun/images/draggables/chromosphere_soho_eit304_4may2002_150x150.jpg",
          "level2": {
            "correctDiv": "mid",
            "response": {
              "upper": {
                "title": "Sorry, try again.",
                "body": "The chromosphere is the lower part of the Sun's atmosphere. Although most of the chromosphere is hotter than the \"surface\" of the Sun (called the photosphere), this region is not quite as hot as the corona (the Sun's upper atmosphere) above it."
              },
              "mid": {
                "title": "Correct!",
                "body": "Temperatures in the chromosphere range between about 3,500° to 35,000° Celsius (roughly 6,400° to 63,000° Fahrenheit). In most of the chromosphere, the temperature is a few tens of thousands of degrees. The chromosphere is the lower part of the Sun's atmosphere. Surprisingly, most of the chromosphere is hotter than the \"surface\" of the Sun (called the photosphere)."
              },
              "lower": {
                "title": "Not exactly, though you are partly right.",
                "body": "Although temperatures in some parts of the chromosphere are as low as 3,500° Celsius (6,400° Fahrenheit), most of the chromosphere is quite a bit hotter. The chromosphere is the lower part of the Sun's atmosphere."
              }
            }
          }
        },
        "sunspots": {
          "title": "Sunspots",
          "id": "sunspots",
          "image": "assets/apps/sort-sun/images/draggables/sunspot_sst_8aug2003_150x150.jpg",
          "level2": {
            "correctDiv": "lower",
            "response": {
              "upper": {
                "title": "Sorry, that's not quite right. Try again!",
                "body": "Sunspots look darker than the rest of the \"surface\" of the Sun (called the photosphere) because they are cooler than other places on the photosphere. Sunspots are the visible \"face\" of regions where the Sun's magnetic field is very, very strong. These powerful magnetic fields prevent hot plasma in surrounding areas from flowing into sunspots."
              },
              "mid": {
                "title": "Close, but not quite. Try again!",
                "body": "Sunspots look darker than the rest of the \"surface\" of the Sun (called the photosphere) because they are cooler than other places on the photosphere. Sunspots are the visible \"face\" of regions where the Sun's magnetic field is very, very strong. These powerful magnetic fields prevent hot plasma in surrounding areas from flowing into sunspots."
              },
              "lower": {
                "title": "Correct!",
                "body": "Sunspots have temperatures between 3,000-4,500° Celsius (5,400-8,100° Fahrenheit). Sunspots look darker than the rest of the \"surface\" of the Sun (called the photosphere) because they are cooler than other places on the photosphere. Sunspots are the visible \"face\" of regions where the Sun's magnetic field is very, very strong. These powerful magnetic fields prevent hot plasma in surrounding areas from flowing into sunspots."
              }
            }
          }
        },
        "coronal_loop": {
          "title": "Coronal Loop",
          "id": "coronal_loop",
          "image": "assets/apps/sort-sun/images/draggables/coronal_loops_trace_150x150.jpg",
          "level2": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "Correct!",
                "body": "Coronal loops are extremely hot, with temperatures typically in the range of 2,000,000° to 4,000,000° Celsius (3.6 to 7.2 million degrees Fahrenheit). The loops are made of hot, glowing plasma - essentially an electrically charged gas. The plasma flows along magnetic field lines, akin to the way iron filings align when sprinkled over a horseshoe magnet."
              },
              "mid": {
                "title": "Not quite, try again.",
                "body": "Coronal loops are hot, bright loops of plasma in the Sun's atmosphere. The lower regions of these loops are \"anchored\" in the photosphere (the Sun's visible \"surface\"), which is relatively cool. The loops themselves, however, are much hotter than the photosphere."
              },
              "lower": {
                "title": "Sorry, try again.",
                "body": "Coronal loops are hot, bright loops of plasma in the Sun's atmosphere. The lower regions of these loops are \"anchored\" in the photosphere (the Sun's visible \"surface\"), which is relatively cool. The loops themselves, however, are much hotter than the photosphere."
              }
            }
          }
        },
        "photosphere": {
          "title": "Photosphere",
          "id": "photosphere",
          "image": "assets/apps/sort-sun/images/draggables/photosphere_sst_22aug2003_150x150.jpg",
          "level2": {
            "correctDiv": "lower",
            "response": {
              "upper": {
                "title": "Sorry - try again!",
                "body": "The photosphere is the visible \"surface\" of the Sun. It isn't quite as hot as most other parts of the Sun."
              },
              "mid": {
                "title": "No, not quite. Try again.",
                "body": "The photosphere is the visible \"surface\" of the Sun. It isn't quite as hot as most other parts of the Sun."
              },
              "lower": {
                "title": "That's right!",
                "body": "The photosphere is the visible \"surface\" of the Sun. Although it is cooler than most other parts of the Sun, it is still very hot by Earthly standards. The temperature of the photosphere is around 5,500° Celsius (about 10,000° Fahrenheit). The Sun's interior, beneath the photosphere is much hotter. Surprisingly, the Sun's atmosphere, above the photosphere, is also mostly much hotter than this \"surface\" layer."
              }
            }
          }
        },
        "corona": {
          "title": "Corona",
          "id": "corona",
          "image": "assets/apps/sort-sun/images/draggables/corona_eclipse_india_1980_150x150.jpg",
          "level2": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "Correct!",
                "body": "The corona is the upper, outer atmosphere of the Sun. Surprisingly, the corona is very, very hot... much hotter than the \"surface\" of the Sun (the photosphere). Temperatures in the corona range between 1,000,000° to 3,000,000° Celsius (about 1.8 to 5.4 million degrees Fahrenheit). Although scientists don't fully understand how the corona is heated, they know that energy stored in powerful magnetic fields is converted into heat in the corona."
              },
              "mid": {
                "title": "Sorry, not quite. Try again.",
                "body": "The corona is actually one of the hottest regions of the Sun. This is somewhat surprising, since it is far from the Sun's core where nuclear fusion generates most of the Sun's energy."
              },
              "lower": {
                "title": "Sorry, try again!",
                "body": "The corona is much hotter than a few thousand degrees. This is somewhat surprising, since it is far from the Sun's core where nuclear fusion generates most of the Sun's energy."
              }
            }
          }
        },
        "sun_core": {
          "title": "Sun's Core",
          "id": "sun_core",
          "image": "assets/apps/sort-sun/images/draggables/solar_core_150x150.jpg",
          "level2": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "Correct!",
                "body": "The core, or center, of the Sun is by far the hottest place in our nearby star. Temperatures in the core are nearly 16,000,000° Celsius (more than 28 million degrees Fahrenheit). Nuclear fusion reactions in the core generate the Sun's energy, raising the temperature there to amazing levels."
              },
              "mid": {
                "title": "Sorry, not quite. Try again.",
                "body": "The temperature at the Sun's core is very, very high. Nuclear fusion reactions at the center of the Sun generate huge amounts of energy and raise the temperature to an amazingly hot level."
              },
              "lower": {
                "title": "Sorry, try again!",
                "body": "The temperature at the Sun's core is very, very high. Nuclear fusion reactions at the center of the Sun generate huge amounts of energy and raise the temperature to an amazingly hot level."
              }
            }
          }
        },
        "prominence": {
          "title": "Prominence",
          "id": "prominence",
          "image": "assets/apps/sort-sun/images/draggables/prominence_soho_eit_304_14sept1999_150x150.jpg",
          "level2": {
            "correctDiv": "mid",
            "response": {
              "upper": {
                "title": "Sorry, not quite. Try again.",
                "body": "Prominences are blobs of hot, glowing plasma - essentially an electrically charged gas. Although prominences are quite hot, they aren't among the hottest features on the Sun."
              },
              "mid": {
                "title": "Correct!",
                "body": "Prominences have temperatures around 10,000° Celsius (about 18,000° Fahrenheit). Prominences are blobs of hot, glowing plasma - essentially an electrically charged gas. Strong magnetic fields suspend the plasma in the Sun's atmosphere, sometimes for days or weeks at a time."
              },
              "lower": {
                "title": "Sorry, not quite. Try again.",
                "body": "Prominences are blobs of hot, glowing plasma - essentially an electrically charged gas. Prominences are hotter than the Sun's \"surface\" (the photosphere) from which they erupt."
              }
            }
          }
        },
        "blast_furnace": {
          "title": "Blast Furnace",
          "id": "blast_furnace",
          "image": "assets/apps/sort-sun/images/draggables/blast_furnace_150x150.jpg",
          "level2": {
            "correctDiv": "lower",
            "response": {
              "upper": {
                "title": "Not even close. Try again!",
                "body": "No, there aren't any blast furnaces on the Sun. We included a blast furnace in this game so you could compare the extremely hot temperatures on the Sun with something very hot on Earth. Blast furnaces don't come anywhere close to reaching millions of degrees."
              },
              "mid": {
                "title": "Sorry, not quite. Try again.",
                "body": "No, there aren't any blast furnaces on the Sun. We included a blast furnace in this game so you could compare the extremely hot temperatures on the Sun with something very hot on Earth. Although a blast furnace is very hot by Earthly standards, it isn't quite that hot."
              },
              "lower": {
                "title": "Correct!",
                "body": "No, there aren't any blast furnaces on the Sun. We included a blast furnace in this game so you could compare the extremely hot temperatures on the Sun with something very hot on Earth. The temperature inside a blast furnace is between 2,000° and 2,300° Celsius (3,600° to 4,200° Fahrenheit). Although that is crazy hot by Earthly standards, everything on the Sun is even hotter!"
              }
            }
          }
        },
        "solar_flare": {
          "title": "Solar Flare",
          "id": "solar_flare",
          "image": "assets/apps/sort-sun/images/draggables/solar_flare_sdo_aia_131_23oct2012_0316_150x150.jpg",
          "level2": {
            "correctDiv": "upper",
            "response": {
              "upper": {
                "title": "That's right!",
                "body": "Solar flares have temperatures between about 6,000,000 and 10,000,000° Celsius (around 11 million to 18 million degrees Fahrenheit). These amazing bursts of energy are incredibly hot. A flare appears as a sudden brightening in normal, visible light - as well as in ultraviolet and X-ray wavelengths."
              },
              "mid": {
                "title": "Almost, but not quite. Try again.",
                "body": "Although solar flares occur near the relatively cool \"surface\" of the Sun (the photosphere), these tremendous bursts of energy are very, very hot."
              },
              "lower": {
                "title": "Not quite! Try again.",
                "body": "Although solar flares occur near the relatively cool \"surface\" of the Sun (the photosphere), these tremendous bursts of energy are actually quite hot."
              }
            }
          }
        },
        "filament": {
          "title": "Filament",
          "id": "filament",
          "image": "assets/apps/sort-sun/images/draggables/filament_bbso_halpha_18july2000_150x150.jpg",
          "level2": {
            "correctDiv": "mid",
            "response": {
              "upper": {
                "title": "Sorry, not quite. Try again.",
                "body": "Filaments are blobs of hot, glowing plasma - essentially an electrically charged gas. Although filaments are quite hot, they aren't among the hottest features on the Sun. Filaments are actually the same thing as prominences, just viewed from a different angle."
              },
              "mid": {
                "title": "Correct!",
                "body": "Filaments have temperatures around 10,000° Celsius (about 18,000° Fahrenheit). Filaments are blobs of hot, glowing plasma - essentially an electrically charged gas. Strong magnetic fields suspend the plasma in the Sun's atmosphere, sometimes for days or weeks at a time. Filaments are actually the same thing as prominences, just viewed from a different angle."
              },
              "lower": {
                "title": "Almost, but not quite. Try again!",
                "body": "Filaments are blobs of hot, glowing plasma - essentially an electrically charged gas. Filaments are hotter than the Sun's \"surface\" (the photosphere) from which they erupt. Filaments are actually the same thing as prominences, just viewed from a different angle."
              }
            }
          }
        },
        "spicules": {
          "title": "Spicules",
          "id": "spicules",
          "image": "assets/apps/sort-sun/images/draggables/spicules_hinode_11nov2006_150x150.jpg",
          "level2": {
            "correctDiv": "mid",
            "response": {
              "upper": {
                "title": "Close, but not quite. Try again!",
                "body": "Spicules are jets of hot plasma that \"leap\" upward through the Sun's atmosphere. Although the plasma in spicules is very hot, it isn't quite that hot."
              },
              "mid": {
                "title": "That's right!",
                "body": "Spicules are jets of hot plasma that \"leap\" upward through the Sun's atmosphere. Spicules have temperatures around 10,000° to 20,000° Celsius (about 18,000° to 36,000° Fahrenheit). The plasma which makes up spicules is essentially an electrically charged gas. Spicules don't last long, typically about 15 minutes. There are usually hundreds of thousands of spicules in the Sun's atmosphere at any given time."
              },
              "lower": {
                "title": "Sorry, try again!",
                "body": "Spicules are jets of hot plasma that \"leap\" upward through the Sun's atmosphere. Spicules are hotter than the Sun's \"surface\" (the photosphere) from which they spring forth."
              }
            }
          }
        }
      },
      "dropzones": {
        "level1": [{
            "id": "upper",
            "title": "Solar Maxiumum",
            "description": "(many sunspots)",
            "classname": "upper"
          },
          {
            "id": "lower",
            "title": "Solar Minimum",
            "description": "(few or no sunspots)",
            "classname": "lower"
          }
        ],
        "level2": [{
            "id": "upper",
            "title": "Hottest",
            "description": "over 1,000,000° C (1,800,000°+ F)",
            "classname": "upper"
          },
          {
            "id": "mid",
            "title": "Hotter",
            "description": "10,000-50,000° C (18,000-90,000° F)",
            "classname": "mid"
          },
          {
            "id": "lower",
            "title": "Hot",
            "description": "2,000-6,000° Celsius (3,600-10,800° F)",
            "classname": "lower"
          }
        ]
      },
      "levels": {
        "level1": {
          "title": "Sort Pictures: Solar Min vs Solar Max",
          "buttonTitle": "LEVEL 1",
          "directions": {
            "heading": "Drag each picture of the Sun to the appropriate box on the right. Look here for hints!",
            "description": "The small images to your left are all pictures of the Sun. Some show the Sun at times called \"solar max\", when there are lots of sunspots. Others show the Sun near \"solar min\", when there are few or no sunspots. The pictures were taken with different wavelengths of light, such as X-rays or ultraviolet light."
          }
        },
        "level2": {
          "title": "Sort Features by Temperature",
          "buttonTitle": "LEVEL 2",
          "directions": {
            "heading": "Drag each solar feature to the appropriate box on the right. Look here for hints!",
            "description": "The small images to your left are pictures of features on the Sun (such as sunspots and prominences) or regions of the Sun (such as the core and photosphere and corona). The pictures show various size features, from a few thousand miles across (such as sunspots) to more than a million miles (for example, the corona)."
          }
        }
      },
      "audio": {
        "complete": {
          "id": "complete",
          "src": "assets/apps/sorting/audio/applause-1.mp3",
          "type": "audio/mp4"
        },
        "correct": {
          "id": "correct",
           "src": "assets/apps/sorting/audio/bell.mp3",
          "type": "audio/mp4"
        },
        "incorrect": {
          "id": "incorrect",
           "src": "assets/apps/sorting/audio/clang.mp3",
          "type": "audio/mp4"
        }
      },
      "game": {
        "credits": "<p align=\"center\"><img src=\"assets/images/scied_logo_500x55.png\" width=\"500px\"/></p><p>This interactive was created by the <strong>UCAR Center for Science Education</strong>.</p><p>Software design by <strong>Ryan C. McVeigh</strong>, <strong>Randy M. Russell</strong>, and <strong>Sharon Clark</strong>. Programming by Sharon Clark. Text, image selection and educational design by Randy Russell. Artwork by <strong>Lisa Gardiner</strong>. Scientific information by <strong>Mark Miesch</strong>, <strong>Yuhong Fan</strong> and Randy Russell.</p><p>images provided by NCAR High Altitude Observatory, SOHO (NASA/ESA), NASA Solar Dynamics Observatory, Hinode - NASA and Japan Aerospace Exploration Agency, TRACE (NASA), Big Bear Solar Observatory, and Swedish Solar Telescope - Royal Swedish Academy of Sciences.</p><p>&copy; 2012-2016 University Corporation for Atmospheric Research</p></p>"
      }
    }
;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
