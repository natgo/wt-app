import { z } from "zod";

// Final

export type VehicleProps = GroundProps | AircraftProps | HelicopterProps | ShipProps | BoatProps;

export const premTypeSchema = z.enum(["false", "event", "marketplace", "store", "gold", "squad"]);

export const normalAircraftTypeSchema = z.enum(["type_fighter", "type_bomber", "type_assault"]);
export const normalGroundTypeSchema = z.enum([
  "type_light_tank",
  "type_medium_tank",
  "type_heavy_tank",
  "type_tank_destroyer",
  "type_spaa",
]);
export const normalHelcopterTypeSchema = z.enum([
  "type_attack_helicopter",
  "type_utility_helicopter",
]);

export const vehiclRankSchema = z.number().max(8).min(1);
export type VehicleRank = z.infer<typeof vehiclRankSchema>;

export const finalPropsSchema = z.object({
  intname: z.string(),
  wikiname: z.string().optional(),
  displayname: z.string().optional(),
  country: z.string(),
  operator_country: z.string().optional(),
  rank: vehiclRankSchema,
  crew: z.number(),
  sl_price: z.number(),
  reqRP: z.number(),
  br: z.array(z.string()).length(3),
  realbr: z.array(z.number()).length(3),
  base_repair: z.array(z.number()).length(3),
  rp_multiplyer: z.number(),
  sl_multiplyer: z.array(z.number()).length(3),
  prem_type: premTypeSchema,
  event: z.string().optional(),
  cost_gold: z.number().optional(),
  hidden: z.boolean().optional(),
  marketplace: z.string().optional(),
  store: z.string().optional(),
});

export type FinalProps = z.infer<typeof finalPropsSchema>;

export const ballisticComputerSchema = z.object({
  ccip_guns: z.literal(true).optional(),
  ccip_rockets: z.literal(true).optional(),
  ccip_bombs: z.literal(true).optional(),
  ccrp_bombs: z.literal(true).optional(),
});
export type BallisticComputer = z.infer<typeof ballisticComputerSchema>;

export const finalWeaponArraySchema = z.object({
  type: z
    .union([
      z.literal("aam"),
      z.literal("agm"),
      z.literal("bomb"),
      z.literal("guided_bomb"),
      z.literal("torpedo"),
      z.literal("rocket"),
      z.literal("gun"),
      z.literal("countermeasures"),
      z.literal("fuel_tank"),
      z.literal("optics"),
      z.literal("targeting_pod"),
      z.literal("booster"),
    ])
    .nullable(),
  displayname: z.string().optional(),
  bullets: z.number().optional(),
});
export type FinalWeaponArray = z.infer<typeof finalWeaponArraySchema>;

export const weaponSchema = z.object({
  type: z
    .union([
      z.literal("aam"),
      z.literal("agm"),
      z.literal("bomb"),
      z.literal("guided_bomb"),
      z.literal("torpedo"),
      z.literal("rocket"),
      z.literal("gun"),
      z.literal("countermeasures"),
      z.literal("fuel_tank"),
      z.literal("optics"),
      z.literal("targeting_pod"),
      z.literal("booster"),
    ])
    .nullable(),
  bullets: z.number().optional(),
  intname: z.string(),
  displayname: z.string().optional(),
  reqModification: z.union([z.string(), z.array(z.string())]).optional(),
});

export const finalWeaponSchema = weaponSchema.extend({
  iconType: z.string(),
});
export type FinalWeapon = z.infer<typeof finalWeaponSchema>;

export const weaponsSchema = z.object({
  intname: z.string(),
  reqModification: z.union([z.string(), z.array(z.string())]).optional(),
  weapons: z.array(finalWeaponArraySchema),
});

export const finalWeaponsSchema = weaponsSchema.extend({
  iconType: z.string(),
});
export type FinalWeapons = z.infer<typeof finalWeaponsSchema>;

export const finalWeaponSlot = z.union([
  z.object({
    hidden: z.boolean(),
    slot: z.array(
      z.union([
        weaponsSchema,
        weaponSchema,
        z.object({
          name: z.string(),
        }),
      ]),
    ),
  }),
  z.object({
    slot: z.array(
      z.union([
        finalWeaponsSchema,
        finalWeaponSchema,
        z.object({
          name: z.string(),
        }),
      ]),
    ),
  }),
]);
export type FinalWeaponSlot = z.infer<typeof finalWeaponSlot>;

export const secondaryWeaponPresetSchema = z.object({
  maxload: z.number(),
  maxloadLeft: z.number(),
  maxloadRight: z.number(),
  maxDisbalance: z.number(),
  weaponSlots: z.array(finalWeaponSlot),
});
export type SecondaryWeaponPreset = z.infer<typeof secondaryWeaponPresetSchema>;

export const aircraftTypeSchema = z.object({
  normal_type: z.enum(["type_fighter", "type_bomber", "type_assault", "type_strike_ucav"]),
  extended_type: z
    .array(
      z.enum([
        "type_jet_fighter",
        "type_jet_bomber",
        "type_longrange_bomber",
        "type_frontline_bomber",
        "type_hydroplane",
        "type_naval_aircraft",
        "type_torpedo_bomber",
        "type_dive_bomber",
        "type_interceptor",
        "type_aa_fighter",
        "type_light_bomber",
      ]),
    )
    .optional(),
});

export const aircraftPropsSchema = finalPropsSchema
  .extend({
    crew: z.number().optional(),
    type: z.literal("aircraft"),
    ballistic_computer: ballisticComputerSchema.optional(),
    secondary_weapon_preset: secondaryWeaponPresetSchema.optional(),
  })
  .merge(aircraftTypeSchema);
export type AircraftProps = z.infer<typeof aircraftPropsSchema>;

export const opticIr = z.object({
  resolution: z.tuple([
    z.union([z.literal(800), z.literal(1200), z.literal(1600)]),
    z.union([z.literal(600), z.literal(800), z.literal(1200)]),
  ]),
  lightMult: z.union([z.literal(5), z.literal(7), z.literal(8), z.literal(9)]),
  ghosting: z.union([z.literal(0.7), z.literal(0.75), z.literal(0.6)]),
  noiseFactor: z.literal(0.2),
});

export const sightSchema = z.object({
  ir: opticIr.optional(),
  thermal: z
    .object({
      resolution: z.tuple([
        z.union([z.literal(500), z.literal(800), z.literal(1200)]),
        z.union([z.literal(300), z.literal(600), z.literal(800)]),
      ]),
      noiseFactor: z.union([z.literal(0.05), z.literal(0.04)]),
    })
    .optional(),
});
export type Sight = z.infer<typeof sightSchema>;

export const gunnerSightSchema = sightSchema.extend({
  zoomInFov: z.number(),
  zoomOutFov: z.number(),
});

export const sightsSchema = z.object({
  driver: sightSchema.optional(),
  gunner: gunnerSightSchema,
  commander: gunnerSightSchema.optional(),
});
export type Sights = z.infer<typeof sightsSchema>;

export const shellSchema = z.object({
  modname: z.string(),
  intname: z.string().optional(),
  type: z.string(),
  name: z.string().optional(),
  maxamount: z.number().optional(),
  modmaxamount: z.number().optional(),
});
export type Shell = z.infer<typeof shellSchema>;

export const beltSchema = z.object({
  intname: z.string(),
  type: z.string(),
  name: z.string().optional(),
});
export type Belt = z.infer<typeof beltSchema>;

export const hullAimingSchema = z.object({
  horizontal: z.boolean().optional(),
  vertical: z.boolean().optional(),
  maxRoll: z.number(),
});

export const stabilizerSchema = z.object({
  shoulderStop: z.boolean().optional(),
  horizontal: z.boolean().optional(),
  vertical: z.boolean().optional(),
  horizontalSpeed: z.number().optional(),
  verticalSpeed: z.number().optional(),
});
export type Stabilizer = z.infer<typeof stabilizerSchema>;

export const nightVisionSchema = z.object({
  commanderViewThermal: z
    .object({
      resolution: z.tuple([
        z.union([z.literal(500), z.literal(800), z.literal(1200)]),
        z.union([z.literal(300), z.literal(600), z.literal(800)]),
      ]),
      noiseFactor: z.union([z.literal(0.05), z.literal(0.04)]),
    })
    .optional(),
  gunnerThermal: z
    .object({
      resolution: z.tuple([
        z.union([z.literal(500), z.literal(800), z.literal(1200)]),
        z.union([z.literal(300), z.literal(600), z.literal(800)]),
      ]),
      noiseFactor: z.union([z.literal(0.05), z.literal(0.04)]),
    })
    .optional(),
  driverThermal: z
    .object({
      resolution: z.tuple([
        z.union([z.literal(500), z.literal(800), z.literal(1200)]),
        z.union([z.literal(300), z.literal(600), z.literal(800)]),
      ]),
      noiseFactor: z.union([z.literal(0.05), z.literal(0.04)]),
    })
    .optional(),
  commanderViewIr: z
    .object({
      resolution: z.tuple([
        z.union([z.literal(800), z.literal(1600)]),
        z.union([z.literal(600), z.literal(1200)]),
      ]),
      lightMult: z.union([z.literal(5), z.literal(8), z.literal(9)]),
      ghosting: z.union([z.literal(0.7), z.literal(0.75), z.literal(0.6)]),
      noiseFactor: z.literal(0.2),
    })
    .optional(),
  driverIr: z
    .object({
      resolution: z.tuple([
        z.union([z.literal(800), z.literal(1600)]),
        z.union([z.literal(600), z.literal(1200)]),
      ]),
      lightMult: z.union([z.literal(5), z.literal(8), z.literal(9)]),
      ghosting: z.union([z.literal(0.7), z.literal(0.75), z.literal(0.6)]),
      noiseFactor: z.literal(0.2),
    })
    .optional(),
  gunnerIr: z
    .object({
      resolution: z.tuple([
        z.union([z.literal(800), z.literal(1600)]),
        z.union([z.literal(600), z.literal(1200)]),
      ]),
      lightMult: z.union([z.literal(5), z.literal(8), z.literal(9)]),
      ghosting: z.union([z.literal(0.7), z.literal(0.75), z.literal(0.6)]),
      noiseFactor: z.literal(0.2),
    })
    .optional(),
});
export type NightVision = z.infer<typeof nightVisionSchema>;

export const shellBeltSchema = z.object({
  modname: z.string(),
  name: z.string(),
  maxamount: z.number().optional(),
  modmaxamount: z.number().optional(),
  shells: z.array(beltSchema),
});
export type ShellBelt = z.infer<typeof shellBeltSchema>;

export const genericGunSchema = z.object({
  intname: z.string(),
  displayname: z.string(),
  ammo: z.number(),
  shells: z.array(shellSchema).optional(),
  belts: z.array(shellBeltSchema).optional(),
  shotFreq: z.number(),
  caliber: z.number(),
  horizonalSpeed: z.union([z.number(), z.literal("primary")]),
  verticalSpeed: z.union([z.number(), z.literal("primary")]),
  horizonalLimit: z.union([z.array(z.number()), z.literal("primary")]),
  verticalLimit: z.union([z.array(z.number()), z.literal("primary")]),
});
export type GenericGun = z.infer<typeof genericGunSchema>;

export const tankCannonSchema = genericGunSchema.extend({
  secondary: z.boolean().optional(),
  autoloader: z.boolean().optional(),
  stabilizer: stabilizerSchema.optional(),
  hullAiming: hullAimingSchema.optional(),
});
export type TankCannon = z.infer<typeof tankCannonSchema>;

export const tankWeaponsSchema = z.object({
  cannon: z.array(tankCannonSchema).optional(),
  machineGun: z.array(genericGunSchema).optional(),
});
export type TankWeapons = z.infer<typeof tankWeaponsSchema>;

export const groundTypeSchema = z.object({
  normal_type: z.enum([
    "type_light_tank",
    "type_medium_tank",
    "type_heavy_tank",
    "type_tank_destroyer",
    "type_spaa",
  ]),
  extended_type: z.array(z.enum(["type_missile_tank"])).optional(),
});

export const groundPropsSchema = finalPropsSchema
  .extend({
    type: z.literal("ground"),
    mass: z.number(),
    horsepower: z.number(),
    gears_forward: z.number(),
    gears_backward: z.number(),
    hydro_suspension: z.boolean().optional(),
    can_float: z.boolean().optional(),
    has_synchro: z.boolean().optional(),
    has_neutral: z.boolean().optional(),
    has_dozer: z.boolean().optional(),
    has_ess: z.boolean().optional(),
    has_smoke: z.boolean().optional(),
    has_lws: z.boolean().optional(),
    has_era: z.boolean().optional(),
    has_composite: z.boolean().optional(),
    has_laser_range: z.boolean().optional(),
    has_range: z.boolean().optional(),
    optics: sightsSchema,
    weapons: tankWeaponsSchema.optional(),
  })
  .merge(groundTypeSchema);
export type GroundProps = z.infer<typeof groundPropsSchema>;

export const heliSightSchema = z.object({
  ir: z
    .object({
      resolution: z.array(z.number()),
      lightMult: z.number(),
      ghosting: z.number(),
      noiseFactor: z.number(),
    })
    .optional(),
});

export const heliGunnerSightSchema = heliSightSchema.extend({
  zoomInFov: z.number(),
  zoomOutFov: z.number(),
  thermal: z
    .object({
      resolution: z.tuple([z.literal(1024), z.literal(768)]),
      noiseFactor: z.union([z.literal(0.5), z.literal(0.05)]),
    })
    .optional(),
});

export const helicopterOpticsSchema = z.object({
  pilot: heliSightSchema.optional(),
  gunner: heliSightSchema.optional(),
  sight: heliGunnerSightSchema.optional(),
});
export type HelicopterOptics = z.infer<typeof helicopterOpticsSchema>;

export const helicopterTypeSchema = z.object({
  normal_type: z.enum(["type_attack_helicopter", "type_utility_helicopter"]),
  extended_type: z.array(z.enum(["type_utility_helicopter"])).optional(),
});

export const helicopterPropsSchema = finalPropsSchema
  .extend({
    type: z.literal("helicopter"),
    ballistic_computer: ballisticComputerSchema.optional(),
    secondary_weapon_preset: secondaryWeaponPresetSchema.optional(),
    has_maw: z.boolean().optional(),
    has_lws: z.boolean().optional(),
    has_rwr: z.boolean().optional(),
    has_ircm: z.boolean().optional(),
    has_hirss: z.boolean().optional(),
    optics: helicopterOpticsSchema.optional(),
  })
  .merge(helicopterTypeSchema);
export type HelicopterProps = z.infer<typeof helicopterPropsSchema>;

export const shipTypeSchema = z.object({
  normal_type: z.enum([
    "type_battlecruiser",
    "type_battleship",
    "type_frigate",
    "type_light_cruiser",
    "type_heavy_cruiser",
    "type_destroyer",
  ]),
});

export const shipPropsSchema = finalPropsSchema
  .extend({
    type: z.literal("ship"),
  })
  .merge(shipTypeSchema);
export type ShipProps = z.infer<typeof shipPropsSchema>;

export const boatTypeSchema = z.object({
  normal_type: z.enum(["type_barge", "type_boat", "type_frigate"]),
  extended_type: z
    .array(
      z.enum([
        "type_heavy_boat",
        "type_armored_boat",
        "type_torpedo_boat",
        "type_gun_boat",
        "type_naval_ferry_barge",
        "type_naval_aa_ferry",
        "type_torpedo_gun_boat",
        "type_minelayer",
        "type_submarine_chaser",
        "type_frigate",
      ]),
    )
    .optional(),
});

export const boatPropsSchema = finalPropsSchema
  .extend({
    type: z.literal("boat"),
  })
  .merge(boatTypeSchema);
export type BoatProps = z.infer<typeof boatPropsSchema>;

export const vehicleTypesSchema = z.union([
  aircraftTypeSchema,
  groundTypeSchema,
  helicopterTypeSchema,
  shipTypeSchema,
  boatTypeSchema,
]);

export const finalSchema = z.object({
  version: z.string(),
  ground: z.array(groundPropsSchema),
  aircraft: z.array(aircraftPropsSchema),
  helicopter: z.array(helicopterPropsSchema),
  ship: z.array(shipPropsSchema),
  boat: z.array(boatPropsSchema),
});
export type Final = z.infer<typeof finalSchema>;

//Final Shop

export const finalShopItemSchema = z.object({
  name: z.string(),
  rank: vehiclRankSchema,
  reqAir: z.union([z.literal(""), z.string()]).optional(),
  gift: z.boolean().optional(),
  hidden: z.boolean().optional(),
  marketplace: z.number().optional(),
  event: z.string().optional(),
  clanVehicle: z.boolean().optional(),
});
export type FinalShopItem = z.infer<typeof finalShopItemSchema>;

export const finalShopGroupSchema = z.object({
  name: z.string(),
  displayname: z.string(),
  image: z.string(),
  reqAir: z.union([z.literal(""), z.string()]).optional(),
  vehicles: z.array(finalShopItemSchema),
});
export type FinalShopGroup = z.infer<typeof finalShopGroupSchema>;

export const finalShopRangeSchema = z.object({
  col_normal: z.number(),
  min_rank: z.number(),
  max_rank: z.number(),
  needVehicles: z.array(z.number()).max(7),
  range: z.array(z.array(z.union([finalShopItemSchema, finalShopGroupSchema]))),
});

export const finalRangeSchema = z.union([
  z.array(z.union([finalShopItemSchema, finalShopGroupSchema])),
  z.literal("drawArrow"),
]);
export type FinalRange = z.infer<typeof finalRangeSchema>;

export const finalRangeObjectSchema = z.array(finalRangeSchema);
export type FinalObjectRange = z.infer<typeof finalRangeObjectSchema>;

export const finalFinalShopRangeSchema = finalShopRangeSchema.extend({
  range: z.array(finalRangeObjectSchema),
});
export type FinalShopRange = z.infer<typeof finalFinalShopRangeSchema>;

export const finalShopCountrySchema = z.object({
  army: finalFinalShopRangeSchema,
  helicopters: finalFinalShopRangeSchema,
  aviation: finalFinalShopRangeSchema,
  ship: finalFinalShopRangeSchema.optional(),
  boat: finalFinalShopRangeSchema.optional(),
});

export const finalShopSchema = z.record(finalShopCountrySchema);
export type FinalShop = z.infer<typeof finalShopSchema>;

// Modifications

export interface Modifications {
  ground: VehicleMods[];
  aircraft: VehicleMods[];
  helicopter: VehicleMods[];
  ship: VehicleMods[];
  boat: VehicleMods[];
}

export const modClassName = z.enum([
  "lth",
  "armor",
  "weapon",
  "mobility",
  "protection",
  "firepower",
  "primaryWeapon",
  "secondaryWeapon",
  "premiumMods",
  "expendable",
  "seakeeping",
  "unsinkability",
]);
export type ModClassName = z.infer<typeof modClassName>;

export interface VehicleMods {
  intname: string;
  mods: ModClass;
}

export interface ModClass {
  lth?: BaseMod[][];
  armor?: BaseMod[][];
  weapon?: BaseMod[][];
  mobility?: BaseMod[][];
  protection?: BaseMod[][];
  firepower?: BaseMod[][];
  primaryWeapon?: BaseMod[][];
  secondaryWeapon?: BaseMod[][];
  premiumMods?: BaseMod[][];
  expendable?: BaseMod[][];
  seakeeping?: BaseMod[][];
  unsinkability?: BaseMod[][];
}

export interface BaseMod {
  intname: string;
  displayname?: string;
  reqMod?: string;
  image: string;
}

// Scrape
export const topSpeed = z.number().array().length(2);
export type TopSpeed = z.infer<typeof topSpeed>;

export const visibility = z.number().max(3000);
export type Visibility = z.infer<typeof visibility>;

export interface ScrapeFull {
  ground: Scrape[];
  aircraft: Scrape[];
  helicopter: Scrape[];
}

export interface Scrape {
  intname: string;
  ab_top_speed: TopSpeed;
  rb_top_speed: TopSpeed;
  visibility: Visibility;
}
