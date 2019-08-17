<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class Lifetime extends Enum
{
    const hour_6 = 0;
    const hour_12 = 1;
    const hour_24 = 2;
    const hour_36 = 3;
    const hour_48 = 4;
    const hour_96 = 5;
    const hour_128 = 6;
    const infinite = 7;
}
