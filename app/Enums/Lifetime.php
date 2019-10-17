<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class Lifetime extends Enum
{
    const infinite = 0;
    const hour_6 = 1;
    const hour_12 = 2;
    const hour_24 = 3;
    const hour_36 = 4;
    const hour_48 = 5;
    const hour_96 = 6;
    const hour_128 = 7;

}
