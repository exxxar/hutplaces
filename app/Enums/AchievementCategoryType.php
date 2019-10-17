<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class AchievementCategoryType extends Enum
{
    const Randoms = 0;
    const Auction = 1;
    const Wager_matches = 2;
    const Packs = 3;
    const Promocodes = 4;
    const Levels = 5;
    const Other = 6;
}
